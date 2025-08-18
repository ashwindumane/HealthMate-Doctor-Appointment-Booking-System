import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { Linkedin, Instagram, Github } from 'lucide-react'; // 👈 icons

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="max-w-7xl mx-auto px-6 py-16">
      {/* Top block */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-gray-700">

        {/* Brand & mission */}
        <div className="md:col-span-2">
          <img
            src={assets.logo}
            alt="HealthMate"
            className="h-10 mb-4"
          />
          <p className="max-w-md text-gray-500 leading-relaxed">
            HealthMate streamlines access to quality healthcare by letting you discover, vet
            and book appointments with board-certified physicians in seconds—24/7, from any device.
          </p>
        </div>

{/* Company */}
<div>
  <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
  <ul className="space-y-2 text-gray-500">
    {[
      { label: "Home", path: "/" },
      { label: "About us", path: "/about" },
      { label: "Contact us", path: "/contact" },
      { label: "Privacy policy", path: "/privacy-policy" }, // ✅ add route if you create this page
    ].map(({ label, path }) => (
      <li
        key={label}
        className="hover:text-indigo-600 cursor-pointer transition-colors"
        onClick={() => {
          navigate(path);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {label}
      </li>
    ))}
  </ul>
</div>


        {/* Contact */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-gray-500">
            <li className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+919743214597" className="hover:text-indigo-600">+91 97432 14597</a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:support@healthmate.in" className="hover:text-indigo-600">support@healthmate.in</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={18} />
              <a
                href="https://www.instagram.com/ashwin_kshatriya_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                @ashwin_kshatriya_
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin size={18} />
              <a
                href="https://www.linkedin.com/in/ashwindumane/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                Ashwin Dumane
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github size={18} />
              <a
                href="https://github.com/ashwindumane"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600"
              >
                github.com/ashwindumane
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4" />

      {/* Copyright + GitHub Icon */}
      <div className="flex items-center justify-center gap-2 text-xs text-black -mb-12">
        <p>
          © {new Date().getFullYear()} HealthMate @ Designed & Developed By Ashwin Dumane
        </p>
        <a
          href="https://github.com/ashwindumane"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600"
        >
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
