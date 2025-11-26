import { useState } from 'react';
import { motion } from 'framer-motion';
import { timelineEvents } from '../data/timeline';
import { AudioService } from '../utils/audioService';

export default function Timeline() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Adventure Timeline
          </h2>
          <div className="h-1 w-24 bg-[#0099ff] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Mon parcours en tant que quêtes</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0099ff] via-blue-500 to-[#0099ff] opacity-30"></div>

          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-6"></div>

                <div className="relative w-full md:w-1/2 px-6">
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 -top-8 w-16 h-16 bg-black border-2 border-[#0099ff] rounded-full flex items-center justify-center text-3xl cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => {
                      setHoveredId(event.id);
                      AudioService.playHover();
                    }}
                    onHoverEnd={() => setHoveredId(null)}
                  >
                    {event.icon}
                  </motion.div>

                  <motion.div
                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#0099ff] transition-all duration-300"
                    whileHover={{
                      y: -5,
                      boxShadow: '0 0 20px rgba(0, 153, 255, 0.3)',
                    }}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          event.type === 'achievement'
                            ? 'bg-yellow-400'
                            : 'bg-[#0099ff]'
                        }`}
                      ></div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest">
                        {event.date}
                      </p>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredId === event.id ? 1 : 0.6,
                      }}
                      className="text-gray-300 text-sm leading-relaxed"
                    >
                      {event.description}
                    </motion.p>
                    {event.type === 'achievement' && (
                      <div className="mt-3 inline-block px-3 py-1 bg-yellow-400/20 border border-yellow-400/50 rounded text-yellow-300 text-xs font-semibold">
                        ⭐ Quête Complétée
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
