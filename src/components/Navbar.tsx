import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const serviceLinks = [
  { label: "Translation & Interpretation", href: "/services/translation" },
  { label: "Industrial Equipment Supply", href: "/services/equipment" },
  { label: "Industrial Manpower Supply", href: "/services/manpower" },
  { label: "Visa & FRRO Services", href: "/visa-frro" },
];

const navLinks = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "About", href: "#about", isRoute: false },
  { label: "Services", href: "#services", isRoute: false, isDropdown: true },
  { label: "Industries", href: "/industries", isRoute: true },
  { label: "Testimonials", href: "#testimonials", isRoute: false },
  { label: "Founder", href: "/about-founder", isRoute: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getHref = (link: typeof navLinks[0]) => {
    if (link.isRoute) return link.href;
    if (!isHome) return `/${link.href}`;
    return link.href;
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-serif text-lg md:text-xl font-bold text-primary tracking-tight leading-tight">
          Vaibhav Global Trade<br className="hidden sm:block" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground">& Language Consultancy</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <li key={l.label}>
              {l.isDropdown ? (
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.label}
                          to={s.href}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : l.isRoute ? (
                <Link to={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ) : (
                <a href={getHref(l)} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild>
            <a href={isHome ? "#contact" : "/#contact"}>Contact Us</a>
          </Button>
        </div>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-b border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((l) => (
              <li key={l.label} className="w-full text-center">
                {l.isDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-center gap-1 mx-auto text-base font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-2 space-y-2">
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.label}
                            to={s.href}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => { setOpen(false); setMobileServicesOpen(false); }}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : l.isRoute ? (
                  <Link to={l.href} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                ) : (
                  <a href={getHref(l)} className="text-base font-medium text-muted-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button asChild size="sm" onClick={() => setOpen(false)}>
                <a href={isHome ? "#contact" : "/#contact"}>Contact Us</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
