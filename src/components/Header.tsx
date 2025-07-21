import React, { useState } from 'react';
import { Menu, X, Search, ShoppingBag, User } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-emerald-700">ShroomTherapy</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="/webstore" className="text-gray-700 hover:text-emerald-600 transition-colors">Webstore</a>
            <a href="#blog" className="text-gray-700 hover:text-emerald-600 transition-colors">Blog</a>
            <a href="#directory" className="text-gray-700 hover:text-emerald-600 transition-colors">Directory</a>
            <a href="#events" className="text-gray-700 hover:text-emerald-600 transition-colors">Events</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500 cursor-pointer hover:text-emerald-600 transition-colors" />
            <ShoppingBag className="w-5 h-5 text-gray-500 cursor-pointer hover:text-emerald-600 transition-colors" />
            <User className="w-5 h-5 text-gray-500 cursor-pointer hover:text-emerald-600 transition-colors" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Home</a>
              <a href="/webstore" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Webstore</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Blog</a>
              <a href="#directory" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Directory</a>
              <a href="#events" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Events</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
