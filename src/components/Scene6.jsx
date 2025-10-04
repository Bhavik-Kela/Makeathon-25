import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';
import middle from './middle.jpg';

export default function Scene6() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0f]">
      {/* Top Section */}
      <div className="relative py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto px-8"
        >
          {/* Icon */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-center mb-12"
          >
            <div
              className="inline-block p-10 rounded-full border-4 border-[#ffb347]"
              style={{
                background: 'radial-gradient(circle, #ffb34740, transparent)',
                boxShadow: '0 0 60px #ffb347'
              }}
            >
              <div className="text-9xl">🔥</div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-7xl md:text-8xl font-bold text-[#ffb347] text-glow text-center mb-8"
          >
            Join The Survivors
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl text-[#d2c7a3] text-center mb-16 leading-relaxed max-w-4xl mx-auto"
          >
            The world needs you. Register now to be part of humanity's last stand.
            <br />
            <span className="text-[#ffb347]">Your innovations could save civilization.</span>
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-12 mb-20 flex-wrap"
          >
            <motion.div whileHover={{ y: -10 }} className="text-center">
              <Calendar size={60} className="mx-auto mb-4 text-[#ffb347]" strokeWidth={1.5} />
              <div className="text-2xl font-bold text-[#d2c7a3] mb-2">When</div>
              <div className="text-3xl text-[#ffb347] font-bold">13 & 14 October</div>
              <div className="text-lg text-[#d2c7a3]/70 mt-2">Two Days of Innovation</div>
            </motion.div>

            <div className="w-px bg-[#ffb347]/30" />

            <motion.div whileHover={{ y: -10 }} className="text-center">
              <MapPin size={60} className="mx-auto mb-4 text-[#ffb347]" strokeWidth={1.5} />
              <div className="text-2xl font-bold text-[#d2c7a3] mb-2">Where</div>
              <div className="text-3xl text-[#ffb347] font-bold">GD Naidu Hall & Faraday Hall</div>
              <div className="text-lg text-[#d2c7a3]/70 mt-2">Physical</div>
            </motion.div>

            <div className="w-px bg-[#ffb347]/30" />

            <motion.div whileHover={{ y: -10 }} className="text-center">
              <Mail size={60} className="mx-auto mb-4 text-[#ffb347]" strokeWidth={1.5} />
              <div className="text-2xl font-bold text-[#d2c7a3] mb-2">Contact</div>
              <div className="text-3xl text-[#ffb347] font-bold">acmw.students@srmist.edu.in</div>
              <div className="text-lg text-[#d2c7a3]/70 mt-2">Student Chapter</div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
           <motion.button
  whileHover={{ scale: 1.1, boxShadow: '0 0 80px #4B5320' }}
  whileTap={{ scale: 0.95 }}
  className="group relative px-20 py-8 text-3xl font-bold text-white bg-[#1DB954] rounded-full overflow-hidden transition-all duration-300"
  style={{ boxShadow: '0 0 40px #4B5320' }}
>
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-[#178f43] via-[#1DB954] to-[#178f43]"
    animate={{ x: ['-200%', '200%'] }}
    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
  />
  <span className="relative z-10 flex items-center justify-center gap-4">
    REGISTER NOW
    <ArrowRight
      size={36}
      className="group-hover:translate-x-3 transition-transform duration-300"
    />
  </span>
</motion.button>

          </motion.div>
        </motion.div>

        {/* Animated Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#ffb347]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #ffb347'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>

      {/* Footer Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${middle})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 text-center px-8 py-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-transparent via-[#ffb347] to-transparent mb-16 max-w-4xl mx-auto"
            style={{ boxShadow: '0 0 20px #ffb347' }}
          />

          <div className="space-y-8">
            <div>
              <h3 className="text-5xl font-bold text-[#ffb347] mb-4 text-glow">
                MAKEATHON 2025
              </h3>
              <p className="text-2xl text-[#d2c7a3]">Presented by ACM-W Student Chapter</p>
            </div>

            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-4xl font-bold text-[#ffb347] italic tracking-wide">
                Survive. Rebuild. Innovate.
              </p>
            </motion.div>

            <div className="pt-12 border-t border-[#ffb347]/20 max-w-2xl mx-auto">
              <p className="text-[#d2c7a3]/50 text-base">© MAKEATHON 2025 | All Rights Reserved</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
