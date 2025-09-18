"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", text: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Form submitted:", form);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent!");
        setForm({ name: "", email: "", text: "" });
      } else {
        setStatus("❌ " + data.message);
      }
    } catch (err) {
      console.error("⚠️ Fetch failed:", err);
      setStatus("⚠️ Failed to send");
    }
  };

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-xl mx-auto bg-white/10 p-6 rounded-lg shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
          <textarea
            name="text"
            placeholder="Message"
            value={form.text}
            onChange={handleChange}
            className="border border-gray-300 p-2 w-full rounded"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            Send
          </button>
          {status && <p className="text-center mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
}
