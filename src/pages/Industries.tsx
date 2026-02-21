import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  Shield,
  Sun,
  Flame,
  Building,
  Factory,
  Train as TrainIcon,
  Zap,
  Monitor,
  HardHat,
  Car,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { industries } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import industryHero from "@/assets/industry-hero.jpeg";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Sun,
  Flame,
  Building,
  Factory,
  Train: TrainIcon,
  Zap,
  Monitor,
  HardHat,
  Car,
  Landmark,
};

const Industries = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Industries We Serve | Vaibhav Global Trade & Language Consultancy
        </title>
        <meta
          name="description"
          content="We serve Defence, Renewable Energy, Oil & Gas, Cement, Iron & Steel, Railways, T&D, IBMS, Construction, Automotive, and Infrastructure sectors with manpower, equipment, and language services."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${industryHero})` }}
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
              Industries <span className="text-amber-400">We Serve</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 font-bold max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Delivering skilled manpower, language services, and industrial
              equipment across India's most critical sectors.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => {
                const Icon = iconMap[ind.icon] || Factory;
                return (
                  <motion.div
                    key={ind.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  >
                    <Link to={`/industries/${ind.slug}`}>
                      {/* <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer border-border bg-background group"> */}
                      <Card className="relative h-full overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer border-border bg-background group">
                        {/* Background Image */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${ind.image})` }}
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/65 group-hover:bg-black/45 transition-colors" />

                        {/* <CardContent className="relative z-10 p-6"></CardContent> */}
                        <CardContent className="relative z-20 p-6">
                          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                            <Icon className="h-6 w-6 text-white group-hover:text-amber-400 transition-colors" />
                          </div>
                          <h3 className="font-serif font-semibold text-lg text-white mb-2 group-hover:text-amber-400 transition-colors">
                            {ind.name}
                          </h3>
                          <p className="text-sm text-white/80 mb-4 line-clamp-3">
                            {ind.overview.substring(0, 120)}...
                          </p>
                          <span className="inline-flex items-center text-sm font-medium text-primary">
                            Learn More <ArrowRight className="h-4 w-4 ml-1" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </HelmetProvider>
  );
};

export default Industries;
