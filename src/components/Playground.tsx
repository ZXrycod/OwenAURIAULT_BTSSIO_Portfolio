import { motion } from 'framer-motion';
import MarkdownEditor from './playground/MarkdownEditor';
import QRGenerator from './playground/QRGenerator';

export default function Playground() {
  return (
    <section id="playground" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Playground
          </h2>
          <div className="h-1 w-24 bg-[#0099ff] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Petites applications et outils interactifs – démonstrateur de compétences frontend
          </p>
        </div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <MarkdownEditor />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QRGenerator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
