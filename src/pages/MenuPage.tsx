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
import americanoImg from "@/assets/menu/americano.jpg";
import cappuccinoImg from "@/assets/menu/cappuccino.jpg";
import irishCoffeeImg from "@/assets/menu/irish-coffee.jpg";
import affogatoImg from "@/assets/menu/affogato.jpg";
import cortadoImg from "@/assets/menu/cortado.jpg";
import vietnameseImg from "@/assets/menu/vietnamese-coffee.jpg";
import hazelnutLatteImg from "@/assets/menu/hazelnut-latte.jpg";
import espressoTonicImg from "@/assets/menu/espresso-tonic.jpg";

import matchaImg from "@/assets/menu/matcha.jpg";
import chaiImg from "@/assets/menu/chai.jpg";
import earlGreyImg from "@/assets/menu/earl-grey.jpg";
import jasmineGreenImg from "@/assets/menu/jasmine-green.jpg";
import rooibosImg from "@/assets/menu/rooibos.jpg";
import cuttingChaiImg from "@/assets/menu/cutting-chai.jpg";
import peachTeaImg from "@/assets/menu/peach-tea.jpg";
import chamomileImg from "@/assets/menu/chamomile.jpg";
import roseCardamomImg from "@/assets/menu/rose-cardamom.jpg";
import lemonGingerImg from "@/assets/menu/lemon-ginger.jpg";
import turmericLatteImg from "@/assets/menu/turmeric-latte.jpg";
import hibiscusImg from "@/assets/menu/hibiscus.jpg";

import avocadoToastImg from "@/assets/menu/avocado-toast.jpg";
import granolaImg from "@/assets/menu/granola.jpg";
import paniniImg from "@/assets/menu/panini.jpg";
import bruschettaImg from "@/assets/menu/bruschetta.jpg";
import garlicBreadImg from "@/assets/menu/garlic-bread.jpg";
import hummusImg from "@/assets/menu/hummus.jpg";
import clubSandwichImg from "@/assets/menu/club-sandwich.jpg";
import falafelWrapImg from "@/assets/menu/falafel-wrap.jpg";
import quesadillaImg from "@/assets/menu/quesadilla.jpg";
import spinachSandwichImg from "@/assets/menu/spinach-sandwich.jpg";
import nachosImg from "@/assets/menu/nachos.jpg";
import pestoPastaImg from "@/assets/menu/pesto-pasta.jpg";

import tiramisuImg from "@/assets/menu/tiramisu.jpg";
import lavenderCroissantImg from "@/assets/menu/lavender-croissant.jpg";
import lavaCakeImg from "@/assets/menu/lava-cake.jpg";
import carrotCakeImg from "@/assets/menu/carrot-cake.jpg";
import berryTartImg from "@/assets/menu/berry-tart.jpg";
import banoffeeImg from "@/assets/menu/banoffee.jpg";
import cheesecakeImg from "@/assets/menu/cheesecake.jpg";
import brownieSundaeImg from "@/assets/menu/brownie-sundae.jpg";
import pannaCottaImg from "@/assets/menu/panna-cotta.jpg";
import kulfiImg from "@/assets/menu/kulfi.jpg";
import eclairImg from "@/assets/menu/eclair.jpg";
import churrosImg from "@/assets/menu/churros.jpg";

interface MenuItem {
  name: string;
  price: string;
  desc: string;
  bestseller?: boolean;
  image: string;
}

const menuData: Record<string, MenuItem[]> = {
  Coffee: [
    { name: "Espresso", price: "₹199", desc: "Bold and intense single-origin shot", image: espressoImg },
    { name: "Caramel Cloud Latte", price: "₹349", desc: "Velvety espresso with house-made caramel foam", bestseller: true, image: caramelLatteImg },
    { name: "Cold Brew", price: "₹299", desc: "24-hour steeped, smooth and refreshing", image: coldBrewImg },
    { name: "Flat White", price: "₹279", desc: "Rich microfoam with double ristretto", image: flatWhiteImg },
    { name: "Mocha", price: "₹329", desc: "Belgian chocolate meets espresso perfection", bestseller: true, image: mochaImg },
    { name: "Pour Over", price: "₹319", desc: "Hand-poured single-origin, rotated weekly", image: pourOverImg },
    { name: "Americano", price: "₹219", desc: "Smooth espresso with hot water, clean finish", image: americanoImg },
    { name: "Cappuccino", price: "₹269", desc: "Classic Italian style with thick velvety foam", image: cappuccinoImg },
    { name: "Irish Coffee", price: "₹399", desc: "Espresso with whiskey cream and brown sugar", image: irishCoffeeImg },
    { name: "Affogato", price: "₹349", desc: "Vanilla gelato drowned in hot espresso", image: affogatoImg },
    { name: "Cortado", price: "₹249", desc: "Equal parts espresso and steamed milk, smooth and balanced", image: cortadoImg },
    { name: "Vietnamese Coffee", price: "₹289", desc: "Strong drip coffee with sweetened condensed milk", image: vietnameseImg },
    { name: "Hazelnut Latte", price: "₹339", desc: "Creamy latte with roasted hazelnut syrup", image: hazelnutLatteImg },
    { name: "Espresso Tonic", price: "₹309", desc: "Chilled espresso over sparkling tonic water with lime", image: espressoTonicImg },
  ],
  Tea: [
    { name: "Matcha Latte", price: "₹319", desc: "Ceremonial-grade matcha, oat milk", bestseller: true, image: matchaImg },
    { name: "Chai Spice", price: "₹249", desc: "House-blended spices with steamed milk", image: chaiImg },
    { name: "Earl Grey", price: "₹219", desc: "Classic bergamot-infused black tea", image: earlGreyImg },
    { name: "Jasmine Green", price: "₹219", desc: "Delicate floral notes, light and refreshing", image: jasmineGreenImg },
    { name: "Rooibos Vanilla", price: "₹239", desc: "Caffeine-free with natural vanilla", image: rooibosImg },
    { name: "Masala Cutting Chai", price: "₹149", desc: "Authentic Indian spiced tea, strong and aromatic", bestseller: true, image: cuttingChaiImg },
    { name: "Iced Peach Tea", price: "₹269", desc: "Chilled black tea with fresh peach syrup", image: peachTeaImg },
    { name: "Chamomile Honey", price: "₹229", desc: "Calming chamomile with raw wildflower honey", image: chamomileImg },
    { name: "Rose Cardamom Tea", price: "₹259", desc: "Fragrant rose petals with crushed cardamom", image: roseCardamomImg },
    { name: "Iced Lemon Ginger", price: "₹239", desc: "Zesty ginger root with fresh lemon, served cold", image: lemonGingerImg },
    { name: "Turmeric Latte", price: "₹279", desc: "Golden milk with turmeric, cinnamon, and honey", bestseller: true, image: turmericLatteImg },
    { name: "Hibiscus Cooler", price: "₹249", desc: "Tangy hibiscus iced tea with mint and lime", image: hibiscusImg },
  ],
  Snacks: [
    { name: "Avocado Toast", price: "₹449", desc: "Sourdough, poached egg, chili flakes", bestseller: true, image: avocadoToastImg },
    { name: "Granola Bowl", price: "₹379", desc: "Greek yogurt, seasonal fruits, honey", image: granolaImg },
    { name: "Grilled Panini", price: "₹499", desc: "Mozzarella, pesto, sun-dried tomato", image: paniniImg },
    { name: "Bruschetta", price: "₹349", desc: "Fresh tomatoes, basil, balsamic glaze", image: bruschettaImg },
    { name: "Cheese Garlic Bread", price: "₹299", desc: "Toasted baguette with herb butter and mozzarella", image: garlicBreadImg },
    { name: "Hummus Platter", price: "₹399", desc: "Creamy hummus with pita chips and veggies", image: hummusImg },
    { name: "Club Sandwich", price: "₹429", desc: "Triple-layered with chicken, egg, and veggies", image: clubSandwichImg },
    { name: "Falafel Wrap", price: "₹379", desc: "Crispy falafel with tahini and fresh salad", image: falafelWrapImg },
    { name: "Mushroom Quesadilla", price: "₹419", desc: "Sautéed mushrooms with melted cheese in a crispy tortilla", image: quesadillaImg },
    { name: "Spinach Corn Sandwich", price: "₹359", desc: "Creamy spinach-corn filling on multigrain bread", bestseller: true, image: spinachSandwichImg },
    { name: "Loaded Nachos", price: "₹449", desc: "Tortilla chips with salsa, jalapeños, cheese, and sour cream", image: nachosImg },
    { name: "Pesto Pasta Bowl", price: "₹479", desc: "Penne in basil pesto with cherry tomatoes and parmesan", image: pestoPastaImg },
  ],
  Desserts: [
    { name: "Tiramisu", price: "₹399", desc: "Classic Italian, mascarpone & espresso", bestseller: true, image: tiramisuImg },
    { name: "Lavender Honey Croissant", price: "₹249", desc: "Buttery layers with floral sweetness", image: lavenderCroissantImg },
    { name: "Chocolate Lava Cake", price: "₹449", desc: "Warm center, vanilla bean gelato", image: lavaCakeImg },
    { name: "Carrot Cake", price: "₹329", desc: "Cream cheese frosting, toasted walnuts", image: carrotCakeImg },
    { name: "Berry Tart", price: "₹349", desc: "Almond crust, pastry cream, fresh berries", image: berryTartImg },
    { name: "Banoffee Pie", price: "₹379", desc: "Banana, toffee, whipped cream on biscuit base", image: banoffeeImg },
    { name: "Cheesecake", price: "₹399", desc: "New York style with strawberry compote", bestseller: true, image: cheesecakeImg },
    { name: "Brownie Sundae", price: "₹429", desc: "Warm fudge brownie with ice cream and nuts", image: brownieSundaeImg },
    { name: "Mango Panna Cotta", price: "₹359", desc: "Silky Italian custard with Alphonso mango coulis", image: pannaCottaImg },
    { name: "Pistachio Kulfi", price: "₹249", desc: "Traditional Indian frozen dessert with crushed pistachios", image: kulfiImg },
    { name: "Chocolate Éclair", price: "₹299", desc: "Choux pastry filled with cream, topped with ganache", bestseller: true, image: eclairImg },
    { name: "Cinnamon Churros", price: "₹319", desc: "Crispy churros dusted with cinnamon sugar, chocolate dip", image: churrosImg },
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
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
              <p className="text-muted-foreground max-w-md mx-auto">Handcrafted drinks and freshly baked delights, made with love every day.</p>
            </div>
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12 flex-wrap px-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto"
            >
              {menuData[active].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden relative group"
                >
                  <div className="w-full h-36 sm:h-44 overflow-hidden">
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
