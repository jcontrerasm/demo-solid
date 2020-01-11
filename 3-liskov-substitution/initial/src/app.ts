import { WinbledonCourt } from './WinbledonCourt';
import { RolandGarrosCourt } from './RolandGarrosCourt';
import { AustraliaOpenCourt } from './AustraliaOpenCourt';
import { Court } from './Court';

function testCourt() {
  let listCourt: Array<Court> = [];
  listCourt.push(new WinbledonCourt());
  listCourt.push(new RolandGarrosCourt());
  listCourt.push(new AustraliaOpenCourt());

  listCourt.forEach(court => {
    court.cutGrass();
  });
}

testCourt();
