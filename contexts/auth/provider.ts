import { createContext } from 'react';
import { User } from 'services/firebase';
import { AuthService } from 'shared/auth-services';

interface AuthContext {
  user: User | null;
  isLogIn: () => boolean;
  service: AuthService;
}

export const AuthStore = createContext<AuthContext>({
  user: null,
  isLogIn: () => false,
  service: 'firebase',
});
