import Cookies from 'universal-cookie';
import { User } from 'services/firebase';

export class Session {
  private static SessionName = '_notera_session';
  private static Key = 'currentUser';

  static getUser(): User | null {
    const session = this.newCookie().get(this.SessionName);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    return session ? (session[this.Key] as User) : null;
  }

  static setUser(user: User | null) {
    this.newCookie().set(this.SessionName, { [this.Key]: user }, { path: '/' });
  }

  static removeUser() {
    this.newCookie().remove(this.SessionName, { path: '/' });
  }

  private static newCookie() {
    return new Cookies();
  }
}
