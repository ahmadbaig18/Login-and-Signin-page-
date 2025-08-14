import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://source.unsplash.com/500x400/?team,office"
          alt="About"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-4">
            We are a forward-thinking company, building unique web solutions for clients worldwide.
          </p>
          <button className="px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
