import { useCookies } from 'react-cookie';

import axios from '@/api/axios';

import useAuth from './useAuth';

const useRefreshToken = () => {
  const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const REFRESH_URL = import.meta.env.VITE_REFRESH_URL;

  const { auth, setAuth } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

  const refresh = async () => {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('client_id', CLIENT_ID);
    params.append('refresh_token', cookies['refreshToken'] || '');
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const response = await axios.post(REFRESH_URL, params, config);
    setAuth((prev: any) => {
      return { ...prev, accessToken: response.data.access_token };
    });
    return response.data.access_token;
  };
  return refresh;
};

export default useRefreshToken;
