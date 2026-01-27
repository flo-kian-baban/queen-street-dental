import Image from "next/image";
import Link from "next/link";
import { Clock, Phone, Facebook, MapPin } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function HeaderTopBar() {
    return (
        <div className="bg-white border-b border-gray-100 py-4">
            <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/logo.png"
                            alt="Queen Street Dental Logo"
                            width={250}
                            height={80}
                            className="w-auto h-16 md:h-20"
                            priority
                        />
                    </Link>
                </div>

                {/* Right Info */}
                <div className="flex flex-col md:flex-row items-center gap-6 text-sm font-medium text-charcoal">
                    {/* Appointment CTA */}
                    <Link
                        href={ROUTES.CONTACT_US}
                        className="flex items-center gap-2 hover:text-accent transition-colors group"
                    >
                        <Clock className="w-5 h-5 text-accent group-hover:text-accent-dark" />
                        <span>BOOK APPOINTMENT</span>
                    </Link>

                    {/* Phone */}
                    <Link
                        href="tel:9059364663"
                        className="flex items-center gap-2 hover:text-accent transition-colors group"
                    >
                        <Phone className="w-5 h-5 text-accent group-hover:text-accent-dark" />
                        <span>905-936-4663</span>
                    </Link>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://www.facebook.com/queenstreetdentaltottenham/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link
                            href="https://www.google.com/maps/place/Queen+Street+Dental/@44.023236,-79.806048,16z/data=!4m7!3m6!1s0x0:0xe7076816a6542538!8m2!3d44.0232357!4d-79.8060476!9m1!1b1?hl=en-US"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                            aria-label="Google Maps Location"
                        >
                            <MapPin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
