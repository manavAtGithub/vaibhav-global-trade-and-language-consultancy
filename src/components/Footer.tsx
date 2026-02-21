import { Link } from "react-router-dom";

const serviceLinks = [
  { label: "Translation & Interpretation", href: "/services/translation" },
  { label: "Industrial Equipment", href: "/services/equipment" },
  { label: "Manpower Supply", href: "/services/manpower" },
  { label: "Visa & FRRO", href: "/visa-frro" },
];

const industryLinks = [
  { label: "Iron & Steel", href: "/industries/iron-steel" },
  { label: "Oil & Gas", href: "/industries/oil-gas" },
  { label: "Cement", href: "/industries/cement" },
  { label: "Renewable Energy", href: "/industries/renewable-energy" },
  { label: "Railways & Metro", href: "/industries/railways-metro" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Founder", href: "/about-founder" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold mb-3">
              Vaibhav Global Trade & Language Consultancy
            </h3>
            <p className="text-sm text-background/70 leading-relaxed">
              Multilingual industrial consultancy and global trade facilitation.
              Chinese interpretation, equipment trading, manpower supply & visa
              services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Email: contact@vaibhavglobaltrade.com</li>
              <li>Phone: +91 8860188340</li>
              <li>WhatsApp: +91 8860188340</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold text-sm mb-2">Quick Links</h4>
              <ul className="space-y-1">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} Vaibhav Global Trade & Language
            Consultancy. All rights reserved.
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
          Website by{" "}
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            Manav
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
