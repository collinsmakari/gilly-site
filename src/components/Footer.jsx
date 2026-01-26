import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Pegrumme Africa</h3>
          <p className="text-sm leading-relaxed">
            At Pegrumme Africa, we combine integrity, expertise, and a
            client-first approach to help organizations build resilient,
            well-governed, and future-ready businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-cyan-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-cyan-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-cyan-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <span className="mr-2">Phone:</span>
          <div>
            <a
              href="tel:+254700000000"
              className="text-blue-500 hover:text-blue-700 hover:underline block"
            >
              +254 754 671 703
            </a>
            <a
              href="tel:+254711000000"
              className="text-blue-500 hover:text-blue-700 hover:underline block"
            >
              +254 741 621 080
            </a>
          </div>
          <p className="text-sm mb-3">
            Email:
            <br />
            <a
              href="mailto:info@pegrummeafrica.co.ke"
              className="text-blue-500 hover:text-blue-700 hover:underline block"
            >
              info@pegrummeafrica.co.ke
            </a>
          </p>

          <div className="flex gap-4 text-xl">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-cyan-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="mailto:info@pegrummeafrica.co.ke"
              aria-label="Email"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {year} Pegrumme Africa. All rights reserved.
      </div>
    </footer>
  );
}
