import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Acrux Code Solutions
            </h3>
            <p className="text-gray-400 max-w-xs">
              Transforming ideas into powerful digital experiences with
              cutting-edge web development solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#blog" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Website Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Web Applications</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">E-commerce Solutions</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Website Maintenance</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Digital Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Tech Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">info@acruxcode.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Acrux Code Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}