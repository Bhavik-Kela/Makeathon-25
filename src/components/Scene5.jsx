import { motion } from 'framer-motion';
import { Award, Zap, Wrench, Users, Skull, Crown, Star } from 'lucide-react';

const awards = [
  {
    name: 'First Blood',
    description: 'First team to complete prototype and prove survival instincts',
    icon: Zap,
    color: '#b33a3a',
  },
  {
    name: 'Eco Survivor',
    description: 'Best sustainable solution for rebuilding civilization',
    icon: Star,
    color: '#059669',
  },
  {
    name: 'MacGyver Award',
    description: 'Most innovative use of limited resources',
    icon: Wrench,
    color: '#d97706',
  },
  {
    name: "Crowd's Saviour",
    description: 'Fan favorite project chosen by the survivors',
    icon: Users,
    color: '#ffb347',
  },
  {
    name: 'Zombie Slayer',
    description: 'Best problem-solving approach against extinction',
    icon: Skull,
    color: '#8b5cf6',
  }
];

const honors = [
  {
    name: 'The Last of Us',
    subtitle: 'Grand Champion',
    description: 'Ultimate survivor. The one who rebuilt the world from ashes.',
    icon: Crown,
    color: '#ffb347',
  },
  {
    name: 'Zone Masters',
    subtitle: 'Best in Each Domain',
    description: 'Elite teams who dominated their survival zones.',
    icon: Award,
    color: '#d2c7a3',
  }
];

export default function Scene5() {
  return (
    <section className="relative bg-[#0f0f0f] py-20">
      {/* Fireflies */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="firefly"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-8 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
          Survivor Challenges
        </h2>
        <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
          Special recognition for those who exceed expectations in their fight for survival.
        </p>
      </motion.div>

      {/* Awards Grid */}
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="space-y-16">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, 0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="mb-6 inline-block"
                >
                  <Icon size={100} color={award.color} strokeWidth={1.5} />
                </motion.div>

                <h3
                  className="text-6xl font-bold mb-4 text-glow"
                  style={{ color: award.color }}
                >
                  {award.name}
                </h3>

                <p className="text-2xl text-[#d2c7a3] leading-relaxed max-w-3xl mx-auto">
                  {award.description}
                </p>

                <div 
                  className="mt-6 h-1 w-40 mx-auto"
                  style={{
                    background: `linear-gradient(to right, transparent, ${award.color}, transparent)`,
                    boxShadow: `0 0 20px ${award.color}`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="my-32 mx-auto w-3/4 h-1 bg-gradient-to-r from-transparent via-[#ffb347] to-transparent"
        style={{ boxShadow: '0 0 20px #ffb347' }}
      />

      {/* Honors Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-8 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
          Survival Honors
        </h2>
        <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
          The ultimate recognition for those who rise above all others.
        </p>
      </motion.div>

      {/* Honors */}
      <div className="max-w-6xl mx-auto px-8 relative z-10 pb-20">
        <div className="space-y-24">
          {honors.map((honor, index) => {
            const Icon = honor.icon;

            return (
              <motion.div
                key={honor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="mb-8 inline-block"
                >
                  <Icon size={120} color={honor.color} strokeWidth={1.5} />
                </motion.div>

                <h3
                  className="text-7xl font-bold mb-4 text-glow"
                  style={{ color: honor.color }}
                >
                  {honor.name}
                </h3>

                <div className="text-3xl text-[#d2c7a3] mb-6 font-semibold">
                  {honor.subtitle}
                </div>

                <p className="text-2xl text-[#d2c7a3]/90 leading-relaxed max-w-4xl mx-auto">
                  {honor.description}
                </p>

                <div 
                  className="mt-8 h-2 w-60 mx-auto"
                  style={{
                    background: `linear-gradient(to right, transparent, ${honor.color}, transparent)`,
                    boxShadow: `0 0 30px ${honor.color}`
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}