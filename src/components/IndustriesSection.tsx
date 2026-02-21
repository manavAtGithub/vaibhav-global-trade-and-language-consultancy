import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
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
} from "lucide-react";
import { industries } from "@/data/industries";

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

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Industries <span className="text-primary">We Serve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering skilled manpower, language services, and industrial
            equipment across India's most critical sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon] || Factory;
            return (
              <motion.div
                key={ind.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link to={`/industries/${ind.slug}`}>
                  {/* <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer border-border bg-background group"> */}
                  <Card className="relative h-full overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer border-border bg-background group">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${ind.image})` }}
                    />

                    {/* Light Overlay for readability */}
                    <div className="absolute inset-0 bg-black/50" />
                    {/* <CardContent className="p-5 text-center"> */}
                    <CardContent className="relative z-10 p-5 text-center">
                      <div className="p-3 rounded-xl  w-fit mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-6 w-6 text-gray-200 group-hover:text-amber-400" />
                      </div>
                      <h3 className="font-serif font-semibold text-sm text-gray-200 group-hover:text-amber-400 transition-colors">
                        {ind.name}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
