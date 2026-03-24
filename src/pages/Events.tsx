import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, DollarSign, Search } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { events, categoryColors } from "@/data/events";

const categories = ["All", "Clinic", "Tournament", "Open Play", "Special"];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Events = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchCat = filter === "All" || e.category === filter;
      const matchSearch = e.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="section-title text-foreground mb-2">Upcoming at <span className="text-gradient-green">Peak</span></h1>
            <p className="text-muted-foreground mb-8">Browse events, book your spot, and get on the court.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex gap-2 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    filter === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input
                placeholder="Search events..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 bg-secondary border-border rounded-xl w-full sm:w-60"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {filtered.map((event) => {
              const soldOut = event.spots === 0;
              return (
                <motion.div key={event.id} variants={fadeInUp}>
                  <div className="glass rounded-2xl overflow-hidden glow-green-hover transition-all duration-300 hover:-translate-y-0.5 group">
                    {/* Image placeholder */}
                    <div className="relative h-44 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[event.category]}`}>
                        {event.category}
                      </span>
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm rounded-xl px-3 py-1.5 text-xs font-bold text-foreground">
                        {format(parseISO(event.date), "MMM d")}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{event.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {format(parseISO(event.date), "EEE, MMM d")}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {event.time.split("–")[0].trim()}</span>
                        <span className="flex items-center gap-1"><Users size={14} /> {soldOut ? "Full" : `${event.spots} spots`}</span>
                        <span className="flex items-center gap-1"><DollarSign size={14} /> {event.price === 0 ? "Free" : `$${event.price}`}</span>
                      </div>
                      {soldOut ? (
                        <Button disabled className="w-full rounded-xl">Sold Out</Button>
                      ) : (
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl" asChild>
                          <Link to={`/events/${event.id}`}>Book Now</Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No events found. Try a different filter.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
