import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera, Megaphone, Brain, Gamepad2, Users, Radio,
  ArrowRight, Mail, BarChart3, ExternalLink, Zap, MessageSquareQuote,
  ChevronDown, Handshake
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const stats = [
  { value: "6", label: "Smart Courts" },
  { value: "$0", label: "Upfront Cost" },
  { value: "8", label: "Week Pilot" },
  { value: "19", label: "Total Courts" },
];

const quotes = [
  "The biggest problem with tech tools is they lose novelty after a month. If you can keep them coming back — badges, highlights, leaderboards — that changes everything.",
  "I need to justify every dollar to an owner who invested $1.5 million in this facility.",
  "The biggest problem with tech tools is they lose novelty after a month. Gamification and badges — that's what keeps people coming back.",
  "If you can show me the numbers after the pilot, I'll expand to all 16 courts.",
];

const valueProps = [
  { icon: Camera, title: "Cameras on 6 Courts", desc: "10 cameras across 6 courts. Non-invasive install. Instant replay on court-side displays. Players see their highlights in real time." },
  { icon: Megaphone, title: "We Run Your Events", desc: "May 1 tournament? We put cameras on it. Grand opening? We live-broadcast it. Coaching clinics? We handle booking and payment." },
  { icon: Brain, title: "AI Coaching at $20–25", desc: "Your coaches' lessons, enhanced with AI video review. A new revenue tier between \"free advice\" and \"$80/hr lessons.\" 70% to coach, 20% to Peak, 10% to Courtana." },
  { icon: Gamepad2, title: "Gamification That Sticks", desc: "Badges, XP, leaderboards, trick shot recognition. The dopamine loop that makes players say \"one more game.\" This is how we beat the 1–2 month novelty dropoff." },
  { icon: Users, title: "Open Play, Solved", desc: "Real-time court displays showing who's playing, how many spots are open, skill levels on court. No more \"who's in?\" text chains. Players scan in and Courtana matches them." },
  { icon: Radio, title: "Live Broadcast to the Highway", desc: "Peak is 30 seconds from a Sheraton and visible from the highway. Live streams from championship courts turn cameras into a marketing billboard." },
];

const weeks = [
  {
    num: 1, dates: "April 7–13", title: "Install + Coach Preview", focus: "LAUNCH", color: "bg-purple-500/20 text-purple-400",
    desc: "Install 10 cameras across 6 courts. Configure displays. Run a private session for Chris and his 5 coaches — let them see AI analysis on their own games. Coaches become evangelists before players ever see it.",
    deliverables: [
      { text: "Hardware installed", link: null },
      { text: "Coach training session", link: "/events/coaches-preview" },
      { text: "Baseline metrics captured", link: "/dashboard" },
      { text: "Staff briefed", link: null },
    ],
  },
  {
    num: 2, dates: "April 14–20", title: "Courts Complete Celebration", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "All 16 pickleball courts finish April 15. Mark the moment with a \"Courts Complete\" open house on the 6 Courtana courts. Free play, live highlights on the big screens, player account sign-ups. First taste of the gamification system.",
    deliverables: [
      { text: "Open house event", link: "/events" },
      { text: "Player accounts created", link: "/dashboard" },
      { text: "First highlights generated", link: null },
      { text: "Social content captured", link: null },
    ],
  },
  {
    num: 3, dates: "April 21–27", title: "Coaching Clinic Series Launches", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "First paid coaching clinic on Courtana courts. Coach-led drills with AI analysis delivered to each player within 24 hours. $25–40/player, 16 spots. Test the AI coaching revenue model Chris was excited about.",
    deliverables: [
      { text: "Paid clinic ($400–640 revenue)", link: "/events/ai-coaching-clinic" },
      { text: "AI analysis reports", link: null },
      { text: "Coach feedback", link: "/discovery" },
      { text: "Revenue model validated", link: "/dashboard" },
    ],
  },
  {
    num: 4, dates: "April 28 – May 4", title: "TOURNAMENT WEEK — Spring Smash", focus: "EVENTS", color: "bg-amber-500/20 text-amber-400",
    desc: "May 1–4 tournament targeting 300 players. Courtana cameras live on 6 courts — every match recorded, highlights auto-generated, leaderboard running on displays. This is the showcase moment. Every player leaves with a highlight reel and a reason to come back.",
    deliverables: [
      { text: "300 players exposed to Courtana", link: "/events/spring-smash" },
      { text: "Highlight reels for all", link: null },
      { text: "Tournament leaderboard", link: "/dashboard" },
      { text: "Massive social content", link: null },
    ],
  },
  {
    num: 5, dates: "May 5–11", title: "GRAND OPENING — Dinks & Drinks", focus: "LAUNCH", color: "bg-purple-500/20 text-purple-400",
    desc: "May 9 grand opening with Chris Kelly. Live broadcast from championship courts. Courtana powers the on-screen experience — player stats, live leaderboard, instant replay on the big screens. Dinks & Drinks sponsored event. The facility's coming-out party, powered by smart court tech.",
    deliverables: [
      { text: "Grand opening event", link: "/events/grand-opening" },
      { text: "Live broadcast", link: null },
      { text: "Chris Kelly partnership content", link: null },
      { text: "Membership spike tracking", link: "/dashboard" },
    ],
  },
  {
    num: 6, dates: "May 12–18", title: "Gamification Goes Live", focus: "DATA", color: "bg-cyan-500/20 text-cyan-400",
    desc: "Full gamification rollout: badges, XP points, achievement system, trick shot recognition, weekly leaderboard. This is the retention play — the thing that beats the \"novelty wears off after a month\" problem Chris identified. Players start earning status.",
    deliverables: [
      { text: "Gamification system live", link: null },
      { text: "Badge engagement tracking", link: "/dashboard" },
      { text: "Leaderboard competition", link: null },
      { text: "Repeat visit data", link: "/dashboard" },
    ],
  },
  {
    num: 7, dates: "May 19–25", title: "Matchmaking + Open Play Optimization", focus: "GROWTH", color: "bg-primary/20 text-primary",
    desc: "Turn on skill-based matchmaking and the open play display system. Real-time court status on screens — who's playing, skill level, spots open. \"Find Your Fourth\" feature goes live. Guest fees for non-members who come in through Courtana. Hotel guests from the Sheraton start discovering Peak through the live broadcast.",
    deliverables: [
      { text: "Matchmaking active", link: null },
      { text: "Open play displays", link: "/schedule" },
      { text: "Guest fee revenue", link: "/dashboard" },
      { text: "Walk-in attribution", link: "/discovery" },
    ],
  },
  {
    num: 8, dates: "May 26 – June 1", title: "The Numbers", focus: "REVIEW", color: "bg-red-500/20 text-red-400",
    desc: "End-of-pilot ROI review with Chris and the owner. Hard numbers: court utilization lift, revenue from events and AI coaching, player engagement metrics, highlights generated, new player accounts. The question isn't \"should we keep this?\" — it's \"how fast can we expand to all 16 courts?\"",
    deliverables: [
      { text: "ROI dashboard presentation", link: "/dashboard" },
      { text: "Expansion proposal", link: null },
      { text: "16-court timeline", link: null },
      { text: "Contract finalization", link: null },
    ],
  },
];

const revenueStreams = [
  { name: "Premium court pricing ($25→$30/hr on 6 courts)", conservative: "$450", realistic: "$900", upside: "$1,350" },
  { name: "AI coaching reviews (5 coaches × $25 sessions)", conservative: "$500", realistic: "$1,000", upside: "$1,500" },
  { name: "Tournament/event revenue share", conservative: "$200", realistic: "$500", upside: "$800" },
  { name: "Walk-in/guest fees (Sheraton + highway visibility)", conservative: "$100", realistic: "$300", upside: "$500" },
  { name: "Open play optimization (reduced no-shows, better fill)", conservative: "$100", realistic: "$250", upside: "$400" },
];

const Landing = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20" style={{ background: "radial-gradient(ellipse, hsl(145 100% 45% / 0.3), transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(48 100% 50% / 0.3), transparent 70%)" }} />
        </div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-base font-semibold text-primary tracking-wide">Live Partnership Portal</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-foreground mb-6" style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Courtana × <span className="text-gradient-green">Peak Pickleball</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Smart courts. Real data. Zero upfront cost. Your 8-week pilot starts April 7.
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
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="glass rounded-2xl p-6 text-center glow-green">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-green mb-2">{s.value}</div>
                <div className="text-base text-muted-foreground font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Heard */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
              <MessageSquareQuote className="text-primary" size={28} />
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">What We Heard</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {quotes.map((q, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass rounded-2xl p-6 border-l-4 border-l-primary">
                  <p className="text-foreground text-base leading-relaxed italic">"{q}"</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground">
              From our conversation with <span className="text-foreground font-semibold">Chris Kepko</span>, Head Pro & GM
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Built for Peak
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Every feature designed around your facility, your coaches, and your players.
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
      <section id="plan" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The 8-Week Playbook
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            April 7 – June 1, 2026. Each week builds on the last. By week 8, you'll have hard data on ROI.
          </motion.p>
          <motion.div className="space-y-4 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border hidden md:block" />
            {weeks.map((w) => {
              const isOpen = expandedWeek === w.num;
              return (
                <motion.div key={w.num} variants={fadeInUp} className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-base flex-shrink-0 z-10">
                      {w.num}
                    </div>
                  </div>
                  <div
                    className={`glass rounded-2xl flex-1 transition-all duration-300 cursor-pointer ${isOpen ? "ring-1 ring-primary/30" : "glow-green-hover hover:-translate-y-0.5"}`}
                    onClick={() => setExpandedWeek(isOpen ? null : w.num)}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="md:hidden w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                          {w.num}
                        </span>
                        <h3 className="text-lg font-bold text-foreground flex-1">{w.title}</h3>
                        <span className={`text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider ${w.color}`}>{w.focus}</span>
                        <ChevronDown size={18} className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                      <p className="text-xs text-muted-foreground mb-2 font-medium">{w.dates}</p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-base text-muted-foreground mb-5 leading-relaxed">{w.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {w.deliverables.map((d) =>
                                d.link ? (
                                  <Link
                                    key={d.text}
                                    to={d.link}
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium hover:bg-primary/20 transition-colors"
                                  >
                                    {d.text} →
                                  </Link>
                                ) : (
                                  <span key={d.text} className="text-sm px-4 py-1.5 rounded-full bg-secondary text-muted-foreground font-medium">
                                    {d.text}
                                  </span>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isOpen && (
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{w.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Economics */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="text-foreground text-center mb-14 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The Economics
          </motion.h2>
          <motion.div className="grid md:grid-cols-3 gap-8 mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { label: "Peak's Investment During Pilot", value: "$0", sub: "Hardware, software, events support, marketing — all on us for 8 weeks." },
              { label: "Post-Pilot Subscription", value: "$95/court/mo", sub: "Only if you decide to continue. 6 courts = $570/mo. One coaching clinic covers it." },
              { label: "Projected Revenue Lift", value: "$2,000–4,500/mo", sub: "From premium court pricing, coaching, events, and walk-ins combined.", gold: true },
            ].map((m) => (
              <motion.div key={m.label} variants={fadeInUp} className={`glass rounded-2xl p-8 text-center ${m.gold ? "border-accent/30 glow-green" : ""}`}>
                <div className="text-sm text-muted-foreground mb-3 font-medium">{m.label}</div>
                <div className={`font-extrabold mb-3 ${m.gold ? "text-gradient-gold" : "text-foreground"}`} style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>{m.value}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{m.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="glass rounded-2xl overflow-x-auto mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
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
                    <td className="p-5 text-foreground text-sm font-medium">{r.name}</td>
                    <td className="p-5 text-right text-muted-foreground text-base">{r.conservative}</td>
                    <td className="p-5 text-right text-foreground text-base">{r.realistic}</td>
                    <td className="p-5 text-right text-primary font-bold text-base">{r.upside}</td>
                  </tr>
                ))}
                <tr className="bg-primary/5">
                  <td className="p-5 font-bold text-foreground text-lg">Total Monthly</td>
                  <td className="p-5 text-right font-bold text-muted-foreground text-lg">$1,350</td>
                  <td className="p-5 text-right font-bold text-foreground text-lg">$2,950</td>
                  <td className="p-5 text-right font-bold text-primary text-lg">$4,550</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Zero Risk Box */}
          <motion.div className="glass rounded-2xl p-8 border-primary/20 glow-green" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
              <Zap className="text-primary" size={22} />
              Zero Risk
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Start with 6 courts. Zero hardware cost. No subscription during the 8-week pilot. After that, $570/month — your first AI coaching clinic makes that back in a single session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Commitments */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Partnership Commitments
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            What each side brings to the table.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 gap-8 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* Courtana Invests */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Handshake className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">What Courtana Invests</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Hardware for 6 smart courts — shipped, configured, $0 to Peak",
                  "Full platform access — AI analysis, highlights, gamification, player app",
                  "Co-promotion of Peak events through the Courtana network",
                  "Social content creation during pilot",
                  "Weekly performance dashboard with real-time data",
                  "Dedicated partner contact — Bill and David, direct line",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Peak Invests */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">What Peak Invests</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Your team installs cameras (we ship, you mount, we configure remotely)",
                  "1-hour coaching staff session — all 5 coaches, Week 1",
                  "One launch email to your 250 members (we draft it)",
                  "\"Powered by Courtana\" signage + May 9 marketing mention",
                  "Bi-weekly product feedback — what's working, what isn't",
                  "Coaches test new features and give structured feedback",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="text-base text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.p className="text-center text-muted-foreground italic text-base max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            "This is a development partnership, not a software purchase. We invest together. We build together. We win together."
          </motion.p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="text-foreground text-center mb-4 font-extrabold" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", lineHeight: 1.15 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The Path Forward
          </motion.h2>
          <motion.p className="text-lg text-muted-foreground text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            A clear progression from pilot to partnership.
          </motion.p>
          <motion.div className="grid md:grid-cols-3 gap-0 md:gap-0 relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px bg-border -translate-y-1/2 z-0" />

            {[
              {
                num: 1,
                badge: "8 WEEKS",
                title: "The Pilot",
                desc: "6 smart courts. Real events. Real data. We fund the hardware and platform. You bring the facility and the community. At Week 8, the numbers tell the story.",
              },
              {
                num: 2,
                badge: "WEEK 8",
                title: "The Decision",
                desc: "We review success metrics together — court utilization, player engagement, platform revenue. If the data says go, we expand. If not, we pull the hardware and part as friends. Commit before Week 6 and your first 2 months of subscription are free.",
              },
              {
                num: 3,
                badge: "ONGOING",
                title: "The Partnership",
                desc: "Expand to more courts. Revenue shifts to Peak. New features ship to you first. Your feedback shapes the product. Your network grows the ecosystem. Peak becomes the facility everyone else measures against.",
              },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeInUp} className="relative z-10 p-4">
                <div className="glass rounded-2xl p-8 text-center h-full flex flex-col">
                  <div className="inline-flex items-center justify-center mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider border border-primary/20">
                      {step.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-lg mx-auto mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
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
              Ready to build something worth talking about?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
              April 7 is right around the corner. Let's lock in the install date.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-bold glow-green gap-3" asChild>
                <a href="mailto:bill@courtana.com?subject=Peak%20Pickleball%20Partnership">
                  <Mail size={20} />
                  Start the Conversation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary rounded-xl px-8 py-6 text-lg font-bold gap-3" asChild>
                <Link to="/dashboard">
                  <BarChart3 size={20} />
                  View the Dashboard
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
