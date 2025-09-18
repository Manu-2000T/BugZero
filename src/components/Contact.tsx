"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", text: "" });
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("🚀 Form submitted:", form);

    setIsLoading(true);
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", text: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("❌ " + (data.message || "Failed to send message"));
      }
    } catch (err) {
      console.error("⚠️ Fetch failed:", err);
      setStatus("⚠️ Network error - please try again");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailClick = () => {
    window.location.href =
      "mailto:mani@bugzero.in?subject=Testing Services Inquiry&body=Hello BugZero Team,%0D%0A%0D%0AI am interested in your software testing services.%0D%0A%0D%0APlease provide more information about:%0D%0A- Your testing packages%0D%0A- Pricing details%0D%0A- Timeline for my project%0D%0A%0D%0AThank you!";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+918310345400";
  };

  return (
    <section id="contact" className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold heading-gradient mb-6">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to ensure your software is bug-free? Our testing experts are
            here to help. Get a free consultation and detailed project estimate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Lets Start a Conversation
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you need a one-time audit or ongoing testing support,
                we are here to help. Our team of expert QA engineers will work
                with you to create a testing strategy that fits your timeline
                and budget.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-colors group cursor-pointer"
                onClick={handleEmailClick}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-blue-600/30 transition-all">
                  <HiMail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email Us</h4>
                  <p className="text-accent-primary hover:text-accent-secondary transition-colors font-medium">
                    mani@bugzero.in
                  </p>
                  <p className="text-gray-400 text-sm">Click to send us an email</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-colors group cursor-pointer"
                onClick={handlePhoneClick}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center group-hover:from-green-500/30 group-hover:to-green-600/30 transition-all">
                  <HiPhone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-accent-primary hover:text-accent-secondary transition-colors font-medium">
                    +91 8310345400
                  </p>
                  <p className="text-gray-400 text-sm">
                    Mon-Fri, 9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                  <HiLocationMarker className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-300">Bengaluru, Karnataka, India</p>
                  <p className="text-gray-400 text-sm">Serving clients globally</p>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                  <HiClock className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Response Time</h4>
                  <p className="text-gray-300">Within 24 hours</p>
                  <p className="text-gray-400 text-sm">Usually much faster!</p>
                </div>
              </motion.div>
            </div>

            {/* Founders Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl p-6 border border-white/10 mt-12"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Meet the Founders
              </h4>
              <p className="text-gray-300 leading-relaxed">
                BugZero was founded by passionate QA engineers who believe every
                product deserves to be bug-free. With 10+ years of experience in
                testing across industries, we’re committed to delivering
                reliable and high-quality results.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary"
              />
              <textarea
                name="text"
                value={form.text}
                onChange={handleChange}
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-primary resize-vertical"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full py-3 disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
              {status && <p className="text-gray-300 text-sm mt-2">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
