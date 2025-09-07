// components/Contact.tsx
"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  content: string;
  extra?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    content: "usmanbeeabubakar@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "",
    extra: "+234 703 459 6860",
  },
  {
    icon: MapPin,
    title: "Location",
    content: "Abuja, Nigeria",
  },
  {
    icon: Clock,
    title: "Availability",
    content: "Mon - Fri: 9AM - 5PM",
    extra: "Weekends: By appointment",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-16 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-600 after:mx-auto after:mt-4">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <item.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.content}</p>
                  {item.extra && <p className="text-gray-700">{item.extra}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
