function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(59,37,25,0.35), rgba(59,37,25,0.35)), url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="text-offwhite px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Espresso Voila</h1>
        <p className="text-lg md:text-xl mb-6 text-cream">
          Freshly Brewed Coffee & Artisanal Pastries
        </p>

        <a
          href="#menu"
          className="bg-coffee hover:bg-espresso transition text-offwhite px-6 py-3 rounded-full font-medium inline-block"
        >
          View Digital Menu
        </a>
      </div>
    </section>
  );
}

export default Hero;