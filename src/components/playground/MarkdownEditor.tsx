import { useState } from 'react';
import { motion } from 'framer-motion';
import { AudioService } from '../../utils/audioService';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState('# Bienvenue\n\nCeci est un **éditeur markdown** en direct.');

  const parseMarkdown = (text: string) => {
    return text
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('# ')) {
          return (
            <h1 key={i} className="text-3xl font-bold mb-4">
              {line.replace('# ', '')}
            </h1>
          );
        }
        if (line.startsWith('## ')) {
          return (
            <h2 key={i} className="text-2xl font-bold mb-3">
              {line.replace('## ', '')}
            </h2>
          );
        }
        if (line.startsWith('### ')) {
          return (
            <h3 key={i} className="text-xl font-bold mb-2">
              {line.replace('### ', '')}
            </h3>
          );
        }
        if (line.includes('**') && line.includes('**')) {
          const parts = line.split(/\*\*(.*?)\*\*/);
          return (
            <p key={i} className="mb-2">
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <strong key={j}>{part}</strong>
                ) : (
                  part
                )
              )}
            </p>
          );
        }
        if (line.includes('_') && line.includes('_')) {
          const parts = line.split(/_(.*?)_/);
          return (
            <p key={i} className="mb-2">
              {parts.map((part, j) =>
                j % 2 === 1 ? (
                  <em key={j}>{part}</em>
                ) : (
                  part
                )
              )}
            </p>
          );
        }
        return (
          <p key={i} className="mb-2">
            {line || '\n'}
          </p>
        );
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(e.target.value);
    AudioService.playHover();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-0 divide-x divide-gray-700">
        <div className="p-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Input</h3>
          <textarea
            value={markdown}
            onChange={handleChange}
            className="w-full h-64 bg-gray-900 border border-gray-700 text-white rounded-lg p-4 font-mono text-sm focus:outline-none focus:border-[#0099ff] transition-colors resize-none"
            placeholder="Écris du markdown..."
          />
        </div>
        <div className="p-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase mb-4">Preview</h3>
          <div className="h-64 overflow-auto text-white prose prose-invert prose-sm max-w-none">
            {parseMarkdown(markdown)}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
