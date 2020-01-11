import { WinbledonCourt } from './WinbledonCourt';
import { GrassCourt } from './interfaces/GrassCourt';
import { MallorcaOpenCourt } from './MallorcaOpenCourt';

function testCourt() {
  let listCourt: Array<GrassCourt> = [];
  listCourt.push(new WinbledonCourt());
  listCourt.push(new MallorcaOpenCourt);

  listCourt.forEach(court => {
    court.cutGrass();
  });
}

testCourt();
