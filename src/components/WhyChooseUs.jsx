import React from "react";

// Example: use your uploaded image for visual (replace/import as needed in your app)
const exampleImg = "/mnt/data/ae7b0366-21b5-4ef6-b59a-48787635c236.png";

const features = [
  {
    id: 1,
    title: "Global Reach",
    text: "Strong international network connecting India to major markets — Asia, Europe, Middle East & Africa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Reliable Logistics",
    text: "End-to-end shipping, secure packaging and partnered carriers for on-time deliveries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h13l4 5v6H3z M16 7V3" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Customs & Compliance",
    text: "Complete documentation, HS-code expertise and swift customs clearance to avoid delays.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Quality Assurance",
    text: "Rigorous inspection and batch testing so buyers receive consistent, export-grade goods.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Transparent Pricing",
    text: "Competitive FOB/CIF quotes and clear cost breakdowns with no hidden fees.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Flexible Packaging",
    text: "Multiple packaging & labeling options (retail, bulk, OEM) to meet buyer specs and brand needs.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M7 3v4M17 3v4M5 21h14" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white/0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Why Choose RY International</h2>
          <p className="text-lg text-gray-600">
            We make international trade simple and reliable  from sourcing and inspection to shipping and customs.
            Partner with a team that understands global markets and Indian supply chains.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-6 lg:mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.id}
              className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={120 + i * 80}
            >
              <div className="flex-none w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                {f.icon}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
