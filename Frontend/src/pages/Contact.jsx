import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
} from "lucide-react";
import { assets } from "../assets/assets";

function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center text-3xl font-semibold text-gray-700 mb-12">
        <p>
          CONTACT <span className="text-indigo-600">US</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          We’d love to hear from you. Reach us via phone, email, or send us a
          message.
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
        {/* Left - Image */}
        <div>
          <img
            src={assets.contact_image}
            alt="Contact"
            className="w-full rounded-2xl shadow-md"
          />
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col gap-8">
          {/* Office Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Our Office</h3>
            <p className="flex items-center gap-2 text-gray-600">
              <MapPin size={18} />
              A-791, Bandra Reclamation Rd, General Arunkumar Vaidya Nagar,
              Bandra West, Mumbai, Maharashtra 400050
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <a
                href="tel:+918675559760"
                className="hover:text-indigo-600 transition-colors"
              >
                +91 86755 59760
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Mail size={18} />
              <a
                href="mailto:BookingDoc@gmail.com"
                className="hover:text-indigo-600 transition-colors"
              >
                BookingDoc@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <Clock size={18} /> Mon - Sat : 9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Careers at HealthMate
            </h3>
            <p className="text-gray-500 mb-4">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition">
              Explore Jobs
            </button>
          </div>

          {/* Social Media */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://www.instagram.com/ashwin_kshatriya_"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition"
            >
              <Instagram size={20} /> Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ashwindumane/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        {/* Google Map → Lilavati Hospital */}
        <iframe
          title="Lilavati Hospital Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.6!2d72.8304!3d19.0507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c945a7c2b1f1%3A0x3f8d3b0a8a2b1b4f!2sLilavati%20Hospital%20and%20Research%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow-md"
        ></iframe>

        {/* Contact Form */}
        <form
          action="mailto:BookingDoc@gmail.com"
          method="post"
          encType="text/plain"
          className="flex flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-700">
            Send us a Message
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;