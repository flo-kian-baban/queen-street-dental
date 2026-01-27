import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import { ROUTES } from '@/lib/routes';

const technologies = [
    {
        title: "CEREC",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/CEREC-400x250.jpg.optimal.jpg",
        description: "CEREC has changed the way dentists perform patient restorations. CEREC stands for 'ceramic reconstruction.' It's a 3D imaging and camera assisted design center that allows dentists to take digital impressions of patient teeth and use the images to create a virtual...",
        href: ROUTES.CEREC
    },
    {
        title: "DIAGNOdent Laser by KaVo",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/DIAGNOdent-Laser-by-KaVo-400x250.jpg.optimal.jpg",
        description: "DIAGNOdent is the future of dental decay detection, providing a highly accurate and reliable means of identifying dental caries. With DIAGNOdent, dentists can discover the beginnings of decay before it has a chance to progress. DIAGNOdent is capable of detecting even...",
        href: ROUTES.DIAGNODENT
    },
    {
        title: "Air Abrasion",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/08/air-abrasion-400x250.jpg.optimal.jpg",
        description: "Restorative dentistry techniques have evolved over the years, with air abrasion being one of those micro-dentistry procedures that have been truly enhanced, from the traditional dental drills to using a new drill-less concept. Air abrasion is a dental procedure that...",
        href: ROUTES.AIR_ABRASION
    },
    {
        title: "Laser Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Laser-Dentistry-400x250.jpg.optimal.jpg",
        description: "For nearly two decades, lasers have been used for restorative and cosmetic purposes in dentistry. Today, lasers are approved for safety by the Food and Drug Administration, and they have become much more prevalent and standard in dental offices across the country....",
        href: ROUTES.LASER_DENTISTRY
    },
    {
        title: "Intra-Oral Camera",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Intra-Oral-Camera-400x250.jpg.optimal.jpg",
        description: "Dental imaging is a foundation of oral health diagnostics. Intra-oral cameras play a key role in office imaging, with many dentists using intra-oral cameras to detect the tiniest grooves, pits, cracks, and carries. Using a chairside unit and hand-held photographic...",
        href: ROUTES.INTRA_ORAL_CAMERA
    },
    {
        title: "VELscope Vx",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/velscope-400x250.jpg.optimal.jpg",
        description: "The VELscope VX is a groundbreaking technology that is changing the way dentists screen for oral cancer. This cordless device is used to painlessly and quickly examine the soft tissues of the mouth for signs of abnormal, pre-cancerous or cancerous cells. Dentists wear...",
        href: ROUTES.VELSCOPE_VX
    },
    {
        title: "Digital X-Rays",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Digital-X-Rays.jpg.optimal.jpg",
        description: "Digital x-rays are a more streamlined way of taking dental radiographs. Like traditional x-rays, digital versions provide an in-depth view of the structures of the mouth, helping dentists detect complications and develop effective modes of treatment. Digital x-rays...",
        href: ROUTES.DIGITAL_X_RAYS
    },
    {
        title: "Sedation Dentistry",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Sedation-Dentistry-400x250.jpg.optimal.jpg",
        description: "The use of sedation in dentistry has revolutionized the way patients view dental visits. Patients who once were afraid or anxious about even the most routine dental procedures now visit the dentist with confidence. Sedation is typically administered to healthy...",
        href: ROUTES.SEDATION_DENTISTRY
    },
    {
        title: "Low Level Lasers",
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/10/half-built-1-27-768x416.png",
        description: "Imagine a world where dental procedures were not only painless, but you could heal faster after any treatment, with minimal discomfort and swelling and not even need pharmaceuticals? This has been made possible with the use of low level laser therapy...",
        href: ROUTES.LOW_LEVEL_LASERS
    }
];

export default function TechnologyPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Technology"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/10/half-built-1-72.jpg.optimal.jpg"
            />

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech) => (
                            <div key={tech.href} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-accent hover:shadow-xl transition-all duration-300 flex flex-col">
                                <Link href={tech.href} className="relative aspect-[4/2.5] w-full overflow-hidden block">
                                    <Image
                                        src={tech.image}
                                        alt={tech.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </Link>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-xl font-serif font-bold text-primary-dark mb-3 group-hover:text-accent transition-colors">
                                        <Link href={tech.href}>{tech.title}</Link>
                                    </h2>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {tech.description}
                                    </p>
                                    <Link
                                        href={tech.href}
                                        className="inline-flex items-center text-primary font-bold text-xs tracking-widest uppercase hover:text-accent transition-colors"
                                    >
                                        LEARN MORE
                                        <span className="ml-2 transition-transform group-hover:translate-x-1">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
