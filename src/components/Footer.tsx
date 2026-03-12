import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-espresso text-espresso-foreground">
    <div className="container-cafe py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="K Cup Cafe" className="w-9 h-9 object-contain" />
            <span className="font-heading text-xl font-bold">K Cup <span className="text-secondary">Cafe</span></span>
          </div>
          <p className="text-sm text-espresso-foreground/70 leading-relaxed mb-6">
            Crafting moments of warmth, one cup at a time. Artisan coffee, fresh pastries, and a space to call your own.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-espresso-foreground/10 flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[{ to: "/menu", label: "Our Menu" }, { to: "/about", label: "Our Story" }, { to: "/reservation", label: "Reservations" }, { to: "/contact", label: "Contact" }].map(l => (
              <Link key={l.to} to={l.to} className="text-sm text-espresso-foreground/70 hover:text-secondary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-espresso-foreground/70">
            <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" /> 123 Blossom Lane, Garden District</div>
            <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-secondary transition-colors"><Phone className="w-4 h-4 text-secondary" /> (555) 123-4567</a>
            <a href="mailto:hello@kcupcafe.com" className="flex items-center gap-2 hover:text-secondary transition-colors"><Mail className="w-4 h-4 text-secondary" /> hello@kcupcafe.com</a>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4">Hours</h4>
          <div className="flex flex-col gap-2 text-sm text-espresso-foreground/70">
            <div className="flex justify-between"><span>Mon – Fri</span><span className="text-secondary">7AM – 9PM</span></div>
            <div className="flex justify-between"><span>Saturday</span><span className="text-secondary">8AM – 10PM</span></div>
            <div className="flex justify-between"><span>Sunday</span><span className="text-secondary">8AM – 8PM</span></div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-accent">Open Now</span>
          </div>
        </div>
      </div>

      <div className="border-t border-espresso-foreground/10 mt-12 pt-8 text-center text-xs text-espresso-foreground/50">
        © 2026 K Cup Cafe. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
