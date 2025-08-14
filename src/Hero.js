import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white pt-32 pb-20">
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <h2 className="text-5xl font-extrabold mb-4">Welcome to MyUniqueSite</h2>
        <p className="mb-6 max-w-xl">
          Fresh design, dynamic content, and your journey starts here—totally reimagined.
        </p>
        <button className="px-8 py-3 bg-yellow-300 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400">
          Get Started
        </button>
        <img
          src="https://source.unsplash.com/600x400/?technology,web"
          alt="Hero graphic"
          className="mt-10 w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
