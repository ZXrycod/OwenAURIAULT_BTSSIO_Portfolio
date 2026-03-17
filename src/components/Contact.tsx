import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h2>
          <div className="h-1 w-24 bg-[#0099ff] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Un projet en tête ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Téléphone</p>
                    <p className="text-white">06 69 60 22 18</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:owen.auriault@gmail.com" className="text-white hover:text-[#0099ff] transition-colors">
                      owen.auriault@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="w-12 h-12 bg-[#0099ff]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#0099ff]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="text-white">Reignac, France</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0099ff]/20 to-blue-500/20 p-8 rounded-xl border border-[#0099ff]/30">
            <h4 className="text-xl font-bold text-white mb-4">Disponibilité</h4>
            <p className="text-gray-300 mb-4">
              Je suis actuellement disponible pour des missions freelance et des offres d'alternance.
            </p>
            <p className="text-[#0099ff] font-semibold">
              Réponse sous 24-48h
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
