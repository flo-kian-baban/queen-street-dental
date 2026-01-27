"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/sections/contact/ContactForm";

export default function ContactUsPage() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2016/11/kid.jpg.optimal.jpg"
            />

            <section className="py-20 bg-off-white/50">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <header className="space-y-4 text-center">
                            <h2 className="text-sm font-bold text-accent uppercase tracking-widest">Get In Touch</h2>
                            <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
                                Contact Our Clinic
                            </h1>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                                We're here to answer your questions and help you start your journey to a healthier, more beautiful smile.
                            </p>
                        </header>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            {/* Left Column: Clinic Info */}
                            <div className="space-y-12">
                                <div className="space-y-8">
                                    <div className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-accent/30 transition-colors">
                                            <MapPin className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal uppercase text-sm tracking-widest mb-2">Our Location</h4>
                                            <p className="text-gray-600 leading-relaxed text-lg">
                                                PO BOX 190<br />
                                                22 Queen Street North<br />
                                                Tottenham, Ontario L0G 1W0
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-accent/30 transition-colors">
                                            <Phone className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal uppercase text-sm tracking-widest mb-2">Call or Fax</h4>
                                            <div className="space-y-1">
                                                <p className="text-lg">
                                                    <span className="text-gray-400 mr-2">Phone:</span>
                                                    <a href="tel:9059364663" className="text-charcoal font-semibold hover:text-accent transition-colors">(905) 936-4663</a>
                                                </p>
                                                <p className="text-lg">
                                                    <span className="text-gray-400 mr-2">Fax:</span>
                                                    <span className="text-gray-600 font-medium">(905) 936-2188</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 group">
                                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-accent/30 transition-colors">
                                            <Mail className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-charcoal uppercase text-sm tracking-widest mb-2">Email Us</h4>
                                            <p className="text-lg">
                                                <a href="mailto:info@queenstreetdental.ca" className="text-charcoal font-semibold hover:text-accent transition-colors">info@queenstreetdental.ca</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-10 rounded-3xl border border-accent/10 shadow-xl shadow-accent/5">
                                    <h3 className="text-2xl font-serif font-bold text-charcoal mb-6 border-b border-gray-100 pb-4">Office Hours</h3>
                                    <ul className="space-y-4 text-gray-600">
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Monday:</span> <span className="text-charcoal font-bold">8:30 AM – 9:00 PM</span></li>
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Tuesday:</span> <span className="text-charcoal font-bold">8:30 AM – 9:00 PM</span></li>
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Wednesday:</span> <span className="text-charcoal font-bold">9:00 AM – 5:00 PM</span></li>
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Thursday:</span> <span className="text-charcoal font-bold">8:30 AM – 9:00 PM</span></li>
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Friday:</span> <span className="text-charcoal font-bold">8:30 AM – 5:00 PM</span></li>
                                        <li className="flex justify-between items-center text-lg"><span className="font-medium">Saturday:</span> <span className="text-accent font-bold">Call for Appointment</span></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Column: Beautiful Custom Contact Form */}
                            <div className="lg:sticky lg:top-32">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map */}
            <div className="w-full h-[550px] bg-gray-100 border-t border-gray-200 grayscale-[0.3] hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5737.821772396144!2d-79.806048!3d44.023236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe7076816a6542538!2sQueen+Street+Dental!5e0!3m2!1sen!2sus!4v1503313424327"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Queen Street Dental Location"
                />
            </div>
        </main>
    );
}
