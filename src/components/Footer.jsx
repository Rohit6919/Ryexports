import React from 'react'
import logo from "../assets/Logo/RyExportlogo.png";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <section class="py-8 bg-gray-50 sm:py-12 lg:py-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-8 gap-x-12">
                    <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img class="w-30" src={logo} alt="Logo" />

                        <p class="text-base leading-relaxed text-gray-600">RY Exports offers reliable export/import solutions with a focus on quality, secure logistics, and transparent processes.</p>

                        <ul class="flex items-center space-x-3 mt-6">
                            <li>
                                <a href="https://www.facebook.com/share/1FkNdAUWpr/" target="_blank" rel="noopener noreferrer" title="Facebook" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-9 h-9 hover:bg-blue-600 focus:bg-blue-600">
                                    <FaFacebook class="w-5 h-5" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/ry__international?igsh=cDJwYXdzd3cyenJp" target="_blank" rel="noopener noreferrer" title="Instagram" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-9 h-9 hover:bg-pink-600 focus:bg-pink-600">
                                    <FaInstagram class="w-5 h-5" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Menu</p>

                        <ul class="mt-4 space-y-3">
                            <li>
                                <a href="#hero" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </a>
                            </li>

                            <li>
                                <a href="#about" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About Us </a>
                            </li>

                            <li>
                                <a href="#products" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Products </a>
                            </li>

                            <li>
                                <a href="#contact" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Contacts </a>
                            </li>
                        </ul>
                    </div>

                
                    <div class="col-span-2 md:col-span-1 lg:col-span-3 lg:pl-8">
                        <div class="flex items-start gap-3 lg:justify-end">
                            <FaMapMarkerAlt class="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                            <div>
                                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase mb-2">Our Address</p>
                                <address class="text-base text-gray-600 not-italic leading-relaxed">
                                    SHOP NO.33<br/>
                                    NAKSHATRA AVENUE<br/>
                                    OPP. KASHIBA COMPLEX<br/>
                                    ISROLI ROAD<br/>
                                    Isroli, Surat<br/>
                                    Gujarat - 394620
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="mt-8 mb-6 border-gray-200" />

                <p class="text-sm text-center text-gray-600">© Copyright 2025, All Rights Reserved by RyInternationals</p>
            </div>
        </section>

    )
}

export default Footer
