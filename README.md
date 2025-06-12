# App-Certification-SB

![favicon](https://github.com/user-attachments/assets/6886baba-9b82-4872-8691-ee9555ea6a45)

## 🚀 Présentation

**App-Certification-SB** est une application web complète et moderne conçue pour réaliser un **QCM de sensibilisation à la contamination en salle propre**, avec génération automatique d’attestations PDF et gestion avancée des résultats.  
Développée avec **React**, **TypeScript**, **Vite** et **TailwindCSS**, cette application allie performance, ergonomie et design professionnel.

---

## ✨ Fonctionnalités principales

- **Formulaire d’identification** simple et sécurisé
- **Questionnaire à choix multiples (QCM)** avec navigation fluide et validation instantanée
- **Calcul automatique du score** avec seuil de réussite configurable
- **Génération dynamique d’attestation PDF** personnalisée, téléchargeable
- **Sauvegarde et consultation des résultats** dans une base de données Supabase
- **Tableau de bord administrateur** avec statistiques, filtres, et export CSV
- **Interface responsive** et expérience utilisateur fluide sur tous supports

---

## 📦 Technologies utilisées

- **React 19 + TypeScript** pour un frontend robuste et typé
- **Vite** pour un bundler rapide et une expérience de développement ultra fluide
- **TailwindCSS 3.4** pour un design moderne et facilement personnalisable
- **Supabase** pour l’authentification, la gestion des données et le stockage
- **jsPDF** pour la génération des attestations PDF dynamiques
- **Lucide-React** pour les icônes modernes et légères

---

## ⚙️ Installation et lancement

```bash
# Cloner le dépôt
git clone https://github.com/Masterjeremysu/App-Certification-SB.git

# Se positionner dans le dossier
cd App-Certification-SB

# Installer les dépendances
npm install

# Lancer l'application en mode développement
npm run dev
🛠 Configuration
Crée un projet Supabase et configure ta base avec la migration SQL fournie (supabase/migrations/20250612093906_humble_temple.sql).

Copie .env.example en .env et renseigne les clés d’API Supabase (VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY).

Assure-toi d’avoir Node.js 18+ et npm 9+ pour éviter les incompatibilités.

Le projet est configuré avec des règles ESLint strictes et TailwindCSS.

🧑‍💻 Structure du projet

src/
 ├─ components/       # Composants React (Formulaire, Quiz, Résultats, Admin)
 ├─ lib/              # Fonctions utilitaires (Supabase, génération PDF)
 ├─ types/            # Interfaces TypeScript pour types et données
 ├─ index.css          # Styles globaux Tailwind
 ├─ main.tsx           # Point d'entrée React
 └─ App.tsx            # Gestionnaire d’états principal (états et navigation)

📈 Améliorations possibles

Ajout d’une interface d’administration avancée avec gestion utilisateurs

Authentification sécurisée et profils personnalisés

Support multilingue

Envoi automatique d’attestations par e-mail

Tableau de bord avec graphiques et suivi temps réel

🤝 Contribution

Contributions, suggestions et issues sont les bienvenues !
Merci de respecter les bonnes pratiques et le style du code.

⚖️ Licence
MIT © 2025 Jérémy, GT LOGISTICS

Une application pensée pour la qualité, la sécurité et la simplicité, avec un code clair et performant.

GT LOGISTICS - Formation Salle Propre
