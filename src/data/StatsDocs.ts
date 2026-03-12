// Interface pour les cartes compteur (chiffres animés)
export interface StatsCounter {
  id: string;
  type: 'counter';
  count: number;
  description: string;
  icon: string;
}

export interface StatsDoc {
  id: string;
  type: 'doc';
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export type StatsEvent = StatsCounter | StatsDoc;

export const StatsDocsEvents: StatsEvent[] = [

  /**
   * COMPTEURS
   */

  {
    id: 'nb-project',
    type: 'counter',
    count: 10,
    description: 'Nombre de projets réalisés',
    icon: '🚀',
  },
  {
    id: 'nb-docs',
    type: 'counter',
    count: 22,
    description: 'Nombre de documentations réalisées',
    icon: '📝',
  },
  {
    id: 'nb-stage',
    type: 'counter',
    count: 10,
    description: 'Nombre de semaines de stage réalisées sur les 2 ans',
    icon: '💼',
  },
  {
    id: 'nb-technos',
    type: 'counter',
    count: 16,
    description: 'Nombre de technologies maîtrisées',
    icon: '💻',
  },

  /**
   * DOCUMENTATIONS
   */

  {
    id: 'doc-rapport',
    type: 'doc',
    title: 'Rapport de stage',
    description: 'Rapport de stage BTS SIO 1ère année',
    icon: '📄',
    link: '/docs/rapport-stage.pdf',
  },
  {
    id: 'doc-guide-symfony',
    type: 'doc',
    title: 'Guide de commande Symfony',
    description: 'Guide de commande Symfony',
    icon: '📄',
    link: '/docs/guide_commandes_symfony.pdf',
  },
  {
    id: 'doc-synchrodrop',
    type: 'doc',
    title: 'SynchroDrop',
    description: 'Messagerie locale sécurisée Android utilisant le Bluetooth via l\'API Google Nearby. Découverte des utilisateurs à proximité, connexion sécurisée entre appareils et chiffrement AES des messages en temps réel.',
    icon: '📄',
    link: '/docs/synchrodrop.pdf',
  },
  {
    id: 'doc-procedureStockées',
    type: 'doc',
    title: 'Procedure Stockées',
    description: 'Procedure Stockées',
    icon: '📄',
    link: '/docs/documentation_procedures_stockees_mysql.pdf',
  },
  {
    id: 'doc-coupeDuMonde',
    type: 'doc',
    title: 'Coupe du Monde',
    description: 'Coupe du Monde',
    icon: '📄',
    link: '/docs/Doc_Technique_CDM.pdf',
  },
  {
    id: 'doc-prisePhoto',
    type: 'doc',
    title: 'Prise de photo',
    description: 'Prise de photo',
    icon: '📄',
    link: '/docs/photo_Android.pdf',
  },
  {
    id: 'doc-srvWeb',
    type: 'doc',
    title: 'Serveur Web',
    description: 'Serveur Web',
    icon: '📄',
    link: '/docs/srvWebOwen.pdf',
  }
];
