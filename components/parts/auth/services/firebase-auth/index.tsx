import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth, providers } from 'services/firebase';

export const FireBaseAuth = () => {
  const setButtonText = () => {
    const google = document.getElementsByClassName('firebaseui-idp-google')[0];
    const googleLabel = google.getElementsByClassName('firebaseui-idp-text')[0];

    if (googleLabel) {
      googleLabel.textContent = 'Use Google Account';
    } else {
      setTimeout(setButtonText, 100);
    }
  };

  const uiConfig = {
    signInSuccessUrl: '/',
    signInOptions: providers,
    callbacks: {
      uiShown: setButtonText,
    },
  };

  return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />;
};
