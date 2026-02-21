import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  Languages,
  CheckCircle,
  Globe,
  Briefcase,
  Users,
  Monitor,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import translationHero from "@/assets/translation-hero.jpeg";
import china from "@/assets/flags/china-flag-icon.webp";
import russia from "@/assets/flags/russian-flag.png";
import japan from "@/assets/flags/japan-flag.jpeg";
import korea from "@/assets/flags/korean-flag.png";
import german from "@/assets/flags/german-flag.png";
import spain from "@/assets/flags/spain-flag.jpeg";
import portuguese from "@/assets/flags/portuguese-flag.jpeg";
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const languages = [
  { pair: "Chinese ↔ English / Hindi", flag: china },
  { pair: "Japanese ↔ English / Hindi", flag: japan },
  { pair: "Russian ↔ English / Hindi", flag: russia },
  { pair: "Korean ↔ English / Hindi", flag: korea },
  { pair: "German ↔ English / Hindi", flag: german },
  { pair: "Spanish ↔ English / Hindi", flag: spain },
  { pair: "Portuguese ↔ English / Hindi", flag: portuguese },
];

const services = [
  {
    icon: Briefcase,
    title: "Technical & Industrial Document Translation",
    desc: "Plant & machinery documentation, technical manuals, engineering drawings, and specifications.",
  },
  {
    icon: Users,
    title: "Business Negotiations & Corporate Meetings",
    desc: "Professional interpretation for high-stakes business negotiations, contracts, and trade discussions.",
  },
  {
    icon: Monitor,
    title: "Remote & On-Site Interpretation",
    desc: "Flexible interpretation via Zoom, WeChat, Teams, or on-site at your project location across India.",
  },
  {
    icon: Globe,
    title: "Government Delegations & Trade Engagements",
    desc: "Interpretation support for official delegations, trade fairs, diplomatic meetings, and government-level engagements.",
  },
  {
    icon: Languages,
    title: "Industrial Projects & Plant Commissioning",
    desc: "On-site interpretation for equipment erection, commissioning, troubleshooting, and maintenance with Chinese/Japanese engineering teams.",
  },
  {
    icon: CheckCircle,
    title: "One-to-One Interpretation",
    desc: "Dedicated interpreter for personal meetings, factory visits, and executive-level communication.",
  },
];

const TranslationPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Chinese Translation & Interpretation Services India | Vaibhav Global
          Trade
        </title>
        <meta
          name="description"
          content="Professional Chinese, Japanese, Russian & Korean translation and interpretation services for industrial, business, and government sectors in India. 13+ years experience."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${translationHero})` }}
          />
          {/* Optional light overlay to maintain readability */}
          <div className="absolute inset-0 bg-black/40" />
          {/* <div className="container mx-auto px-4 text-center"> */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Multiple Language{" "}
              <span className="text-amber-400">
                Translation & Interpretation
              </span>
            </motion.h1>
            <motion.p
              className="text-lg font-bold text-gray-200 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Professional multilingual translation and interpretation services
              powered by 13+ years of industrial experience across India's
              largest projects.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hi%2C%20I%20need%20translation%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Translation Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Languages */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Languages <span className="text-primary">We Cover</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {languages.map((l, i) => (
                <motion.div
                  key={l.pair}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative overflow-hidden rounded-lg p-5 border border-border text-center group"
                >
                  <div
                    className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundImage: `url(${l.flag})` }}
                  />
                  <div className="absolute inset-0 bg-black/50" />

                  <div className="relative z-10">
                    <span className="text-sm font-bold text-gray-200 hover:text-amber-400">
                      {l.pair}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Our <span className="text-primary">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full border-border bg-background hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                        <s.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-foreground mb-2">
                        {s.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Need Professional Translation?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Get a quote from our experienced multilingual team today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#contact">Request a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </HelmetProvider>
  );
};

export default TranslationPage;
