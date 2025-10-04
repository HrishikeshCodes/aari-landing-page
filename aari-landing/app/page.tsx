import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import OurStory from '@/components/OurStory';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import React from 'react';



export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Navbar />
      <main className="mt-4">
        <Hero />
        <Products />
        <OurStory />
        <Testimonials />
        <div className="px-6 md:px-16 lg:px-24">
          <Contact />
        </div>
      </main>
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="container mx-auto text-center text-sm text-gray-500">© 2024 AARI Farms. All rights reserved.</div>
      </footer>
    </div>
  );
}