"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate submission
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <div className="bg-white p-12 rounded-3xl border border-accent/20 shadow-xl shadow-accent/5 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-charcoal">Message Sent!</h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                    Thank you for reaching out to Queen Street Dental. We've received your message and will get back to you shortly.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="text-accent font-semibold hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-charcoal uppercase tracking-wider">First Name</label>
                    <input
                        required
                        type="text"
                        id="firstName"
                        placeholder="John"
                        className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-charcoal uppercase tracking-wider">Last Name</label>
                    <input
                        required
                        type="text"
                        id="lastName"
                        placeholder="Doe"
                        className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-charcoal uppercase tracking-wider">Email Address</label>
                    <input
                        required
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-charcoal uppercase tracking-wider">Phone Number</label>
                    <input
                        required
                        type="tel"
                        id="phone"
                        placeholder="(555) 000-0000"
                        className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-charcoal uppercase tracking-wider">Subject</label>
                <select
                    id="subject"
                    className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all text-charcoal"
                >
                    <option>General Inquiry</option>
                    <option>Book an Appointment</option>
                    <option>Emergency Care</option>
                    <option>Cosmetic Consultation</option>
                    <option>Other</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-charcoal uppercase tracking-wider">Your Message</label>
                <textarea
                    required
                    id="message"
                    rows={5}
                    placeholder="How can we help you today?"
                    className="w-full px-5 py-4 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-gray-400 resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group text-lg"
            >
                {status === "submitting" ? (
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                )}
            </button>
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest">
                Safe & Secure Communication
            </p>
        </form>
    );
}
