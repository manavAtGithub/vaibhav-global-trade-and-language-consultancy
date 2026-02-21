import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  Briefcase,
  GraduationCap,
  Globe,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import founderImage from "@/assets/nitesh-raj.jpeg";
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const experience = [
  {
    period: "Sep 2025 – Present",
    role: "Assistant Manager — Chinese Interpreter",
    company: "NEOGEN Chemicals Ltd",
    highlights: [
      "Chinese interpretation for Bromination, Grignard chemistry, Crystallization machinery",
      "Chinese Coordinator — liaison between Chinese clients and internal teams",
      "International travel to China for technical equipment training",
      "Internal training sessions on machinery and troubleshooting",
    ],
  },
  {
    period: "Apr 2025 – Jul 2025",
    role: "Chinese Interpreter",
    company: "Star Cement & Microfiber Corp Pvt Ltd",
    highlights: [
      "4200MM SSS Spunbond Nonwoven Fabric Production Line interpretation",
      "Foundation design, wiring diagrams, operation manuals translation",
      "Fly Ash Bricks Making Machine — video conference interpretation",
    ],
  },
  {
    period: "Nov 2022 – Mar 2025",
    role: "Chinese Interpreter",
    company: "Tata Steel Kalinganagar (via Randstad)",
    highlights: [
      "Coke Oven Battery By-Product Plant CDQ Expansion Phase-II",
      "6.25M Stamp Charging Coke Oven Battery — 4×62 ovens, 3M t/a production",
      "Interpretation for coke oven technology, LTR, CTR, refractory, PLC, MCC & Drive Panels",
      "Technical documentation and vendor billing management",
    ],
  },
  {
    period: "Sep 2016 – Nov 2020",
    role: "Assistant Manager — Chinese Interpreter",
    company: "Jindal Steel & Power Ltd, Angul",
    highlights: [
      "0.475 MTPA stamp charged coke oven battery — 72 ovens, 24.26 MT/oven",
      "By-product machine and coke-oven erection, commissioning, maintenance",
      "Interpretation for Charging Car, Pusher Car, Transfer Car, Reversing Winch",
    ],
  },
  {
    period: "Apr 2015 – Jun 2016",
    role: "Chinese Interpreter",
    company: "Intraword",
    highlights: [
      "Plant/machinery installation and construction interpretation",
      "Chinese Management coordination via mail and phone",
    ],
  },
  {
    period: "Jul 2013 – Aug 2014",
    role: "Chinese Interpreter",
    company: "Chuangyue Construction (Sub-contractor DMRC)",
    highlights: [
      "DMRC tunnelling project Delhi",
      "Chinese-Indian engineer interpretation for machinery and tools",
    ],
  },
  {
    period: "Jul 2012 – Jun 2013",
    role: "Chinese Interpreter",
    company: "Hindustan Zinc Ltd, Rajasthan (via Lingua Mart)",
    highlights: [
      "Refined zinc, lead metal, Zinc Die-Casting Alloys interpretation",
      "Chinese-Indian engineer coordination",
    ],
  },
];

const credentials = [
  "Diploma in Chinese Language — Bharti Vidya Bhavan Institute, New Delhi (2010–2011)",
  "Chinese Tourist Facilitator Course — IITTM Noida (2014)",
  "B.A. — Baba Saheb Bhim Rao Ambedkar Bihar University, Muzaffarpur (2014)",
  "Trilingual Proficiency: Chinese (Mandarin), English, Hindi — Read, Write, Speak",
];

const industries = [
  "Iron & Steel",
  "Coke Oven & By-Products",
  "Cement",
  "Chemicals & Pharmaceuticals",
  "Nonwoven Fabric Manufacturing",
  "Metro & Tunnelling (DMRC)",
  "Zinc & Lead Smelting",
  "Mobile Technology (Vivo)",
];

const AboutFounder = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          About the Founder — Nitesh Raj | Vaibhav Global Trade & Language
          Consultancy
        </title>
        <meta
          name="description"
          content="Nitesh Raj — 13+ years of Chinese interpretation experience across steel, cement, coke oven, chemical, and heavy industries. Founder of Vaibhav Global Trade & Language Consultancy."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <motion.div
                className="bg-accent rounded-2xl aspect-[3/4] flex items-center justify-center"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {founderImage ? (
                  <img
                    src={founderImage}
                    alt="Founder's Photo"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-accent-foreground/50 text-sm">
                      Founder Photo
                    </span>
                  </div>
                )}
              </motion.div>
              <motion.div
                className="md:col-span-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                  Nitesh <span className="text-primary">Raj</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-2">
                  Founder & Lead Chinese Interpreter
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With over 13 years of professional Chinese (Mandarin)
                  interpretation experience across India's largest steel plants,
                  cement factories, chemical industries, and infrastructure
                  projects, Nitesh Raj founded Vaibhav Global Trade & Language
                  Consultancy to bridge the communication gap between Chinese
                  and Indian industrial operations at scale.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Having worked on-site at Tata Steel Kalinganagar, Jindal Steel
                  & Power Angul, NEOGEN Chemicals, Star Cement, DMRC Delhi, and
                  Hindustan Zinc, Nitesh brings unparalleled technical depth in
                  coke oven technology, plant commissioning, PLC systems,
                  refractory, and heavy industrial equipment — making him one of
                  India's most experienced Chinese industrial interpreters.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Exposure */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Industry <span className="text-primary">Exposure</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-2 bg-accent rounded-lg px-4 py-3 border border-border"
                >
                  <Building2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">
                    {ind}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
              Professional <span className="text-primary">Experience</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {experience.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="border-border bg-background">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-accent shrink-0">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="font-serif font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-primary mb-3">
                            {exp.company}
                          </p>
                          <ul className="space-y-1.5">
                            {exp.highlights.map((h) => (
                              <li
                                key={h}
                                className="text-sm text-muted-foreground flex items-start gap-2"
                              >
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Credentials & <span className="text-primary">Qualifications</span>
            </h2>
            <div className="space-y-4">
              {credentials.map((cred, i) => (
                <motion.div
                  key={cred}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-accent rounded-lg p-4 border border-border"
                >
                  <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{cred}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <Globe className="h-10 w-10 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Work With an Industry Expert
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Leverage 13+ years of hands-on Chinese industrial interpretation
              experience for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
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

export default AboutFounder;
