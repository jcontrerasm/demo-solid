import { UserRepository } from './UserRepository';
import { LocalUserRepository } from './LocalUserRepository';

class UserFactory {

  public static create(): UserRepository {
    return new LocalUserRepository;
  }
}

export { UserFactory };
