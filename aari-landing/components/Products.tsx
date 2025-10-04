'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Product = { src: string; title: string; price: string };

const GHEE_PRODUCTS: Product[] = [
    { src: '/assets/ghee/image (1).jpg', title: 'Premium A2 Ghee', price: '$15.99' },
    { src: '/assets/ghee/image (2).jpg', title: 'Organic A2 Ghee', price: '$16.99' },
    { src: '/assets/ghee/image (3).jpg', title: 'Traditional A2 Ghee', price: '$17.99' },
    { src: '/assets/ghee/image (4).jpg', title: 'Pure A2 Ghee', price: '$18.99' },
    { src: '/assets/ghee/image.jpg', title: 'Herbal A2 Ghee', price: '$19.99' }
];

const SOAP_PRODUCTS: Product[] = [
    { src: '/assets/soap/image (10).jpg', title: 'Lavender Soap', price: '$5.99' },
    { src: '/assets/soap/image (11).jpg', title: 'Mint Soap', price: '$6.99' },
    { src: '/assets/soap/image (12).jpg', title: 'Rose Soap', price: '$7.99' },
    { src: '/assets/soap/image (7).jpg', title: 'Charcoal Soap', price: '$8.99' },
    { src: '/assets/soap/image (8).jpg', title: 'Herbal Soap', price: '$9.99' },
    { src: '/assets/soap/image (9).jpg', title: 'Neem Soap', price: '$6.49' }
];

function HorizontalCarousel({ items, title, description }: { items: Product[], title: string, description: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const scroll = (dir: 'left' | 'right') => {
        if (!ref.current) return;
        const width = ref.current.clientWidth;
        ref.current.scrollBy({ left: dir === 'left' ? -width / 2 : width / 2, behavior: 'smooth' });
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-1">{description}</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        aria-label="scroll left"
                        className="p-2 rounded-lg border border-gray-200 hover:border-aari-dark-1 hover:bg-aari-light-1 transition-colors duration-200"
                    >
                        <ChevronLeft size={18} className="text-gray-700" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        aria-label="scroll right"
                        className="p-2 rounded-lg border border-gray-200 hover:border-aari-dark-1 hover:bg-aari-light-1 transition-colors duration-200"
                    >
                        <ChevronRight size={18} className="text-gray-700" />
                    </button>
                </div>
            </div>

            <div ref={ref} className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-1">
                {items.map((p) => (
                    <div key={p.src} className="min-w-[200px] sm:min-w-[240px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 flex-shrink-0 border border-gray-100">
                        <div className="w-full h-32 sm:h-40 relative rounded-lg overflow-hidden">
                            <Image
                                src={p.src}
                                alt={p.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className="hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="mt-4">
                            <h4 className="font-medium text-gray-900 text-sm sm:text-base">{p.title}</h4>
                            <p className="text-sm sm:text-base text-aari-dark-1 font-semibold mt-1">{p.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Products() {
    return (
        <section id="products" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Premium Products</h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
                    Handcrafted with love using traditional methods and the finest organic ingredients.
                </p>
            </div>

            <div className="space-y-16 sm:space-y-20">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <HorizontalCarousel
                        items={GHEE_PRODUCTS}
                        title="A2 Cow Hand Churned Ghee"
                        description="Pure, traditional ghee made from A2 cow milk using age-old techniques."
                    />
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                    <HorizontalCarousel
                        items={SOAP_PRODUCTS}
                        title="Natural Soap Collection"
                        description="Handmade soaps with 100% pure oils and natural ingredients."
                    />
                </div>
            </div>
        </section>
    );
}