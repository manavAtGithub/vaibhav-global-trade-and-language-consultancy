import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Globe, Users, Factory, Briefcase } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";


const stats = [
  { icon: Globe, label: "13+ Years Experience" },
  { icon: Users, label: "Multi-Industry Expertise" },
  { icon: Factory, label: "China Sourcing Network" },
  { icon: Briefcase, label: "End-to-End Solutions" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-background to-secondary z-10 opacity-0" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-cyan-400 leading-tight mb-6"
          >
            Bridging <span className="text-gray-200">Global Communication &  </span>
            {/* Global Communication &{" "} */}
            <span className="text-amber-400">Industrial Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto"
          >
            Translation, Industrial Equipment Import from China, Skilled
            Manpower Supply, Visa & FRRO Assistance — Powered by 13+ Years of
            Heavy Industry Experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contact">Get a Quote</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-center gap-3 bg-background/70 backdrop-blur rounded-lg py-4 px-4 border border-border shadow-sm"
              >
                <s.icon className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
