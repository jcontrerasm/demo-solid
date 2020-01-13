import { UserRepository } from './UserRepository';

class UserManager {

  public showUser() {
    const userRepository = new UserRepository;
    const user = userRepository.getUser(123);

    console.info('Nombre: ' + user.name);
  }
}

export { UserManager };
