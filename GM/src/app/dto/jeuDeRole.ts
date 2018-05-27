
import { RefEtatJDR } from './refEtatJDR';

export class JeuDeRole {
  IdJDR: number;
  IdMJ: number;
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
