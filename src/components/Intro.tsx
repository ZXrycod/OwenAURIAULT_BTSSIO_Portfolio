import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export default function Intro({ onComplete }: IntroProps) {
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (!hasPlayed) {
      setHasPlayed(true);
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasPlayed, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.8 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0099ff] to-transparent"
          animate={{
            top: ['0%', '100%'],
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 text-center space-y-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-sm text-gray-500 tracking-widest uppercase"
        >
          A SynchroDev Project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white"
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0 #0099ff',
                '2px 2px 4px #0099ff',
                '0 0 0 #0099ff',
              ],
            }}
            transition={{ duration: 0.1, repeat: 3 }}
          >
            Owen Auriault
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="h-1 w-24 bg-[#0099ff] mx-auto"
        />
      </div>
    </motion.div>
  );
}
