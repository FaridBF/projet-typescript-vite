import { UserInterface } from '../models/User';
import user from '../mocks/user.json';

export function getUser(): Promise<UserInterface> {
  return new Promise((resolve) => resolve(user));
}
