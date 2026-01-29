import Image from "next/image";
import Link from "next/link";
import { Facebook, MapPin } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
                    {/* Col 1: Logo & Copyright */}
                    <div className="text-center md:text-left space-y-4">
                        <Link href="/" className="inline-block">
                            <Image
                                src="https://s16736.pcdn.co/wp-content/themes/elvisfilo/assets/images/logo.png"
                                alt="Queen Street Dental"
                                width={200}
                                height={60}
                                className="w-auto h-26 md:mx-0 mx-auto"
                            />
                        </Link>
                        <p className="text-sm text-gray-400">© 2026 All Rights Reserved</p>
                    </div>

                    {/* Col 2: Useful Links */}
                    <div className="md:text-left text-center">
                        <h4 className="text-lg font-serif font-bold text-charcoal mb-6">Useful Links</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href={ROUTES.A_CLOSER_LOOK} className="hover:text-accent transition-colors">A Closer Look</Link></li>
                            <li><Link href={ROUTES.TREATMENTS} className="hover:text-accent transition-colors">Treatments</Link></li>
                            <li><Link href={ROUTES.TECHNOLOGY} className="hover:text-accent transition-colors">Technology</Link></li>
                            <li><Link href={ROUTES.PATIENT_RESOURCES} className="hover:text-accent transition-colors">Patient Resources</Link></li>
                            <li><Link href={ROUTES.PATIENT_FORMS} className="hover:text-accent transition-colors">Patient Forms</Link></li>
                            <li><Link href={ROUTES.CONTACT_US} className="hover:text-accent transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Col 3: Our Office */}
                    <div className="md:text-left text-center -ml-12">
                        <h4 className="text-lg font-serif font-bold text-charcoal mb-6">Our Office</h4>
                        <address className="not-italic text-gray-500 text-sm leading-relaxed space-y-2">
                            <p>Queen Street Dental</p>
                            <p>22 Queen Street North</p>
                            <p>Tottenham, Ontario L0G 1W0</p>
                            <div className="pt-2 space-y-1">
                                <p>
                                    <strong className="text-gray-700">Phone: </strong>
                                    <a href="tel:9059364663" className="hover:text-accent">(905) 936-4663</a>
                                </p>
                                <p>
                                    <strong className="text-gray-700">Fax: </strong>
                                    (905) 936-2188
                                </p>
                                <p>
                                    <strong className="text-gray-700">Email: </strong>
                                    <a href="mailto:info@queenstreetdental.ca" className="hover:text-accent">info@queenstreetdental.ca</a>
                                </p>
                            </div>
                        </address>
                    </div>

                    {/* Col 4: Office Hours */}
                    <div className="md:text-left text-center">
                        <h4 className="text-lg font-serif font-bold text-charcoal mb-6">Office Hours</h4>
                        <table className="w-full text-sm text-gray-500">
                            <tbody>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Monday:</td><td className="py-2 text-right">8:30 AM – 9:00 PM</td></tr>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Tuesday:</td><td className="py-2 text-right">8:30 AM – 9:00 PM</td></tr>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Wednesday:</td><td className="py-2 text-right">9:00 AM – 5:00 PM</td></tr>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Thursday:</td><td className="py-2 text-right">8:30 AM – 9:00 PM</td></tr>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Friday:</td><td className="py-2 text-right">8:30 AM – 5:00 PM</td></tr>
                                <tr className="border-b border-gray-100 last:border-0"><td className="py-2 text-left">Saturday:</td><td className="py-2 text-right">Call for Appointment</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    {/* Socials */}
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com/queenstreetdentaltottenham/" target="_blank" className="hover:text-accent"><Facebook className="w-4 h-4" /></Link>
                        <Link href="https://www.google.com/maps/place/Queen+Street+Dental/@44.023236,-79.806048,16z/data=!4m7!3m6!1s0x0:0xe7076816a6542538!8m2!3d44.0232357!4d-79.8060476!9m1!1b1?hl=en-US" target="_blank" className="hover:text-accent"><MapPin className="w-4 h-4" /></Link>
                    </div>

                    {/* Credits */}
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
                        <span>Designed by <a href="https://o360.com/" target="_blank" className="text-gray-600 hover:text-accent"></a></span>
                        <span className="hidden md:inline">|</span>
                        <span>Copyright © 2026 INC</span>
                        <span className="hidden md:inline">|</span>
                        <Link href={ROUTES.PRIVACY_POLICY} className="hover:text-accent">Privacy Policy</Link>
                        <span>|</span>
                        <Link href={ROUTES.TERMS_OF_USE} className="hover:text-accent">Terms of Use</Link>
                        <span>|</span>
                        <Link href={ROUTES.DISCLAIMER} className="hover:text-accent">Disclaimer</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
