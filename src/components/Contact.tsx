import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:owen.auriault@gmail.com?subject=Contact depuis le portfolio&body=Nom: ${formData.nom}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

            <div className="bg-gradient-to-br from-[#0099ff]/20 to-blue-500/20 p-8 rounded-xl border border-[#0099ff]/30">
              <h4 className="text-xl font-bold text-white mb-4">Disponibilité</h4>
              <p className="text-gray-300 mb-4">
                Je suis actuellement disponible pour des missions freelance et des stages.
              </p>
              <p className="text-[#0099ff] font-semibold">
                Réponse sous 24-48h
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#0099ff] transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#0099ff] transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#0099ff] transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#0099ff] text-white rounded-lg font-semibold hover:bg-[#0088ee] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#0099ff]/50 flex items-center justify-center space-x-2"
            >
              <span>Envoyer le message</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
