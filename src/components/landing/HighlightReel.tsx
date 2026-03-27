import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const highlights = [
  {
    title: "Backhand Winner — Court 3",
    thumbnail: "https://cdn.courtana.com/files/production/u/faad1826-b310-4602-89d2-cc8eea8444f6/15b095b5-8595-42b6-b753-f96b81b0ee7b.jpeg",
    video: "https://cdn.courtana.com/files/production/u/01915c59-9bb7-4683-bd53-e28bddcae12e/ce00696b-9f9b-465a-971c-dbf1334e556c.mp4",
  },
  {
    title: "Rally of the Week",
    thumbnail: "https://cdn.courtana.com/files/production/u/faad1826-b310-4602-89d2-cc8eea8444f6/7ba35f44-aeb0-4d55-851a-7ce74e45d4a3.jpeg",
    video: "https://cdn.courtana.com/files/production/u/01915c59-9bb7-4683-bd53-e28bddcae12e/ce00696b-9f9b-465a-971c-dbf1334e556c.mp4",
  },
  {
    title: "Third Shot Drop — Textbook",
    thumbnail: "https://cdn.courtana.com/files/production/u/faad1826-b310-4602-89d2-cc8eea8444f6/6b450457-6d46-49da-85f0-9e021ce104be.jpeg",
    video: "https://cdn.courtana.com/files/production/u/01915c59-9bb7-4683-bd53-e28bddcae12e/ce00696b-9f9b-465a-971c-dbf1334e556c.mp4",
  },
  {
    title: "Momentum Shift — Doubles",
    thumbnail: "https://cdn.courtana.com/files/production/u/faad1826-b310-4602-89d2-cc8eea8444f6/67d09ccf-65d3-4256-9e53-c2205d281458.jpeg",
    video: "https://cdn.courtana.com/files/production/u/01915c59-9bb7-4683-bd53-e28bddcae12e/ce00696b-9f9b-465a-971c-dbf1334e556c.mp4",
  },
];

const HighlightReel = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-foreground text-center mb-4 font-extrabold"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          See It in Action
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
          Real AI-generated highlights from Courtana courts — this is what your players get.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeInUp}
              className="glass rounded-xl overflow-hidden cursor-pointer group relative"
              onClick={() => setActiveVideo(h.video)}
            >
              <div className="relative aspect-video">
                <img
                  src={h.thumbnail}
                  alt={h.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-primary-foreground ml-1" size={28} />
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-foreground font-semibold">{h.title}</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
                  AI-Generated
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HighlightReel;
