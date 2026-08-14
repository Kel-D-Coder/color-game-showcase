import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const linkClass = "hover:text-game-yellow transition-colors";

const links: { to: "/" | "/gallery" | "/contact"; label: string; exact: boolean }[] = [
  { to: "/", label: "Home", exact: true },
  { to: "/gallery", label: "Gallery", exact: false },
  { to: "/contact", label: "Contact", exact: false },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <motion.div
            className="size-8 bg-gradient-to-tr from-game-red via-game-yellow to-game-green rounded-sm"
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-display text-2xl tracking-wider">NEWCOLORGAME</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={linkClass}
              activeProps={{ className: "text-game-yellow" }}
              activeOptions={{ exact: link.exact }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/2348079088854"
            className="hidden sm:inline-block bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-game-yellow transition-colors"
          >
            Buy Now
          </motion.a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2 text-foreground"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-sm font-medium uppercase tracking-widest">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={linkClass}
                    activeProps={{ className: "text-game-yellow" }}
                    activeOptions={{ exact: link.exact }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="https://wa.me/2348079088854"
                className="sm:hidden bg-white text-black text-center px-6 py-3 rounded-full text-xs font-bold uppercase tracking-tighter"
              >
                Buy Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
