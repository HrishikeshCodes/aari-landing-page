'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const heroImages = ['/assets/finalghee_transparent.png', '/assets/ghee/image.jpg'];


export default function Hero() {
    const [idx, setIdx] = useState(0);


    useEffect(() => {
        const t = setInterval(() => setIdx((i) => (i + 1) % heroImages.length), 5000);
        return () => clearInterval(t);
    }, []);


    return (
        <section id="hero" className="pt-20 bg-gradient-to-b from-white to-aari-light-1">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
                            Discover the Essence of Natural Living
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-2xl">
                            At AARI Organics, we believe in the power of nature. Our premium, handmade products are crafted with care, using sustainable methods and pure ingredients to nurture both you and the planet.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#products" className="inline-block rounded-full px-6 py-3 bg-aari-dark-1 text-white font-medium shadow-lg hover:bg-aari-dark-2 transition-colors duration-300">
                                Explore Our Products
                            </a>
                            <a href="#our-story" className="inline-block rounded-full px-6 py-3 border-2 border-aari-dark-1 text-aari-dark-1 font-medium hover:bg-aari-dark-1 hover:text-white transition-colors duration-300">
                                Our Story
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] relative">
                            <Image
                                src={heroImages[idx]}
                                alt="product"
                                fill
                                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                                style={{ objectFit: 'contain' }}
                                className="drop-shadow-lg"
                                onError={(e) => {
                                    const el = e.currentTarget as HTMLImageElement;
                                    el.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}