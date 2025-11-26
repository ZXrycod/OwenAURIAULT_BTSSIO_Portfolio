import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projets');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#0099ff] rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#0099ff] rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Owen Auriault
          </h1>
          <div className="h-1 w-32 bg-[#0099ff] mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Étudiant BTS SIO SLAM – 2<sup>ᵉ</sup> année
          </p>
          <p className="text-lg md:text-xl text-[#0099ff] font-medium">
            Développeur Web & Logiciel
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-fade-in-up">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-[#0099ff] text-white rounded-lg font-semibold hover:bg-[#0088ee] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#0099ff]/50"
          >
            Voir mes projets
          </button>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-[#0099ff] text-[#0099ff] rounded-lg font-semibold hover:bg-[#0099ff] hover:text-white transform hover:scale-105 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#0099ff]" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
