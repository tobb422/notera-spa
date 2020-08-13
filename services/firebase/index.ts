import firebase from 'firebase/app';
// eslint-disable-next-line import/no-unassigned-import
import 'firebase/auth';

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
