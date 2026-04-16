import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Camera, Megaphone, Brain, Gamepad2, Users, Radio,
  ArrowRight, Mail, BarChart3, ExternalLink, Zap, MessageSquareQuote,
  ChevronDown, Handshake, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: "16", label: "Smart Courts" },
  { value: "$0", label: "To Peak" },
  { value: "19", label: "Total Courts" },
  { value: "May 9", label: "Grand Opening" },
];

const quotes = [
  "The biggest problem with tech tools is they lose novelty after a month. If you can keep them coming back — badges, highlights, leaderboards — that changes everything.",
  "I need to justify every dollar to an owner who invested $1.5 million in this facility.",
  "If you can show me the numbers after the pilot, I'll expand to all 16 courts.",
  "Gamification and badges — that's what keeps people coming back.",
];

const valueProps = [
  { icon: Camera, title: "Cameras on All 16 Courts", desc: "Every pickleball court covered. Non-invasive install. Instant replay on court-side displays. Every player sees their highlights in real time — not just the 'special' courts." },
  { icon: Megaphone, title: "We Run Your Events", desc: "May 1 tournament? We put cameras on it. Grand opening? We live-broadcast it. Coaching clinics? We handle booking and payment." },
  { icon: Brain, title: "AI Coaching at $20–25", desc: "Your coaches' lessons, enhanced with AI video review. A new revenue tier between \"free advice\" and \"$80/hr lessons.\" Coaches keep 70%, facility keeps the rest." },
  { icon: Gamepad2, title: "Gamification That Sticks", desc: "Badges, XP, leaderboards, trick shot recognition. The dopamine loop that makes players say \"one more game.\" This is how we beat the 1–2 month novelty dropoff." },
  { icon: Users, title: "Open Play, Solved", desc: "Real-time court displays showing who's playing, how many spots are open, skill levels on court. No more \"who's in?\" text chains. Players scan in and Courtana matches them." },
  { icon: Radio, title: "Live Broadcast to the Highway", desc: "Peak is 30 seconds from a Sheraton and visible from the highway. Live streams from championship courts turn cameras into a marketing billboard." },
];

const weeks = [
  {
    num: 1, dates: "April 7–13", title: "Install + Coach Preview", focus: "LAUNCH", color: "bg-[#BD93F9]/20 text-[#BD93F9]",
    desc: "Install cameras across all 16 courts. Configure displays. Run a private session for Chris and his 5 coaches — let them see AI analysis on their own games. Coaches become evangelists before players ever see it.",
  },
  {
    num: 2, dates: "April 14–20", title: "Courts Complete Celebration", focus: "EVENTS", color: "bg-[#FFB86C]/20 text-[#FFB86C]",
    desc: "All 16 pickleball courts finish April 15. Mark the moment with a \"Courts Complete\" open house — all courts are smart courts from day one. Free play, live highlights on the big screens, player account sign-ups.",
  },
  {
    num: 3, dates: "April 21–27", title: "Coaching Clinic Series Launches", focus: "EVENTS", color: "bg-[#FFB86C]/20 text-[#FFB86C]",
    desc: "First paid coaching clinic on Courtana courts. Coach-led drills with AI analysis delivered to each player within 24 hours. $25–40/player, 16 spots. Test the AI coaching revenue model Chris was excited about.",
  },
  {
    num: 4, dates: "April 28 – May 4", title: "TOURNAMENT WEEK — Spring Smash", focus: "EVENTS", color: "bg-[#FFB86C]/20 text-[#FFB86C]",
    desc: "May 1–4 tournament targeting 300 players. Courtana cameras live on ALL 16 courts — every match recorded, highlights auto-generated, leaderboard running on displays. Every player leaves with a highlight reel and a reason to come back.",
  },
  {
    num: 5, dates: "May 5–11", title: "GRAND OPENING — Dinks & Drinks", focus: "LAUNCH", color: "bg-[#BD93F9]/20 text-[#BD93F9]",
    desc: "May 9 grand opening. Live broadcast from championship courts. Courtana powers the on-screen experience — player stats, live leaderboard, instant replay on the big screens. The facility's coming-out party, powered by smart court tech on every court.",
  },
  {
    num: 6, dates: "May 12–18", title: "Gamification Goes Live", focus: "DATA", color: "bg-[#6EEFC0]/20 text-[#6EEFC0]",
    desc: "Full gamification rollout: badges, XP points, achievement system, trick shot recognition, weekly leaderboard. This is the retention play — the thing that beats the \"novelty wears off after a month\" problem Chris identified.",
  },
  {
    num: 7, dates: "May 19–25", title: "Matchmaking + Open Play Optimization", focus: "GROWTH", color: "bg-[#6BA3FF]/20 text-[#6BA3FF]",
    desc: "Skill-based matchmaking and open play display system live on all 16 courts. Real-time court status on screens. \"Find Your Fourth\" feature goes live. Hotel guests from the Sheraton start discovering Peak through the live broadcast.",
  },
  {
    num: 8, dates: "May 26 – June 1", title: "The Numbers", focus: "REVIEW", color: "bg-[#FF6B6B]/20 text-[#FF6B6B]",
    desc: "End-of-pilot ROI review with Chris and the owner. Hard numbers: court utilization, player engagement, highlights generated, coaching revenue, new player accounts. The data speaks for itself.",
  },
];

const Landing = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#08080C" }}>
      <Navbar />

      {/* Noise texture overlay — V32 atmosphere */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ opacity: 0.04 }}>
        <filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/></filter>
        <rect width="100%" height="100%" filter="url(#n)"/>
      </svg>

      {/* Ambient blobs — V32 atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(110,239,192,0.04), transparent 70%)", animation: "72s ease-in-out infinite alternate", filter: "blur(120px)" }} />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(107,163,255,0.03), transparent 70%)", animation: "78s ease-in-out infinite alternate-reverse", filter: "blur(120px)" }} />
        <div className="absolute top-2/3 left-1/2 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(255,184,108,0.03), transparent 70%)", animation: "86s ease-in-out infinite alternate", filter: "blur(120px)" }} />
      </div>

      {/* Hero */}
      <section className="relative pt-36 pb-28 px-4 overflow-hidden z-10">
        <div className="container mx-auto text-center max-w-5xl relative">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6EEFC0] animate-pulse" />
              <span className="eyebrow" style={{ color: "#6EEFC0", letterSpacing: "0.2em" }}>Live Partnership Portal</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="t1 mb-6 h-hero">
              All 16 courts.{" "}
              <span className="text-gradient-int">Zero cost to you.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl t3 max-w-3xl mx-auto mb-12 leading-relaxed">
              We outfit your entire facility with smart court tech. You pay nothing. We take the tech revenue. You keep everything else.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button size="lg" className="bg-[#6EEFC0] text-[#08080C] hover:bg-[#6EEFC0]/90 rounded-full px-10 py-6 text-lg font-bold glow-int" asChild>
                <a href="#plan">
                  See the Plan
                  <ArrowRight size={20} className="ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 t2 hover:bg-white/5 rounded-full px-10 py-6 text-lg font-bold" asChild>
                <Link to="/events">Browse Events</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-white/5 relative z-10" style={{ backgroundColor: "rgba(14,14,20,0.6)" }}>
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {stats.map((s) => (
              <motion.div key={s.label} variants={fadeInUp} className="glass rounded-2xl p-6 text-center glow-int">
                <div className="text-4xl md:text-5xl font-extrabold text-gradient-int mb-2 font-data">{s.value}</div>
                <div className="text-base t4 font-medium">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Heard */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-10">
              <MessageSquareQuote className="text-[#6EEFC0]" size={28} />
              <h2 className="h-section t1">What We Heard</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {quotes.map((q, i) => (
                <motion.div key={i} variants={fadeInUp} className="glass rounded-2xl p-6 border-l-4 border-l-[#6EEFC0]">
                  <p className="t2 text-base leading-relaxed italic">"{q}"</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeInUp} className="text-sm t5">
              From our conversation with <span className="t1 font-semibold">Chris Kepko</span>, Head Pro & GM
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* Value Props */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.h2 className="t1 text-center mb-4 h-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Built for <span className="text-gradient-venue">Peak</span>
          </motion.h2>
          <motion.p className="text-lg t3 text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Every feature designed around your facility, your coaches, and your players.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {valueProps.map((v) => (
              <motion.div key={v.title} variants={fadeInUp} className="glass rounded-2xl p-8 glow-int-hover transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(110,239,192,0.08)" }}>
                  <v.icon className="text-[#6EEFC0]" size={28} />
                </div>
                <h3 className="h-card t1 mb-3">{v.title}</h3>
                <p className="text-base t3 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8-Week Timeline */}
      <section id="plan" className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 className="t1 text-center mb-4 h-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The 8-Week Playbook
          </motion.h2>
          <motion.p className="text-lg t3 text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            April 7 – June 1, 2026. Each week builds on the last. By week 8, the data speaks for itself.
          </motion.p>
          <motion.div className="space-y-4 relative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <div className="absolute left-7 top-0 bottom-0 w-px hidden md:block" style={{ background: "rgba(255,255,255,0.05)" }} />
            {weeks.map((w) => {
              const isOpen = expandedWeek === w.num;
              return (
                <motion.div key={w.num} variants={fadeInUp} className="flex gap-6">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center font-bold font-data text-base flex-shrink-0 z-10" style={{ background: "rgba(110,239,192,0.06)", border: "1px solid rgba(110,239,192,0.15)", color: "#6EEFC0" }}>
                      {w.num}
                    </div>
                  </div>
                  <div
                    className={`glass rounded-2xl flex-1 transition-all duration-300 cursor-pointer ${isOpen ? "ring-1 ring-[#6EEFC0]/20" : "glow-int-hover hover:-translate-y-0.5"}`}
                    onClick={() => setExpandedWeek(isOpen ? null : w.num)}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="md:hidden w-10 h-10 rounded-full flex items-center justify-center font-bold font-data text-sm flex-shrink-0" style={{ background: "rgba(110,239,192,0.06)", border: "1px solid rgba(110,239,192,0.15)", color: "#6EEFC0" }}>
                          {w.num}
                        </span>
                        <h3 className="text-lg font-bold t1 flex-1">{w.title}</h3>
                        <span className={`eyebrow px-3 py-1 rounded-full font-bold ${w.color}`} style={{ fontSize: "0.7rem" }}>{w.focus}</span>
                        <ChevronDown size={18} className="t4 transition-transform" style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
                      </div>
                      <p className="text-xs t5 mb-2 font-data">{w.dates}</p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="text-base t3 mb-5 leading-relaxed">{w.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {!isOpen && (
                        <p className="text-sm t4 mt-1 line-clamp-2">{w.desc}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <div className="divider" />

      {/* The Bet We're Making (replaces old Economics) */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="t1 text-center mb-4 h-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The Bet <span className="text-gradient-revenue">We're Making</span>
          </motion.h2>
          <motion.p className="text-lg t3 text-center mb-14 max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            We're putting 16 cameras, a full software platform, and our team's time into Peak — before you spend a dollar.
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 text-center glow-int">
              <div className="eyebrow mb-3" style={{ color: "#6EEFC0" }}>Courtana's Investment</div>
              <div className="text-gradient-int font-extrabold font-data mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>$8,000+</div>
              <div className="t4 text-sm leading-relaxed">Hardware, software, events, marketing, support — all before Peak writes a check.</div>
            </motion.div>
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 text-center glow-venue">
              <div className="eyebrow mb-3" style={{ color: "#FFB86C" }}>Peak's Investment</div>
              <div className="text-gradient-venue font-extrabold font-data mb-3" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}>$0</div>
              <div className="t4 text-sm leading-relaxed">Your team's time to install + promote. That's it. No subscription. No split negotiation. No risk.</div>
            </motion.div>
          </motion.div>

          <motion.div className="glass rounded-2xl p-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={{ borderColor: "rgba(110,239,192,0.1)" }}>
            <p className="t2 text-lg leading-relaxed max-w-3xl mx-auto">
              During the pilot, Courtana earns from the platform it built — highlights, coaching sessions, events.
              Peak earns from the facility it built — memberships, court rentals, lessons.{" "}
              <span className="t1 font-bold">No overlap. No negotiation.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Commitments */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="t1 text-center mb-4 h-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            Partnership Commitments
          </motion.h2>
          <motion.p className="text-lg t3 text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            What each side brings to the table.
          </motion.p>
          <motion.div className="grid md:grid-cols-2 gap-8 mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* Courtana Invests */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-[#6EEFC0]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(110,239,192,0.08)" }}>
                  <Handshake className="text-[#6EEFC0]" size={24} />
                </div>
                <h3 className="h-card t1">What Courtana Puts In</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Hardware for all 16 courts — shipped, configured, $0 to Peak",
                  "Full platform: highlights, AI coaching, gamification, open play matching",
                  "Co-promotion of every Peak event through the Courtana ecosystem",
                  "Dedicated partner contact — Bill and David, direct line",
                  "Weekly dashboard: every number, transparently",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ background: "#6EEFC0" }} />
                    <span className="text-base t3 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Peak Invests */}
            <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 border-l-4 border-l-[#FFB86C]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,184,108,0.08)" }}>
                  <Users className="text-[#FFB86C]" size={24} />
                </div>
                <h3 className="h-card t1">What Peak Puts In</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Team installs cameras (we ship, you mount, we configure remotely)",
                  "1-hour coaching staff session — all 5 coaches, Week 1",
                  "One launch email to members (we draft it)",
                  "\"Powered by Courtana\" on smart courts + May 9 marketing",
                  "Honest feedback every two weeks",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ background: "#FFB86C" }} />
                    <span className="text-base t3 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.p className="text-center t4 italic text-base max-w-2xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            "This is a development partnership, not a software purchase. We invest together. We build together. We win together."
          </motion.p>
        </div>
      </section>

      <div className="divider" />

      {/* What Happens Next */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 className="t1 text-center mb-4 h-section" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            The Path Forward
          </motion.h2>
          <motion.p className="text-lg t3 text-center mb-14 max-w-xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            A clear progression from pilot to partnership.
          </motion.p>
          <motion.div className="grid md:grid-cols-3 gap-0 md:gap-0 relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-px -translate-y-1/2 z-0" style={{ background: "rgba(255,255,255,0.05)" }} />

            {[
              {
                num: 1,
                badge: "8 WEEKS",
                title: "The Pilot",
                desc: "All 16 courts. Real events. Real data. We fund everything. You bring the facility and the community. At Week 8, the numbers tell the story.",
                accent: "#6EEFC0",
              },
              {
                num: 2,
                badge: "WEEK 8",
                title: "The Review",
                desc: "We look at the data together — court utilization, player engagement, revenue generated. If it works, we talk long-term. If not, we pull the hardware and part as friends.",
                accent: "#6BA3FF",
              },
              {
                num: 3,
                badge: "ONGOING",
                title: "The Partnership",
                desc: "New features ship to you first. Your feedback shapes the product. Your network grows the ecosystem. Peak becomes the facility everyone else measures against.",
                accent: "#FFB86C",
              },
            ].map((step) => (
              <motion.div key={step.num} variants={fadeInUp} className="relative z-10 p-4">
                <div className="glass rounded-2xl p-8 text-center h-full flex flex-col">
                  <div className="inline-flex items-center justify-center mb-4">
                    <span className="eyebrow px-3 py-1 rounded-full font-bold" style={{ background: `${step.accent}15`, color: step.accent, border: `1px solid ${step.accent}25` }}>
                      {step.badge}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold font-data text-lg mx-auto mb-4" style={{ background: `${step.accent}10`, border: `1px solid ${step.accent}20`, color: step.accent }}>
                    {step.num}
                  </div>
                  <h3 className="h-card t1 mb-4">{step.title}</h3>
                  <p className="text-base t3 leading-relaxed flex-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full" style={{ background: "radial-gradient(ellipse, rgba(110,239,192,0.08), transparent 70%)" }} />
        </div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeInUp} className="t1 mb-4 h-section">
              All 16 courts.{" "}
              <span className="text-gradient-int">One yes.</span>{" "}
              We handle the rest.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg t3 mb-10 max-w-xl mx-auto">
              The pilot starts the moment you say go. Hardware installed in days. First event within the week.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-[#6EEFC0] text-[#08080C] hover:bg-[#6EEFC0]/90 rounded-full px-8 py-6 text-lg font-bold glow-int gap-3" asChild>
                <a href="mailto:bill@courtana.com?subject=Peak%20Partnership%20—%20Let%27s%20Go">
                  <Mail size={20} />
                  Lock in the install date
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 t2 hover:bg-white/5 rounded-full px-8 py-6 text-lg font-bold gap-3" asChild>
                <Link to="/dashboard">
                  <BarChart3 size={20} />
                  View the Dashboard
                </Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeInUp} className="mt-8">
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 t5 hover:text-[#6EEFC0] transition-colors text-base">
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
