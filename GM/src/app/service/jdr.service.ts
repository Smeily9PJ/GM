import { Injectable } from '@angular/core';

import { User } from '../dto/user';

import { JeuDeRole } from '../dto/jeuDeRole';
import { JDRS } from '../mock/jeuDeRole.mock';

import { ParticipeJDR } from '../dto/participeJDR';
import { PARTICIPEJDRLIST } from '../mock/participeJDR.mock';

@Injectable()
export class JdrService {

  constructor() { }

  getAllJDRs(): JeuDeRole[] {
    return JDRS;
  }

  getJDROfUser(user: User, onlyOpen: boolean): JeuDeRole[] {
    var listeJDR: JeuDeRole[] = new Array();

    for (var i in JDRS) {
      if (!onlyOpen || JDRS[i].Etat.CodeEtat == 'EN COURS') {
        if (JDRS[i].MJ.IdUser == user.IdUser) {
          listeJDR.push(JDRS[i]);
        } else {
          for (var j in PARTICIPEJDRLIST) {
            if (JDRS[i].IdJDR == PARTICIPEJDRLIST[j].IdJDR && PARTICIPEJDRLIST[j].IdUser == user.IdUser) {
              listeJDR.push(JDRS[i]);
              break;
            }
          }
        }
      }
    }

    return listeJDR;
  }
}
