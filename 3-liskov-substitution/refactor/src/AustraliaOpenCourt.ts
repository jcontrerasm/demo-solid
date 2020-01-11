import { Court } from './Court';
import { HardCourt } from './interfaces/HardCourt';

class AustraliaOpenCourt extends Court implements HardCourt {

  public cleanCourt() {
    console.info('Limpiando pista en AustraliaOpen.');
  }

}

export { AustraliaOpenCourt };
