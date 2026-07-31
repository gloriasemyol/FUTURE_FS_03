const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

require("dotenv").config();
const mongoose = require("mongoose");
const MenuItem = require("./models/MenuItem");

const items = [
  // ☕ Coffee
  { name: "Cappuccino", description: "Rich espresso topped with velvety steamed milk foam, dusted with a whisper of cinnamon. A café classic done right.", price: 180, category: "Coffee", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80" },
  { name: "Cold Brew", description: "Slow-steeped for 18 hours for a smooth, low-acid, deeply bold flavor. Served over ice, no dilution needed.", price: 200, category: "Coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80" },
  { name: "Caramel Macchiato", description: "Espresso layered with vanilla-infused milk and finished with a generous drizzle of house-made caramel.", price: 220, category: "Coffee", image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Flat White", description: "A double shot of espresso with silky micro-foamed milk — smaller, stronger, and smoother than a latte.", price: 190, category: "Coffee", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80" },
  { name: "Mocha", description: "Espresso meets rich Belgian chocolate and steamed milk, topped with whipped cream and cocoa dust.", price: 230, category: "Coffee", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80" },
  { name: "Hazelnut Latte", description: "Smooth espresso and steamed milk sweetened with our house-roasted hazelnut syrup.", price: 210, category: "Coffee", image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" },

  // 🥐 Pastries
  { name: "Butter Croissant", description: "Laminated 24 times for maximum flake, baked fresh every morning until golden and shatter-crisp.", price: 120, category: "Pastries", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80" },
  { name: "Blueberry Muffin", description: "A soft, buttery muffin loaded with plump blueberries in every single bite, topped with a light sugar crust.", price: 140, category: "Pastries", image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=800&q=80" },
  { name: "Cinnamon Roll", description: "Soft, pillowy dough swirled with brown sugar and cinnamon, finished with a warm cream-cheese glaze.", price: 160, category: "Pastries", image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80" },
  { name: "Chocolate Danish", description: "Flaky pastry folded around a rich dark chocolate center, baked until deeply golden.", price: 150, category: "Pastries", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80" },
  { name: "Almond Biscotti", description: "Twice-baked for the perfect crunch, packed with toasted almonds — best enjoyed dipped in coffee.", price: 100, category: "Pastries", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80" },
  { name: "Red Velvet Cupcake", description: "A soft cocoa cupcake with a hint of red velvet tang, crowned with cream cheese frosting.", price: 170, category: "Pastries", image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=800&q=80" },

  // 🍳 Breakfast
  { name: "Avocado Toast", description: "Toasted sourdough topped with smashed avocado, chili flakes, and a squeeze of fresh lime.", price: 220, category: "Breakfast", dietaryTag: "Vegan", image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=800&q=80" },
  { name: "Classic Omelette", description: "Three farm-fresh eggs folded with herbs and cheese, served with buttered toast on the side.", price: 190, category: "Breakfast", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80" },
  { name: "Belgian Waffles", description: "Crisp on the outside, fluffy inside, served with maple syrup and fresh seasonal berries.", price: 240, category: "Breakfast", image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80" },
  { name: "Granola Bowl", description: "House-made granola layered with Greek yogurt, honey, and fresh fruit.", price: 200, category: "Breakfast", dietaryTag: "Vegan", image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=800&q=80" },
  { name: "Eggs Benedict", description: "Poached eggs and smoked ham over toasted English muffin, finished with silky hollandaise.", price: 260, category: "Breakfast", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=800&q=80" },
  { name: "French Toast", description: "Thick brioche slices soaked in vanilla custard, pan-fried golden, dusted with powdered sugar.", price: 210, category: "Breakfast", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80" },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
  await MenuItem.deleteMany();
  await MenuItem.insertMany(items);
  console.log(`✅ ${items.length} menu items seeded!`);
  mongoose.disconnect();
});