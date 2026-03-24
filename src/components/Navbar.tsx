import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const primaryLinks = [
  { label: "The Plan", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Discovery", href: "/discovery" },
];

const moreLinks = [
  { label: "Partners", href: "/partners" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex flex-col leading-tight">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-gradient-green">Courtana</span>{" "}
            <span className="text-foreground">Connect</span>
          </div>
          <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted-foreground hover:text-primary transition-colors -mt-0.5">
            by courtana.com
          </a>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {primaryLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              More
              <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass rounded-xl border border-border py-2 shadow-lg">
                {moreLinks.map((l) => (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setMoreOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-secondary/50 ${
                      location.pathname === l.href ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10" asChild>
            <Link to="/dashboard">Partner Login</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-1">
          {[...primaryLinks, ...moreLinks].map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10 mt-2" asChild>
            <Link to="/dashboard" onClick={() => setOpen(false)}>Partner Login</Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
