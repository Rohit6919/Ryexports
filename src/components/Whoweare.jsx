import React, { useEffect } from 'react';
import whoweare from "../assets/whoweare.png";
import containers from "../assets/containers.png";

const Whoweare = () => {
  

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-down">
          <h2 className="font-manrope font-bold text-4xl text-black mb-2 max-xl:text-center mt-2">
            About Us
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto" data-aos="zoom-in" data-aos-delay="120" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-10">
          <div
            className="lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="100"
          >
            <img
              className="w-full max-w-sm h-auto mx-auto lg:mx-0 rounded-md shadow-sm border border-gray-100 object-cover"
              src={containers}
              alt="Who We Are"
            />
          </div>

          <div
            className="lg:w-1/2 space-y-4"
            data-aos="fade-left"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <p className="text-gray-700 leading-relaxed">
              RY International Export Import is a leading global trading company specializing in the
              export and import of a diverse range of products. With a strong commitment to quality,
              reliability, and customer satisfaction, we connect businesses worldwide with top-tier
              goods from India and beyond.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our extensive network of suppliers and partners enables us to offer competitive pricing
              and timely delivery, making us a trusted partner in international trade.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We focus on streamlined logistics, robust documentation, and transparent communication
              to ensure smooth cross-border transactions for our clients.
            </p>

            <p className="text-gray-700 leading-relaxed">
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
