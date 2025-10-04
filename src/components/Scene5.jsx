import { motion } from 'framer-motion';
import { Award, Zap, Wrench, Users, Skull, Crown, Star } from 'lucide-react';

const awards = [
  {
    name: 'First Blood',
    description: 'First team to complete prototype',
    icon: Zap,
    color: '#b33a3a'
  },
  {
    name: 'Eco Survivor',
    description: 'Best sustainable solution',
    icon: Star,
    color: '#059669'
  },
  {
    name: 'MacGyver Award',
    description: 'Most innovative use of resources',
    icon: Wrench,
    color: '#d97706'
  },
  {
    name: "Crowd's Saviour",
    description: 'Fan favorite project',
    icon: Users,
    color: '#ffb347'
  },
  {
    name: 'Zombie Slayer',
    description: 'Best problem-solving approach',
    icon: Skull,
    color: '#8b5cf6'
  }
];

const honors = [
  {
    name: 'The Last of Us',
    subtitle: 'Grand Champion',
    description: 'Ultimate survivor. The one who rebuilt the world.',
    icon: Crown,
    color: '#ffb347'
  },
  {
    name: 'Zone Masters',
    subtitle: 'Best in Each Domain',
    description: 'Elite teams who dominated their survival zones.',
    icon: Award,
    color: '#d2c7a3'
  }
];

export default function Scene5() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0f0f0f] via-[#2a1f1a] to-[#0f0f0f]">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1496372/pexels-photo-1496372.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          opacity: 0.2,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80" />

      {[...Array(15)].map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24 px-8 relative z-10"
      >
        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
          Survivor Challenges
        </h2>
        <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
          Special recognition for those who exceed expectations in their fight for survival.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {awards.map((award, index) => {
            const Icon = award.icon;

            return (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="relative p-8 rounded-lg bg-gradient-to-br from-[#3b2f2f]/50 to-[#1a1410]/50 border-2 backdrop-blur-sm"
                style={{
                  borderColor: `${award.color}40`,
                  boxShadow: `0 0 30px ${award.color}20`
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className="mb-6"
                >
                  <Icon size={64} color={award.color} />
                </motion.div>

                <h3
                  className="text-3xl font-bold mb-3 text-glow"
                  style={{ color: award.color }}
                >
                  {award.name}
                </h3>

                <p className="text-[#d2c7a3] text-lg">
                  {award.description}
                </p>

                <div
                  className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300"
                  style={{ background: award.color }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block w-32 h-1 bg-gradient-to-r from-transparent via-[#ffb347] to-transparent mb-12" />
          <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
            Survival Honors
          </h2>
          <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
            The ultimate recognition for those who rise above all others.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {honors.map((honor, index) => {
            const Icon = honor.icon;

            return (
              <motion.div
                key={honor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative p-12 rounded-lg bg-gradient-to-br from-[#3b2f2f]/70 to-[#1a1410]/70 border-4 backdrop-blur-sm overflow-hidden"
                style={{
                  borderColor: honor.color,
                  boxShadow: `0 0 50px ${honor.color}50`
                }}
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
                  className="absolute -top-20 -right-20 opacity-10"
                >
                  <Icon size={200} color={honor.color} />
                </motion.div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, 0, -10, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <Icon size={80} color={honor.color} />
                    </motion.div>
                  </div>

                  <h3
                    className="text-4xl font-bold mb-2 text-glow"
                    style={{ color: honor.color }}
                  >
                    {honor.name}
                  </h3>

                  <div className="text-2xl text-[#d2c7a3] mb-4 font-semibold">
                    {honor.subtitle}
                  </div>

                  <p className="text-[#d2c7a3]/80 text-lg leading-relaxed">
                    {honor.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#ffb347] to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
    </section>
  );
}
