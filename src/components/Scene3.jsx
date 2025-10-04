import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Scene3() {
  return (
    <section className="scene relative flex items-center justify-center bg-gradient-to-b from-[#1a1410] to-[#0f0f0f]">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          opacity: 0.25,
        }}
      />

      <div className="absolute inset-0 bg-black/50" />

      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="xp-orb"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + Math.sin(i) * 30}%`,
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-8 max-w-6xl"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="inline-block mb-8"
        >
          <Sparkles size={80} color="#ffb347" />
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-12">
          Game Progression
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-lg bg-gradient-to-br from-[#b33a3a]/20 to-transparent border-2 border-[#b33a3a]/50"
          >
            <div className="absolute -top-6 left-8 px-6 py-2 bg-[#b33a3a] rounded-full">
              <span className="text-2xl font-bold text-white">Day 1</span>
            </div>

            <h3 className="text-4xl font-bold text-[#b33a3a] mb-6 text-glow">
              Round 1: The Outbreak
            </h3>

            <p className="text-xl text-[#d2c7a3] leading-relaxed">
              The infection begins. Teams form, ideas clash, and the first prototypes emerge from chaos.
              Survive the initial wave and prove your concept has what it takes.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="xp-orb relative" style={{ position: 'relative', animation: 'float 2s ease-in-out infinite' }} />
              <span className="text-[#ffb347] text-lg font-semibold">Earn XP through innovation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-lg bg-gradient-to-br from-[#059669]/20 to-transparent border-2 border-[#059669]/50"
          >
            <div className="absolute -top-6 left-8 px-6 py-2 bg-[#059669] rounded-full">
              <span className="text-2xl font-bold text-white">Day 2</span>
            </div>

            <h3 className="text-4xl font-bold text-[#059669] mb-6 text-glow">
              Round 2: The Rebuild
            </h3>

            <p className="text-xl text-[#d2c7a3] leading-relaxed">
              The survivors push forward. Shortlisted teams face the judges, debug under pressure,
              and fight for the ultimate victory. Only the strongest will prevail.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="xp-orb relative" style={{ position: 'relative', animation: 'float 2s ease-in-out infinite 0.5s' }} />
              <span className="text-[#ffb347] text-lg font-semibold">Level up your solution</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-lg bg-[#3b2f2f]/30 border border-[#ffb347]/30"
        >
          <p className="text-2xl text-[#ffb347] font-semibold">
            48 hours to save humanity. Are you ready?
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
