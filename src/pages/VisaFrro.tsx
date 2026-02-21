import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { FileCheck, Globe, Clock, Users, Shield, CheckCircle, Plane, GraduationCap, Briefcase, Building2, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import visaHero from "@/assets/visa-hero.jpeg"
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const frroServices = [
  {
    icon: FileCheck,
    title: "FRRO Registration",
    desc: "Mandatory registration support for foreign nationals staying in India beyond the permitted period.",
    items: ["Online FRRO registration assistance", "Document verification and uploading", "Appointment guidance (if applicable)", "Application status tracking"],
  },
  {
    icon: Clock,
    title: "Visa Extension",
    desc: "Assistance for extending Indian visas as per government guidelines.",
    items: ["Eligibility assessment", "Document preparation and submission", "Coordination with FRRO authorities", "Timely updates and approval follow-up"],
  },
  {
    icon: Building2,
    title: "Residential Permit (RP)",
    desc: "Support for obtaining or renewing Residential Permits in India.",
    items: ["RP application and renewal", "Change of address updates", "Compliance with FRRO regulations"],
  },
  {
    icon: Plane,
    title: "Exit Permit",
    desc: "Assistance for foreigners requiring an exit permit before leaving India.",
    items: ["Exit visa / exit permit processing", "Overstay regularization support", "Urgent and emergency cases"],
  },
  {
    icon: Shield,
    title: "Change of Visa / Visa Conversion",
    desc: "Guidance for eligible visa conversions as per Indian immigration rules.",
    items: ["Case assessment and feasibility check", "Document filing and follow-ups", "Government compliance assistance"],
  },
  {
    icon: UserCheck,
    title: "OCI / PIO Related Support",
    desc: "Basic guidance for OCI/PIO related FRRO requirements.",
    items: ["OCI card application guidance", "PIO-related FRRO compliance", "Documentation support"],
  },
];

const visaServices = [
  { icon: Globe, title: "Tourist Visa", desc: "Assistance for travelers planning short visits for tourism, family visits, or leisure purposes.", items: ["Visa eligibility assessment", "Application form filling", "Document checklist and verification", "Appointment scheduling", "Submission and tracking"] },
  { icon: Briefcase, title: "Business Visa", desc: "Support for professionals attending meetings, conferences, trade fairs, or business activities.", items: ["Invitation letter guidance", "Business document preparation", "Embassy / Consulate submission", "Follow-up until decision"] },
  { icon: GraduationCap, title: "Student Visa", desc: "Complete guidance for students pursuing education abroad.", items: ["University offer letter verification", "Financial and sponsorship documents", "Visa interview preparation", "Application submission support"] },
  { icon: Users, title: "Work / Employment Visa", desc: "Assistance for candidates with overseas job offers.", items: ["Employer document verification", "Employment contract review", "Country-specific visa requirements", "End-to-end application support"] },
  { icon: Plane, title: "Transit & Dependent Visa", desc: "Help with short transit visas or dependent visas for spouses and family members.", items: ["Transit visa processing", "Dependent visa documentation", "Family visa coordination"] },
];

const frroProcess = ["Initial consultation & requirement analysis", "Document collection and verification", "Online FRRO application submission", "Regular follow-ups and status tracking", "Approval support and compliance guidance"];
const visaProcess = ["Free consultation & eligibility check", "Document collection and verification", "Visa application form submission", "Appointment booking (if required)", "Application tracking & updates"];
const whyChoose = ["Experienced FRRO & visa consultants", "Updated knowledge of Indian immigration laws", "Quick turnaround time", "Transparent process & pricing", "High success rate", "Personalized assistance for each applicant"];
const whoCanApply = ["Foreign tourists", "Students & interns", "Employment & business visa holders", "Missionaries, researchers & dependents"];

const ServiceCard = ({ service, index }: { service: typeof frroServices[0]; index: number }) => (
  <motion.div custom={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
    <Card className="h-full hover:shadow-lg transition-shadow border-border bg-background">
      <CardContent className="p-6">
        <div className="p-3 rounded-xl bg-accent w-fit mb-4">
          <service.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{service.desc}</p>
        <ul className="space-y-1.5">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const VisaFrro = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Visa & FRRO Services in India | Vaibhav Global Trade & Language
          Consultancy
        </title>
        <meta
          name="description"
          content="Complete FRRO registration, visa extension, residential permit, exit permit and visa application services in India. Expert assistance for foreign nationals."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${visaHero})` }}
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
              Visa & <span className="text-amber-400">FRRO Services</span> in
              India
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200  font-bold max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Reliable, hassle-free FRRO registration and visa assistance for
              foreign nationals staying in India.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hi%2C%20I%20need%20help%20with%20FRRO%20%2F%20Visa%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FRRO Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our <span className="text-primary">FRRO Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete assistance with FRRO registration, visa extensions,
                residential permits, and more.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {frroServices.map((s, i) => (
                <ServiceCard key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* FRRO Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Our FRRO <span className="text-primary">Process</span>
                </h2>
                <ol className="space-y-4">
                  {frroProcess.map((step, i) => (
                    <motion.li
                      key={step}
                      className="flex items-start gap-4"
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                    >
                      <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-foreground pt-1">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-3 mb-8">
                  {whyChoose.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  Who Can Apply?
                </h3>
                <ul className="space-y-3">
                  {whoCanApply.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Users className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Visa <span className="text-primary">Application Services</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end visa assistance covering USA, UK, Canada, Schengen,
                Australia, UAE, Singapore, China, Taiwan, Hong Kong, and more.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visaServices.map((s, i) => (
                <ServiceCard key={s.title} service={s} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Visa Process */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Our Visa <span className="text-primary">Process</span>
            </h2>
            <div className="flex flex-col gap-4">
              {visaProcess.map((step, i) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground text-left">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Need Help with Visa or FRRO?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Get expert assistance today. We'll guide you through every step.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hi%2C%20I%20need%20help%20with%20FRRO%20%2F%20Visa%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:contact@vaibhavconsultancy.com?subject=FRRO%20/%20Visa%20Inquiry">
                  Email Us
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

export default VisaFrro;
