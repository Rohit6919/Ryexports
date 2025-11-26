import React, { useEffect } from 'react';
import whoweare from "../assets/Whoweare.png";
// import containers from "../assets/containers.png";

const Whoweare = () => {
  

  return (
    <section id="about" className="py-6 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-8" data-aos="fade-up">
          <h2 className="font-manrope font-bold text-4xl text-black mb-4">
            About Us
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto" />
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div
            className="w-full lg:w-5/12"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <img
              className="w-full h-auto  object-cover"
              src={whoweare}
              alt="Who We Are"
            />
          </div>

          <div
            className="w-full lg:w-7/12 space-y-5"
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              RY International Export Import is a leading global trading company specializing in the
              export and import of a diverse range of products. With a strong commitment to quality,
              reliability, and customer satisfaction, we connect businesses worldwide with top-tier
              goods from India and beyond.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Our extensive network of suppliers and partners enables us to offer competitive pricing
              and timely delivery, making us a trusted partner in international trade.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We focus on streamlined logistics, robust documentation, and transparent communication
              to ensure smooth cross-border transactions for our clients.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Partner with us to expand your reach — whether you’re exporting quality products from
              India or importing specialized goods into the Indian market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
