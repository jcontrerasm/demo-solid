import { UserRepository } from './UserRepository';
import { User } from './User';

class LocalUserRepository implements UserRepository {

  getUser(id: number): User {
    const user = new User(123, 'prueba', 'prueba@prueba.com');
    return user;
  }
}

export { LocalUserRepository };
