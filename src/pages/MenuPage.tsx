import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, ImageIcon } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  bestseller?: boolean;
}

const menuData: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Espresso", price: "$3.50", desc: "Bold and intense single-origin shot" },
    { name: "Caramel Cloud Latte", price: "$5.50", desc: "Velvety espresso with house-made caramel foam", bestseller: true },
    { name: "Cold Brew", price: "$4.75", desc: "24-hour steeped, smooth and refreshing" },
    { name: "Flat White", price: "$4.50", desc: "Rich microfoam with double ristretto" },
    { name: "Mocha", price: "$5.25", desc: "Belgian chocolate meets espresso perfection", bestseller: true },
    { name: "Pour Over", price: "$5.00", desc: "Hand-poured single-origin, rotated weekly" },
  ],
  Tea: [
    { name: "Matcha Latte", price: "$5.00", desc: "Ceremonial-grade matcha, oat milk", bestseller: true },
    { name: "Chai Spice", price: "$4.50", desc: "House-blended spices with steamed milk" },
    { name: "Earl Grey", price: "$3.75", desc: "Classic bergamot-infused black tea" },
    { name: "Jasmine Green", price: "$3.75", desc: "Delicate floral notes, light and refreshing" },
    { name: "Rooibos Vanilla", price: "$4.00", desc: "Caffeine-free with natural vanilla" },
  ],
  Snacks: [
    { name: "Avocado Toast", price: "$8.50", desc: "Sourdough, poached egg, chili flakes", bestseller: true },
    { name: "Granola Bowl", price: "$7.00", desc: "Greek yogurt, seasonal fruits, honey" },
    { name: "Grilled Panini", price: "$9.00", desc: "Mozzarella, pesto, sun-dried tomato" },
    { name: "Bruschetta", price: "$6.50", desc: "Fresh tomatoes, basil, balsamic glaze" },
  ],
  Desserts: [
    { name: "Tiramisu", price: "$6.50", desc: "Classic Italian, mascarpone & espresso", bestseller: true },
    { name: "Lavender Honey Croissant", price: "$4.25", desc: "Buttery layers with floral sweetness" },
    { name: "Chocolate Lava Cake", price: "$7.00", desc: "Warm center, vanilla bean gelato" },
    { name: "Carrot Cake", price: "$5.50", desc: "Cream cheese frosting, toasted walnuts" },
    { name: "Berry Tart", price: "$5.75", desc: "Almond crust, pastry cream, fresh berries" },
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
                  {/* Image placeholder */}
                  <div className="w-full h-40 bg-muted border-b border-border flex items-center justify-center">
                    <div className="text-center">
                      <ImageIcon className="w-8 h-8 text-muted-foreground/30 mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground/40">Add image</p>
                    </div>
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
