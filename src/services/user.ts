import { UserInterface } from '../models/User';
import user from '../mocks/user.json';

export function getUser(): Promise<UserInterface> {
  return new Promise((resolve) => resolve(user));
}

type upadatableUserProps = Partial<Omit<UserInterface, 'id'>>;

export function updateUser(updatedUser: upadatableUserProps) {
  return new Promise<UserInterface>((resolve) =>
    resolve({ ...user, ...updateUser })
  );
}

updateUser({ username: '', id: 3 });
