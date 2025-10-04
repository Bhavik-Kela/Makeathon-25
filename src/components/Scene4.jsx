import { motion } from 'framer-motion';
import { Clock, Users, Lightbulb, Target, Trophy, Bug } from 'lucide-react';

const timelineEvents = [
  {
    day: 'Day 1',
    time: '9:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome to the apocalypse. Rules revealed, teams assembled.',
    icon: Users,
  },
  {
    day: 'Day 1',
    time: '10:00 AM - 6:00 PM',
    title: 'Prototype Development',
    description: 'Build, innovate, and survive. Create your solution from the ruins.',
    icon: Lightbulb,
  },
  {
    day: 'Day 1',
    time: '6:00 PM - 7:00 PM',
    title: 'First Review',
    description: 'Present your progress. Mentors evaluate survival potential.',
    icon: Target,
  },
  {
    day: 'Day 1',
    time: '8:00 PM',
    title: 'Shortlisting Announcement',
    description: 'The strongest teams advance. Others fall to the horde.',
    icon: Trophy,
  },
  {
    day: 'Day 2',
    time: '9:00 AM - 12:00 PM',
    title: 'Final Development',
    description: 'Shortlisted teams refine their weapons against extinction.',
    icon: Lightbulb,
  },
  {
    day: 'Day 2',
    time: '12:00 PM - 2:00 PM',
    title: 'Judging Round',
    description: 'Face the council. Defend your innovation under scrutiny.',
    icon: Users,
  },
  {
    day: 'Day 2',
    time: '2:00 PM - 4:00 PM',
    title: 'Debugging & Polish',
    description: 'Final chance to fortify. Eliminate weaknesses.',
    icon: Bug,
  },
  {
    day: 'Day 2',
    time: '5:00 PM',
    title: 'Winner Announcement',
    description: 'Humanity\'s champion emerges. Glory awaits the victor.',
    icon: Trophy,
  }
];

export default function Scene4() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0f] py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-8"
      >
        <Clock size={80} className="mx-auto mb-6 text-[#ffb347]" />
        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
          48-Hour Timeline
        </h2>
        <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
          Every moment counts. Every decision matters. This is your roadmap to survival.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto px-8">
        {/* Vertical Line */}
        <div 
          className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ffb347] via-[#d97706] to-[#b33a3a]" 
          style={{ boxShadow: '0 0 10px #ffb347' }} 
        />

        {/* Events */}
        <div className="space-y-16">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isDay2 = event.day === 'Day 2';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-24"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-8 -translate-x-1/2 w-12 h-12 rounded-full bg-[#ffb347] border-4 border-[#0f0f0f] flex items-center justify-center"
                  style={{ boxShadow: '0 0 20px #ffb347' }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#b33a3a]" />
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="text-left"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Icon size={48} className="text-[#ffb347]" />
                    <div>
                      <div className="text-sm text-[#ffb347] font-bold uppercase tracking-widest">
                        {event.day}
                      </div>
                      <div className="text-2xl font-bold text-[#d2c7a3]">
                        {event.time}
                      </div>
                    </div>
                  </div>

                  <h3 
                    className="text-4xl font-bold mb-3 text-glow"
                    style={{ color: isDay2 ? '#059669' : '#b33a3a' }}
                  >
                    {event.title}
                  </h3>

                  <p className="text-xl text-[#d2c7a3] leading-relaxed">
                    {event.description}
                  </p>

                  <div 
                    className="mt-4 h-1 w-32"
                    style={{
                      background: `linear-gradient(to right, ${isDay2 ? '#059669' : '#b33a3a'}, transparent)`,
                      boxShadow: `0 0 10px ${isDay2 ? '#059669' : '#b33a3a'}`
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24 px-8"
      >
        <p className="text-3xl text-[#ffb347] font-bold">
          Two days. One chance. Infinite possibilities.
        </p>
      </motion.div>
    </section>
  );
}