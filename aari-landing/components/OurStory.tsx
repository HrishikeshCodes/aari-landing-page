'use client';
import React from 'react';
import Image from 'next/image';
import { Leaf, Heart, Shield } from 'lucide-react';

export default function OurStory() {
    return (
        <section id="our-story" className="bg-aari-light-1 py-12 md:py-16 lg:py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                        <div className="w-full max-w-md lg:max-w-lg">
                            <Image
                                src="/assets/cow-farmer.jpg"
                                alt="Farmer tending to cows"
                                width={600}
                                height={400}
                                className="rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Purity You Can Trust – Straight from Nature
                        </h2>
                        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
                            We believe in bringing you the purest products, sourced directly from nature. Every ingredient is carefully selected, free from harmful chemicals, synthetic additives, and artificial preservatives.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-green-100 rounded-full">
                                        <Leaf className="w-6 h-6 text-aari-dark-1" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Purely Organic</h4>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Crafted using all-natural ingredients with no harmful chemicals or additives.
                                </p>
                            </div>

                            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-red-100 rounded-full">
                                        <Heart className="w-6 h-6 text-aari-dark-1" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Handcrafted Excellence</h4>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Lovingly made in small batches for superior quality and uniqueness.
                                </p>
                            </div>

                            <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                                <div className="flex justify-center mb-3">
                                    <div className="p-3 bg-blue-100 rounded-full">
                                        <Shield className="w-6 h-6 text-aari-dark-1" />
                                    </div>
                                </div>
                                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Tradition & Purity</h4>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                    Prepared using age-old techniques and raw materials from Indian breed cows.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 text-center lg:text-left">
                            <button className="inline-block px-6 py-3 bg-aari-dark-1 text-white rounded-full font-medium hover:bg-aari-dark-2 transition-colors duration-300 shadow-lg hover:shadow-xl">
                                Learn More About Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}