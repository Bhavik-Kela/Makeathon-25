import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import makethon from './makethon.jpg';

export default function Scene1() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen" style={{
      background: 'linear-gradient(to bottom, #1a1410 0%, #2a1f1a 50%, #3b2f2f 100%)',
    }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${makethon})`,
          opacity: 0.5,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />

      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-[#ffb347] glitch text-glow mb-4 sm:mb-6 md:mb-8">
            MAKEATHON 2025
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showText ? 1 : 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#d2c7a3] mb-6 sm:mb-8 md:mb-12 px-2">
            The Last Of Us: Rebuild The World
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 30 }}
          transition={{ duration: 1.5, delay: 2 }}
          className="subtitle-fade"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#d2c7a3] leading-relaxed font-light max-w-4xl mx-auto px-2">
            The world as we know it has fallen. Civilization has collapsed under the weight of a zombie apocalypse.
            <br />
            <span className="text-[#ffb347] font-semibold">But humanity is resilient...</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-8 sm:mt-12 md:mt-16"
        >
          <div className="text-xs sm:text-sm text-[#d2c7a3]/60 uppercase tracking-widest">
            Scroll to survive
          </div>
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-10 border-2 border-[#ffb347]/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-[#ffb347] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
    </section>
  );
}