
import { RefEtatJDR } from './refEtatJDR';
import { User } from './user';

export class JeuDeRole {
  IdJDR: number;
  MJ: User;
  NomJDR: string;
  Etat: RefEtatJDR;
  DateCreation: Date;
  DateFin: Date;
  Type: string;
  Univers: string;
  Public: boolean;
  Technologies: string;
  NombreMaxJoueur: number;
  Description: string;
  Scenario: string;
}
