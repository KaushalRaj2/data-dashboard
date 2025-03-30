import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="GrowthGear Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">Queries</a>
          <a href="#" className="text-white hover:text-gray-200">History</a>
          <a href="#" className="text-white hover:text-gray-200">About Us</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-200 text-white space-y-4 p-4">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">Queries</a>
          <a href="#" className="block">History</a>
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}
    </nav>
  );
}
