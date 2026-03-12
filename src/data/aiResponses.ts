export interface AIResponse {
  trigger: string[];
  response: string;
}

export const aiResponses: AIResponse[] = [
  {
    trigger: ['bonjour', 'salut', 'hey', 'coucou', 'hello', 'bonsoir'],
    response: 'Salut ! Je suis Owen Auriault, développeur full-stack spécialisé dans les applications web modernes. Je travaille principalement avec Symfony, React et TypeScript. Je peux te parler de mes projets, de mes compétences techniques ou de mon parcours en BTS SIO. Qu\'est-ce qui t\'intéresse ?',
  },

  {
    trigger: ['qui es tu', 'présentation', 'présente toi', 'qui est owen'],
    response: 'Je suis Owen Auriault, développeur web full-stack et étudiant en BTS SIO option SLAM. Je me spécialise dans la création d\'applications web robustes avec des technologies modernes comme Symfony, React et TailwindCSS. Je développe également des APIs, des systèmes d\'authentification sécurisés et des architectures backend performantes.',
  },

  {
    trigger: ['parcours', 'parcours scolaire', 'études', 'formation'],
    response: 'Je suis actuellement en BTS SIO (Services Informatiques aux Organisations) option SLAM, une formation spécialisée dans le développement d\'applications. J\'y ai appris à concevoir des applications web complètes, gérer des bases de données, développer des APIs et travailler avec des frameworks professionnels.',
  },

  {
    trigger: ['bts', 'sio', 'slam', 'école'],
    response: 'Le BTS SIO option SLAM (Solutions Logicielles et Applications Métiers) forme au développement d\'applications professionnelles. Durant cette formation, j\'ai travaillé sur de nombreux projets : applications web, APIs REST, gestion de bases de données et architecture logicielle.',
  },

  {
    trigger: ['stage', 'ims', 'bordeaux', 'expérience professionnelle'],
    response: 'J\'ai réalisé un stage chez IMS Bordeaux où j\'ai participé au développement d\'une plateforme permettant la publication et la gestion de recherches scientifiques. Cette expérience m\'a permis de travailler dans un environnement professionnel avec des outils modernes et des problématiques réelles.',
  },

  {
    trigger: ['compétences', 'skills', 'savoir faire'],
    response: 'Mes principales compétences couvrent le développement full-stack : conception d\'applications web, création d\'APIs REST, gestion de bases de données, authentification sécurisée, architecture backend et création d\'interfaces modernes.',
  },

  {
    trigger: ['technologie', 'tech', 'stack', 'outils', 'technologies'],
    response: 'Ma stack technique inclut Symfony, React, TailwindCSS, PHP, JavaScript, TypeScript, MySQL, PostgreSQL et Docker. J\'utilise également API Platform pour la création d\'APIs modernes et Stripe pour les systèmes de paiement.',
  },

  {
    trigger: ['backend', 'serveur', 'api', 'apis'],
    response: 'Je développe principalement des backends avec Symfony. J\'y crée des APIs REST robustes avec authentification JWT, gestion des utilisateurs, validation des données et documentation Swagger.',
  },

  {
    trigger: ['api platform', 'rest', 'api rest'],
    response: 'API Platform est un outil que j\'utilise régulièrement pour construire des APIs modernes avec Symfony. Il permet de générer rapidement des endpoints REST sécurisés avec documentation automatique.',
  },

  {
    trigger: ['frontend', 'react', 'interface', 'ui'],
    response: 'Pour le frontend, j\'utilise React avec TypeScript et TailwindCSS. Cela permet de créer des interfaces modernes, performantes et facilement maintenables.',
  },

  {
    trigger: ['base de données', 'database', 'mysql', 'postgresql'],
    response: 'Je travaille régulièrement avec MySQL et PostgreSQL. Je conçois des structures de données optimisées et j\'utilise Doctrine ORM avec Symfony pour gérer les relations et les requêtes.',
  },

  {
    trigger: ['docker', 'conteneur', 'devops'],
    response: 'J\'utilise Docker pour conteneuriser les applications et faciliter le déploiement. Cela permet d\'avoir des environnements de développement reproductibles et proches de la production.',
  },

  {
    trigger: ['sécurité', 'authentification', 'jwt', 'login'],
    response: 'La sécurité est un point important dans mes projets. J\'implémente des systèmes d\'authentification sécurisés avec JWT, gestion des rôles utilisateurs, protection des endpoints et bonnes pratiques backend.',
  },

  {
    trigger: ['stripe', 'paiement', 'paiements'],
    response: 'J\'ai intégré Stripe dans plusieurs projets pour gérer les paiements en ligne. Cela inclut la gestion des abonnements, des paiements uniques et la sécurisation des transactions.',
  },

  {
    trigger: ['projets', 'portfolio', 'réalisations'],
    response: 'J\'ai développé plusieurs projets web professionnels : plateformes de gestion, sites e-commerce, APIs et applications full-stack. Ces projets m\'ont permis de travailler sur l\'architecture, la sécurité et la performance.',
  },

  {
    trigger: ['optimiz', 'taxi', 'optimiz taxi'],
    response: 'Optimiz Taxis est une application web que j\'ai développée pour optimiser la gestion des trajets et l\'organisation des taxis conventionnés. Le projet comprend une interface de gestion et un backend performant.',
  },

  {
    trigger: ['ecommerce', 'boutique', 'stripe project'],
    response: 'J\'ai également développé un projet e-commerce complet intégrant Stripe pour les paiements en ligne. Ce projet m\'a permis de travailler sur la gestion des produits, les paiements et la sécurité.',
  },

  {
    trigger: ['synchrodev', 'entreprise', 'micro entreprise'],
    response: 'SynchroDev est ma micro-entreprise spécialisée dans le développement web. J\'y propose la conception d\'applications web, la création de sites, l\'intégration d\'APIs et l\'optimisation technique.',
  },

  {
    trigger: ['architecture', 'backend architecture'],
    response: 'Je m\'intéresse beaucoup à l\'architecture logicielle : séparation frontend/backend, conception d\'APIs, modularité du code et bonnes pratiques pour créer des applications maintenables.',
  },

  {
    trigger: ['intelligence artificielle', 'ia', 'rag', 'mistral'],
    response: 'Je travaille également sur des projets intégrant de l\'intelligence artificielle, notamment des chatbots basés sur une architecture RAG combinant backend Symfony et modèles d\'IA.',
  },

  {
    trigger: ['travail', 'collaboration', 'équipe'],
    response: 'J\'aime travailler sur des projets techniques complexes, que ce soit en autonomie ou en équipe. La collaboration entre frontend et backend est un point essentiel dans le développement d\'applications modernes.',
  },

  {
    trigger: ['objectif', 'avenir', 'carrière'],
    response: 'Mon objectif est de continuer à progresser en tant que développeur full-stack, notamment sur les architectures backend, les APIs et les applications web complexes.',
  },

  {
    trigger: ['contact', 'mail', 'email'],
    response: 'Si tu souhaites discuter d\'un projet ou d\'une collaboration, tu peux contacter Owen par email : owen.auriault@gmail.com.',
  },

  {
    trigger: [],
    response: 'Je ne suis pas sûr d\'avoir une réponse précise à cette question. N\'hésite pas à me demander des informations sur les projets d\'Owen, ses compétences techniques ou son parcours en développement web.',
  },
];

export function findAIResponse(input: string): string {
  const lowerInput = input.toLowerCase().trim();

  for (const item of aiResponses) {
    if (item.trigger.some((trigger) => lowerInput.includes(trigger))) {
      return item.response;
    }
  }

  return aiResponses[aiResponses.length - 1].response;
}