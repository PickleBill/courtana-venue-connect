import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play, Brain, Trophy, Send, Loader2, CheckCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const techCards = [
  { icon: Camera, title: "Smart Cameras", desc: "High-definition cameras capture every shot from multiple angles. No wearables, no setup — just play." },
  { icon: Play, title: "Instant Replay", desc: "Review any point on your phone seconds after it happens. Share highlights with friends instantly." },
  { icon: Brain, title: "AI Analysis", desc: "Our AI tracks shot placement, spin, speed, and patterns. Get actionable insights that improve your game." },
  { icon: Trophy, title: "Gamification", desc: "Earn badges, climb leaderboards, and complete challenges. Turn every session into a reason to come back." },
];

const About = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast({ title: "Message sent!" });
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* About Cortana */}
      <section className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp}>
                <span className="label-text text-primary mb-4 block">About Cortana</span>
                <h1 className="section-title text-foreground mb-6">Smart courts. Smarter business.</h1>
              </motion.div>
              <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground">
                <p>
                  Cortana is a sports technology company that turns ordinary courts into intelligent playing environments.
                  Our camera-based system captures every shot, analyzes patterns with AI, and delivers insights that help
                  players improve and venues grow.
                </p>
                <p>
                  We believe technology should be invisible. No wearables, no apps to fumble with during play, no complicated setup.
                  Just show up, play, and let the court do the rest.
                </p>
                <p>
                  For venues, Cortana is a revenue multiplier. Our event programming, gamification features, and data-driven
                  insights drive court utilization, player retention, and new revenue streams that didn't exist before.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl h-80 flex items-center justify-center"
            >
              <div className="text-center text-muted-foreground">
                <Camera size={48} className="mx-auto mb-4 text-primary/50" />
                <p className="text-sm">Facility photo coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="section-title text-foreground text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The Technology
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {techCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="glass rounded-2xl p-6 text-center glow-green-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <card.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-foreground text-center mb-4">
              Get in Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-8">
              Interested in bringing Cortana to your venue? Drop us a line.
            </motion.p>

            {submitted ? (
              <motion.div variants={fadeInUp} className="glass rounded-2xl p-8 text-center">
                <CheckCircle className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-foreground mb-2">Thanks!</h3>
                <p className="text-muted-foreground">We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form variants={fadeInUp} onSubmit={handleSubmit} className="glass rounded-2xl p-6 space-y-4">
                <div>
                  <Label>Name</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-secondary border-border rounded-xl mt-1"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-secondary border-border rounded-xl mt-1"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <Label>Message</Label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-secondary border-border rounded-xl mt-1 min-h-[120px]"
                    placeholder="Tell us about your venue..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                  disabled={submitting}
                >
                  {submitting ? <Loader2 className="animate-spin mr-2" size={18} /> : <Send size={18} className="mr-2" />}
                  Send Message
                </Button>
              </motion.form>
            )}

            <div className="text-center mt-8 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2"><Mail size={14} /> bill@courtana.com</p>
              <p>courtana.com</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
