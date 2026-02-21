import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { Users, CheckCircle, Wrench, Zap, HardHat, Settings, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import manpowerSupplyHero from "@/assets/manpower-supply-hero.jpeg"
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const manpowerCategories = [
  { icon: Wrench, title: "Mechanical Engineers & Technicians", items: ["Equipment installation & commissioning", "Plant machinery erection", "Piping & structural fabrication", "Preventive & breakdown maintenance", "HVAC installation & servicing"] },
  { icon: HardHat, title: "Civil Engineers & Construction Crew", items: ["Industrial building construction", "Foundation & structural works", "Concrete & steel structure execution", "Site supervision & quality control", "Renovation & maintenance works"] },
  { icon: Zap, title: "Electrical Engineers & Electricians", items: ["Industrial wiring & panel installation", "Power distribution systems", "Transformer & generator installation", "Cable laying & termination", "Electrical testing & commissioning"] },
  { icon: Settings, title: "PLC & Automation Specialists", items: ["PLC programming", "SCADA systems", "Industrial automation setup", "Control panel programming", "System troubleshooting & upgrades"] },
  { icon: Shield, title: "Maintenance Services Team", items: ["Preventive maintenance contracts (AMC)", "Shutdown maintenance", "Equipment troubleshooting", "Machine overhaul services", "On-site technical support"] },
  { icon: Users, title: "Industrial Labor Supply", items: ["Equipment erection", "Commissioning support", "Fabrication & welding", "Mechanical fitting", "Electrical works", "Industrial housekeeping"] },
];

const whyChoose = ["Experienced & Certified Workforce", "Quick Deployment", "Safety-Compliant Teams", "Flexible Contract Terms (Short-Term / Long-Term)", "Cost-Effective Solutions", "24/7 Support Availability"];

const industriesServed = ["Oil & Gas", "Renewable Energy", "Defence & Aerospace", "Automotive", "Iron & Steel", "Construction", "Infrastructure", "Railways & Metro", "Transmission & Distribution", "Cement", "IBMS"];

const ManpowerPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Industrial Manpower Supply Services India | Vaibhav Global Trade
        </title>
        <meta
          name="description"
          content="Skilled industrial manpower supply — mechanical, civil, electrical engineers, PLC specialists, and maintenance teams. Quick deployment, safety-compliant, flexible contracts."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${manpowerSupplyHero})` }}
          />

          {/* Optional light overlay to maintain readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* <div className="container mx-auto px-4 text-center"> */}
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Industrial <span className="text-amber-400">Manpower Supply</span>
            </motion.h1>
            <motion.p
              className="text-lg font-bold text-gray-200 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Reliable. Skilled. Professional.
            </motion.p>
            <motion.p
              className="text-gray-200 font-bold max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We provide highly skilled and experienced industrial manpower for
              projects across Mechanical, Civil, Electrical, Programming,
              Maintenance, and Industrial Services.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hi%2C%20I%20need%20industrial%20manpower`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Hire Skilled Workforce
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Manpower Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Our Manpower <span className="text-primary">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {manpowerCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full border-border bg-background hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                        <cat.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                        {cat.title}
                      </h3>
                      <ul className="space-y-2">
                        {cat.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose & Industries */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Why Choose <span className="text-primary">Us?</span>
                </h2>
                <ul className="space-y-3">
                  {whyChoose.map((item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />{" "}
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Industries <span className="text-primary">We Serve</span>
                </h2>
                <div className="flex flex-wrap gap-3">
                  {industriesServed.map((ind) => (
                    <span
                      key={ind}
                      className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-accent-foreground border border-border"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mt-6 text-sm">
                  We specialize in engaging skilled resources for Engineering
                  Design, Project Management, Pre-Commissioning & Commissioning,
                  and Operations & Maintenance (O&M) across all phases of
                  project development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Need Reliable Industrial Manpower?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Contact us today for customized manpower solutions tailored to
              your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#contact">Get a Quote</Link>
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

export default ManpowerPage;
