import { TypeElementFiche } from '../dto/typeElementFiche';
import { ElementFiche } from '../dto/elementFiche';

export const ELEMENTSFICHE: ElementFiche[] = [
  {
    IdElement: 1,
    IdFiche: 1,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 2,
    IdFiche: 1,
    Nom: "Acrobatie",
    Valeur: 5,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 3,
    IdFiche: 1,
    Nom: "Photo",
    Valeur: null,
    Echelle: null,
    Description: "Photo du grand père",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 4,
    IdFiche: 2,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 5,
    IdFiche: 2,
    Nom: "Mana",
    Valeur: 5,
    Echelle: "5",
    Description: "Points de magie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 6,
    IdFiche: 2,
    Nom: "Natation",
    Valeur: 10,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 7,
    IdFiche: 3,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 8,
    IdFiche: 3,
    Nom: "Piratage",
    Valeur: 8,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 9,
    IdFiche: 4,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 10,
    IdFiche: 5,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 11,
    IdFiche: 5,
    Nom: "Conduite de moto",
    Valeur: 8,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 12,
    IdFiche: 6,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 13,
    IdFiche: 6,
    Nom: "Clef USB",
    Valeur: null,
    Echelle: null,
    Description: "32Go, vide",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 14,
    IdFiche: 6,
    Nom: "CD",
    Valeur: null,
    Echelle: null,
    Description: "Contenu inconnu",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 15,
    IdFiche: 7,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 16,
    IdFiche: 8,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 18,
    IdFiche: 9,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 20,
    IdFiche: 9,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 22,
    IdFiche: 11,
    Nom: "PV",
    Valeur: 10,
    Echelle: "80",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 23,
    IdFiche: 12,
    Nom: "PV",
    Valeur: 100,
    Echelle: "100",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 24,
    IdFiche: 12,
    Nom: "Ration de survie",
    Valeur: null,
    Echelle: null,
    Description: "Restaure 5PV",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 25,
    IdFiche: 12,
    Nom: "Corde",
    Valeur: null,
    Echelle: null,
    Description: "10m et supporter 100kg",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 26,
    IdFiche: 13,
    Nom: "PV",
    Valeur: 50,
    Echelle: "50",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 27,
    IdFiche: 13,
    Nom: "Ration de survie",
    Valeur: null,
    Echelle: null,
    Description: "Restaure 5PV",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 28,
    IdFiche: 13,
    Nom: "Corde",
    Valeur: null,
    Echelle: null,
    Description: "10m et supporter 100kg",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 29,
    IdFiche: 14,
    Nom: "PV",
    Valeur: 80,
    Echelle: "80",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 30,
    IdFiche: 15,
    Nom: "PV",
    Valeur: 30,
    Echelle: "30",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 31,
    IdFiche: 15,
    Nom: "Mental",
    Valeur: 50,
    Echelle: "%",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 32,
    IdFiche: 16,
    Nom: "PV",
    Valeur: 40,
    Echelle: "40",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 33,
    IdFiche: 17,
    Nom: "PV",
    Valeur: 20,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 34,
    IdFiche: 18,
    Nom: "PV",
    Valeur: 20,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 35,
    IdFiche: 18,
    Nom: "Physique",
    Valeur: 60,
    Echelle: "%",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 36,
    IdFiche: 18,
    Nom: "Miche de pain",
    Valeur: null,
    Echelle: null,
    Description: "restaure 1pv, raci",
    TypeElement: { CodeTypeElementFiche: "Objet", IdTypeElementFiche: 3 }
  },
  {
    IdElement: 37,
    IdFiche: 18,
    Nom: "Nain",
    Valeur: null,
    Echelle: null,
    Description: "-1 sur jet en physiqye",
    TypeElement: { CodeTypeElementFiche: "Divers", IdTypeElementFiche: 4 }
  },
  {
    IdElement: 38,
    IdFiche: 19,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 39,
    IdFiche: 19,
    Nom: "Physique",
    Valeur: 60,
    Echelle: "%",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 40,
    IdFiche: 19,
    Nom: "Nain",
    Valeur: null,
    Echelle: null,
    Description: "-1 sur jet en physiqye",
    TypeElement: { CodeTypeElementFiche: "Divers", IdTypeElementFiche: 4 }
  },
  {
    IdElement: 41,
    IdFiche: 20,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 42,
    IdFiche: 20,
    Nom: "Physique",
    Valeur: 60,
    Echelle: "%",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 43,
    IdFiche: 20,
    Nom: "Nain",
    Valeur: null,
    Echelle: null,
    Description: "-1 sur jet en physiqye",
    TypeElement: { CodeTypeElementFiche: "Divers", IdTypeElementFiche: 4 }
  },
  {
    IdElement: 44,
    IdFiche: 21,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 45,
    IdFiche: 21,
    Nom: "Physique",
    Valeur: 60,
    Echelle: "%",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 46,
    IdFiche: 21,
    Nom: "Physique",
    Valeur: 60,
    Echelle: "%",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 47,
    IdFiche: 21,
    Nom: "Nain",
    Valeur: null,
    Echelle: null,
    Description: "-1 sur jet en physiqye",
    TypeElement: { CodeTypeElementFiche: "Divers", IdTypeElementFiche: 4 }
  },
  {
    IdElement: 48,
    IdFiche: 22,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 49,
    IdFiche: 22,
    Nom: "Endurance",
    Valeur: 5,
    Echelle: "5",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 50,
    IdFiche: 23,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 51,
    IdFiche: 23,
    Nom: "Endurance",
    Valeur: 10,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 52,
    IdFiche: 24,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 53,
    IdFiche: 24,
    Nom: "Course",
    Valeur: 5,
    Echelle: "5",
    Description: "Vitesse de course",
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 54,
    IdFiche: 25,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  },
  {
    IdElement: 55,
    IdFiche: 25,
    Nom: "Endurance",
    Valeur: 10,
    Echelle: "10",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 56,
    IdFiche: 25,
    Nom: "Mouche",
    Valeur: 10,
    Echelle: null,
    Description: "Nombre de mouches possédées",
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 57,
    IdFiche: 25,
    Nom: "Combat à main nue",
    Valeur: 5,
    Echelle: "5",
    Description: null,
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 58,
    IdFiche: 25,
    Nom: "Saut",
    Valeur: 7,
    Echelle: "10",
    Description: "Nombre de mouches ppssédées",
    TypeElement: { CodeTypeElementFiche: "Caractéristique", IdTypeElementFiche: 2 }
  },
  {
    IdElement: 59,
    IdFiche: 26,
    Nom: "PV",
    Valeur: 10,
    Echelle: "20",
    Description: "Points de vie",
    TypeElement: { CodeTypeElementFiche: "Compétence", IdTypeElementFiche: 1 }
  }
];
