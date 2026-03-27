import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex flex-col items-center md:items-start gap-3">
        <a href="https://courtana.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.courtana.com/assets/logos/fulllogo-dark-transparent-grad.svg"
            alt="Courtana"
            className="h-7 w-auto"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </a>
        <p className="text-xs text-muted-foreground/60">© 2026 Courtana · Powered by Courtana Smart Court Technology</p>
      </div>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-primary transition-colors">The Plan</Link>
        <Link to="/events" className="hover:text-primary transition-colors">Events</Link>
        <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
      </div>
    </div>
  </footer>
);

export default Footer;