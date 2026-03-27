import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.12 } } };

const badges = [
  { name: "That Was Easy", tier: "Platinum", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/f444e4f8-1cc2-4312-a1f8-c68291e6fa98.png" },
  { name: "Epic Rally", tier: "Platinum", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/77ed9a3e-7bd8-49a3-878a-5e58b2b8e93b.png" },
  { name: "Highlight Reel", tier: "Gold", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/c7e8d0e0-4680-4ecc-8aef-76e7e973e3e2.png" },
  { name: "Tag Team Takedown", tier: "Gold", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/7e99e00d-db53-4d6f-ac73-4b32f1e8fbb3.png" },
  { name: "Firefight Victor", tier: "Platinum", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/eb7e1dfa-22cc-43f2-a6b2-7cadd1fa2ff9.png" },
  { name: "Momentum Shift", tier: "Gold", img: "https://cdn.courtana.com/files/production/u/eefe1c2b-6708-4f79-ba0f-897f04974e94/d64c75e4-9ad3-4c3b-9c1b-4e2f8a91c0d8.png" },
];

const PlayerProfile = () => (
  <section className="py-24 px-4 bg-card/50">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        className="text-foreground text-center mb-4 font-extrabold"
        style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        What Players See
      </motion.h2>
      <motion.p
        className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        Every player gets a profile with stats, rank, badges, and shareable highlights.
      </motion.p>

      {/* Profile Card */}
      <motion.div
        className="glass rounded-2xl p-8 mb-10"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full border-2 border-accent overflow-hidden">
              <img
                src="https://cdn.courtana.com/files/production/u/a3c7e1d0-4b2f-4a8e-9f1c-6d5e8b3a2c1f/7d873c1f-ec81-487a-8fe7-97bdb94a6397.png"
                alt="PickleBill"
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src="https://cdn.courtana.com/files/production/u/0573819f-7e19-4e13-8d5c-90a771136f7e/58a41527-1ba8-4805-a8ab-5431ceb7c6ac.png"
              alt="Gold III"
              className="absolute -bottom-1 -right-1 w-8 h-8"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground">PickleBill</h3>
            <p className="text-accent font-semibold text-sm">Gold III</p>
            <p className="text-muted-foreground text-sm">Underground Pickleball, Charlotte</p>
            <div className="mt-3 w-full max-w-xs mx-auto md:mx-0">
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-primary/60" style={{ width: "72%" }} />
              </div>
              <p className="text-xs text-muted-foreground mt-1 font-mono">2,847 / 4,000 XP to Gold II</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-4">
            {[
              { val: "47", label: "Matches" },
              { val: "28", label: "Wins" },
              { val: "12", label: "Highlights" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center min-w-[80px]">
                <div className="text-2xl font-extrabold text-foreground">{s.val}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Badges */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <h4 className="text-lg font-bold text-foreground mb-4">Earned Badges</h4>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {badges.map((b) => (
            <div key={b.name} className="glass rounded-xl p-4 flex flex-col items-center gap-2 min-w-[100px] flex-shrink-0">
              <img
                src={b.img}
                alt={b.name}
                className="w-10 h-10 rounded-lg"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <span className="text-xs text-foreground font-semibold text-center leading-tight">{b.name}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${b.tier === "Platinum" ? "bg-purple-500/20 text-purple-400" : "bg-accent/20 text-accent"}`}>
                {b.tier}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default PlayerProfile;
