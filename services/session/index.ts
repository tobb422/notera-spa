import { User } from 'services/firebase';
import { isClient } from 'shared/utils';

export class Session {
  private static Key = 'currentUser';

  static getUser(): User | null {
    if (isClient()) {
      const item = localStorage.getItem(this.Key);
      return item ? (JSON.parse(item) as User) : null;
    }

    return null;
  }

  static setUser(user: User | null) {
    localStorage.setItem(this.Key, JSON.stringify(user));
  }

  static removeUser() {
    localStorage.clear();
  }
}
