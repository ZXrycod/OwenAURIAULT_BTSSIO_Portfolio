import { Briefcase, Building2, GraduationCap } from 'lucide-react';

const experiences = [
  {
    icon: Building2,
    title: 'Micro-entreprise SynchroDev',
    role: 'Fondateur & Développeur Full-Stack',
    period: '2023 - Présent',
    location: 'Reignac',
    description: [
      'Audit et conseil en solutions digitales',
      'Développement d\'applications web sur mesure',
      'Maintenance et évolution de sites web',
      'Optimisation SEO et UX/UI',
      'Gestion relation client et suivi de projets'
    ],
    color: 'bg-[#0099ff]'
  },
  {
    icon: Briefcase,
    title: 'Stage IMS Bordeaux',
    role: 'Développeur Stagiaire',
    period: '2024',
    location: 'Bordeaux',
    description: [
      'Développement site de publication de recherches',
      'Travail en équipe sur architecture Symfony',
      'Gestion de base de données MySQL',
      'Tests et déploiement en environnement de production'
    ],
    color: 'bg-blue-500'
  },
  {
    icon: GraduationCap,
    title: 'BTS SIO SLAM',
    role: 'Étudiant - 2ᵉ année',
    period: '2023 - 2025',
    location: 'France',
    description: [
      'Développement d\'applications web et logicielles',
      'Conception et gestion de bases de données',
      'Projets en équipe avec méthodologies agiles',
      'Veille technologique et apprentissage continu'
    ],
    color: 'bg-purple-500'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Expérience
          </h2>
          <div className="h-1 w-24 bg-[#0099ff] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Parcours professionnel et académique
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-[#0099ff] transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`flex-shrink-0 w-16 h-16 ${exp.color} rounded-xl flex items-center justify-center`}>
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-[#0099ff] font-semibold text-lg">
                        {exp.role}
                      </p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0 md:text-right">
                      <p className="font-medium">{exp.period}</p>
                      <p className="text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-[#0099ff] mr-3 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
