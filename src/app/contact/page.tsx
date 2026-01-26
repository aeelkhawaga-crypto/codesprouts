"use client";

import { useState, FormEvent } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const mailtoLink = `mailto:smiles@codesprouts.ie?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
    }
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Have a question or want to get involved? We&apos;d love to hear from you!
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 ${errors.name ? "border-red-500" : "border-gray-300"
                    } focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 ${errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block font-medium text-gray-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`mt-2 block w-full rounded-lg border px-4 py-3 text-gray-900 ${errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-emerald-600 px-8 py-3 text-lg font-semibold text-white shadow-lg hover:bg-emerald-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href="mailto:smiles@codesprouts.ie"
                  className="mt-1 text-emerald-600 hover:text-emerald-700"
                >
                  smiles@codesprouts.ie
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">Follow Us</h3>
                <div className="mt-2 flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61551944964126"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">Visit Our Club</h3>
                <p className="mt-2 text-gray-600">
                  Code Sprouts CoderDojo<br />
                  UCD Science Centre East<br />
                  Belfield, Dublin 4<br />
                  D04 V1W8
                </p>
                <p className="mt-2 text-gray-600">
                  <strong>Wednesdays:</strong> 18:00 - 19:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
