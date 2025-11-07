
import React from 'react';
import { Link } from 'react-router-dom';

const TrustBadge = ({ text }: { text: string }) => (
  <div className="flex items-center text-sm">
    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
    <span>{text}</span>
  </div>
);

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for subscribing to RCM Industry Updates!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">RCM Solutions Experts</h3>
            <p className="text-gray-300 text-sm">Expert medical billing services to maximize your revenue and minimize hassle. We help you focus on patients, not paperwork.</p>
            <div className="flex space-x-4 mt-4">
              <TrustBadge text="HIPAA Compliant" />
              <TrustBadge text="SSL Secure" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/booking" className="hover:text-blue-400 transition-colors">Book a Consultation</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <span className="font-semibold w-8">Email:</span>
                <a href="mailto:rcm.solution.experts@gmail.com" className="hover:text-blue-400 transition-colors break-all">rcm.solution.experts@gmail.com</a>
              </li>
              <li className="flex items-start">
                <span className="font-semibold w-8">Phone:</span>
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                 <span className="font-semibold w-8">Hours:</span>
                <span>Mon-Fri, 9am-6pm EST</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-gray-200 mb-4">Get RCM Industry Updates</h3>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RCM Solutions Experts. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
