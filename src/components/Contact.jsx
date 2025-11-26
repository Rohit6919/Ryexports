import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What products do you export from India?",
      answer: "We export a wide range of products including banana powder, guar gum powder, jaggery powder, onion powder, and many more agricultural and industrial products. We can also source custom products based on your requirements."
    },
    {
      id: 2,
      question: "What is your minimum order quantity (MOQ)?",
      answer: "Our MOQ varies by product, typically starting from 1 container (20ft/40ft). For custom orders or bulk requirements, we offer flexible MOQ options. Contact us to discuss your specific needs."
    },
    {
      id: 3,
      question: "How do you ensure product quality?",
      answer: "We maintain strict quality control with batch testing, third-party inspections, and proper certifications. All products are export-grade and meet international quality standards including FSSAI, ISO, and other relevant certifications."
    },
    {
      id: 4,
      question: "What shipping terms do you offer?",
      answer: "We offer flexible shipping terms including FOB, CIF, and CFR. We work with trusted logistics partners to ensure timely delivery and handle all documentation, customs clearance, and insurance requirements."
    },
    {
      id: 5,
      question: "Which countries do you export to?",
      answer: "We export to major markets across Asia, Europe, Middle East, Africa, and Americas. Our strong international network enables us to serve clients worldwide with efficient logistics and competitive pricing."
    },
    {
      id: 6,
      question: "Do you provide custom packaging and labeling?",
      answer: "Yes! We offer customized packaging solutions including retail packs, bulk packaging, private labeling, and OEM services to meet your brand requirements and market specifications."
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="contact" className="py-6 lg:py-12 bg-linear-to-br ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
          <h2 className="font-manrope font-extrabold text-4xl text-gray-900">
            Get In Touch
          </h2>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto" />
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: FAQs */}
          <div className="lg:col-span-2" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <FaChevronDown
                      className={`shrink-0 w-5 h-5 text-indigo-600 transition-transform duration-300 ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === faq.id ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Contact Methods */}
          <div className="lg:col-span-1" data-aos="fade-left">
            <div className="sticky top-6 space-y-4 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reach Out to Us</h3>
              
              {/* WhatsApp Card */}
              <a
                href="https://wa.me/+9737445861"
                target="_blank"
                rel="noopener noreferrer"
                className="block group w-full"
              >
                <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-green-500">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow transform group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-bold text-base">WhatsApp</h4>
                      <p className="text-gray-700 text-sm font-medium">+91 97374 45861</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:sales@ryexports.com"
                className="block group w-full"
              >
                <div className="relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-indigo-500">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-indigo-400 to-indigo-600 rounded-xl flex items-center justify-center shadow transform group-hover:scale-110 transition-transform">
                      <FaEnvelope className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-bold text-base">Email Us</h4>
                      <p className="text-gray-700 text-sm font-medium break-all">sales@ryexports.com</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
