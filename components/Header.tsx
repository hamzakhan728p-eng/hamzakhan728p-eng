
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const NavLinks = ({ isMobile, closeMenu }: { isMobile?: boolean, closeMenu?: () => void }) => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Book Appointment', path: '/booking' },
    { name: 'Submit Requirements', path: '/requirements' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white transition-colors";
  const activeLinkClass = "bg-blue-600 text-white";
  const mobileLinkClass = "block py-2 text-base";
  const mobileActiveLinkClass = "text-blue-600 font-semibold";


  return (
    <>
      {links.map(link => (
        <NavLink
          key={link.name}
          to={link.path}
          onClick={closeMenu}
          className={({ isActive }) => 
            isMobile
            ? `${mobileLinkClass} ${isActive ? mobileActiveLinkClass : 'text-gray-700'}`
            : `${linkClass} ${isActive ? activeLinkClass : 'text-gray-600'}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </>
  );
};


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              RCM Solutions Experts
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLinks />
          </nav>
          <div className="hidden md:block">
             <Link to="/booking" className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600">
               Book Free Consultation
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks isMobile closeMenu={() => setIsOpen(false)}/>
            <div className="pt-4">
               <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600">
                 Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
