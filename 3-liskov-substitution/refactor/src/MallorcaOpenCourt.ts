import { Court } from './Court';
import { GrassCourt } from './interfaces/GrassCourt';

class MallorcaOpenCourt extends Court implements GrassCourt {

  public cutGrass() {
    console.info('Cortando cesped en MallorcaOpen.');
  }

}

export { MallorcaOpenCourt };
