import { Court } from './Court';
import { ClayCourt } from './interfaces/ClayCourt';

class RolandGarrosCourt extends Court implements ClayCourt {

  public changeClay() {
    console.info('Cambiando arcilla en RolandGarros.');
  }

}

export { RolandGarrosCourt };
