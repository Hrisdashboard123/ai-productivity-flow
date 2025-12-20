import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "glass-header transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-narrow flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal via-pink to-purple flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-xl font-bold text-white">S</span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal via-pink to-purple opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:block">
            SphereStech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                location.pathname === link.path
                  ? "text-teal"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-teal to-pink rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="sm">
            Log In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 border-t border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "py-3 text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "text-teal"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border/50">
                <Button variant="ghost" size="lg" className="w-full">
                  Log In
                </Button>
                <Button variant="hero" size="lg" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
