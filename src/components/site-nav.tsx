import { Link } from "@tanstack/react-router";

const linkClass =
  "hover:text-game-yellow transition-colors";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="size-8 bg-gradient-to-tr from-game-red via-game-yellow to-game-green rounded-sm" />
          <span className="font-display text-2xl tracking-wider">NEWCOLORGAME</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/" className={linkClass} activeProps={{ className: "text-game-yellow" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/gallery" className={linkClass} activeProps={{ className: "text-game-yellow" }}>
            Gallery
          </Link>
          <Link to="/contact" className={linkClass} activeProps={{ className: "text-game-yellow" }}>
            Contact
          </Link>
        </div>
        <a
          href="https://wa.me/2348079088854"
          className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-game-yellow transition-all"
        >
          Buy Now
        </a>
      </div>
    </nav>
  );
}