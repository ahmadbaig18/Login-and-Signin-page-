import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} MyUniqueSite. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-300">Facebook</a>
          <a href="#" className="hover:text-yellow-300">Twitter</a>
          <a href="#" className="hover:text-yellow-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
}