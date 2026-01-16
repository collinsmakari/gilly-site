import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            Gilly Consulting
          </h3>
          <p className="text-sm leading-relaxed">
            We help businesses grow through strategy, technology, and
            data-driven decision making. Trusted by startups and enterprises.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-cyan-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-cyan-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-cyan-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-cyan-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm mb-3">Email: info@gillyconsulting.com</p>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a
              href="mailto:info@gillyconsulting.com"
              aria-label="Email"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {year} Gilly Consulting. All rights reserved.
      </div>
    </footer>
  );
}
