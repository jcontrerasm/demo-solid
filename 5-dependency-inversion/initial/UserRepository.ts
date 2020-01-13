import { User } from './User';

class UserRepository {

  public getUser(id: number): User {
    const user = new User(123, 'prueba', 'prueba@prueba.com');
    return user;
  }
}

export { UserRepository };
