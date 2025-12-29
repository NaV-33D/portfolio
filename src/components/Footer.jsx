
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful, functional, and user-friendly digital experiences that help businesses grow and succeed.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://linkedin.com/in/naveed-sayed" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:naveedsayed88@gmail.com" className="text-gray-500 hover:text-primary transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="overflow-hidden">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600 dark:text-gray-400 ">
                naveedsayed88@gmail.com
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                +91-9611***160
              </li>
              <li className="text-gray-600 dark:text-gray-400">
                Hubli, Karnataka, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Ahmed Naveed Sayed. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-600 dark:text-gray-400">
            {/* <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a> */}
            <h6 className="text-gray-600 dark:text-gray-400 text-sm">Made with 🖤 by Naveed</h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
