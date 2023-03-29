import { createContext, FC, ReactNode, useState } from 'react';

interface IAuthProps {
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
  roles?: any;
  username?: string;
  user?: string;
}
interface IAuthContextProps {
  persist?: string;
  auth?: IAuthProps;
  setAuth?: any;
  setPersist?: any;
  roles?: any;
}
const AuthContext = createContext<IAuthContextProps>({});

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<IAuthProps>({});
  const [persist, setPersist] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth, persist, setPersist }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
