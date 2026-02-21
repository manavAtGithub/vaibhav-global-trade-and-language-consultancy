import { motion } from "framer-motion";
import dmrcLogo from "@/assets/Delhi_Metro_logo.svg.png";
import iittm from "@/assets/Indian_Institute_of_Travel_and_Tourism_Management_Logo.svg.png";
import jspl from "@/assets/Jindal_Steel_and_Power_Logo.svg.png";
import dtt from "@/assets/Logo_of_Delhi_Tourism.png";
import acre from "@/assets/trs_img_20.png";
import tatasteel from "@/assets/tata-steel-logo-blue-background-wur617j4ikw1llzc-wur617j4ikw1llzc.png";
import hzl from "@/assets/HZL_Logo.png";
import cokeOven from "@/assets/gallery/coke-oven-battery.jpg";
import chemicalPlant from "@/assets/gallery/neogen-chemicals-slashes-revenue-forecast-following-dahej-plant-fire.jpg";
import machineryInstall from "@/assets/gallery/Hindustan Zinc Ltd.jpg";
import steelCommissioning from "@/assets/gallery/tsk-bf3-furnace.jpg";
import engineeringMeeting from "@/assets/gallery/tsk-bf2-group.jpg";
import chinaTraining from "@/assets/gallery/igi-delhi.webp";
import dmrc from "@/assets/gallery/dmrc.avif";
import angul from "@/assets/gallery/angul.jpeg";
import vivo from "@/assets/vivo-logo.png"
import neogen from "@/assets/neogen-logo.png"
import starCement from "@/assets/star-cement.jpeg"
import highlandMotion from "@/assets/highland-logo.jpeg"
import epc from "@/assets/epc-logo.jpeg"

const clients = [
  { name: "DMRC", logo: dmrcLogo },
  { name: "SANY Group", logo: iittm },
  { name: "ZTE Corporation", logo: jspl },
  { name: "Confederation of Indian Industry", logo: dtt },
  { name: "acre", logo: acre },
  { name: "tata", logo: tatasteel },
  { name: "hzl", logo: hzl },
  { name: "neogen", logo: neogen },
  { name: "vivo", logo: vivo },
  { name: "highland", logo: highlandMotion },
  { name: "starCement", logo: starCement },
  { name: "epc", logo: epc },
];

const galleryItems = [
  {
    title: "Coke Oven Battery Expansion Project",
    image: cokeOven,
  },
  {
    title: "Chemical Plant Interpretation",
    image: chemicalPlant,
  },
  {
    title: "Industrial Machinery Installation",
    image: machineryInstall,
  },
  {
    title: "Steel Plant Commissioning Support",
    image: steelCommissioning,
  },
  {
    title: "Engineering Coordination Meetings",
    image: engineeringMeeting,
  },
  {
    title: "Cross-Border Technical Training (India–China)",
    image: chinaTraining,
  },
  {
    title: "Cross-Border Technical Training (India–China)",
    image: dmrc,
  },
  {
    title: "Cross-Border Technical Training (India–China)",
    image: angul,
  },
];
const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our <span className="text-primary">Clients & Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by India's leading industrial corporations, Chinese EPC
            contractors, and government organizations.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-14">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-video rounded-xl overflow-hidden border border-border group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
                <span className="text-white text-sm font-medium text-center">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client logos/names */}
        {/* <div className="text-center">
          <h3 className="font-serif font-semibold text-xl text-foreground mb-6">
            Trusted By
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((c) => (
              <div
                key={c.name}
                className="bg-secondary rounded-xl border border-border p-4 flex items-center justify-center w-40 h-20 hover:scale-105 transition"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div> */}
        <div className="text-center">
          <h3 className="font-serif font-bold text-xl text-primary mb-6">
            Trusted By
          </h3>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...clients, ...clients].map((c, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl border border-border p-4 flex items-center justify-center w-40 h-20 hover:scale-105 transition"
              >
                <img
                  src={c.logo}
                  alt={c.name}
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
