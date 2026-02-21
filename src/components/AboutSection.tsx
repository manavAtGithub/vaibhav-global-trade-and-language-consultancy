import { motion } from "framer-motion";
import { ShieldCheck, Handshake, BookOpen, Globe } from "lucide-react";
import companyPhoto from "@/assets/company-photo2.jpg";

const highlights = [
  {
    icon: Globe,
    title: "Cross-Border Expertise",
    desc: "13+ years bridging Chinese and Indian industrial operations across steel, cement, coke oven, chemical, and manufacturing sectors.",
  },
  {
    icon: Handshake,
    title: "Trusted Industrial Partner",
    desc: "Proven track record with Tata Steel, Jindal Steel & Power, NEOGEN Chemicals, Star Cement, and major Chinese EPC contractors.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Solutions",
    desc: "From language services and manpower supply to equipment sourcing and visa processing — all under one roof.",
  },
  {
    icon: BookOpen,
    title: "Technical Depth",
    desc: "Specialized in coke oven technology, plant commissioning, PLC systems, refractory, and heavy industrial equipment.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl aspect-[4/5] overflow-hidden"
          >
            <img
              src={companyPhoto}
              alt="Vaibhav Global Trade & Language Consultancy Team"
              // className="w-full h-full object-cover object-right"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              About <span className="text-primary">Our Company</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Vaibhav Global Trade & Language Consultancy is a multilingual
              industrial consultancy and global trade facilitation firm. We
              specialize in Chinese, Japanese, Russian, and Korean translation &
              interpretation, technical & industrial communication, machinery
              sourcing from China, industrial manpower solutions, and visa &
              FRRO consultancy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Founded on 13+ years of hands-on Chinese interpretation experience
              across India's largest steel plants, cement factories, and
              chemical industries, we serve sectors including defence,
              automotive, government, and heavy industry. Our team has supported
              projects at Tata Steel Kalinganagar, Jindal Steel & Power Angul,
              NEOGEN Chemicals, Star Cement, DMRC tunnelling projects, and
              numerous Chinese delegations across India.
            </p>

            <div className="space-y-5">
              {highlights.map((h) => (
                <div key={h.title} className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-accent flex-shrink-0">
                    <h.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {h.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
