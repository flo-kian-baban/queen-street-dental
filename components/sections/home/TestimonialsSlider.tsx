"use client";

import { useState, useEffect } from "react";

const REVIEWS = [
    "“I have been going to this dental office my entire life and have never had a bad experience. The most friendly front office staff, hygienists and dentists. I would highly recommend anyone in the area looking for a dentist to go in and enjoy the experience that they provide. Very modern, relaxing and always seem to be on time with no waiting. ”",
    "“Driving to Tottenham from Toronto is very well worth it. Wouldn’t dream of going to anybody else. Dr.Filo has that magic touch, and staff is the best. Keep up a good work!.”",
    "“Great clinic, clean and high tech. Dr Filo knows his stuff and truly cares. I highly recommend him!”",
    "“Amazing service and always there for us. Words are hard to find to express the compassion and service Tony gives us. Such an amazing person and a true professional.”",
    "“Dr. Filo is very knowledgeable and friendly. He is very professional, explains procedures very well and he always makes you feel at ease.”",
    "“My visit was great…I was seen quickly and felt like all the staff was there to help. Dr. Ross was very quick and gentle and I felt reassured by his knowledge”",
    "“I have been a patient of Dr. Donatelli’s since I was 13 and I am now 31… I travel from the GTA to visit him and will not change dentists as I am very happy with the quality of service and care. Excellent doctor in character, professionalism, compassionate, understanding… he would not be my dentist otherwise!”",
    "” My son just had his first trip the dentist, and they were awesome!! So kind, and patient. They made my son feel so confident, he stayed calm the entire visit, and thanked everyone when he left. He’s 2 years old, this could’ve been a very stressful experience, and from the moment we walked in the door, the staff were so kind!! They made going to the “tooth dr” a very pleasant experience.”"
];

export default function TestimonialsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
        }, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white">
            <div className="container max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                    Everyone loves Queen Street Dental
                </h2>

                <div className="relative h-64 md:h-48 flex items-center justify-center">
                    {REVIEWS.map((review, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out px-4 py-8 pointer-events-none ${index === currentIndex
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-4"
                                }`}
                        >
                            <p className="text-lg md:text-xl text-gray-500 font-light italic leading-relaxed max-w-3xl">
                                {review}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {REVIEWS.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-accent w-6" : "bg-gray-200 hover:bg-gray-300"
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
