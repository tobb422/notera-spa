import React, { FC, useState, useEffect } from 'react';
import { AuthService } from 'shared/auth-services';
import { AuthStore } from './provider';
import { auth, User as fUser } from 'services/firebase';

export const AuthContext: FC<{ service: AuthService }> = ({
  service,
  children,
}) => {
  const [user, setUser] = useState<fUser | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => setUser(currentUser));

    // void user?.getIdToken(true).then((token) => {
    //   // eslint-disable-next-line no-console
    //   console.log(token);
    // });
  });

  const isLogin = () => !!user;

  return (
    <AuthStore.Provider
      value={{
        isLogin,
        service,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
