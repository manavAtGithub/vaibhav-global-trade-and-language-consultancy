import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import {CONTACT} from "@/config/contact"

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Vaibhav Global Trade & Language Consultancy, I'm ${form.name}.\n\nRequirement: ${form.requirement}\nMessage: ${form.message}\n\nPhone: ${form.phone}\nEmail: ${form.email}`
    );
    window.open(`https://wa.me/${CONTACT.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Request a quote from our team — we'll respond within 24 hours.
            Industrial consultancy, language services, or manpower solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@email.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <Label>Service Required</Label>
              <Select
                value={form.requirement}
                onValueChange={(v) => setForm({ ...form, requirement: v })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Translation & Interpretation">
                    Translation & Interpretation
                  </SelectItem>
                  <SelectItem value="Industrial Equipment">
                    Industrial Equipment
                  </SelectItem>
                  <SelectItem value="Manpower Supply">
                    Manpower Supply
                  </SelectItem>
                  <SelectItem value="Visa & FRRO">Visa & FRRO</SelectItem>
                  <SelectItem value="China Sourcing">China Sourcing</SelectItem>
                  <SelectItem value="Project Coordination">
                    Project Coordination
                  </SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your project or requirement..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full text-base">
              Send via WhatsApp
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif font-semibold text-xl text-foreground mb-4">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${CONTACT.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    WhatsApp: {CONTACT.whatsappNumber}
                  </span>
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-sm">Call: {CONTACT.phoneDisplay}</span>
                </a>
                <a
                  href="mailto:contact@vaibhavglobaltrade.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-sm">
                    contact@vaibhavglobaltrade.com
                  </span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-sm">India (Pan-India Operations)</span>
                </div>
              </div>
            </div>

            <div className="bg-accent rounded-xl p-6 border border-border">
              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                Quick Response Guaranteed
              </h3>
              <p className="text-sm text-muted-foreground">
                Our team responds to all inquiries within 24 hours. For urgent
                requirements, reach out directly via WhatsApp for the fastest
                response.
              </p>
            </div>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps?q=Indira+Chowk,+Naya+Tola+Colony,+Kali+Bagh+Colony,+Bettiah,+Bihar+845438&output=embed"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
