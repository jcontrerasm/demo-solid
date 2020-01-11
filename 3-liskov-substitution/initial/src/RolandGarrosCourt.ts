import { Court } from './Court';

class RolandGarrosCourt extends Court {

  public cutGrass() {
    throw new Error('El piso es de tierra, no existe cesped.');
  }

}

export { RolandGarrosCourt };
