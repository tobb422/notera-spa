import { createContext } from 'react';
import { AuthService } from 'shared/auth-services';

interface AuthContext {
  isLogin: () => boolean;
  service: AuthService;
}

export const AuthStore = createContext<AuthContext>({
  isLogin: () => false,
  service: 'firebase',
});
