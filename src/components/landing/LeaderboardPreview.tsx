import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const players = [
  { rank: 1, name: "PickleBill", xp: "2,847", tier: "Gold III", color: "border-l-[#F5C542]", avatar: "https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/11740d00-4fbe-4d41-83cb-465da44fa70c.png" },
  { rank: 2, name: "CourtCrusher", xp: "2,614", tier: "Gold II", color: "border-l-[#A8B4C4]", avatar: "https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/3136bdb5-2954-4ac3-8c17-b2a7806bb753.png" },
  { rank: 3, name: "DinkMaster", xp: "2,201", tier: "Gold I", color: "border-l-[#CD7F32]", avatar: "https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/adb5f83a-74de-401a-8608-8d1d995a27a1.png" },
  { rank: 4, name: "NetNinja", xp: "1,893", tier: "Silver III", color: "border-l-transparent", avatar: "https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/24b26ff2-a772-4591-8bee-ab3d6aa65898.png" },
  { rank: 5, name: "KitchenKing", xp: "1,740", tier: "Silver II", color: "border-l-transparent", avatar: "https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/c2e00d74-bbb4-4028-b243-853565587158.png" },
];

const tierColor = (tier: string) => {
  if (tier.startsWith("Gold")) return "bg-[#F5C542]/20 text-[#F5C542]";
  return "bg-[#A8B4C4]/20 text-[#A8B4C4]";
};

const LeaderboardPreview = () => (
  <section className="py-24 px-4">
    <div className="container mx-auto max-w-3xl">
      <motion.div className="flex items-center justify-center gap-3 mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h2 className="text-foreground text-center font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}>
          Live Leaderboard
        </h2>
        <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-bold border border-primary/20">
          PRODUCTION DATA
        </span>
      </motion.div>
      <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        Real rankings from Courtana venues — this is what Peak's leaderboard will look like.
      </motion.p>

      <motion.div className="glass rounded-2xl overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        {players.map((p) => (
          <motion.div
            key={p.rank}
            variants={fadeInUp}
            className={`flex items-center gap-4 p-5 border-l-4 ${p.color} ${p.rank < 5 ? "border-b border-border/50" : ""} hover:bg-secondary/30 transition-colors`}
          >
            <span className="text-lg font-extrabold text-muted-foreground w-8 text-center">#{p.rank}</span>
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-border">
              <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
            <span className="text-foreground font-bold flex-1">{p.name}</span>
            <span className="font-mono text-sm text-muted-foreground">{p.xp} XP</span>
            <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${tierColor(p.tier)}`}>{p.tier}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.p className="text-center text-muted-foreground text-sm mt-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        Showing top 5 from Underground Pickleball, Charlotte. Peak Pickleball will have its own leaderboard by Week 2 of the pilot.
      </motion.p>
    </div>
  </section>
);

export default LeaderboardPreview;
