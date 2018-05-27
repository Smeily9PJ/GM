import { RefEtatJDR } from '../dto/refEtatJDR';
import { JeuDeRole } from '../dto/jeuDeRole';

export const JDRS: JeuDeRole[] = [
  {
    IdJDR: 1,
    IdMJ: 1,
    NomJDR: "Les mondes oubliés",
    Etat: {
      CodeEtat: "FINI",
      IdEtat: 2
    },
    DateCreation: new Date(2017, 11, 11),
    DateFin: new Date(2018, 3, 25),
    Type: "steampunk, dark",
    Univers: "ghost in the shell",
    Public: true,
    Technologies: "roll20",
    NombreMaxJoueur: 5,
    Description: "Une ville voie d'étranges créatures sortir de son sous sol et doit se préparer à des vagues d'agressions.",
    Scenario: "Ceci est un jeu de test, ça serait un  peut long décrire un vrai scénario non ?"
  },
  {
    IdJDR: 2,
    IdMJ: 1,
    NomJDR: "Un lointain souvenir",
    Etat: {
      CodeEtat: "EN COURS",
      IdEtat: 1
    },
    DateCreation: new Date(2017, 10, 1),
    DateFin: null,
    Type: "fantasy, medieval",
    Univers: "D&D",
    Public: false,
    Technologies: "plateau",
    NombreMaxJoueur: 4,
    Description: "Les PJ devront accompagner une jeune fille amnesique à travers un royaume en guerre.",
    Scenario: "Ceci est un jeu de test, ça serait un  peut long décrire un vrai scénario non ?"
  },
  {
    IdJDR: 3,
    IdMJ: 2,
    NomJDR: "Brocken road",
    Etat: {
      CodeEtat: "EN COURS",
      IdEtat: 1
    },
    DateCreation: new Date(2018, 5, 6),
    DateFin: null,
    Type: "futuriste, apocalyptique",
    Univers: "Mad max",
    Public: false,
    Technologies: "plateau",
    NombreMaxJoueur: 3,
    Description: "Un groupe de mescenaire, vous, devront voler un convoit plutôt bien garder en route pour une colonnie.",
    Scenario: "Ceci est un jeu de test, ça serait un  peut long décrire un vrai scénario non ?"
  },
  {
    IdJDR: 4,
    IdMJ: 2,
    NomJDR: "EH oh ehoh on rentre du boulot",
    Etat: {
      CodeEtat: "EN PAUSE",
      IdEtat: 3
    },
    DateCreation: new Date(2018, 3, 14),
    DateFin: null,
    Type: "medieval, fantasy",
    Univers: "disney, blanche neige",
    Public: true,
    Technologies: "skype, roll20",
    NombreMaxJoueur: 7,
    Description: "et si on refesait l'histoire de blanche neige en incarnant les 7 nains ?",
    Scenario: "Ceci est un jeu de test, ça serait un  peut long décrire un vrai scénario non ?"
  },
  {
    IdJDR: 5,
    IdMJ: 2,
    NomJDR: "Une omelette de dragon",
    Etat: {
      CodeEtat: "ARRETE",
      IdEtat: 4
    },
    DateCreation: new Date(2018, 1, 10),
    DateFin: new Date(2018, 2, 1),
    Type: "medieval, fantasy",
    Univers: "lanfeust de troy",
    Public: false,
    Technologies: "discord, oral",
    NombreMaxJoueur: 4,
    Description: "le but des Pj est de récupérer des œufs de dragons pour faire une belle omelette au village",
    Scenario: "Ceci est un jeu de test, ça serait un  peut long décrire un vrai scénario non ?"
  }];
