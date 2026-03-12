import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import espressoImg from "@/assets/menu/espresso.jpg";
import caramelLatteImg from "@/assets/menu/caramel-latte.jpg";
import coldBrewImg from "@/assets/menu/cold-brew.jpg";
import flatWhiteImg from "@/assets/menu/flat-white.jpg";
import mochaImg from "@/assets/menu/mocha.jpg";
import pourOverImg from "@/assets/menu/pour-over.jpg";
import matchaImg from "@/assets/menu/matcha.jpg";
import chaiImg from "@/assets/menu/chai.jpg";
import earlGreyImg from "@/assets/menu/earl-grey.jpg";
import jasmineGreenImg from "@/assets/menu/jasmine-green.jpg";
import rooibosImg from "@/assets/menu/rooibos.jpg";
import avocadoToastImg from "@/assets/menu/avocado-toast.jpg";
import granolaImg from "@/assets/menu/granola.jpg";
import paniniImg from "@/assets/menu/panini.jpg";
import bruschettaImg from "@/assets/menu/bruschetta.jpg";
import tiramisuImg from "@/assets/menu/tiramisu.jpg";
import lavenderCroissantImg from "@/assets/menu/lavender-croissant.jpg";
import lavaCakeImg from "@/assets/menu/lava-cake.jpg";
import carrotCakeImg from "@/assets/menu/carrot-cake.jpg";
import berryTartImg from "@/assets/menu/berry-tart.jpg";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  bestseller?: boolean;
  image: string;
}

const menuData: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Espresso", price: "$3.50", desc: "Bold and intense single-origin shot", image: espressoImg },
    { name: "Caramel Cloud Latte", price: "$5.50", desc: "Velvety espresso with house-made caramel foam", bestseller: true, image: caramelLatteImg },
    { name: "Cold Brew", price: "$4.75", desc: "24-hour steeped, smooth and refreshing", image: coldBrewImg },
    { name: "Flat White", price: "$4.50", desc: "Rich microfoam with double ristretto", image: flatWhiteImg },
    { name: "Mocha", price: "$5.25", desc: "Belgian chocolate meets espresso perfection", bestseller: true, image: mochaImg },
    { name: "Pour Over", price: "$5.00", desc: "Hand-poured single-origin, rotated weekly", image: pourOverImg },
  ],
  Tea: [
    { name: "Matcha Latte", price: "$5.00", desc: "Ceremonial-grade matcha, oat milk", bestseller: true, image: matchaImg },
    { name: "Chai Spice", price: "$4.50", desc: "House-blended spices with steamed milk", image: chaiImg },
    { name: "Earl Grey", price: "$3.75", desc: "Classic bergamot-infused black tea", image: earlGreyImg },
    { name: "Jasmine Green", price: "$3.75", desc: "Delicate floral notes, light and refreshing", image: jasmineGreenImg },
    { name: "Rooibos Vanilla", price: "$4.00", desc: "Caffeine-free with natural vanilla", image: rooibosImg },
  ],
  Snacks: [
    { name: "Avocado Toast", price: "$8.50", desc: "Sourdough, poached egg, chili flakes", bestseller: true, image: avocadoToastImg },
    { name: "Granola Bowl", price: "$7.00", desc: "Greek yogurt, seasonal fruits, honey", image: granolaImg },
    { name: "Grilled Panini", price: "$9.00", desc: "Mozzarella, pesto, sun-dried tomato", image: paniniImg },
    { name: "Bruschetta", price: "$6.50", desc: "Fresh tomatoes, basil, balsamic glaze", image: bruschettaImg },
  ],
  Desserts: [
    { name: "Tiramisu", price: "$6.50", desc: "Classic Italian, mascarpone & espresso", bestseller: true, image: tiramisuImg },
    { name: "Lavender Honey Croissant", price: "$4.25", desc: "Buttery layers with floral sweetness", image: lavenderCroissantImg },
    { name: "Chocolate Lava Cake", price: "$7.00", desc: "Warm center, vanilla bean gelato", image: lavaCakeImg },
    { name: "Carrot Cake", price: "$5.50", desc: "Cream cheese frosting, toasted walnuts", image: carrotCakeImg },
    { name: "Berry Tart", price: "$5.75", desc: "Almond crust, pastry cream, fresh berries", image: berryTartImg },
  ],
};

const categories = Object.keys(menuData);

const MenuPage = () => {
  const [active, setActive] = useState("Coffee");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFav = (name: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  };

  return (
    <main className="pt-20">
      <section className="section-padding">
        <div className="container-cafe">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Our Menu</h1>
              <p className="text-muted-foreground max-w-md mx-auto">Handcrafted drinks and freshly baked delights, made with love every day.</p>
            </div>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat ? "text-secondary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {active === cat && (
                  <motion.div
                    layoutId="menu-tab"
                    className="absolute inset-0 bg-secondary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {menuData[active].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                  <div className="w-full h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-5">
                    {item.bestseller && (
                      <div className="inline-flex items-center gap-1 bg-secondary/10 text-secondary text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                        <Star className="w-3 h-3 fill-secondary" /> Best Seller
                      </div>
                    )}
                    <h3 className="font-heading text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-heading text-xl font-bold text-secondary">{item.price}</span>
                      <button
                        onClick={() => toggleFav(item.name)}
                        className="p-2 rounded-full hover:bg-muted transition-colors group/fav"
                        aria-label="Add to favorites"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all duration-300 ${
                            favorites.has(item.name) ? "fill-destructive text-destructive scale-110" : "text-muted-foreground group-hover/fav:text-destructive"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default MenuPage;
