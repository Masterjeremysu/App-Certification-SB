// 🧑‍🎓 --- Interfaces Utilisateur & Quiz ---
export interface User {
  firstName: string;
  lastName: string;
  trainingDate: string;
  instructorName: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index 0-based
  explanation?: string;
}

export interface QuizResult {
  user: User;
  answers: number[];
  score: number;
  passed: boolean;
  completedAt: Date;
}

// 🧠 --- Données de Quiz (QCM) ---
export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une contamination particulaire ?",
    options: [
      "A) La présence de micro-organismes vivants",
      "B) La présence de particules en suspension dans l'air",
      "C) La présence de produits chimiques",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "Quelle est la principale source de contamination ?",
    options: [
      "A) Les équipements",
      "B) L'environnement extérieur",
      "C) L'activité humaine",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: 'Que signifie "ISO 5" ?',
    options: [
      "A) 5 particules maximum par m³",
      "B) 5000 particules maximum par m³",
      "C) Classe de propreté avec un nombre limité de particules par m³",
    ],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Conséquence d'un comportement inadapté ?",
    options: [
      "A) Aucune conséquence",
      "B) Légère augmentation de particules",
      "C) Contamination grave et coûteuse",
    ],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "Geste interdit ?",
    options: [
      "A) Porter des gants",
      "B) Se gratter ou toucher son visage",
      "C) Marcher lentement",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    question: "Habillage en salle propre ?",
    options: [
      "A) Habillage rapide pour gagner du temps",
      "B) Habillage méthodique et ordonné",
      "C) Habillage selon son humeur",
    ],
    correctAnswer: 1,
  },
  {
    id: 7,
    question: "Utilité des EPI ?",
    options: [
      "A) Protéger le produit de l'opérateur",
      "B) Protéger uniquement l'opérateur",
      "C) Simple obligation réglementaire",
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Manipulation des contenants ?",
    options: [
      "A) Manipulation libre",
      "B) Manipulation avec précautions spécifiques",
      "C) Manipulation interdite",
    ],
    correctAnswer: 1,
  },
  {
    id: 9,
    question: "Une traçabilité efficace permet de ?",
    options: [
      "A) Ralentir la production",
      "B) Identifier rapidement la source d'un problème",
      "C) Compliquer les procédures",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    question: "Une salle ISO 7 autorise ?",
    options: [
      "A) Un nombre défini de particules par m³",
      "B) Aucune particule",
      "C) Un nombre illimité de particules",
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "Si un EPI est endommagé ?",
    options: [
      "A) Continuer à l'utiliser",
      "B) Le réparer soi-même",
      "C) Le signaler et le changer immédiatement",
    ],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: "Pour garantir la propreté ?",
    options: [
      "A) Respecter scrupuleusement les procédures",
      "B) Faire selon son expérience",
      "C) Adapter selon la situation",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Pourquoi faut-il marcher lentement en salle propre ?",
    options: [
      "A) Pour se reposer",
      "B) Pour éviter de soulever trop de particules",
      "C) Pour ne pas déranger les collègues",
    ],
    correctAnswer: 1,
  },
  {
    id: 14,
    question: "Quand faut-il changer les EPI ?",
    options: [
      "A) Une fois par mois",
      "B) Lorsqu’ils sont sales ou endommagés",
      "C) À chaque pause",
    ],
    correctAnswer: 1,
  },
  {
    id: 15,
    question: "Que signifie la norme ISO 14644-1 ?",
    options: [
      "A) Une norme de sécurité électrique",
      "B) Une norme de qualité alimentaire",
      "C) Une norme de classification des salles propres",
    ],
    correctAnswer: 2,
  },
  {
    id: 16,
    question: "Une salle propre est conçue pour :",
    options: [
      "A) Limiter la présence de poussières",
      "B) Accueillir plus de personnel",
      "C) Faciliter l’entretien",
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Quel comportement augmente la contamination ?",
    options: [
      "A) Marcher calmement",
      "B) Courir ou faire des gestes brusques",
      "C) Porter un masque",
    ],
    correctAnswer: 1,
  },
  {
    id: 18,
    question: "L'ouverture fréquente des portes :",
    options: [
      "A) Améliore l’aération",
      "B) Réduit la contamination",
      "C) Favorise l’entrée de particules",
    ],
    correctAnswer: 2,
  },
  {
    id: 19,
    question: "Les gants en salle propre servent à :",
    options: [
      "A) Ne pas se salir",
      "B) Limiter la contamination des produits",
      "C) Éviter les coupures",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "Un comportement exemplaire inclut :",
    options: [
      "A) Respecter les consignes à la lettre",
      "B) S’adapter librement aux situations",
      "C) Faire selon l’expérience personnelle",
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "Quel équipement aide à diriger le flux d’air ?",
    options: [
      "A) Les filtres HEPA",
      "B) Les extincteurs",
      "C) Les tapis anti-poussières",
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "Avant d’entrer en salle propre, il faut :",
    options: [
      "A) Boire de l’eau",
      "B) Suivre la procédure d’habillage",
      "C) Vérifier la météo",
    ],
    correctAnswer: 1,
  },
  {
    id: 23,
    question: "Les vêtements de salle propre doivent être :",
    options: [
      "A) Adaptés à la mode",
      "B) Propre et non déchirés",
      "C) Colorés pour la hiérarchie",
    ],
    correctAnswer: 1,
  },
  {
    id: 24,
    question: "Objectif principal en salle propre :",
    options: [
      "A) Travailler rapidement",
      "B) Minimiser les contaminations",
      "C) Réduire les coûts",
    ],
    correctAnswer: 1,
  },
  {
    id: 25,
    question: "Que faire si un contenant tombe au sol en salle propre ?",
    options: [
      "A) Le ramasser discrètement",
      "B) Le signaler et appliquer la procédure de décontamination",
      "C) Le remettre directement en production",
    ],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: "Quel est le rôle d'un sas en salle propre ?",
    options: [
      "A) Contrôler les flux d’air et limiter la contamination",
      "B) Stocker les équipements de nettoyage",
      "C) Servir de zone de pause pour le personnel",
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: "Comment limiter l’émission de particules par les opérateurs ?",
    options: [
      "A) En portant correctement les EPI et en évitant les mouvements brusques",
      "B) En parlant fort pour mieux se faire comprendre",
      "C) En se lavant les mains une fois par jour",
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "Pourquoi le port du masque est-il obligatoire ?",
    options: [
      "A) Pour protéger l’opérateur des produits",
      "B) Pour éviter la transmission de particules et de micro-organismes",
      "C) Pour éviter les mauvaises odeurs",
    ],
    correctAnswer: 1,
  },
  {
    id: 29,
    question: "Comment faut-il nettoyer une surface en salle propre ?",
    options: [
      "A) Avec un chiffon quelconque",
      "B) Avec des lingettes propres et un mouvement en S",
      "C) En versant directement de l’eau",
    ],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "Quel est l'effet d’un flux laminaire ?",
    options: [
      "A) Il chauffe l’air",
      "B) Il dirige un flux d’air propre de manière contrôlée",
      "C) Il désinfecte automatiquement les surfaces",
    ],
    correctAnswer: 1,
  },
  {
    id: 31,
    question: "Que doit-on faire après avoir touché une surface non stérile ?",
    options: [
      "A) Rien, si c’est rapide",
      "B) Changer de gants ou se désinfecter immédiatement",
      "C) Continuer son activité",
    ],
    correctAnswer: 1,
  },
  {
    id: 32,
    question:
      "Pourquoi faut-il respecter un ordre précis lors de l’habillage ?",
    options: [
      "A) Pour faire plaisir à l’encadrant",
      "B) Pour éviter la contamination croisée",
      "C) Pour aller plus vite",
    ],
    correctAnswer: 1,
  },
  {
    id: 33,
    question:
      "Quel est le danger principal lié à une contamination non maîtrisée ?",
    options: [
      "A) Une mauvaise image de marque",
      "B) Une perte de temps",
      "C) Un impact sur la qualité des produits et la sécurité",
    ],
    correctAnswer: 2,
  },
  {
    id: 34,
    question: "Quel type de gant est recommandé en salle propre ?",
    options: [
      "A) Gants en cuir",
      "B) Gants en latex ou nitrile non poudrés",
      "C) Mitaines en tissu",
    ],
    correctAnswer: 1,
  },
  {
    id: 35,
    question:
      "Quand doit-on effectuer une validation des pratiques en salle propre ?",
    options: [
      "A) Lors de l’entrée d’un nouvel employé et régulièrement ensuite",
      "B) Une seule fois à l’embauche",
      "C) En cas de problème uniquement",
    ],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: "La traçabilité d’une opération permet :",
    options: [
      "A) D’identifier qui a fait quoi, quand et comment",
      "B) De surveiller les pauses",
      "C) De savoir où se trouvent les équipements",
    ],
    correctAnswer: 0,
  },
];
