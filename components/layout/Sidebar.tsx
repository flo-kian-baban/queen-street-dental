import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function Sidebar() {
    const technologyLinks = [
        { label: "CEREC", href: ROUTES.CEREC },
        { label: "DIAGNOdent Laser by KaVo", href: ROUTES.DIAGNODENT },
        { label: "Air Abrasion", href: ROUTES.AIR_ABRASION },
        { label: "Laser Dentistry", href: ROUTES.LASER_DENTISTRY },
        { label: "Intra-Oral Camera", href: ROUTES.INTRA_ORAL_CAMERA },
        { label: "VELscope Vx", href: ROUTES.VELSCOPE_VX },
        { label: "Digital X-Rays", href: ROUTES.DIGITAL_X_RAYS },
        { label: "Low Level Lasers", href: ROUTES.LOW_LEVEL_LASERS },
        { label: "Sedation Dentistry", href: ROUTES.SEDATION_DENTISTRY },
    ];

    return (
        <aside className="space-y-10">
            {/* Quick Links */}
            <div className="bg-off-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                    Technology
                </h3>
                <nav>
                    <ul className="space-y-3">
                        {technologyLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-gray-600 hover:text-accent font-medium text-sm transition-colors flex items-center"
                                >
                                    <span className="w-1.5 h-1.5 bg-accent/30 rounded-full mr-3" />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* CTA */}
            <div className="bg-accent p-8 rounded-2xl text-white shadow-lg shadow-accent/20">
                <h3 className="text-xl font-bold mb-4">Request An Appointment</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    Our team is here to help you achieve your best smile. Contact us today to schedule your visit.
                </p>
                <Link
                    href={ROUTES.CONTACT_US}
                    className="block w-full text-center bg-white text-accent font-bold py-3 rounded-full hover:bg-off-white transition-colors"
                >
                    Book Now
                </Link>
            </div>
        </aside>
    );
}
