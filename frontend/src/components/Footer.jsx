function Footer() {
  return (
    <footer className="bg-espresso text-cream py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-offwhite mb-3">Espresso Voila</h3>
          <p className="text-sm text-cream/80">
            A cozy neighborhood café serving freshly brewed coffee and artisanal
            pastries since 2019.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-offwhite mb-3">Get in Touch</h4>
          <p className="text-sm mb-1">📞 <a href="tel:+911234567890" className="hover:text-latte">Call Now: +91 12345 67890</a></p>
          <p className="text-sm mb-1">✉️ <a href="mailto:hello@espressovoila.com" className="hover:text-latte">hello@espressovoila.com</a></p>
          <p className="text-sm">💬 SMS: +91 12345 67890</p>
        </div>
        <div>
          <h4 className="font-semibold text-offwhite mb-3">Visit Us</h4>
          <p className="text-sm text-cream/80">
            123 Brew Street, Indiranagar<br />
            Bengaluru, Karnataka 560038<br />
            Open Daily: 7:00 AM – 9:00 PM
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-cream/60 mt-10 border-t border-cream/20 pt-6">
        &copy; {new Date().getFullYear()} Espresso Voila. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;