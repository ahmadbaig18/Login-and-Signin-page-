import React from "react";

export default function Services() {
  const services = [
    { title: "Web Development", desc: "Custom sites with React & Tailwind.", img: "https://source.unsplash.com/100x100/?web" },
    { title: "UI/UX Design", desc: "Beautiful and functional interfaces.", img: "https://source.unsplash.com/100x100/?ui" },
    { title: "SEO Optimization", desc: "Rank higher and get more traffic.", img: "https://source.unsplash.com/100x100/?seo" }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={s.img} alt={s.title} className="mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
