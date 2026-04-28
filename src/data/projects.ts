export interface Project {
  id: string;
  nom: string;
  description: string;
  technos: string[];
  lien?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "optimiztaxi",
    nom: "OptimizTaxi",
    description: "Application web complète pour la gestion de taxis conventionnés. Gestion des courses, des patients, facturation automatique et suivi en temps réel.",
    technos: ["Symfony", "PHP", "MySQL", "JavaScript", "Bootstrap"],
    images: ["/images/OptimizTaxi.png"]
  },
  {
    id: "cevrikdussaud",
    nom: "CevrikDussaud",
    description: "Site e-commerce complet avec intégration Stripe pour les paiements, génération de factures PDF avec DOMPDF, gestion catalogue produits.",
    technos: ["Symfony", "Stripe", "DOMPDF", "MySQL", "Twig"],
    images: ["https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800"]
  },
  {
    id: "sportautoocean",
    nom: "SportAutoOcean",
    description: "Plateforme dédiée aux rallyes automobiles. Interface moderne et responsive pour consultation des événements, inscriptions et résultats.",
    technos: ["React", "TailwindCSS", "TypeScript", "API REST"],
    images: ["/images/SportAutoOcean.png"]
  },
  {
    id: "ims",
    nom: "Projet IMS",
    description: "Site de publication et consultation de recherches scientifiques. Système de gestion de contenu, authentification et recherche avancée.",
    technos: ["Symfony", "MySQL", "JavaScript", "Bootstrap"],
    images: ["/images/IMS.png"]
  },
  {
    id: "api-symfony",
    nom: "APIs Symfony",
    description: "Développement d'APIs RESTful avec API Platform. Documentation Swagger, authentification JWT, tests unitaires.",
    technos: ["Symfony", "API Platform", "JWT", "PostgreSQL"],
    images: ["/images/APIs.png"]
  },
  {
    id: "chatbot-rag",
    nom: "Chatbot RAG IA",
    description: "Chatbot intelligent utilisant MistralAI avec architecture RAG (Retrieval-Augmented Generation) pour des réponses contextuelles.",
    technos: ["Symfony", "MistralAI", "Python", "Vector DB"],
    images: ["/images/RAG.png"]
  },
  {
    id: "coupe-monde",
    nom: "Projet Coupe du Monde",
    description: "Plateforme de gestion de tournois avec EasyAdmin, API Platform et Docker. Gestion des équipes, matchs et statistiques.",
    technos: ["Symfony", "EasyAdmin", "Docker", "API Platform"],
    images: ["/images/CDM.png"]
  },
  {
    id: "plateform-e-sport",
    nom: "Plateform e-sport Aux clavier citoyen",
    description: "Plateforme de gestion de tournois e-sport développée avec Symfony et API Platform. Modélisation complète des tournois, équipes, rounds et matchs, résultats et génération de l'arbre de tournoi (bracket).",
    technos: ["Symfony", "API Platform"],
    images: ["/images/ESPORT.png"]
  },
  {
    id: "Application Battaille navale",
    nom: "Application Android Battaille navale",
    description: "Application Android de bataille navale avec interface moderne et responsive. Gestion des joueurs, des bateaux, des tirs et des scores.",
    technos: ["Symfony", "API Platform", "Java", "Android", "Volley", "Room"],
    images: ["/images/BatailleNavale.png"]
  },
  {
    id: "Application Recette de cuisine",
    nom: "Application Android Recette de cuisine",
    description: "Application Android de recette de cuisine avec interface moderne et responsive. Gestion des recettes, des ingrédients, des étapes, et autres information.",
    technos: ["Symfony", "API Platform", "Java", "Android", "Volley", "Room"],
    images: ["/images/AppRecette.png"]
  },
  {
    id: "synchrodrop",
    nom: "SynchroDrop",
    description: "Messagerie locale sécurisée Android utilisant le Bluetooth via l'API Google Nearby. Découverte des utilisateurs à proximité, connexion sécurisée entre appareils et chiffrement AES des messages en temps réel.",
    technos: ["Java", "Android", "Google Nearby API", "AES", "RecyclerView", "Bluetooth"],
    lien: "https://gitlab.lev-btssio.fr/owen.auriault/synchrodrop.git",
    images: ["/images/SynchroDrop.png"]
  },
  {
    id: "DecouvrirLaCharente",
    nom: "Decouvrir la charente",
    description: "L’application “Découvrez la Charente” a pour but de centraliser et rendre accessibles les lieux touristiques locaux tout en permettant aux utilisateurs de découvrir, planifier et partager des visites de manière interactive, même hors connexion.",
    technos: ["Java", "Android", "Google Maps API", "RecyclerView"],
    lien: "https://gitlab.lev-btssio.fr/owen.auriault/app-decouvrir-la-charente.git",
    images: ["/images/SynchroDrop.png"]
  },
];
