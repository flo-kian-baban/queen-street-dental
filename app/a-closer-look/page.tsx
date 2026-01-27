import React from "react";
import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";
import { ROUTES } from "@/lib/routes";

const sections = [
    {
        title: "Our Story",
        description: "Learn about the history and mission of Queen Street Dental.",
        href: ROUTES.OUR_STORY
    },
    {
        title: "Dr. Elvis Filo",
        description: "Meet Dr. Elvis Filo, one of our leading dental partners.",
        href: ROUTES.DR_ELVIS_FILO
    },
    {
        title: "Dr. Tony Donatelli",
        description: "Meet Dr. Tony Donatelli, serving the Tottenham community since 1994.",
        href: ROUTES.DR_TONY_DONATELLI
    },
    {
        title: "Meet The Staff",
        description: "Get to know the amazing team dedicated to your dental health.",
        href: ROUTES.MEET_THE_STAFF
    }
];

export default function ACloserLookPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="A Closer Look"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2016/11/tonywork3-1.png"
            />

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {sections.map((section) => (
                            <Link
                                key={section.href}
                                href={section.href}
                                className="block group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent hover:shadow-lg transition-all duration-300"
                            >
                                <h2 className="text-2xl font-serif font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
                                    {section.title}
                                </h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="flex items-center text-primary font-medium">
                                    EXPLORE
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
