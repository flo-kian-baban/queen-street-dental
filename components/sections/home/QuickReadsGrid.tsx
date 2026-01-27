import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";

interface QuickReadItem {
    title: string;
    image: string;
    link: string;
    caption: string;
}

const ITEMS: QuickReadItem[] = [
    {
        title: "Cosmetic Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/General-Dentistry-300x200.jpg.optimal.jpg.optimal.jpg",
        link: ROUTES.COSMETIC_DENTISTRY,
        caption: "Enhance your smile",
    },
    {
        title: "Implant Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/02/dental-implants-what-you-need-to-know.jpg.optimal.jpg",
        link: ROUTES.DENTAL_IMPLANTS,
        caption: "Dental implants",
    },
    {
        title: "Sleep Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/12/sleep-dentistry-small.jpg.optimal.jpg",
        link: ROUTES.SLEEP_DENTISTRY,
        caption: "Dental care without anxiety",
    },
    {
        title: "Preventative",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Cleaning-Consultation-300x199.jpg.optimal.jpg.optimal.jpg",
        link: ROUTES.FLUORIDE_PREVENTION,
        caption: "Regular exams and hygiene visits",
    },
    {
        title: "Full Mouth Rehabilitation",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/Full-mouth-rehab-300x138.jpg.optimal.jpg.optimal.jpg",
        link: ROUTES.FULL_MOUTH_REHAB,
        caption: "Improve function of your smile",
    },
];

export default function QuickReadsGrid() {
    return (
        <div className="py-12 border-t border-b border-gray-100 my-8">
            <h3 className="text-2xl font-serif text-charcoal font-bold mb-8 text-center md:text-left">
                Quick Reads
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ITEMS.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        className="group flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-accent/50 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5 flex flex-col flex-grow">
                            <h4 className="font-serif font-bold text-lg text-charcoal group-hover:text-accent transition-colors mb-2">
                                {item.title}
                            </h4>
                            <p className="text-sm text-gray-500 italic mb-4 flex-grow">
                                {item.caption}
                            </p>
                            <div className="flex items-center text-accent text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
