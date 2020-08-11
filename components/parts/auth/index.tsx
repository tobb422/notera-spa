import React, { useContext } from 'react';
import { AuthStore } from 'contexts/auth/provider';
import { FireBaseAuth } from 'parts/auth/services/firebase-auth';

export const Auth = () => {
  const { isLogin, service } = useContext(AuthStore);

  const authComponent = () => {
    switch (service) {
      case 'firebase':
        return <FireBaseAuth />;
      default:
        return <>No Auth Component</>;
    }
  };

  return isLogin() ? <div>ログイン済み</div> : authComponent();
};

