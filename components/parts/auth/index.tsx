import React, { useContext, useEffect } from 'react';
import { AuthStore } from 'contexts/auth/provider';
import { FireBaseAuth } from 'parts/auth/services/firebase-auth';

export const Auth = () => {
  const { isLogin, service } = useContext(AuthStore);

  // useEffect(() => {
  //   if (isLogin()) {
  //     window.location.href = '/';
  //   }
  // });

  const authComponent = () => {
    switch (service) {
      case 'firebase':
        return <FireBaseAuth />;
      default:
        return <>No Auth Component</>;
    }
  };

  return authComponent();
};
