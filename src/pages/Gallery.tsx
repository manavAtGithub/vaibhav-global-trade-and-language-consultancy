import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const categories = [
  "All",
  "Industrial Projects",
  "Chinese Delegation Meetings",
  "Plant Commissioning",
  "Equipment Imports",
  "Site Work & Manpower",
];

const galleryItems = [
  { title: "Coke Oven Battery Commissioning — Tata Steel", category: "Plant Commissioning" },
  { title: "Chinese Engineer Coordination — Jindal Steel", category: "Industrial Projects" },
  { title: "Chinese Delegation Visit — Trade Expo", category: "Chinese Delegation Meetings" },
  { title: "Gas Valve Equipment Import — Highland Motion", category: "Equipment Imports" },
  { title: "Steel Plant Erection Work", category: "Site Work & Manpower" },
  { title: "Business Negotiation — Chinese Suppliers", category: "Chinese Delegation Meetings" },
  { title: "Nonwoven Fabric Line Installation", category: "Plant Commissioning" },
  { title: "DMRC Tunnelling — Chinese Contractor", category: "Industrial Projects" },
  { title: "Butterfly Valve Import — China Sourcing", category: "Equipment Imports" },
  { title: "Factory Inspection — Quality Audit", category: "Industrial Projects" },
  { title: "Skilled Manpower Deployment — Cement Plant", category: "Site Work & Manpower" },
  { title: "Chemical Plant Commissioning — NEOGEN", category: "Plant Commissioning" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Project Gallery | Vaibhav Global Trade & Language Consultancy</title>
        <meta name="description" content="View our industrial project gallery — plant commissioning, Chinese delegation meetings, equipment imports, and manpower deployment across India." />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Project <span className="text-primary">Gallery</span>
            </motion.h1>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              A glimpse into our industrial projects, equipment imports, and cross-border coordination work.
            </motion.p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <motion.div
                    key={item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.03 }}
                    className="aspect-[4/3] bg-accent rounded-xl flex flex-col items-center justify-center border border-border cursor-pointer hover:shadow-lg hover:border-primary/30 transition-all p-4"
                    onClick={() => setSelectedItem(item.title)}
                  >
                    <span className="text-accent-foreground/50 text-xs font-medium text-center mb-2">{item.category}</span>
                    <span className="text-accent-foreground/80 text-sm font-medium text-center">{item.title}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 z-[100] bg-foreground/80 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="bg-background rounded-2xl p-8 max-w-lg w-full relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button onClick={() => setSelectedItem(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
                <div className="aspect-video bg-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-accent-foreground/50 text-sm">Project Photo</span>
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground">{selectedItem}</h3>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </HelmetProvider>
  );
};

export default Gallery;
