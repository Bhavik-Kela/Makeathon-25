import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Shield, Wrench, Leaf, Home } from 'lucide-react';

const zones = [
  {
    name: 'MedZone',
    icon: Heart,
    description: 'Combat infections, create low-resource medical devices, and develop zombie detection systems to protect survivors.',
    bg: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&q=80',
    color: '#b33a3a',
    gradient: 'from-red-900/80 to-black/80'
  },
  {
    name: 'ShieldZone',
    icon: Shield,
    description: 'Design secure shelters, develop encryption systems, and create surveillance technology to keep communities safe.',
    bg: 'https://images.unsplash.com/photo-1518155317743-a8381ed3e766?w=1920&q=80',
    color: '#4a5568',
    gradient: 'from-gray-800/80 to-black/80'
  },
  {
    name: 'ForgeZone',
    icon: Wrench,
    description: 'Build survival robots, engineer tools from scrap, and innovate mechanical solutions for the new world.',
    bg: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80',
    color: '#d97706',
    gradient: 'from-orange-800/80 to-black/80'
  },
  {
    name: 'GreenZone',
    icon: Leaf,
    description: 'Develop sustainable agriculture, purify water sources, and create renewable energy systems for survival.',
    bg: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80',
    color: '#059669',
    gradient: 'from-green-800/80 to-black/80'
  },
  {
    name: 'SafeZone',
    icon: Home,
    description: 'Establish communication networks, coordinate rescue missions, and build infrastructure for human connection.',
    bg: 'https://images.unsplash.com/photo-1533093818801-dbfe0a313e72?w=1920&q=80',
    color: '#ffb347',
    gradient: 'from-amber-800/80 to-black/80'
  }
];

export default function Scene2() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <div ref={containerRef}>
      <div className="py-24 bg-gradient-to-b from-[#0f0f0f] to-[#1a1410]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-8"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
            Survival Domains
          </h2>
          <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
            Choose your path. Each domain requires unique skills to rebuild civilization from the ashes.
          </p>
        </motion.div>

        {zones.map((zone, index) => {
          const Icon = zone.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={zone.name}
              className="scene relative flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom, ${index === 0 ? '#1a1410' : 'transparent'} 0%, #0f0f0f 100%)`
              }}
            >
              <div
                className="parallax-bg"
                style={{
                  backgroundImage: `url(${zone.bg})`,
                  opacity: 0.3,
                  transform: `translateY(${scrollYProgress.get() * 50}px)`
                }}
              />

              <div className={`absolute inset-0 bg-gradient-to-b ${zone.gradient}`} />

              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 max-w-6xl mx-auto px-8 py-32"
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="inline-block p-6 rounded-full mb-6"
                      style={{
                        background: `radial-gradient(circle, ${zone.color}40, transparent)`,
                        border: `2px solid ${zone.color}`
                      }}
                    >
                      <Icon size={64} color={zone.color} />
                    </motion.div>

                    <h3
                      className="text-5xl md:text-6xl font-bold mb-6 text-glow"
                      style={{ color: zone.color }}
                    >
                      {zone.name}
                    </h3>

                    <p className="text-xl text-[#d2c7a3] leading-relaxed">
                      {zone.description}
                    </p>
                  </div>

                  <div className="flex-1 flex justify-center">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                      className="w-64 h-64 rounded-lg overflow-hidden border-4"
                      style={{
                        borderColor: zone.color,
                        boxShadow: `0 0 40px ${zone.color}50`
                      }}
                    >
                      <img
                        src={zone.bg}
                        alt={zone.name}
                        className="w-full h-full object-cover bloom"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {index === 1 && (
                <div className="lightning" id="lightning" />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}