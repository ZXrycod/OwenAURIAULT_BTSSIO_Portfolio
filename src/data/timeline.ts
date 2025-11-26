export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  type: 'quest' | 'achievement';
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'synchrodev-birth',
    title: 'Création de SynchroDev',
    description: 'Lancement de ma micro-entreprise dédiée au développement web et logiciel. Début du voyage entrepreneurial.',
    date: '2023',
    icon: '🚀',
    type: 'achievement',
  },
  {
    id: 'optimiztaxi',
    title: 'Projet OptimizTaxi',
    description: 'Développement d\'une application web complète pour la gestion de taxis conventionnés.',
    date: '2023',
    icon: '🚕',
    type: 'achievement',
  },
  {
    id: 'ims-stage',
    title: 'Stage IMS Bordeaux',
    description: 'Stage professionnel : développement d\'une plateforme de publication scientifique.',
    date: '2024',
    icon: '📚',
    type: 'achievement',
  },
  {
    id: 'symfony-api',
    title: 'APIs Symfony Avancées',
    description: 'Maîtrise d\'API Platform, JWT, et architectures microservices.',
    date: '2024',
    icon: '⚙️',
    type: 'achievement',
  },
  {
    id: 'rag-chatbot',
    title: 'Chatbot IA RAG',
    description: 'Création d\'un chatbot intelligent avec MistralAI et architecture RAG.',
    date: '2024',
    icon: '🤖',
    type: 'achievement',
  },
  {
    id: 'docker-mastery',
    title: 'Maîtrise Docker',
    description: 'Conteneurisation et orchestration : Docker, Docker Compose, déploiement production.',
    date: '2024',
    icon: '🐳',
    type: 'achievement',
  },
  {
    id: 'cevrikdussaud',
    title: 'Site CevrikDussaud',
    description: 'Création d\'une plateforme e-commerce avec intégration Stripe et génération PDF.',
    date: '2023',
    icon: '🛒',
    type: 'quest',
  },
  {
    id: 'final-quest',
    title: 'Fin du BTS – Dernière Quête (Encore quelques mois...)',
    description: 'Achèvement du BTS SIO SLAM. Début d\'une nouvelle aventure professionnelle.',
    date: '2026 ?',
    icon: '👑',
    type: 'quest',
  },
];
