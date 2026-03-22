# 🚀 Portfolio — Owen Auriault

Portfolio personnel développé dans le cadre du **BTS SIO option SLAM** (2ᵉ année).  
Il présente mes compétences, mon parcours, mes réalisations et mon activité entrepreneuriale via **SynchroDev**.

---

## ✨ Fonctionnalités

| Section | Description |
|---|---|
| **Intro** | Écran de chargement animé à l'ouverture du site |
| **Navbar** | Navigation responsive par ancres |
| **Hero** | Présentation rapide : nom, titre, description |
| **About** | Présentation détaillée & technologies maîtrisées |
| **Compétences** | Tableau Google Sheets intégré en temps réel (iframe) avec téléchargement `.xlsx` |
| **Projets** | Cartes de projets réalisés avec détails |
| **Expérience** | Détail des expériences professionnelles |
| **Stats & Docs** | Statistiques de développement et documents téléchargeables (attestations, etc.) |
| **Contact** | Formulaire de contact intégré avec Supabase |
| **AI Chat** | Assistant IA intégré avec réponses contextuelles |
| **Playground** | Espace de démonstration interactif |
| **Audio Toggle** | Bouton de toggle pour le son d'ambiance |
| **Footer** | Liens sociaux et informations de contact |

---

## 🛠️ Stack technique

| Catégorie | Technologies |
|---|---|
| Framework | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Routing | [React Router DOM v7](https://reactrouter.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icônes | [Lucide React](https://lucide.dev/) |
| Styles | [TailwindCSS v3](https://tailwindcss.com/) |
| Backend / BDD | [Supabase](https://supabase.com/) |
| QR Code | [qrcode.react](https://www.npmjs.com/package/qrcode.react) |

---

## 📁 Structure du projet

```
OwenAURIAULT_BTSSIO_Portfolio/
├── public/                    # Fichiers statiques publics
├── src/
│   ├── assets/                # Images et médias
│   ├── components/
│   │   ├── About.tsx          # Section "À propos"
│   │   ├── AIChat.tsx         # Chat IA avec réponses contextuelles
│   │   ├── AudioToggle.tsx    # Toggle son d'ambiance
│   │   ├── Competences.tsx    # Viewer Google Sheets (tableau de compétences)
│   │   ├── Contact.tsx        # Formulaire de contact (Supabase)
│   │   ├── Experience.tsx     # Expériences professionnelles
│   │   ├── Footer.tsx         # Pied de page
│   │   ├── Hero.tsx           # Section d'accueil
│   │   ├── Intro.tsx          # Écran d'introduction animé
│   │   ├── Navbar.tsx         # Barre de navigation
│   │   ├── Playground.tsx     # Espace de démonstration
│   │   ├── ProjectCard.tsx    # Carte d'un projet
│   │   ├── Projects.tsx       # Section projets
│   │   ├── StatsDocs.tsx      # Stats de dev & documents téléchargeables
│   │   └── playground/        # Sous-composants du playground
│   ├── data/
│   │   ├── aiResponses.ts     # Réponses pré-définies pour l'IA
│   │   ├── projects.ts        # Données des projets
│   │   └── StatsDocs.ts       # Données stats & documents
│   ├── pages/
│   │   └── playground.tsx     # Page playground
│   ├── utils/                 # Fonctions utilitaires
│   ├── App.tsx                # Composant racine & routing
│   ├── main.tsx               # Point d'entrée React
│   └── index.css              # Styles globaux
├── index.html                 # Template HTML principal
├── vite.config.ts             # Configuration Vite
├── tailwind.config.js         # Configuration TailwindCSS
├── tsconfig.json              # Configuration TypeScript
└── package.json               # Dépendances & scripts
```

---

## ⚙️ Installation & lancement

### Prérequis

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Étapes

```bash
# 1. Cloner le dépôt
git clone https://github.com/ZXrycod/OwenAURIAULT_BTSSIO_Portfolio.git
cd OwenAURIAULT_BTSSIO_Portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite |
| `npm run build` | Compile l'application pour la production |
| `npm run preview` | Prévisualise le build de production localement |
| `npm run lint` | Analyse le code avec ESLint |
| `npm run typecheck` | Vérifie les types TypeScript sans compiler |

---

## 📊 Tableau de compétences (Google Sheets)

La section **Compétences** affiche un tableau Google Sheets publié en lecture seule via une `<iframe>`.  
Il se met à jour automatiquement dès que le document source est modifié.  
Un bouton permet de télécharger le fichier `.xlsx` directement.

---

## 🤖 Chat IA

L'assistant IA intégré répond à des questions sur le portfolio (compétences, projets, contact…).  
Les réponses sont définies statiquement dans `src/data/aiResponses.ts` et adaptées au contexte du profil.

---

## 📑 Stats & Documents

La section **Stats & Docs** regroupe :
- Des statistiques sur l'activité de développement
- Des documents téléchargeables (attestations de stage, certifications, etc.)

---

## 👤 Auteur

**Owen Auriault**  
Étudiant BTS SIO SLAM – 2ᵉ année & Entrepreneur  
Fondateur de [SynchroDev](https://synchroDev.fr)

---

## 📄 Licence

Ce projet est à usage personnel et scolaire. Tous droits réservés © Owen Auriault.
