import React from "react";

export default function Testimonials() {
  const testimonials = [
    { name: "John Doe", text: "Amazing service! Highly recommended.", img: "https://source.unsplash.com/100x100/?man,face" },
    { name: "Jane Smith", text: "The design exceeded my expectations!", img: "https://source.unsplash.com/100x100/?woman,face" }
  ];

  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white text-gray-900 p-6 rounded-lg shadow">
              <img src={t.img} alt={t.name} className="mx-auto mb-4 rounded-full" />
              <p className="italic">"{t.text}"</p>
              <h4 className="mt-4 font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
