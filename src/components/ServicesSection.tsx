import { motion } from "framer-motion";
import { Languages, Factory, Users, FileCheck, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Languages,
    title: "Multiple Language Translation",
    link: "/services/translation",
    highlights: [
      "Chinese ↔ English / Hindi",
      "Japanese ↔ English / Hindi",
      "Russian ↔ English / Hindi",
      "Korean ↔ English / Hindi",
    ],
    services: [
      "Technical & Industrial Document Translation",
      "Business Negotiations & Corporate Meetings",
      "Remote & On-Site Interpretation",
      "Government Delegations & Trade Engagements",
      "Industrial Projects & Plant Commissioning Support",
    ],
  },
  {
    icon: Factory,
    title: "Industrial Equipment Supply",
    link: "/services/equipment",
    highlights: [
      "Direct China sourcing",
      "Supplier verification",
      "Quality inspection",
      "Logistics coordination",
    ],
    services: [
      "Industrial Machinery & Manufacturing Equipment",
      "Electrical & Mechanical Equipment",
      "Spare Parts & Custom Manufacturing",
      "China Sourcing Expertise",
      "Import/Export & Logistics Support",
    ],
  },
  {
    icon: Users,
    title: "Industrial Manpower Supply",
    link: "/services/manpower",
    highlights: [
      "Skilled & semi-skilled labour",
      "Quick deployment",
      "Safety-compliant teams",
      "Flexible contracts",
    ],
    services: [
      "Mechanical Engineers & Technicians",
      "Civil Engineers & Construction Crew",
      "Electrical Engineers & Electricians",
      "PLC & Automation Specialists",
      "Maintenance Teams (AMC & Shutdown)",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa & FRRO Services",
    link: "/visa-frro",
    highlights: [
      "FRRO registration",
      "Visa extensions",
      "Residential permits",
      "Exit permits",
    ],
    services: [
      "Online FRRO Registration Assistance",
      "Visa Extension & Conversion",
      "Tourist / Business / Student / Work Visa",
      "Document Verification & Submission",
      "OCI / PIO Related Support",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive industrial consultancy solutions — from multilingual interpretation and equipment trading to manpower supply and visa services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-border bg-background group">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">{s.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.highlights.map((h) => (
                      <span key={h} className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground">
                        {h}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 mb-5">
                    {s.services.map((svc) => (
                      <li key={svc} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {svc}
                      </li>
                    ))}
                  </ul>

                  <Button asChild variant="ghost" size="sm" className="text-primary group-hover:underline">
                    <Link to={s.link}>
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
