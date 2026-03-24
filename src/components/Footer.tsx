import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex flex-col items-center md:items-start gap-1">
        <p>© 2026 Courtana · <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">courtana.com</a></p>
        <a href="https://courtana.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground/60 hover:text-primary transition-colors">
          Powered by Courtana Smart Court Technology
        </a>
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