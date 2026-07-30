const reviews = [
  { name: "Ananya R.", text: "Best cappuccino in the city, hands down. The ambiance is so cozy!" },
  { name: "Rahul K.", text: "Their croissants are unbelievably fresh. I come here every weekend." },
  { name: "Meera S.", text: "Perfect spot to work from — great wifi, better coffee." },
];

function Testimonials() {
  return (
    <section className="py-16 px-6 bg-espresso text-offwhite">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-coffee/40 rounded-xl p-6">
            <p className="italic mb-3">"{r.text}"</p>
            <p className="text-latte font-semibold">— {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;