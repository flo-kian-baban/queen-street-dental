"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

const SLIDES = [
    {
        id: 0,
        heading: "Queen Street Dental",
        subheading: "GENERAL, COSMETIC, & IMPLANT DENTISTRY",
        text: "Tottenham’s most trusted dental team for over 50 years",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/slide-1.png",
    },
    {
        id: 1,
        heading: "Queen Street Dental",
        subheading: "GENERAL, COSMETIC, & IMPLANT DENTISTRY",
        text: "Tottenham’s most trusted dental team for over 50 years",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/slide-2.png",
    },
    {
        id: 2,
        heading: "Queen Street Dental",
        subheading: "GENERAL, COSMETIC, & IMPLANT DENTISTRY",
        text: "Tottenham’s most trusted dental team for over 50 years",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/Elviscerec2-e1488565086949.jpg.optimal.jpg",
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

    return (
        <div className="relative h-[500px] md:h-[500px] w-full overflow-hidden bg-gray-900">
            {SLIDES.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image */}
                    <div className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt="Dental Office"
                            fill
                            className="object-cover opacity-60"
                            priority={index === 0}
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container max-w-4xl px-6 text-center text-white">
                            <h1 className="text-3xl md:text-7xl font-serif font-bold mb-2 tracking-wide fade-in-up">
                                {slide.heading}
                            </h1>
                            <h2 className="text-sm md:text-lg uppercase tracking-[0.2em] mb-6 text-gray-200 font-medium">
                                {slide.subheading}
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-gray-100 font-light">
                                {slide.text}
                            </p>

                            <Link
                                href={ROUTES.CONTACT_US}
                                className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-semibold tracking-wider transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                BOOK APPOINTMENT
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/50 hover:text-white transition-colors bg-black/20 hover:bg-black/40 rounded-full"
                aria-label="Next slide"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-accent scale-110" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
