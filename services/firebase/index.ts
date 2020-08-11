import firebase from 'firebase';

const config = {
  apiKey: process.env.API_KEY || '',
  authDomain: process.env.AUTH_DOMAIN || '',
  projectId: process.env.PROJECT_ID || '',
};

export const auth: firebase.auth.Auth = !firebase.apps.length
  ? firebase.initializeApp(config).auth()
  : firebase.app().auth();

export const providers: string[] = [
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
];

export type User = firebase.User;

export const fetchToken = () => {
  return firebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        return user.getIdToken(true).then((token) => {
          // eslint-disable-next-line no-console
          console.log(token);
        });
      }
    },
    (e) => {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  );
};
