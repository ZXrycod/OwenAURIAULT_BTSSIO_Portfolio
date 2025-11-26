import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="w-8 h-8 text-[#0099ff]" />
              <span className="text-white font-bold text-xl">SynchroDev</span>
            </div>
            <p className="text-gray-400 text-sm">
              Développement web professionnel et solutions digitales sur mesure.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Accueil', 'À propos', 'Projets', 'Expérience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace('à propos', 'about').replace('accueil', 'hero').replace('expérience', 'experience')}`}
                    className="text-gray-400 hover:text-[#0099ff] transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0099ff] hover:bg-gray-700 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0099ff] hover:bg-gray-700 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:owen.auriault@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#0099ff] hover:bg-gray-700 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Owen Auriault - SynchroDev. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Conçu et développé avec React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
