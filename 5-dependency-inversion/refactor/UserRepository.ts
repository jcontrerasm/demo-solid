import { User } from './User';

interface UserRepository {
  getUser(id: number): User;
}

export { UserRepository };
