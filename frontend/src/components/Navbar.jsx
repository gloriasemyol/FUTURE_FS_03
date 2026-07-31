function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-espresso text-offwhite px-6 py-5 flex justify-between items-center shadow-lg">
      <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Welcome to Espresso Voila</h1>
      <ul className="hidden md:flex gap-8 text-cream text-lg">
        <li><a href="#home" className="hover:text-latte transition">Home</a></li>
        <li><a href="#menu" className="hover:text-latte transition">Menu</a></li>
        <li><a href="#gallery" className="hover:text-latte transition">Gallery</a></li>
        <li><a href="#about" className="hover:text-latte transition">About</a></li>
        <li><a href="#contact" className="hover:text-latte transition">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;