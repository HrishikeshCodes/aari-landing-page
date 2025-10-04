'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/#products', label: 'Products' },
    { href: '/#our-story', label: 'Our Story' },
    { href: '/#contact', label: 'Contact' }
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="w-full fixed z-50 bg-white/95 backdrop-blur-md shadow-sm">
            <nav className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
                <Link href="/" className="flex items-center gap-2 sm:gap-3" >
                    <Image
                        src="/assets/logo/logo.png"
                        alt="AARI Farms Logo"
                        width={60}
                        height={60}
                        className="object-contain w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-gray-700 hover:text-aari-dark-1 font-medium transition-colors duration-200 relative group"
                        >
                            {l.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-aari-dark-1 transition-all duration-200 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        aria-label="Toggle menu"
                        onClick={() => setOpen((s) => !s)}
                        className="p-2 rounded-md border border-gray-200 hover:border-aari-dark-1 hover:bg-aari-light-1 transition-colors duration-200"
                    >
                        {open ? <X size={20} className="text-gray-700" /> : <Menu size={20} className="text-gray-700" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {open && (
                    <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden">
                        <div className="flex flex-col p-4 space-y-1">
                            {navLinks.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    className="py-3 px-3 rounded-md hover:bg-aari-light-1 hover:text-aari-dark-1 font-medium transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}