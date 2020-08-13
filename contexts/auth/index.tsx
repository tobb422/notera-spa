import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthService } from 'shared/auth-services';
import { AuthStore } from './provider';
import { auth, User as fUser } from 'services/firebase';
import { Session } from 'services/session';

const LOG_IN_PATH = '/log-in';

export const AuthContext: FC<{ service: AuthService }> = ({
  service,
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState<fUser | null>(Session.getUser());

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      Session.setUser(currentUser);
      setUser(currentUser);
    });
    // void user?.getIdToken(true).then((token) => {
    //   // eslint-disable-next-line no-console
    //   console.log(token);
    // });
  }, [router.pathname]);

  useEffect(() => {
    if (router.pathname !== LOG_IN_PATH && !user) {
      window.location.href = LOG_IN_PATH;
    }
  }, [user]);

  const isLogIn = () => !!user;

  return (
    <AuthStore.Provider
      value={{
        user,
        isLogIn,
        service,
      }}
    >
      {children}
    </AuthStore.Provider>
  );
};
