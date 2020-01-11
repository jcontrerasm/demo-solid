import { Court } from './Court';

class AustraliaOpenCourt extends Court {

  public cutGrass() {
    throw new Error('El piso es de loza, no existe cesped.');
  }

}

export { AustraliaOpenCourt };
