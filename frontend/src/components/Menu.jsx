import { useEffect, useState } from "react";

function Menu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/menu")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Failed to load menu:", err));
  }, []);

  const categories = ["Coffee", "Pastries", "Breakfast"];

  return (
    <section id="menu" className="py-16 px-6 bg-offwhite">
      <h2 className="text-3xl font-bold text-espresso text-center mb-10">Our Menu</h2>

      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <h3 className="text-2xl font-semibold text-coffee mb-4">{cat}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {items
              .filter((item) => item.category === cat)
              .map((item) => (
                <div
                  key={item._id}
                  className="bg-cream rounded-xl p-5 shadow-md border border-latte"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-espresso">{item.name}</h4>
                    <span className="text-coffee font-bold">₹{item.price}</span>
                  </div>
                  <p className="text-sm text-espresso/80">{item.description}</p>
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
    </section>
  );
}

export default Menu;