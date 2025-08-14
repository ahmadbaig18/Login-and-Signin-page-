import React from "react";

export default function Features() {
  const features = [
    { title: "Fast Performance", desc: "Experience blazing fast speed.", img: "https://source.unsplash.com/100x100/?speed" },
    { title: "Modern Design", desc: "Clean, fresh, and unique visuals.", img: "https://source.unsplash.com/100x100/?design" },
    { title: "Secure Data", desc: "Your privacy is our top priority.", img: "https://source.unsplash.com/100x100/?security" }
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition">
              <img src={f.img} alt={f.title} className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
