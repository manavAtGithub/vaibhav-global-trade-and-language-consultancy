import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import {
  Factory,
  CheckCircle,
  Wrench,
  Zap,
  Settings,
  Package,
  Truck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import equipmentHero from "@/assets/equipment-hero.jpeg";
import valve1 from "@/assets/equipments/valve1.png";
import valve2 from "@/assets/equipments/valve2.png";
import valve3 from "@/assets/equipments/valve3.png";
import valve4 from "@/assets/equipments/valve4.png";
import dustCollector from "@/assets/equipments/dust-collector.png";
import valve5a from "@/assets/equipments/valve5a.png";
import valve5b from "@/assets/equipments/valve5b.png";
import valve5c from "@/assets/equipments/valve5c.png";
import valve5d from "@/assets/equipments/valve5d.png";
import valve6a from "@/assets/equipments/valve6a.png";
import valve6b from "@/assets/equipments/valve6b.png";
import valve6c from "@/assets/equipments/valve6c.png";
import valve6d from "@/assets/equipments/valve6d.png";
import valve7a from "@/assets/equipments/valve7a.png";
import valve7b from "@/assets/equipments/valve7b.png";
import valve7c from "@/assets/equipments/valve7c.png";
import valve7d from "@/assets/equipments/valve7d.png";
import valve8a from "@/assets/equipments/valve8a.png";
import valve8b from "@/assets/equipments/valve8b.png";
import valve8c from "@/assets/equipments/valve8c.png";
import valve8d from "@/assets/equipments/valve8d.png";
import valve9a from "@/assets/equipments/valve9a.png";
import valve9b from "@/assets/equipments/valve9b.png";
import valve9c from "@/assets/equipments/valve9c.png";
import valve9d from "@/assets/equipments/valve9d.png";
import valve10a from "@/assets/equipments/valve10a.png";
import valve10b from "@/assets/equipments/valve10b.png";
import valve10c from "@/assets/equipments/valve10c.png";
import valve10d from "@/assets/equipments/valve10d.png";
import valve11 from "@/assets/equipments/dmf-z-pulse-valve.png";
import pump1 from "@/assets/equipments/pump1.png";
import pump2 from "@/assets/equipments/pump2.png";
import humidifier1 from "@/assets/equipments/dust-humidifier-ixer1.png";
import humidifier2 from "@/assets/equipments/dust-humidifier2.png";
import eleDischarer1a from "@/assets/equipments/ele-discharger1a.png";
import eleDischarer1b from "@/assets/equipments/ele-discharger1b.png";
import eleDischarer1c from "@/assets/equipments/ele-discharger-1c.png";
import { CONTACT } from "@/config/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const galleryItems = [
  {
    title: "Z42rising stem wedge double gate valve",
    image: valve1,
  },
  {
    title: "Water-seal gate valve ofmetal seal(Casting)",
    image: valve2,
  },
  {
    title: "3D eccentric hard sealed butterfly valve",
    image: valve3,
  },
  {
    title: "Electric gas flap valve",
    image: valve4,
  },
  {
    title: "Pneumatic knife type gate valve",
    image: valve5a,
  },
  {
    title: "Manual knife gate valve",
    image: valve5b,
  },
  {
    title: "Electric knife gate valve",
    image: valve5c,
  },
  {
    title: "Electrohydraulic knife type gate valve",
    image: valve5d,
  },
  {
    title: "Non rising stem gate valve",
    image: valve6a,
  },
  {
    title: "Low pressure gate valve",
    image: valve6b,
  },
  {
    title: "Gate valve with umbrella gear",
    image: valve6c,
  },
  {
    title: "Manual gate valve",
    image: valve6d,
  },
  {
    title:
      "Direct coupled bipolar clean water/corrosion-resistant centrifugal pump",
    image: pump1,
  },
  {
    title:
      "IS type single stage single suction clean water/corrosion-resistant centrifugal pump ",
    image: pump2,
  },
  {
    title: "SI Dual-axis dust humidifying mixer",
    image: humidifier1,
  },
  {
    title: "BDSZ Single-axis dust humidifier mixer",
    image: humidifier2,
  },
  {
    title: "Lift check valve",
    image: valve7a,
  },
  {
    title: "Swing check valve",
    image: valve7b,
  },
  {
    title: "Stainless steel check valve",
    image: valve7c,
  },
  {
    title: "American standard check valve",
    image: valve7d,
  },
  {
    title: "Fluorine lined clamp butterfly valve",
    image: valve8a,
  },
  {
    title: "Fluorine lined flange butterfly valve",
    image: valve8b,
  },
  {
    title: "Pneumatic fluorine lined butterfly valve",
    image: valve8c,
  },
  {
    title: "Fluorine lined electric butterfly valve",
    image: valve8d,
  },
  {
    title: "Wafer type flange butterfly valve",
    image: valve9a,
  },
  {
    title: "Telescopic flange butterfly valve",
    image: valve9b,
  },
  {
    title: "Electric controlled slow closing butterfly valve",
    image: valve9c,
  },
  {
    title: "Hydraulic controlled slow closing butterfly valve",
    image: valve9d,
  },
  {
    title: "YJD-A type electric discharger",
    image: eleDischarer1a,
  },
  {
    title: "YJD-B type electric discharger",
    image: eleDischarer1b,
  },
  {
    title: "YJD-C type electric discharger",
    image: eleDischarer1c,
  },
  {
    title: "Cloth bag Dust collector",
    image: dustCollector,
  },
  {
    title: "Fixed hard sealed ball valve",
    image: valve10a,
  },
  {
    title: "Bidirectional hard sealed ball valve",
    image: valve10b,
  },
  {
    title: "Natural gas ball valve",
    image: valve10c,
  },
  {
    title: "Bidirectional flow head rotary ball valve",
    image: valve10d,
  },
  {
    title: "DMF-Z electromagnetic pulse valve",
    image: valve11,
  },
];
const products = [
  {
    icon: Factory,
    title: "Industrial Machinery Supply",
    items: [
      "Manufacturing machinery",
      "Construction equipment",
      "Processing machines",
      "Packaging machinery",
      "Textile machinery",
      "Heavy-duty industrial equipment",
    ],
  },
  {
    icon: Zap,
    title: "Electrical & Mechanical Equipment",
    items: [
      "Motors & gearboxes",
      "Pumps & compressors",
      "Generators & transformers",
      "Industrial panels & control systems",
      "HVAC systems",
    ],
  },
  {
    icon: Settings,
    title: "Industrial Spare Parts",
    items: [
      "Mechanical spare parts",
      "Electrical components",
      "Bearings & belts",
      "Valves & fittings",
      "Hydraulic & pneumatic parts",
      "Custom-made spare parts",
    ],
  },
];

const tradingServices = [
  "Equipment sourcing from China",
  "Import & export coordination",
  "Logistics & freight support",
  "Product customization",
  "Spare parts procurement",
  "After-sales support assistance",
];

const chinaExpertise = [
  "Competitive pricing",
  "High-quality standards",
  "Genuine & certified products",
  "Bulk order capability",
  "Timely delivery",
  "Custom manufacturing options",
];

const industriesServed = [
  "Manufacturing Industries",
  "Oil & Gas Sector",
  "Construction & Infrastructure",
  "Power & Energy Plants",
  "Automotive Industry",
  "Food & Beverage Processing",
  "Warehousing & Logistics",
];

const EquipmentPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          Industrial Equipment & Machinery Import from China | Vaibhav Global
          Trade
        </title>
        <meta
          name="description"
          content="Professional industrial equipment, machinery, and spare parts supply sourced from China. Supplier verification, quality inspection, and logistics coordination."
        />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* <section className="py-20 bg-secondary"> */}
        <section className="relative py-20 bg-secondary overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${equipmentHero})` }}
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
              Industrial Equipment{" "}
              <span className="text-amber-400">Supply & Trading</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Global Sourcing. Reliable Supply. Trusted Partner.
            </motion.p>
            <motion.p
              className="text-gray-200 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We specialize in the supply of industrial equipment, machinery,
              and spare parts sourced directly from leading manufacturers in
              China.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/${CONTACT.phoneRaw}?text=Hi%2C%20I%20need%20industrial%20equipment`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Quotation
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/#contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
              Our Products <span className="text-primary">& Services</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((p, i) => (
                <motion.div
                  key={p.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <Card className="h-full border-border bg-background hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="p-3 rounded-xl bg-accent w-fit mb-4">
                        <p.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-4">
                        {p.title}
                      </h3>
                      <ul className="space-y-2">
                        {p.items.map((item) => (
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

        {/* China Sourcing */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  China Sourcing <span className="text-primary">Expertise</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  We work directly with trusted Chinese manufacturers to ensure
                  quality, competitive pricing, and timely delivery. Our team
                  handles supplier verification, product inspection, quality
                  control, and shipping coordination.
                </p>
                <ul className="space-y-3">
                  {chinaExpertise.map((item, i) => (
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
                  Trading <span className="text-primary">Services</span>
                </h2>
                <ul className="space-y-3">
                  {tradingServices.map((item, i) => (
                    <motion.li
                      key={item}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <Truck className="h-5 w-5 text-primary shrink-0" /> {item}
                    </motion.li>
                  ))}
                </ul>
                <h3 className="font-serif font-semibold text-lg text-foreground mt-8 mb-4">
                  Industries Served
                </h3>
                <div className="flex flex-wrap gap-2">
                  {industriesServed.map((ind) => (
                    <span
                      key={ind}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-accent-foreground"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Gallery Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Equipment <span className="text-primary">Gallery</span>
            </h2>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="aspect-square bg-accent rounded-xl flex items-center justify-center border border-border"
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
            </div> */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
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
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center px-4">
                    <span className="text-white text-sm font-medium text-center">
                      {item.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
              Looking for Reliable Equipment Supply?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Contact us today for inquiries and quotations. We deliver the
              right equipment at the right price, on time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/#contact">Request a Quote</Link>
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

export default EquipmentPage;
