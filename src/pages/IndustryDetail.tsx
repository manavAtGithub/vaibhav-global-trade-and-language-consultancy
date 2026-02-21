import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle, Briefcase, Users, Wrench, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { industries } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold text-foreground mb-4">Industry Not Found</h1>
            <Button asChild>
              <Link to="/industries">View All Industries</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {industry.name} — Industrial Solutions | Vaibhav Global Trade
        </title>
        <meta
          name="description"
          content={`${industry.overview.substring(0, 155)}...`}
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${industry.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="container mx-auto px-4 relative z-10">
            {/* <div className="container mx-auto px-4"> */}
            <Link
              to="/industries"
              className="inline-flex items-center text-sm text-gray-200 hover:text-amber-400 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1 text-gray-200 hover:text-amber-400" />{" "}
              All Industries
            </Link>
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-gray-200 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {industry.name}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {industry.overview}
            </motion.p>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-primary" /> Industry
                  Challenges
                </h2>
                <ul className="space-y-3">
                  {industry.challenges.map((c, i) => (
                    <motion.li
                      key={c}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="h-2 w-2 bg-primary rounded-full mt-2 shrink-0" />
                      {c}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-primary" /> How We Support
                </h2>
                <ul className="space-y-3">
                  {industry.howWeSupport.map((s, i) => (
                    <motion.li
                      key={s}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      {s}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Roles */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <Briefcase className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                    Relevant Services
                  </h3>
                  <ul className="space-y-2">
                    {industry.relevantServices.map((s) => (
                      <li
                        key={s}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <Users className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                    Skilled Roles Offered
                  </h3>
                  <ul className="space-y-2">
                    {industry.skilledRoles.map((r) => (
                      <li
                        key={r}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-background">
                <CardContent className="p-6">
                  <Wrench className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                    Project Experience
                  </h3>
                  <ul className="space-y-2">
                    {industry.experience.map((e) => (
                      <li
                        key={e}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Need Support for {industry.name}?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Contact our team for customized industrial solutions tailored to
              your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/#contact">Contact Form</Link>
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

export default IndustryDetail;
