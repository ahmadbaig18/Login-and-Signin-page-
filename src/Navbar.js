import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MyUniqueSite</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-yellow-300">Features</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#services" className="hover:text-yellow-300">Services</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      </div>
    </nav>
  );
}