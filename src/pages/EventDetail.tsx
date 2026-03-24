import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, Users, Shield, Check, Copy, Share2, ArrowLeft, Loader2 } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getEventById, categoryColors } from "@/data/events";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = getEventById(id || "");
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", spots: "1", promo: "" });

  if (!event) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event not found</h1>
          <Button asChild><Link to="/events">Back to Events</Link></Button>
        </div>
      </div>
    );
  }

  const totalPrice = event.price * parseInt(form.spots);

  const handleBook = () => {
    if (!form.name || !form.email) {
      toast({ title: "Please fill in your name and email", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({ title: "Link copied!" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero banner */}
      <div className="pt-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 py-12">
          <Link to="/events" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Events
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[event.category]} mb-4 inline-block`}>
              {event.category}
            </span>
            <h1 className="hero-title text-foreground mb-4">{event.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> {format(parseISO(event.date), "EEEE, MMMM d, yyyy")}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {event.time}</span>
              <span className="flex items-center gap-2"><MapPin size={16} /> Peak Pickleball</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">About This Event</h2>
              <div className="space-y-4 text-muted-foreground">
                {event.longDescription.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">What's Included</h2>
              <ul className="space-y-2">
                {event.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Format</h2>
              <p className="text-muted-foreground">{event.format}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Who It's For</h2>
              <p className="text-muted-foreground">{event.whoItsFor}</p>
            </div>

            {/* Share */}
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-foreground mb-3">Invite your crew</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="rounded-xl gap-2" onClick={copyLink}>
                  <Copy size={14} /> Copy Link
                </Button>
                <Button variant="outline" size="sm" className="rounded-xl gap-2" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(event.title)}&url=${encodeURIComponent(window.location.href)}`)}>
                  <Share2 size={14} /> Share
                </Button>
              </div>
            </div>
          </div>

          {/* Right — Booking card */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 lg:sticky lg:top-24">
              <div className="text-3xl font-extrabold text-foreground mb-1">
                {event.price === 0 ? "Free" : `$${event.price}`}
                {event.price > 0 && <span className="text-base font-normal text-muted-foreground"> / person</span>}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Users size={14} />
                <span>{event.spots} of {event.spotsTotal} spots remaining</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                <Calendar size={14} className="inline mr-1" /> {format(parseISO(event.date), "EEE, MMM d")} · {event.time}
              </div>
              <Button
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl mt-4"
                onClick={() => setShowModal(true)}
              >
                Book Your Spot
              </Button>
              <div className="flex items-center gap-2 justify-center mt-4 text-xs text-muted-foreground">
                <Shield size={12} /> Secure checkout powered by Stripe
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => { setShowModal(false); setSuccess(false); }} />
            <motion.div
              className="glass rounded-2xl p-6 w-full max-w-md relative z-10"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              {success ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                  >
                    <Check className="text-primary" size={32} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-2">You're in!</h3>
                  <p className="text-muted-foreground mb-6">Check your email for details and a calendar invite.</p>
                  <Button onClick={() => { setShowModal(false); setSuccess(false); }} className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
                    Done
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-foreground mb-6">Book: {event.title}</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Name *</Label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-secondary border-border rounded-xl mt-1"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-secondary border-border rounded-xl mt-1"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <Label>Phone (optional)</Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="bg-secondary border-border rounded-xl mt-1"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label>Number of Spots</Label>
                      <Select value={form.spots} onValueChange={(v) => setForm({ ...form, spots: v })}>
                        <SelectTrigger className="bg-secondary border-border rounded-xl mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((n) => (
                            <SelectItem key={n} value={String(n)}>{n}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Promo Code</Label>
                      <Input
                        value={form.promo}
                        onChange={(e) => setForm({ ...form, promo: e.target.value })}
                        className="bg-secondary border-border rounded-xl mt-1"
                        placeholder="Optional"
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl"
                      onClick={handleBook}
                      disabled={loading}
                    >
                      {loading ? <Loader2 className="animate-spin mr-2" size={18} /> : null}
                      {event.price === 0 ? "Register (Free)" : `Pay $${totalPrice}`}
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default EventDetail;
