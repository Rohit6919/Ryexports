import React, { useEffect, useState } from "react";
// Use local product images from the assets folder
// Use public folder paths for product images (handles spaces in filenames)
const bananapowder = "/Products/banana powder.png";
const guarGumpowder = "/Products/guar gum powder.png";
const jaggerypowder = "/Products/jaggery.png";
const onionpowder = "/Products/onion powder.png";

const products = [
  {
    id: 1,
    title: "Banana Powder",
    desc: "Premium quality banana powder for export",
    img: bananapowder,
    tag: "Food",
  },
  {
    id: 2,
    title: "Guar Gum Powder",
    desc: "High-quality guar gum powder for industrial use",
    img: guarGumpowder,
    tag: "Industrial",
  },
  {
    id: 3,
    title: "Jaggery Powder",
    desc: "Traditional Indian sweetener for export",
    img: jaggerypowder,
    tag: "Sweetener",
  },
  {
    id: 4,
    title: "Onion Powder",
    desc: "Premium onion powder, carefully processed",
    img: onionpowder,
    tag: "Spice",
  },
];

export default function Products() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  // AOS is initialized centrally in App.jsx

  const openModal = (product) => {
    setActive(product);
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="products" className="py-6 lg:py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8" data-aos="fade-up">
          <h2 className="font-manrope font-extrabold text-4xl text-gray-900">Our Products</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-28 h-1 rounded-full bg-linear-to-r from-indigo-600 to-purple-600" />
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of export-quality products — curated, tested and packaged with care.
          </p>
          <p className="mt-2 text-base text-indigo-600 font-medium">
            ✦ We take custom orders as per your requirements
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <article
              key={p.id}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transform transition-all duration-300 overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={idx * 80}
            >
              {/* Image area with consistent aspect ratio (slightly larger) */}
              <div className="relative aspect-4/4 bg-white flex items-center justify-center p-3">
                <img
                  src={p.img}
                  alt={p.title} 
                  loading="lazy"
                  className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  style={{ background: "transparent" }}
                />

                <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-12 bg-linear-to-t from-white to-white/0" />
              </div>

              {/* Text content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.desc}</p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => openModal(p)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition"
                    aria-label={`View ${p.title}`}
                  >
                    View
                  </button>

                  <a
                    href="#contact"
                    className="text-sm text-indigo-600 font-medium hover:underline"
                    aria-label={`Contact for ${p.title}`}
                  >
                    Enquiry
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {open && active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/50 transition-opacity" onClick={closeModal} />

          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden z-10"
            data-aos="zoom-in"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 flex items-center justify-center bg-gray-50">
                <img
                  src={active.img}
                  alt={active.title}
                  className="max-h-[640px] w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-semibold text-gray-900">{active.title}</h3>
                <p className="mt-3 text-gray-600">{active.desc}</p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                  >
                    Contact Sales
                  </a>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
                  >
                    Close
                  </button>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <p><strong>Packaging:</strong> 25kg / 50kg options</p>
                  <p className="mt-2"><strong>Origin:</strong> India</p>
                  <p className="mt-3 text-indigo-600 font-medium">✦ Custom orders available as per your requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
