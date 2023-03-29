import { useCookies } from 'react-cookie';

import UserPool from '@/config/UserPool';

import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth, auth } = useAuth();
  const user = UserPool.getCurrentUser();
  const [cookies, setCookie, removeCookie] = useCookies(['refreshToken']);

  const logout = async () => {
    if (user) {
      user.signOut();
      setAuth({});
      removeCookie('refreshToken');
    }
  };

  return logout;
};

export default useLogout;
