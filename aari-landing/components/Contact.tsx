'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple form validation
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            alert('Please fill in all fields');
            return;
        }
        setStatus('sent');
        // Reset form after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <section id="contact" className="bg-gray-50 py-12 md:py-16 lg:py-20 rounded-2xl">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you. Feel free to reach out with any inquiries, feedback, or if you'd like to know more about our products!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name *
                                </label>
                                <input
                                    id="name"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                    placeholder="Enter your full name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aari-dark-1 focus:border-transparent transition-colors duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    id="email"
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                                    placeholder="Enter your email address"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aari-dark-1 focus:border-transparent transition-colors duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                                    placeholder="Tell us how we can help you..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aari-dark-1 focus:border-transparent transition-colors duration-200 resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-aari-dark-1 text-white py-3 px-6 rounded-lg font-medium hover:bg-aari-dark-2 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>

                        {status === 'sent' && (
                            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 font-medium">✓ Thank you! Your message has been received. We'll get back to you soon!</p>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-aari-dark-1 rounded-full">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Phone</h4>
                                        <p className="text-gray-600">Mon-Fday 9AM-6PM</p>
                                        <a href="tel:+1234567890" className="text-aari-dark-1 hover:text-aari-dark-2 font-medium">
                                            +91 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-aari-dark-1 rounded-full">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                                        <p className="text-gray-600">We'll respond within 24 hours</p>
                                        <a href="mailto:support@aari.com" className="text-aari-dark-1 hover:text-aari-dark-2 font-medium">
                                            support@aari.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-aari-dark-1 rounded-full">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Address</h4>
                                        <p className="text-gray-600">Visit our farm</p>
                                        <address className="text-gray-700 not-italic">
                                            123 Organic Farm Street<br />
                                            Chennai, Tamil Nadu 600001<br />
                                            India
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-aari-dark-1 rounded-2xl shadow-lg p-6 lg:p-8 text-white">
                            <h3 className="text-xl font-semibold mb-4">Why Choose AARI?</h3>
                            <ul className="space-y-3 text-sm lg:text-base">
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    100% Organic & Natural Products
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Traditional Artisan Methods
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Free Shipping on Orders Above $50
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                    Money-Back Guarantee
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}