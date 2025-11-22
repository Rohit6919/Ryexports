import React, { useEffect } from 'react';
import Header from './Header';
import Ship from "../assets/Container.png";
import { FaAngleRight } from 'react-icons/fa';
export default function HeroSection() {
    

    return (
        <>
            <section className="relative overflow-hidden ">
                {/* Decorative blurred shapes for depth */}

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">

                        {/* Content */}
                        <div
                            className="lg:w-3/5 text-center lg:text-left"
                            data-aos="fade-right"
                            data-aos-duration="900"
                        >
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-manrope text-gray-900 leading-tight">
                                <span className="block text-indigo-600">Connecting Worlds.</span>
                                <span className="block">Delivering <span className="text-indigo-600">Excellence</span></span>
                            </h1>

                            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
                                Your trusted partner in international trade — bridging India’s finest products to the world
                                and sourcing premium imports for the Indian market. Built on trust, speed and seamless logistics.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row sm:justify-start justify-center gap-4">
                                <a
                                    href="#products"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold text-lg shadow-lg transform transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                    data-aos="zoom-in"
                                    data-aos-delay="200"
                                    aria-label="Explore our global catalog"
                                >
                                    Explore Our Global Catalog
                                    <FaAngleRight className="ml-3" />
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay="350"
                                >
                                    Contact Sales
                                </a>
                            </div>

                            {/* Feature row */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
                                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">S</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">Secure Shipments</p>
                                        <p className="text-sm text-gray-500">End-to-end insurance & documentation.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="500">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">F</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">Fast Clearance</p>
                                        <p className="text-sm text-gray-500">Customs clearance handled quickly.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="600">
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">G</div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">Global Network</p>
                                        <p className="text-sm text-gray-500">Trusted partners across continents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div
                            className="lg:w-2/5 flex justify-center lg:justify-end"
                            data-aos="fade-left"
                            data-aos-duration="900"
                        >
                            <div className="relative w-full max-w-md">
                                <img
                                    src={Ship}
                                    alt="Cargo ship with containers representing export and import"
                                    loading="lazy"
                                    className="w-full h-auto object-contain rounded-2xl "
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
