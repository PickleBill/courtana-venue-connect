import { useState } from "react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Lock, Activity, DollarSign, Users, Camera, ExternalLink, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const utilizationData = [
  { week: "Wk 1", courtana: 45, standard: 42 },
  { week: "Wk 2", courtana: 52, standard: 43 },
  { week: "Wk 3", courtana: 58, standard: 41 },
  { week: "Wk 4", courtana: 63, standard: 44 },
  { week: "Wk 5", courtana: 67, standard: 42 },
  { week: "Wk 6", courtana: 72, standard: 43 },
  { week: "Wk 7", courtana: 75, standard: 44 },
  { week: "Wk 8", courtana: 78, standard: 43 },
];

const revenueBySource = [
  { name: "Court Premium", value: 600 },
  { name: "Coaching", value: 1000 },
  { name: "Events", value: 500 },
  { name: "Walk-ins", value: 300 },
  { name: "AI Reviews", value: 250 },
];

const pilotEvents = [
  { name: "Grand Opening — Dinks & Drinks", date: "May 9", capacity: 200, registered: 0, revenue: "$0", status: "Upcoming" },
  { name: "Peak Spring Smash Tournament", date: "May 1–4", capacity: 300, registered: 0, revenue: "$0", status: "Registration Open" },
  { name: "Courtana Court Preview: Coaches Only", date: "Apr 14", capacity: 10, registered: 0, revenue: "$0", status: "Upcoming" },
  { name: "Open Play Happy Hour", date: "Apr 17+", capacity: 40, registered: 0, revenue: "$0", status: "Registration Open" },
  { name: "AI Coaching Clinic: Third Shot Mastery", date: "Apr 22", capacity: 16, registered: 0, revenue: "$0", status: "Registration Open" },
  { name: "Friday Night Lights: Live Broadcast", date: "May 16+", capacity: 32, registered: 0, revenue: "$0", status: "Upcoming" },
  { name: "Charity Round Robin", date: "May 17", capacity: 24, registered: 0, revenue: "$0", status: "Upcoming" },
];

const statusColors: Record<string, string> = {
  "Upcoming": "bg-amber-500/20 text-amber-400",
  "Registration Open": "bg-primary/20 text-primary",
  "Sold Out": "bg-red-500/20 text-red-400",
};

const Dashboard = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem("peak-dash") === "true");
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pw === "peak2026") {
      sessionStorage.setItem("peak-dash", "true");
      setAuthed(true);
    } else {
      setPwError(true);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-24 pb-20 px-4 flex items-center justify-center min-h-screen">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl p-10 max-w-sm w-full text-center">
            <Lock className="text-primary mx-auto mb-4" size={40} />
            <h2 className="text-xl font-bold text-foreground mb-2">Peak Pickleball — Pilot Dashboard</h2>
            <p className="text-sm text-muted-foreground mb-6">Enter your access code to view pilot data.</p>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Access code"
                value={pw}
                onChange={(e) => { setPw(e.target.value); setPwError(false); }}
                className={`bg-secondary border-border rounded-xl text-center ${pwError ? "border-destructive" : ""}`}
              />
              {pwError && <p className="text-xs text-destructive">Incorrect code. Try again.</p>}
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-bold">Enter</Button>
            </form>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-10">
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="section-title text-foreground">
                  Peak Pickleball — <span className="text-gradient-green">Pilot Dashboard</span>
                </h1>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 font-bold">Week 1 of 8</span>
                  <span className="text-sm text-muted-foreground">April 7 — June 1, 2026</span>
                </div>
              </div>
              <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-sm text-primary hover:bg-primary/20 transition-colors">
                <ExternalLink size={14} />
                Powered by courtana.com
              </a>
            </motion.div>
          </motion.div>

          {/* KPIs */}
          <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8" initial="hidden" animate="visible" variants={stagger}>
            {[
              { label: "Sessions Recorded", value: "0", icon: Camera, sub: "Pilot starts April 7" },
              { label: "Highlights Generated", value: "0", icon: Activity, sub: "Pilot starts April 7" },
              { label: "Event Revenue", value: "$0", icon: DollarSign, sub: "Pilot starts April 7", accent: true },
              { label: "Player Accounts", value: "0", icon: Users, sub: "Pilot starts April 7" },
            ].map((k) => (
              <motion.div key={k.label} variants={fadeInUp} className={`glass rounded-2xl p-5 ${k.accent ? "border-accent/30 glow-green" : ""}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold">{k.label}</span>
                  <k.icon size={16} className={k.accent ? "text-accent" : "text-primary"} />
                </div>
                <div className={`text-3xl font-extrabold ${k.accent ? "text-gradient-gold" : "text-foreground"}`}>{k.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{k.sub}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="font-bold text-foreground mb-1">Court Utilization</h3>
              <p className="text-xs text-muted-foreground mb-4">Courtana Courts vs Standard Courts (%)</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={utilizationData}>
                    <defs>
                      <linearGradient id="colorUtil" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(145, 100%, 45%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(145, 100%, 45%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                    <XAxis dataKey="week" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }} />
                    <Area type="monotone" dataKey="courtana" stroke="hsl(145, 100%, 45%)" fill="url(#colorUtil)" strokeWidth={2} name="Courtana Courts" />
                    <Area type="monotone" dataKey="standard" stroke="hsl(215, 16%, 47%)" fill="transparent" strokeWidth={1.5} strokeDasharray="4 4" name="Standard Courts" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="font-bold text-foreground mb-1">Revenue by Source</h3>
              <p className="text-xs text-muted-foreground mb-4">Projected monthly breakdown</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueBySource}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                    <XAxis dataKey="name" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 10 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}`} />
                    <Tooltip contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }} />
                    <Bar dataKey="value" fill="hsl(145, 100%, 45%)" radius={[6, 6, 0, 0]} name="Revenue" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Event Performance */}
          <motion.div className="glass rounded-2xl overflow-hidden mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="p-6 pb-0">
              <h3 className="font-bold text-foreground mb-1">Event Performance</h3>
              <p className="text-xs text-muted-foreground mb-4">All pilot events — registration and revenue tracking</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-semibold">Event</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold">Date</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Capacity</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Registered</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Revenue</th>
                    <th className="text-right p-4 text-muted-foreground font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pilotEvents.map((ev) => (
                    <tr key={ev.name} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 text-foreground font-medium">{ev.name}</td>
                      <td className="p-4 text-muted-foreground">{ev.date}</td>
                      <td className="p-4 text-right text-foreground">{ev.capacity}</td>
                      <td className="p-4 text-right text-foreground">{ev.registered}</td>
                      <td className="p-4 text-right text-primary font-semibold">{ev.revenue}</td>
                      <td className="p-4 text-right">
                        <span className={`text-xs px-3 py-1 rounded-full font-bold ${statusColors[ev.status] || ""}`}>{ev.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Pilot Scorecard */}
          <motion.div className="glass rounded-2xl p-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                <Target className="text-primary" size={20} />
                Pilot Scorecard
              </h3>
              <span className="text-xs px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 font-bold">Starting Soon</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { target: "15% utilization lift", current: "Measuring..." },
                { target: "$2,000/mo revenue lift", current: "Pilot in progress" },
                { target: "50+ player accounts", current: "0 accounts" },
              ].map((s) => (
                <div key={s.target} className="bg-secondary/50 rounded-xl p-5">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-2">Target</div>
                  <div className="text-base font-bold text-foreground mb-3">{s.target}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider font-bold mb-1">Current</div>
                  <div className="text-sm text-muted-foreground">{s.current}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;