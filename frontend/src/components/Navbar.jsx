function Navbar() {
  return (
    <nav className="bg-espresso text-offwhite px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide">Espresso Voila</h1>
      <ul className="hidden md:flex gap-6 text-cream">
        <li><a href="#home" className="hover:text-latte">Home</a></li>
        <li><a href="#menu" className="hover:text-latte">Menu</a></li>
        <li><a href="#about" className="hover:text-latte">About</a></li>
        <li><a href="#contact" className="hover:text-latte">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;