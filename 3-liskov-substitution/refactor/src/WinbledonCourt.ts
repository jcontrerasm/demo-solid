import { Court } from './Court';
import { GrassCourt } from './interfaces/GrassCourt';

class WinbledonCourt extends Court implements GrassCourt {

  public cutGrass() {
    console.info('Cortando cesped en Winbledon.');
  }

}

export { WinbledonCourt };
