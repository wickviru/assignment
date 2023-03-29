import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import { useCookies } from 'react-cookie';

import UserPool from '../config/UserPool';

export const signUp = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    UserPool.signUp(email, password, [], [], (err: any, result: any) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result.user);
    });
  });
};

export const signIn = (email: string, password: string) => {
  const authData = {
    Username: email,
    Password: password,
  };

  const authDetails = new AuthenticationDetails(authData);
  const userData = {
    Username: email,
    Pool: UserPool,
  };
  const cognitoUser = new CognitoUser(userData);
  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result: any) => {
        resolve(result);
      },
      onFailure: (err) => {
        reject(err);
      },
    });
  });
};
