"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface TreatmentCardProps {
    title: string;
    href: string;
    description: string;
    imageUrl?: string;
}

export default function TreatmentCard({ title, href, description, imageUrl }: TreatmentCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-500 transform hover:-translate-y-1"
        >
            <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                    src={imageUrl || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400"}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <div className="flex flex-col flex-grow p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-300">
                    {title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto flex items-center text-accent font-semibold text-sm">
                    <span>Learn More</span>
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
