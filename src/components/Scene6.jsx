import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';

export default function Scene6() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0f0f0f] via-[#1a1410] to-[#2a1f1a]">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          opacity: 0.3,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl mx-auto px-8 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="mb-8"
        >
          <div className="inline-block p-8 rounded-full bg-gradient-to-br from-[#ffb347]/20 to-transparent border-4 border-[#ffb347]">
            <div className="text-8xl">🔥</div>
          </div>
        </motion.div>

        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-8">
          Join The Survivors
        </h2>

        <p className="text-2xl text-[#d2c7a3] mb-12 leading-relaxed max-w-3xl mx-auto">
          The world needs you. Register now to be part of humanity's last stand.
          Your innovations could save civilization.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-[#3b2f2f]/40 border border-[#ffb347]/30 backdrop-blur-sm"
          >
            <Calendar size={40} className="mx-auto mb-4 text-[#ffb347]" />
            <div className="text-lg font-semibold text-[#d2c7a3] mb-2">When</div>
            <div className="text-[#ffb347]">48 Hours</div>
            <div className="text-sm text-[#d2c7a3]/60">Two Days of Innovation</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-[#3b2f2f]/40 border border-[#ffb347]/30 backdrop-blur-sm"
          >
            <MapPin size={40} className="mx-auto mb-4 text-[#ffb347]" />
            <div className="text-lg font-semibold text-[#d2c7a3] mb-2">Where</div>
            <div className="text-[#ffb347]">Virtual + Physical</div>
            <div className="text-sm text-[#d2c7a3]/60">Hybrid Experience</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-lg bg-[#3b2f2f]/40 border border-[#ffb347]/30 backdrop-blur-sm"
          >
            <Mail size={40} className="mx-auto mb-4 text-[#ffb347]" />
            <div className="text-lg font-semibold text-[#d2c7a3] mb-2">Contact</div>
            <div className="text-[#ffb347]">ACM-W</div>
            <div className="text-sm text-[#d2c7a3]/60">Student Chapter</div>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-16 py-6 text-2xl font-bold text-[#0f0f0f] bg-[#ffb347] rounded-full overflow-hidden pulse-glow transition-all duration-300"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#ffb347] via-[#ff8c00] to-[#ffb347]"
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <span className="relative z-10 flex items-center gap-3">
            REGISTER NOW
            <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
          </span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-[#ffb347]/20"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-bold text-[#ffb347] mb-4 text-glow">
                MAKEATHON 2025
              </h3>
              <p className="text-xl text-[#d2c7a3]">
                Presented by ACM-W Student Chapter
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-[#d2c7a3]/60 text-sm space-y-2"
            >
              <p className="text-2xl font-bold text-[#ffb347] italic">
                Survive. Rebuild. Innovate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-[#d2c7a3]/40 text-sm">
                © MAKEATHON 2025 | All Rights Reserved
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
