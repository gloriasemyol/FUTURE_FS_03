const reviews = [
  { name: "Grace Thomas", text: "Best cappuccino in the city, hands down. The ambiance is so cozy!" },
  { name: "Joseph Mathew", text: "Their croissants are unbelievably fresh. I come here every weekend." },
  { name: "Mary Fernandes", text: "Perfect spot to work from — great wifi, better coffee." },
  { name: "Peter D'Souza", text: "The cold brew here is unmatched. Smooth, never bitter." },
  { name: "Elizabeth George", text: "Cozy corner, warm staff, and the cinnamon roll is to die for." },
  { name: "Andrew Pinto", text: "I've tried cafes all over the city — this one's still my favorite." },
  { name: "Rachel Abraham", text: "Espresso Voila has genuinely become part of my morning routine." },
  { name: "Matthew Correia", text: "Loved the eggs benedict! Will absolutely be back for more." },
  { name: "Sarah Jacob", text: "Such a peaceful place to read a book with a good coffee." },
  { name: "Thomas Rodrigues", text: "The staff remembered my order the second time I visited. Incredible." },
  { name: "Anna Kurian", text: "Their granola bowl is my go-to healthy breakfast now." },
  { name: "David Alvares", text: "Great music, great coffee, even better pastries. Highly recommend." },
];

function Testimonials() {
  return (
    <section className="py-16 px-6 bg-coffee text-offwhite">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-espresso/40 rounded-xl p-6 border border-latte/20 flex flex-col justify-between shadow-sm">
            <div>
              <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
              <p className="italic mb-4 text-cream/90">"{r.text}"</p>
            </div>
            <p className="text-latte font-semibold text-sm">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;