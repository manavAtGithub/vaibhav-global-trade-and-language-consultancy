import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rajesh Mehta",
    company: "Steel Plant EPC Project",
    text: "Vaibhav Global Trade & Language Consultancy provided exceptional Chinese interpretation during our coke oven commissioning. Their team understood both the technical terminology and cultural nuances, which was critical for coordinating with Chinese engineers on site.",
  },
  {
    name: "Li Wei",
    company: "Chinese Equipment Manufacturer",
    text: "Working with the Vaibhav team in India has been seamless. Their interpreters' deep knowledge of steel plant operations combined with fluent Mandarin made our equipment commissioning at multiple sites highly productive.",
  },
  {
    name: "C'Azha Arrington",
    company: "Hudland",
    text: "They worked very fast and got me the help that I needed immediately. I requested a quote and got it within 2 hours and got my paper back to me by the next morning. The price is very good for the service and speed they offer.",
  },
  {
    name: "Carla Arevalo Diaz",
    company: "HUDE",
    text: "I am very grateful and confident with your translation service for my birth certificate from Spanish to English. At first, I was a little hesitant, but as soon as I saw the reviews, I had no doubts. Thank you so much for answering my questions and for the quick response; everything was ready in just two days.",
  },
  {
    name: "Hang Nguyen",
    company: "Project Head ACRE",
    text: "They are very quick and comprehensive in responding. I urgently needed a translation of a 1-page document from Vietnamese to English and they finished it within the next day after receiving (weekday, expedited service). I found some other cheaper ones but still chose US Language Service based on their good review, and you can't find a better service than this, especially in urgent situation. The quality is high, service is very good, no hidden fee, very transparent on their website.",
  },
];


const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            What Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted feedback from industrial corporations and project teams across sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.15 }}
            >
              <Card className="h-full border-border bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
