export interface AIResponse {
  trigger: string[];
  response: string;
}

export const aiResponses: AIResponse[] = [
  {
    trigger: ['bonjour', 'salut', 'hey', 'coucou', 'hello'],
    response: 'Salut! Je suis Owen, développeur full-stack passionné. Je peux te parler de mes projets, compétences, ou mon parcours. Qu\'est-ce qui t\'intéresse?',
  },
  {
    trigger: ['projets', 'projet', 'travaux', 'portfolio'],
    response: 'J\'ai travaillé sur plusieurs projets sympas! OptimizTaxi, CevrikDussaud (e-commerce Stripe), SportAutoOcean, et plein d\'autres. Tu veux en savoir plus sur un projet en particulier?',
  },
  {
    trigger: ['technologie', 'tech', 'stack', 'outils', 'technologies'],
    response: 'Je maîtrise: Symfony, React, TailwindCSS, PHP, JavaScript, TypeScript, MySQL, PostgreSQL, Docker, API Platform, Stripe, et bien d\'autres. Curieux pour une technologie spécifique?',
  },
  {
    trigger: ['stage', 'ims', 'bordeaux', 'expérience'],
    response: 'J\'ai fait un stage chez IMS Bordeaux où j\'ai développé une plateforme de publication de recherches. Une expérience enrichissante en environnement professionnel!',
  },
  {
    trigger: ['synchrodev', 'entreprise', 'micro-entreprise'],
    response: 'SynchroDev c\'est ma micro-entreprise! Je propose du développement web complet: audit, production, maintenance, SEO, UX/UI. Je gère tout, de la conception à la livraison.',
  },
  {
    trigger: ['bts', 'formation', 'sio', 'slam', 'école'],
    response: 'Je suis en 2ᵉ année de BTS SIO option SLAM. C\'est une formation qui m\'a permis de maîtriser le développement d\'applications web et logicielles professionnelles.',
  },
  {
    trigger: ['api', 'apis', 'api platform'],
    response: 'J\'ai une forte expertise en APIs RESTful, notamment avec Symfony et API Platform. JWT, authentification, documentation Swagger... tout ce qu\'il faut pour des APIs robustes!',
  },
  {
    trigger: ['ia', 'chatbot', 'rag', 'mistral'],
    response: 'J\'ai créé un chatbot IA intelligent avec MistralAI et une architecture RAG. Un projet fascinant qui mêle backend Symfony et intelligence artificielle!',
  },
  {
    trigger: ['docker', 'conteneur', 'devops'],
    response: 'Je suis passionné par Docker et la conteneurisation. C\'est un élément clé pour des déploiements robustes et scalables en production.',
  },
  {
    trigger: ['contact', 'mail', 'email'],
    response: 'Tu peux me contacter à owen.auriault@gmail.com ou via le formulaire de contact sur le site. Je réponds généralement dans les 24-48h!',
  },
  {
    trigger: ['salaire', 'prix', 'tarif'],
    response: 'Chaque projet est unique! Les tarifs dépendent de la complexité, du temps et des technologies. Je propose des devis sur mesure. Parlons de ton projet!',
  },
  {
    trigger: ['php', 'symfony'],
    response: 'Symfony c\'est mon framework de prédilection pour le backend! ORM Doctrine, Twig, DependencyInjection... j\'adore son architecture solide et réutilisable.',
  },
  {
    trigger: ['react', 'frontend', 'javascript'],
    response: 'React c\'est super pour créer des UIs dynamiques! Avec TypeScript et TailwindCSS, on obtient des interfaces modernes et maintenables. C\'est ce que j\'utilise pour ce portfolio!',
  },
  {
    trigger: ['ai', 'ask owen'],
    response: 'C\'est moi! Je suis l\'IA du portfolio d\'Owen. Je peux répondre à tes questions sur ses projets, ses compétences, son expérience... Vas-y, pose une question!',
  },
  {
    trigger: [],
    response: 'Intéressante question! Je n\'ai pas d\'infos spécifiques là-dessus, mais tu peux toujours me demander plus sur les projets, les compétences, ou contacter Owen directement. 😊',
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
