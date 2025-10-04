'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
    {
        img: '/assets/customer-images/cust-1.png',
        name: 'Rajesh Kumar',
        city: 'Mumbai',
        rating: 5,
        text: 'AARI Organics has transformed my daily routine. Their A2 ghee is pure and incredibly delicious. The soap collection is gentle on my skin and leaves it feeling refreshed.'
    },
    {
        img: '/assets/customer-images/cust-2.png',
        name: 'Priya Sharma',
        city: 'Delhi',
        rating: 5,
        text: 'The quality is exceptional! These products remind me of my grandmother\'s traditional recipes. I love that they use natural ingredients without any harmful chemicals.'
    },
    {
        img: '/assets/customer-images/cust-3.png',
        name: 'Vikram Patel',
        city: 'Bangalore',
        rating: 4,
        text: 'As a health-conscious individual, I appreciate AARI\'s commitment to organic and natural products. The packaging is also eco-friendly, which aligns with my values.'
    },
    {
        img: '/assets/customer-images/cust-4.png',
        name: 'Sunita Singh',
        city: 'Chennai',
        rating: 5,
        text: 'Wonderful experience with AARI. The products are handcrafted with love and it shows in the quality. Highly recommend to anyone looking for authentic organic products.'
    }
];

export default function Testimonials() {
    const ref = useRef<HTMLDivElement | null>(null);
    const scroll = (dir: 'left' | 'right') => {
        if (!ref.current) return;
        const w = ref.current.clientWidth;
        ref.current.scrollBy({ left: dir === 'left' ? -w / 2 : w / 2, behavior: 'smooth' });
    };

    return (
        <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                    Real experiences from our valued customers who have discovered the joy of natural living.
                </p>
            </div>

            <div className="relative bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Customer Experiences That Inspire Us</h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-2">Read authentic reviews from our satisfied customers</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-lg border border-gray-200 hover:border-aari-dark-1 hover:bg-aari-light-1 transition-colors duration-200"
                        >
                            <ChevronLeft size={20} className="text-gray-700" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-lg border border-gray-200 hover:border-aari-dark-1 hover:bg-aari-light-1 transition-colors duration-200"
                        >
                            <ChevronRight size={20} className="text-gray-700" />
                        </button>
                    </div>
                </div>

                <div ref={ref} className="flex gap-6 overflow-x-auto scrollbar-hide py-2 px-1">
                    {TESTIMONIALS.map((t, idx) => (
                        <div key={idx} className="min-w-[320px] sm:min-w-[400px] bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex-shrink-0 border border-gray-100">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 relative rounded-full overflow-hidden shadow-md">
                                        <Image src={t.img} alt={t.name} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">"{t.text}"</p>
                                    <div className="border-t border-gray-200 pt-3">
                                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{t.name}</h4>
                                        <p className="text-sm text-aari-dark-1">{t.city}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">4.8/5 average rating from 500+ happy customers</p>
                </div>
            </div>
        </section>
    );
}