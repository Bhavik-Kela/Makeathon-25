import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Lightbulb, Target, Trophy, Bug } from 'lucide-react';

const timelineEvents = [
  {
    day: 'Day 1',
    time: '9:00 AM',
    title: 'Opening Ceremony',
    description: 'Welcome to the apocalypse. Rules revealed, teams assembled.',
    icon: Users,
    side: 'left'
  },
  {
    day: 'Day 1',
    time: '10:00 AM - 6:00 PM',
    title: 'Prototype Development',
    description: 'Build, innovate, and survive. Create your solution from the ruins.',
    icon: Lightbulb,
    side: 'right'
  },
  {
    day: 'Day 1',
    time: '6:00 PM - 7:00 PM',
    title: 'First Review',
    description: 'Present your progress. Mentors evaluate survival potential.',
    icon: Target,
    side: 'left'
  },
  {
    day: 'Day 1',
    time: '8:00 PM',
    title: 'Shortlisting Announcement',
    description: 'The strongest teams advance. Others fall to the horde.',
    icon: Trophy,
    side: 'right'
  },
  {
    day: 'Day 2',
    time: '9:00 AM - 12:00 PM',
    title: 'Final Development',
    description: 'Shortlisted teams refine their weapons against extinction.',
    icon: Lightbulb,
    side: 'left'
  },
  {
    day: 'Day 2',
    time: '12:00 PM - 2:00 PM',
    title: 'Judging Round',
    description: 'Face the council. Defend your innovation under scrutiny.',
    icon: Users,
    side: 'right'
  },
  {
    day: 'Day 2',
    time: '2:00 PM - 4:00 PM',
    title: 'Debugging & Polish',
    description: 'Final chance to fortify. Eliminate weaknesses.',
    icon: Bug,
    side: 'left'
  },
  {
    day: 'Day 2',
    time: '5:00 PM',
    title: 'Winner Announcement',
    description: 'Humanity\'s champion emerges. Glory awaits the victor.',
    icon: Trophy,
    side: 'right'
  }
];

export default function Scene4() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-[#0f0f0f] via-[#1a1410] to-[#0f0f0f]">
      <div
        className="parallax-bg"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=1920&q=80)',
          opacity: 0.15,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-24 px-8 relative z-10"
      >
        <Clock size={80} className="mx-auto mb-6 text-[#ffb347]" />
        <h2 className="text-6xl md:text-7xl font-bold text-[#ffb347] text-glow mb-6">
          48-Hour Timeline
        </h2>
        <p className="text-xl text-[#d2c7a3] max-w-3xl mx-auto">
          Every moment counts. Every decision matters. This is your roadmap to survival.
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-8">
        <motion.div
          className="timeline-line absolute left-1/2 top-0 -translate-x-1/2"
          style={{ height: lineHeight }}
        />

        <div className="space-y-24">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            const isLeft = event.side === 'left';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8 relative z-10`}
              >
                <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block p-8 rounded-lg bg-gradient-to-br from-[#3b2f2f] to-[#1a1410] border-2 border-[#ffb347]/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4 mb-4" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                      <Icon size={32} className="text-[#ffb347]" />
                      <div>
                        <div className="text-sm text-[#ffb347] font-semibold uppercase tracking-wider">
                          {event.day}
                        </div>
                        <div className="text-xs text-[#d2c7a3]/60">
                          {event.time}
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#d2c7a3] mb-3">
                      {event.title}
                    </h3>

                    <p className="text-[#d2c7a3]/80 leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-full bg-[#ffb347] border-4 border-[#0f0f0f] flex items-center justify-center shadow-lg"
                  style={{ boxShadow: '0 0 30px #ffb347' }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#b33a3a]" />
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mt-24 px-8 relative z-10"
      >
        <div className="inline-block p-6 rounded-lg bg-[#3b2f2f]/40 border border-[#ffb347]/40">
          <p className="text-xl text-[#ffb347] font-semibold">
            Two days. One chance. Infinite possibilities.
          </p>
        </div>
      </motion.div>
    </section>
  );
}