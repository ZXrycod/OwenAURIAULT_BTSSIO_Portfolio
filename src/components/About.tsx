import { Code, Database, Globe, Zap } from 'lucide-react';

const skills = [
  { name: 'Symfony', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TailwindCSS', category: 'Frontend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'HTML/CSS', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Stripe', category: 'API' },
  { name: 'API Platform', category: 'Backend' },
  { name: 'GitHub', category: 'DevOps' },
  { name: 'GitLab', category: 'DevOps' },
  { name: 'WordPress', category: 'CMS' },
  { name: 'Zend Framework', category: 'Backend' },
];

const features = [
  {
    icon: Code,
    title: 'Développement Full-Stack',
    description: 'Maîtrise des technologies front-end et back-end pour créer des applications complètes'
  },
  {
    icon: Database,
    title: 'Gestion de données',
    description: 'Conception et optimisation de bases de données relationnelles'
  },
  {
    icon: Globe,
    title: 'Architecture Web',
    description: 'Création d\'APIs RESTful et applications web modernes'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimisation et bonnes pratiques pour des applications rapides et efficaces'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À propos
          </h2>
          <div className="h-1 w-24 bg-[#0099ff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Étudiant passionné en BTS SIO option SLAM (Solutions Logicielles et Applications Métiers),
              je me spécialise dans le développement d'applications web modernes et performantes.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Fort d'une expérience en micro-entreprise avec <span className="text-[#0099ff] font-semibold">SynchroDev</span>,
              j'accompagne mes clients de l'audit initial jusqu'à la maintenance, en passant par la production
              et l'optimisation SEO.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mon approche combine expertise technique, sens du design et compréhension des besoins métiers
              pour créer des solutions digitales sur mesure.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#0099ff] transition-all duration-300 hover:transform hover:scale-105"
              >
                <feature.icon className="w-10 h-10 text-[#0099ff] mb-4" />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technologies maîtrisées</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-white hover:border-[#0099ff] hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-400 text-sm ml-2">• {skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
