import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, providers } from 'services/firebase';

export const FireBaseAuth = () => {
  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: providers,
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};
