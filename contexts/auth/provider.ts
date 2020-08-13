import { createContext } from 'react';
import { AuthService } from 'shared/auth-services';

interface AuthContext {
  isLogIn: () => boolean;
  service: AuthService;
}

export const AuthStore = createContext<AuthContext>({
  isLogIn: () => false,
  service: 'firebase',
});
