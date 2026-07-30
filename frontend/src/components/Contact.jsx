import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thank you! We'll get back to you soon. ☕");
        setForm({ name: "", phone: "", date: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-cream">
      <h2 className="text-3xl font-bold text-espresso text-center mb-10">Visit Us</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Google Maps embed */}
        <iframe
          title="Espresso Voila Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104169.28805697369!2d149.0584280776027!3d-35.32361319715069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d426f4cdd29%3A0x34f406d67f98a4ec!2sThe%20Cupping%20Room!5e0!3m2!1sen!2sin!4v1785419114654!5m2!1sen!2sin"
          className="w-full h-80 rounded-xl border border-latte"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg border border-latte bg-offwhite text-espresso"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-lg border border-latte bg-offwhite text-espresso"
          />
          <input
            type="datetime-local"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="p-3 rounded-lg border border-latte bg-offwhite text-espresso"
          />
          <textarea
            name="message"
            placeholder="Special requests?"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg border border-latte bg-offwhite text-espresso"
            rows="3"
          ></textarea>
          <button
            type="submit"
            className="bg-coffee hover:bg-espresso text-offwhite py-3 rounded-lg font-medium transition"
          >
            Reserve a Table
          </button>
          {status && <p className="text-sm text-espresso mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;