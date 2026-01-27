"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TreatmentCard from "./TreatmentCard";
import { Treatment } from "@/lib/treatments-data";

interface TreatmentAccordionProps {
    title: string;
    treatments: Treatment[];
    defaultOpen?: boolean;
}

export default function TreatmentAccordion({
    title,
    treatments,
    defaultOpen = false
}: TreatmentAccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-100 rounded-2xl overflow-hidden mb-4 bg-white shadow-sm ring-1 ring-black/5">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-off-white transition-colors group"
            >
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <div className={`p-2 rounded-full bg-gray-50 group-hover:bg-accent/10 transition-colors ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-accent" />
                </div>
            </button>

            <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-8 pb-8 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {treatments.map((treatment, index) => (
                            <TreatmentCard
                                key={`${treatment.title}-${index}`}
                                title={treatment.title}
                                href={treatment.href}
                                description={treatment.description}
                                imageUrl={treatment.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
