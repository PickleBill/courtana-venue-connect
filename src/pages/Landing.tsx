import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar, CreditCard, BarChart3, Camera, Megaphone, Settings,
  ArrowRight, Mail, Trophy, Shield, Brain, Play, Zap, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { weekPartners } from "@/data/partners";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaderboardMockup from "@/components/mockups/LeaderboardMockup";
import BadgesMockup from "@/components/mockups/BadgesMockup";
import AIAnalysisMockup from "@/components/mockups/AIAnalysisMockup";
import ReplayMockup from "@/components/mockups/ReplayMockup";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "8", label: "Week Program" },
  { value: "$0", label: "Upfront Cost" },
  { value: "$95", label: "/mo After Pilot" },
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
  { num: 1, title: "Setup & Launch Party", focus: "Launch", color: "bg-purple-500/20 text-purple-400", desc: "Install smart court tech, configure systems, and host a free launch party to introduce Courtana to your members.", deliverables: ["Tech installed", "Launch event", "Email blast"] },
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

const featureMockups = [
  { title: "Local Leaderboards", desc: "Drive competitive engagement and repeat visits with venue-specific rankings, XP systems, and seasonal competition.", icon: Trophy },
  { title: "Achievement Badges", desc: "Reward consistency and milestones. Players earn badges for streaks, skill achievements, and social play.", icon: Shield },
  { title: "AI Shot Analysis", desc: "Every shot tracked, every pattern analyzed. Players get personalized insights that keep them on your courts.", icon: Brain },
  { title: "Instant Replay", desc: "Review any point seconds after it happens. Share highlights, settle disputes, and create social content.", icon: Play },
];

const Landing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, hsl(145 100% 45% / 0.3), transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.3), transparent 70%)" }} />
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
              <Zap className="text-primary" size={16} />
              <span className="text-base font-semibold text-primary tracking-wide">Venue Launch Playbook</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-foreground mb-4" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Courtana × <span className="text-gradient-green">Peak</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-foreground/80 mb-6 tracking-tight">
              Let's Launch Together.
            </motion.p>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              An 8-week partnership to prove ROI, generate buzz, and turn your courts into a revenue engine — powered by{" "}
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline-offset-4 transition-colors">courtana.com</a>
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-6 text-lg font-bold glow-green" asChild>
                <a href="#plan">
                  See the Plan
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-10 py-6 text-lg font-bold" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-border bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="glass rounded-2xl p-6 text-center glow-green">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-green mb-2">{s.value}</div>
                <div className="text-base text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            className="text-foreground text-center mb-4 font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Why Venues Partner With Us
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Everything you need to launch, grow, and prove ROI — with zero upfront cost.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {valueProps.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="glass rounded-2xl p-8 glow-green-hover transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8-Week Timeline */}
      <section id="plan" className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            className="text-foreground text-center mb-4 font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            The 8-Week Playbook
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Each week builds on the last. By week 8, you'll have hard data on ROI and a clear path forward.
          </motion.p>
          <motion.div className="space-y-6 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />
            {weeks.map((w) => (
              <motion.div key={w.num} variants={fadeInUp} className="flex gap-6">
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-base flex-shrink-0 z-10">
                    {w.num}
                  </div>
                </div>
                <div className="glass rounded-2xl p-8 flex-1 glow-green-hover transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className="md:hidden w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                      {w.num}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">{w.title}</h3>
                    <span className={`text-sm px-4 py-1 rounded-full font-semibold ${w.color}`}>{w.focus}</span>
                  </div>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">{w.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {w.deliverables.map((d) => (
                      <span key={d} className="text-sm px-4 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">{d}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-foreground mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}>
              See It In Action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              From leaderboards to instant replay — here's what your players experience, and why they keep coming back.
            </motion.p>
          </motion.div>

          {/* Feature descriptions */}
          <motion.div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {featureMockups.map((f) => (
              <motion.div key={f.title} variants={fadeInUp} className="glass rounded-2xl p-6 text-center glow-green-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-primary" size={24} />
                </div>
                <h4 className="font-bold text-foreground text-base mb-2">{f.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mockup grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            <LeaderboardMockup />
            <BadgesMockup />
            <AIAnalysisMockup />
            <ReplayMockup />
          </div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-foreground text-center mb-14 font-extrabold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            The Economics
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8 mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { label: "Your Cost", value: "$0", sub: "during pilot" },
              { label: "Post-Pilot", value: "$95", sub: "/month" },
              { label: "Revenue Lift", value: "$1,200+", sub: "/month", gold: true },
            ].map((m) => (
              <motion.div key={m.label} variants={fadeInUp} className={`glass rounded-2xl p-8 text-center ${m.gold ? "border-accent/30 glow-green" : ""}`}>
                <div className="text-base text-muted-foreground mb-3 font-medium">{m.label}</div>
                <div className={`font-extrabold mb-2 ${m.gold ? "text-gradient-gold" : "text-foreground"}`} style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>{m.value}</div>
                <div className="text-base text-muted-foreground">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="glass rounded-2xl overflow-x-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-5 text-muted-foreground font-semibold text-base">Revenue Stream</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Conservative</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Realistic</th>
                  <th className="text-right p-5 text-muted-foreground font-semibold text-base">Upside</th>
                </tr>
              </thead>
              <tbody>
                {revenueStreams.map((r) => (
                  <tr key={r.name} className="border-b border-border/50">
                    <td className="p-5 text-foreground text-base font-medium">{r.name}</td>
                    <td className="p-5 text-right text-muted-foreground text-base">{r.conservative}</td>
                    <td className="p-5 text-right text-foreground text-base">{r.realistic}</td>
                    <td className="p-5 text-right text-primary font-bold text-base">{r.upside}</td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-5 font-bold text-foreground text-lg">Total Monthly</td>
                  <td className="p-5 text-right font-bold text-muted-foreground text-lg">$900</td>
                  <td className="p-5 text-right font-bold text-foreground text-lg">$2,000</td>
                  <td className="p-5 text-right font-bold text-primary text-lg">$3,200</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(ellipse, hsl(145 100% 45% / 0.4), transparent 70%)" }} />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="text-foreground mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }}>
              Ready to turn your courts into a revenue engine?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              Join the venues already launching with Courtana. Zero risk, full support, real results.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-10 py-6 text-lg font-bold glow-green gap-3">
                <Mail size={20} />
                Get Started
                <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-10 py-6 text-lg font-bold gap-3" asChild>
                <Link to="/dashboard">
                  <BarChart3 size={20} />
                  See the Dashboard
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-base">
                Learn more at courtana.com
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
