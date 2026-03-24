import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar, CreditCard, BarChart3, Camera, Megaphone, Settings,
  ChevronRight, ArrowRight, Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "8", label: "Week Program" },
  { value: "$0", label: "Upfront" },
  { value: "$95", label: "/mo After" },
  { value: "40%+", label: "Utilization Lift" },
];

const valueProps = [
  { icon: Calendar, title: "We Run the Events", desc: "From clinics to tournaments, we plan, promote, and execute every event on your calendar." },
  { icon: CreditCard, title: "We Handle Payments", desc: "Stripe-powered checkout. Players pay online, you see revenue in your dashboard." },
  { icon: BarChart3, title: "We Prove the Numbers", desc: "Weekly reports on court utilization, revenue, and player engagement. No guessing." },
  { icon: Camera, title: "Smart Court Tech Included", desc: "Cameras, sensors, and AI analysis installed at zero cost during the pilot." },
  { icon: Megaphone, title: "Co-Branded Marketing", desc: "We create the flyers, social posts, and email campaigns. Your brand, our execution." },
  { icon: Settings, title: "Works With Court Reserve", desc: "Seamless integration with your existing booking system. No double-entry." },
];

const weeks = [
  { num: 1, title: "Setup & Launch Party", focus: "Launch", color: "bg-purple-500/20 text-purple-400", desc: "Install smart court tech, configure systems, and host a free launch party to introduce Cortana to your members.", deliverables: ["Tech installed", "Launch event", "Email blast"] },
  { num: 2, title: "Coaching Clinics", focus: "Events", color: "bg-amber-500/20 text-amber-400", desc: "Run the first paid clinics with certified coaches. Test pricing, gather feedback, and start building momentum.", deliverables: ["2 clinics", "Player surveys", "Revenue report"] },
  { num: 3, title: "Round Robin + Charity", focus: "Events", color: "bg-amber-500/20 text-amber-400", desc: "Host a charity round robin to drive community engagement and press coverage. All proceeds to local youth sports.", deliverables: ["Tournament", "PR coverage", "Donation receipt"] },
  { num: 4, title: "Gamification", focus: "Data", color: "bg-cyan-500/20 text-cyan-400", desc: "Launch leaderboards, challenges, and achievement badges. Turn casual players into regulars.", deliverables: ["Leaderboard live", "Weekly challenge", "Player profiles"] },
  { num: 5, title: "Premium Pricing Test", focus: "Growth", color: "bg-primary/20 text-primary", desc: "Test peak/off-peak pricing strategies. Identify optimal price points for different event types.", deliverables: ["Pricing model", "A/B test results", "Revenue comparison"] },
  { num: 6, title: "Pro-Am Showcase", focus: "Events", color: "bg-amber-500/20 text-amber-400", desc: "Bring in local pros for an exhibition event. Premium ticket pricing, maximum buzz.", deliverables: ["Pro-Am event", "Highlight reel", "Social content"] },
  { num: 7, title: "Matchmaking", focus: "Data", color: "bg-cyan-500/20 text-cyan-400", desc: "Launch AI-powered matchmaking based on player data. Better matches = happier players = higher retention.", deliverables: ["Matchmaking live", "Retention metrics", "Player feedback"] },
  { num: 8, title: "ROI Report", focus: "Review", color: "bg-red-500/20 text-red-400", desc: "Present the full pilot results: revenue generated, utilization lift, player growth, and the business case for continuing.", deliverables: ["ROI deck", "Renewal proposal", "Growth roadmap"] },
];

const revenueStreams = [
  { name: "Clinics & Lessons", conservative: "$400", realistic: "$800", upside: "$1,200" },
  { name: "Tournaments", conservative: "$200", realistic: "$500", upside: "$800" },
  { name: "Open Play Fees", conservative: "$150", realistic: "$300", upside: "$500" },
  { name: "Premium Time Slots", conservative: "$100", realistic: "$250", upside: "$400" },
  { name: "Merch & Concessions", conservative: "$50", realistic: "$150", upside: "$300" },
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Venue Launch Playbook</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="hero-title text-foreground mb-6">
              Cortana × <span className="text-gradient-green">Peak</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              An 8-week partnership to prove ROI, generate buzz, and turn your courts into a revenue engine.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8" asChild>
                <a href="#plan">See the Plan</a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-8" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp}>
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-green">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            className="section-title text-foreground text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Why venues partner with us
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {valueProps.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 glow-green-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8-Week Timeline */}
      <section id="plan" className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-3xl">
          <motion.h2
            className="section-title text-foreground text-center mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The 8-Week Playbook
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Each week builds on the last. By week 8, you'll have hard data on ROI and a clear path forward.
          </motion.p>
          <motion.div
            className="space-y-6 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
            {weeks.map((w) => (
              <motion.div key={w.num} variants={fadeInUp} className="flex gap-6">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0 z-10">
                    {w.num}
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 flex-1 glow-green-hover transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="md:hidden w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                      {w.num}
                    </span>
                    <h3 className="font-bold text-foreground">{w.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${w.color}`}>{w.focus}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{w.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {w.deliverables.map((d) => (
                      <span key={d} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="section-title text-foreground text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The Economics
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { label: "Your Cost", value: "$0", sub: "during pilot" },
              { label: "Post-Pilot", value: "$95", sub: "/month" },
              { label: "Revenue Lift", value: "$1,200+", sub: "/month", gold: true },
            ].map((m) => (
              <motion.div
                key={m.label}
                variants={fadeInUp}
                className={`glass rounded-2xl p-6 text-center ${m.gold ? "border-accent/30 glow-green" : ""}`}
              >
                <div className="text-sm text-muted-foreground mb-2">{m.label}</div>
                <div className={`text-4xl font-extrabold mb-1 ${m.gold ? "text-gradient-gold" : "text-foreground"}`}>{m.value}</div>
                <div className="text-sm text-muted-foreground">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Revenue Table */}
          <motion.div
            className="glass rounded-2xl overflow-x-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-muted-foreground font-semibold">Revenue Stream</th>
                  <th className="text-right p-4 text-muted-foreground font-semibold">Conservative</th>
                  <th className="text-right p-4 text-muted-foreground font-semibold">Realistic</th>
                  <th className="text-right p-4 text-muted-foreground font-semibold">Upside</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((r) => (
                  <tr key={r.name} className="border-b border-border/50">
                    <td className="p-4 text-foreground">{r.name}</td>
                    <td className="p-4 text-right text-muted-foreground">{r.conservative}</td>
                    <td className="p-4 text-right text-foreground">{r.realistic}</td>
                    <td className="p-4 text-right text-primary font-semibold">{r.upside}</td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-4 font-bold text-foreground">Total Monthly</td>
                  <td className="p-4 text-right font-bold text-muted-foreground">$900</td>
                  <td className="p-4 text-right font-bold text-foreground">$2,000</td>
                  <td className="p-4 text-right font-bold text-primary">$3,200</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-foreground mb-6">
              Ready to turn your courts into a revenue engine?
            </motion.h2>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 gap-2">
                <Mail size={18} />
                Get Started
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
