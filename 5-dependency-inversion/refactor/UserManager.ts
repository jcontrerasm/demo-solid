import { UserFactory } from './UserFactory';

class UserManager {

  public showUser() {
    const userRepository = UserFactory.create();
    const user = userRepository.getUser(123);

    console.info('Nombre: ' + user.name);
  }
}

export { UserManager };
