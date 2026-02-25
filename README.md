# 🚀 Portfolio — Owen Auriault

Portfolio personnel développé dans le cadre du **BTS SIO option SLAM** (2ᵉ année).  
Il présente mes compétences, mon parcours, mes réalisations et mon activité entrepreneuriale via **SynchroDev**.

---

## ✨ Fonctionnalités

- **Intro animée** — écran de chargement avec animation à l'arrivée
- **Navbar** responsive avec navigation par ancres
- **Hero** — présentation rapide (nom, titre, description)
- **About** — présentation détaillée & technologies maîtrisées
- **Compétences** — tableau Google Sheets intégré en temps réel (iframe) avec téléchargement `.xlsx`
- **Projets** — carte de projets réalisés
- **Timeline** — parcours scolaire et professionnel
- **Expérience** — détail des expériences professionnelles
- **Contact** — formulaire de contact (intégré avec Supabase)
- **AI Chat** — chat IA intégré
- **Audio Toggle** — toggle de son d'ambiance
- **Footer** — liens et informations

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
src/
├── components/
│   ├── About.tsx          # Section "À propos"
│   ├── AIChat.tsx         # Chat IA intégré
│   ├── AudioToggle.tsx    # Toggle son d'ambiance
│   ├── Competences.tsx    # Viewer Google Sheets
│   ├── Contact.tsx        # Formulaire de contact
│   ├── Experience.tsx     # Expériences professionnelles
│   ├── Footer.tsx         # Pied de page
│   ├── Hero.tsx           # Section d'accueil
│   ├── Intro.tsx          # Écran d'introduction animé
│   ├── Navbar.tsx         # Barre de navigation
│   ├── ProjectCard.tsx    # Carte d'un projet
│   ├── Projects.tsx       # Section projets
│   └── Timeline.tsx       # Parcours / timeline
├── data/                  # Données statiques (projets, timeline…)
├── pages/                 # Pages supplémentaires
├── utils/                 # Fonctions utilitaires
├── App.tsx                # Composant racine & routing
├── main.tsx               # Point d'entrée
└── index.css              # Styles globaux
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

La section **Compétences** affiche un tableau Google Sheets publié en lecture seule.  
Il est mis à jour automatiquement dès que le document source est modifié.

---

## 👤 Auteur

**Owen Auriault**  
Étudiant BTS SIO SLAM – 2ᵉ année & Entrepreneur  
Fondateur de [SynchroDev](https://synchroDev.fr)

---

## 📄 Licence

Ce projet est à usage personnel et scolaire. Tous droits réservés © Owen Auriault.
