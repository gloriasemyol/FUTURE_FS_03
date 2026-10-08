import { useEffect, useState } from "react";
import Modal from "./Modal";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=60";

// Images are kept here too, so they show even if the database has no image field
const itemImages = {
  "Cappuccino": "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=60",
  "Cold Brew": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=60",
  "Caramel Macchiato": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=60",
  "Flat White": "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=60",
  "Mocha": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=60",
  "Hazelnut Latte": "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=500&q=60",
  "Butter Croissant": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=60",
  "Blueberry Muffin": "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&w=500&q=60",
  "Cinnamon Roll": "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=500&q=60",
  "Chocolate Danish": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=60",
  "Almond Biscotti": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=60",
  "Red Velvet Cupcake": "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=500&q=60",
  "Avocado Toast": "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=60",
  "Classic Omelette": "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=60",
  "Belgian Waffles": "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=60",
  "Granola Bowl": "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=500&q=60",
  "Eggs Benedict": "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=500&q=60",
  "French Toast": "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=60",
};

const getImage = (item) => item.image || itemImages[item.name] || FALLBACK_IMAGE;

function Menu() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/menu`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  const categories = ["Coffee", "Pastries", "Breakfast"];

  // Falls back once only, so a broken fallback can never loop forever
  const handleImageError = (e) => {
    if (e.target.dataset.fallbackUsed) return;
    e.target.dataset.fallbackUsed = "true";
    e.target.src = FALLBACK_IMAGE;
  };

  return (
    <section id="menu" className="py-16 px-6 bg-offwhite">
      <h2 className="text-3xl font-bold text-espresso text-center mb-6">Our Menu</h2>

      <div className="max-w-4xl mx-auto bg-coffee text-offwhite rounded-2xl p-6 text-center mb-12 shadow-md">
        <h3 className="text-2xl font-bold mb-2">🌟 Our Café Specials</h3>
        <p className="text-cream">
          Every item below is handcrafted in-house using our own special-blend beans
          and secret family recipes — you won't find these anywhere else.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-10 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-coffee mb-4">{cat}</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items
              .filter((item) => item.category === cat)
              .map((item) => (
                <div
                  key={item._id}
                  onClick={() => setSelected(item)}
                  className="bg-cream rounded-xl p-5 shadow-md border border-latte cursor-pointer hover:shadow-xl hover:-translate-y-1 transition"
                >
                  <div className="w-full h-36 mb-3 rounded-lg bg-latte/50 overflow-hidden">
                    <img
                      src={getImage(item)}
                      alt={item.name}
                      loading="eager"
                      onError={handleImageError}
                      className="w-full h-36 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-semibold text-espresso">{item.name}</h4>
                    <span className="text-coffee font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-espresso/80 line-clamp-2">{item.description}</p>
                  {item.dietaryTag && (
                    <span className="inline-block mt-2 text-xs bg-latte text-espresso px-2 py-1 rounded-full">
                      {item.dietaryTag}
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}

      <div className="max-w-4xl mx-auto bg-espresso text-offwhite rounded-2xl p-8 text-center mt-10 shadow-md">
        <h3 className="text-2xl font-bold mb-2">There's more where that came from! ☕</h3>
        <p className="text-cream">
          Visit us in person to explore our full seasonal menu — and enjoy an
          exclusive in-store discount available only to walk-in guests.
        </p>
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <img
            src={getImage(selected)}
            alt={selected.name}
            onError={handleImageError}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-espresso">{selected.name}</h3>
              <span className="text-coffee font-bold text-lg">₹{selected.price}</span>
            </div>
            <p className="text-espresso/80">{selected.description}</p>
          </div>
        </Modal>
      )}
    </section>
  );
}

export default Menu;