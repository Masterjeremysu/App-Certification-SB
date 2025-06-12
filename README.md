# 🧪 Formation Salle Propre – QCM interactif

Une application web moderne pour sensibiliser les opérateurs aux bonnes pratiques en salle propre à travers un **quiz interactif** avec **attestation PDF** personnalisée en fin de session.

---

## 🚀 Stack technique

| Technologie    | Description                                              |
|----------------|----------------------------------------------------------|
| [React](https://reactjs.org/)          | UI dynamique et modulaire                             |
| [Vite](https://vitejs.dev/)            | Serveur de dev ultra rapide                           |
| [TypeScript](https://www.typescriptlang.org/) | Typage strict et sécurité de développement     |
| [TailwindCSS](https://tailwindcss.com/)| Style moderne et responsive en utilitaires            |
| [Supabase](https://supabase.com/)      | Auth, base de données & stockage cloud                |
| [jsPDF](https://github.com/parallax/jsPDF) | Génération d’attestation PDF offline                 |

---

## 🧰 Installation locale

```bash
# 1. Cloner le projet
git clone https://github.com/ton-org/formation-salle-propre.git
cd formation-salle-propre

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de dev
npm run dev

📁 Arborescence principale

formation-salle-propre/
├── public/                 # Assets statiques
├── src/
│   ├── components/         # Composants React (Quiz, Header, Résultats...)
│   ├── lib/                # Supabase & génération PDF
│   ├── types/              # Interfaces TypeScript (`User`, `QuizResult`, etc.)
│   ├── App.tsx            # Entrée principale de l'app
│   └── main.tsx           # Bootstrapping React
├── index.html
├── tailwind.config.js
├── tsconfig.*.json
└── vite.config.ts

🧾 Fonctionnalités

✅ Identification par prénom, nom, formateur, date

✅ 36 questions aléatoires à choix multiple

✅ Calcul automatique du score et validation

✅ Attestation PDF téléchargeable avec :

Prénom / nom

Score obtenu / total

Signature / date / formateur

✅ Compatible desktop et tablette

✅ Sauvegarde dans Supabase (optionnel)

📦 Build production
bash
Copier
Modifier
npm run build

🔐 Configuration Supabase (optionnel)
Crée un fichier .env à la racine :

env

VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOi...

🎯 Lint et bonnes pratiques
Le projet est configuré avec :

strict: true TypeScript

verbatimModuleSyntax: true (TypeScript 5.5)

noUnusedLocals, noUncheckedSideEffectImports, etc.

tailwind.config.js avec purge automatique (content bien rempli)

✨ Améliorations possibles

📊 Tableau de bord administrateur pour voir les scores

✍️ Signature électronique

📧 Envoi automatique de l’attestation par e-mail

📱 Mode hors-ligne PWA

👨‍💼 Auteur

Projet développé par GT Logistics – Conversion et refonte moderne pilotée par Jérémy.