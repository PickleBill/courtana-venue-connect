import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "The Plan", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Dashboard", href: "/dashboard", icon: Lock },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5 ${
                location.pathname === l.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {l.label}
              {l.icon && <l.icon size={12} />}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
            Partner Login
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border px-4 pb-4 space-y-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary flex items-center gap-1.5"
            >
              {l.label}
              {l.icon && <l.icon size={12} />}
            </Link>
          ))}
          <Button variant="outline" size="sm" className="w-full border-primary/30 text-primary hover:bg-primary/10">
            Partner Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;