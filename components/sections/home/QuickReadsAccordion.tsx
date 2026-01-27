"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QuickReadItem {
    title: string;
    image: string;
    link: string;
    caption: string;
    width: number;
    height: number;
}

const ITEMS: QuickReadItem[] = [
    {
        title: "Cosmetic Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/General-Dentistry-300x200.jpg.optimal.jpg.optimal.jpg",
        link: "/treatments/cosmetic-dentistry",
        caption: "Enhance your smile",
        width: 300,
        height: 200,
    },
    {
        title: "Implant Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/02/dental-implants-what-you-need-to-know.jpg.optimal.jpg",
        link: "/dental-implants",
        caption: "Dental implants",
        width: 212,
        height: 159,
    },
    {
        title: "Sleep Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/12/sleep-dentistry-small.jpg.optimal.jpg",
        link: "/treatments/sedation-dentistry/sleep-dentistry",
        caption: "Dental care without anxiety",
        width: 232,
        height: 160,
    },
    {
        title: "Preventative",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Cleaning-Consultation-300x199.jpg.optimal.jpg.optimal.jpg",
        link: "/fluoride-and-decay-prevention",
        caption: "Regular exams and hygiene visits",
        width: 249,
        height: 165,
    },
    {
        title: "Full Mouth Rehabilitation",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/Full-mouth-rehab-300x138.jpg.optimal.jpg.optimal.jpg",
        link: "/full-mouth-implant-rehabilitation",
        caption: "Improve function of your smile",
        width: 300,
        height: 138,
    },
];

export default function QuickReadsAccordion() {
    // First item open by default to match reference behavior
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-serif text-charcoal font-bold">Quick Reads</h2>
            </div>

            {ITEMS.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0">
                    <button
                        onClick={() => toggle(index)}
                        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors ${openIndex === index ? "bg-white text-accent" : "bg-white text-gray-700 hover:bg-gray-50"
                            }`}
                    >
                        <span className="font-medium text-sm uppercase tracking-wide">
                            {item.title}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-4 h-4 text-accent" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="p-5 bg-gray-50/50 flex flex-col items-center">
                            <Link href={item.link} className="block hover:opacity-90 transition-opacity">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                    className="rounded shadow-sm mb-3 object-cover"
                                />
                            </Link>
                            <p className="text-sm text-gray-500 italic text-center">
                                {item.caption}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
