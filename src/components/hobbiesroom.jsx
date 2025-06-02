// src/pages/Hobbies.jsx
import React, { useState } from 'react'
import SimplyCarousel from 'react-simply-carousel'

const testimonials = [
  {
    quote: "Attention to detail transformed our workflow.",
    name: "Sarah Chen",
    designation: "Product Manager",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800",
  },
  {
    quote: "Implementation was seamless and results exceeded expectations.",
    name: "Michael Rodriguez",
    designation: "CTO",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800",
  },
  {
    quote: "This intuitive solution simplified complex tasks.",
    name: "Emily Watson",
    designation: "Ops Director",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?auto=format&fit=crop&w=800",
  },
]

export default function Hobbies() {
  const [active, setActive] = useState(0)

  return (
    <section id="hobbies" className="min-h-screen p-8 grid lg:grid-cols-2 gap-12">
      {/* … your Canvas 3D section goes here … */}

      {/* RIGHT: Lightweight Testimonials Carousel */}
      <div>
        <SimplyCarousel
          activeSlideIndex={active}
          onRequestChange={setActive}
          /* infinite, autoplay every 5s */
          infinite={true}
          autoplay={true}
          interval={5000}
          /* show one slide at a time */
          itemsToShow={1}
          speed={400}
          easing="linear"
          /* custom dots */
          renderDotsItem={({ isActive }) => (
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                margin: '0 4px',
                background: isActive ? '#333' : '#ccc',
              }}
            />
          )}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-4 bg-white rounded-lg shadow-lg flex flex-col items-center"
            >
              <img
                src={t.src}
                alt={t.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
                loading="lazy"
              />
              <p className="italic mb-2 text-gray-700">“{t.quote}”</p>
              <strong className="text-lg">{t.name}</strong>
              <span className="text-sm text-gray-500">{t.designation}</span>
            </div>
          ))}
        </SimplyCarousel>
      </div>
    </section>
  )
}
