const images = [
  { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80", alt: "Cozy café interior seating" },
  { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80", alt: "Warm café ambience with wooden decor" },
  { src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=1600&q=80", alt: "Espresso Voila staff smiling in uniform" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80", alt: "Our chef pouring fresh coffee" },
  { src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80", alt: "Cafe counter and warm lighting" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-16 px-6 bg-offwhite">
      <h2 className="text-3xl font-bold text-espresso text-center mb-10">Our Gallery</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;