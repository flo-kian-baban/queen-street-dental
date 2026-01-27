import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/lib/routes";

const SERVICES = [
    {
        title: "General Dentistry",
        description: "General dentistry encompasses a broad range of diseases and disorders of the oral and maxillofacial region",
        image: "https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/service-1.png",
        href: ROUTES.TREATMENTS,
    },
    {
        title: "Cosmetic Dentistry",
        description: "Your smile is the first impression that others have of you. It makes sense to want a bright, white, & healthy smile.",
        image: "https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/service-2.png",
        href: ROUTES.COSMETIC_DENTISTRY,
    },
    {
        title: "Implant Dentistry",
        description: "Surgical-grade root devices that support permanent tooth prosthetics that last a lifetime.",
        image: "https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/service-3.png",
        href: ROUTES.DENTAL_IMPLANTS,
    },
    {
        title: "Orthodontics",
        description: "Orthodontics brings teeth and jaws into thier ideal position for optimal oral health.",
        image: "https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/service-4.png",
        href: ROUTES.ORTHODONTICS,
    },
];

export default function ServicesGrid() {
    return (
        <section className="py-20 bg-off-white border-t border-b border-gray-100">
            <div className="container max-w-7xl mx-auto px-6 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {SERVICES.map((service, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <h3 className="text-xl font-serif font-bold text-charcoal mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-8 leading-relaxed text-sm flex-grow">
                                {service.description}
                            </p>
                            <Link href={service.href} className="mt-auto">
                                <div className="bg-white rounded-full p shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-accent/30 transition-all duration-300 transform group-hover:-translate-y-1">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={64}
                                        height={64}
                                        className="w-26 h-26 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
