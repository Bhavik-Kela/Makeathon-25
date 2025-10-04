import { motion } from 'framer-motion';
import { Heart, Shield, Wrench, Leaf, Home } from 'lucide-react';
import medzone from './medzone.jpg';
import shieldzone from './shieldzone.jpg';
import forgezone from './forgezone.jpg';
import greenzone from './greenzone.jpg';
import safezone from './safezone.jpg';

const zones = [
  {
    name: 'MedZone',
    icon: Heart,
    description:
      'Combat infections, create low-resource medical devices, and develop zombie detection systems to protect survivors.',
    image: medzone,
    color: '#b33a3a',
    bgColor: '#1a0f0f',
  },
  {
    name: 'ShieldZone',
    icon: Shield,
    description:
      'Design secure shelters, develop encryption systems, and create surveillance technology to keep communities safe.',
    image: shieldzone,
    color: '#4a5568',
    bgColor: '#0f1419',
  },
  {
    name: 'ForgeZone',
    icon: Wrench,
    description:
      'Build survival robots, engineer tools from scrap, and innovate mechanical solutions for the new world.',
    image: forgezone,
    color: '#d97706',
    bgColor: '#1a1410',
  },
  {
    name: 'GreenZone',
    icon: Leaf,
    description:
      'Develop sustainable agriculture, purify water sources, and create renewable energy systems for survival.',
    image: greenzone,
    color: '#059669',
    bgColor: '#0f1a14',
  },
  {
    name: 'SafeZone',
    icon: Home,
    description:
      'Establish communication networks, coordinate rescue missions, and build infrastructure for human connection.',
    image: safezone,
    color: '#ffb347',
    bgColor: '#1a1610',
  },
];

export default function Scene2() {
  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] to-[#1a1410]">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ffb347] text-glow mb-4 sm:mb-6">
          Survival Domains
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-[#d2c7a3] max-w-3xl mx-auto px-4">
          Choose your path. Each domain requires unique skills to rebuild civilization from the ashes.
        </p>
      </motion.div>

      {/* Zone Sections */}
      {zones.map((zone, index) => {
        const Icon = zone.icon;
        const isEven = index % 2 === 0;

        return (
          <section
            key={zone.name}
            className="relative min-h-screen flex items-center mb-20 sm:mb-32 md:mb-40"
            style={{ backgroundColor: zone.bgColor }}
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex w-full h-screen">
              {isEven ? (
                <>
                  {/* Left Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/2 flex items-center justify-center px-8 lg:px-16"
                    style={{ backgroundColor: zone.bgColor }}
                  >
                    <div className="max-w-xl">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block p-6 rounded-full mb-6"
                        style={{
                          background: `radial-gradient(circle, ${zone.color}40, transparent)`,
                          border: `2px solid ${zone.color}`,
                        }}
                      >
                        <Icon size={64} color={zone.color} />
                      </motion.div>

                      <h3
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-glow"
                        style={{ color: zone.color }}
                      >
                        {zone.name}
                      </h3>

                      <p className="text-xl lg:text-2xl text-[#d2c7a3] leading-relaxed">
                        {zone.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Side - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-1/2 h-full relative overflow-hidden"
                  >
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: 'brightness(0.8) contrast(1.2)',
                      }}
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Left Side - Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="w-1/2 h-full relative overflow-hidden"
                  >
                    <img
                      src={zone.image}
                      alt={zone.name}
                      className="w-full h-full object-cover object-center"
                      style={{
                        filter: 'brightness(0.8) contrast(1.2)',
                      }}
                    />
                  </motion.div>

                  {/* Right Side - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-1/2 flex items-center justify-center px-8 lg:px-16"
                    style={{ backgroundColor: zone.bgColor }}
                  >
                    <div className="max-w-xl">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-block p-6 rounded-full mb-6"
                        style={{
                          background: `radial-gradient(circle, ${zone.color}40, transparent)`,
                          border: `2px solid ${zone.color}`,
                        }}
                      >
                        <Icon size={64} color={zone.color} />
                      </motion.div>

                      <h3
                        className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-glow"
                        style={{ color: zone.color }}
                      >
                        {zone.name}
                      </h3>

                      <p className="text-xl lg:text-2xl text-[#d2c7a3] leading-relaxed">
                        {zone.description}
                      </p>
                    </div>
                  </motion.div>
                </>
              )}
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden w-full py-16 px-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block p-5 rounded-full mb-6"
                  style={{
                    background: `radial-gradient(circle, ${zone.color}40, transparent)`,
                    border: `2px solid ${zone.color}`,
                  }}
                >
                  <Icon size={56} color={zone.color} />
                </motion.div>

                <h3
                  className="text-3xl sm:text-4xl font-bold mb-4 text-glow"
                  style={{ color: zone.color }}
                >
                  {zone.name}
                </h3>

                <p className="text-base sm:text-lg text-[#d2c7a3] leading-relaxed max-w-lg mx-auto mb-8">
                  {zone.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full h-64 sm:h-80 rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${zone.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: `3px solid ${zone.color}`,
                  boxShadow: `0 0 30px ${zone.color}50`,
                }}
              />
            </div>

            {/* Lightning effect (for ShieldZone only) */}
            {index === 1 && <div className="lightning" id="lightning" />}
          </section>
        );
      })}
    </div>
  );
}
