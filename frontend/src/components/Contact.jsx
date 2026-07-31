import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", message: "" });
  const [status, setStatus] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you! We'll get back to you soon. ☕");
        setForm({ name: "", phone: "", email: "", date: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("Something went wrong. Please try again.");
    }
  };

  const handleNewsletter = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      setNewsletterStatus(data.message || "Subscribed!");
      setNewsletterEmail("");
    } catch (err) {
      console.error("Newsletter error:", err);
      setNewsletterStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-cream">
      <h2 className="text-3xl font-bold text-espresso text-center mb-10">Visit Us</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-10">
        <iframe
          title="Espresso Voila Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.924534366333!2d77.62791183343272!3d12.973058432338192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e73437ad53%3A0xeeb3138ee2a8f716!2sTrueBrew%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1785490734657!5m2!1sen!2sin"
          className="w-full h-80 rounded-xl border border-latte"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        ></iframe>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} className="p-3 rounded-lg border border-latte bg-offwhite text-espresso" />
          <input type="tel" name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} className="p-3 rounded-lg border border-latte bg-offwhite text-espresso" />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="p-3 rounded-lg border border-latte bg-offwhite text-espresso" />
          <input type="datetime-local" name="date" value={form.date} onChange={handleChange} className="p-3 rounded-lg border border-latte bg-offwhite text-espresso" />
          <textarea name="message" placeholder="Special requests?" value={form.message} onChange={handleChange} className="p-3 rounded-lg border border-latte bg-offwhite text-espresso" rows="3"></textarea>
          <button type="submit" className="bg-coffee hover:bg-espresso text-offwhite py-3 rounded-lg font-medium transition">Reserve a Table</button>
          {status && <p className="text-sm text-espresso mt-2">{status}</p>}
        </form>
      </div>

      <div className="max-w-2xl mx-auto bg-espresso text-offwhite rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Stay in the Loop 💌</h3>
        <p className="text-cream mb-4 text-sm">Get notified about new menu drops and weekend offers.</p>
        <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email" required placeholder="you@example.com"
            value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)}
            className="p-3 rounded-lg text-espresso bg-offwhite flex-1 max-w-sm outline-none"
          />
          <button type="submit" className="bg-coffee hover:bg-latte hover:text-espresso text-offwhite px-6 py-3 rounded-lg font-medium transition">
            Subscribe
          </button>
        </form>
        {newsletterStatus && <p className="text-sm text-latte mt-3">{newsletterStatus}</p>}
      </div>
    </section>
  );
}

export default Contact;