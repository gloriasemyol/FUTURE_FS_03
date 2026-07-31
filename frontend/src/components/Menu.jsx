import { useEffect, useState } from "react";
import Modal from "./Modal";

function Menu() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/menu`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, [API_URL]);

  const categories = ["Coffee", "Pastries", "Breakfast"];

  const handleImageError = (e) => {
    e.target.src =
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80";
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
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={handleImageError}
                      className="w-full h-36 object-cover rounded-lg mb-3"
                    />
                  )}
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
            src={selected.image}
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