import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StatsDocsEvents, StatsCounter, StatsDoc } from '../data/StatsDocs';

// Hook : anime un chiffre de 0 → target quand l'élément devient visible
function useCountUp(target: number, duration = 1000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// Carte pour les items de type 'counter'
function StatCard({ event }: { event: StatsCounter }) {
  const { count, ref } = useCountUp(event.count, 1000);

  return (
    <motion.div
      ref={ref}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative rounded-xl p-6 transition-all duration-150 cursor-pointer"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="text-4xl">{event.icon}</div>
      </div>
      <h3 className="text-2xl font-bold text-center text-white mb-2">{count}</h3>
      <p className="text-gray-300 text-center">{event.description}</p>
    </motion.div>
  );
}

// Carte pour les items de type 'doc'
function StatDocCard({ event }: { event: StatsDoc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-150 cursor-pointer"
      onClick={() => event.link && window.open(event.link, '_blank')}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="text-4xl">{event.icon}</div>
      </div>
      <h3 className="text-lg font-bold text-center text-white mb-2">{event.title}</h3>
      <p className="text-gray-300 text-center text-sm">{event.description}</p>
      {event.link && (
        <p className="text-blue-400 text-center text-xs mt-2 underline">Voir le document →</p>
      )}
    </motion.div>
  );
}

export default function StatsDocs() {
  const counters = StatsDocsEvents.filter((e): e is StatsCounter => e.type === 'counter');
  const docs = StatsDocsEvents.filter((e): e is StatsDoc => e.type === 'doc');

  return (
    <section id="statsdocs" className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Statistiques et Documentations
        </motion.h2>

        {/* Grille des compteurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {counters.map((event) => (
            <StatCard key={event.id} event={event} />
          ))}
        </div>

        {/* Grille des documentations (visible seulement si il y en a) */}
        {docs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((event) => (
              <StatDocCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
