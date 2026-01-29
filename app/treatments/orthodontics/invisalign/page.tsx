import PageHeader from "@/components/layout/PageHeader";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Invisalign | Queen Street Dental",
    description: "Invisalign is an orthodontic appliance system used to inconspicuously treat crooked and crowded teeth in adults and teens. Achieve the smile you've always wanted with clear aligners.",
};

export default function InvisalignPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageHeader
                title="Invisalign"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/Invisalign.jpg.optimal.jpg"
            />

            <section className="py-20 ">
                <div className="container max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-26 items-start mb-20">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal">
                                Invisalign
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Invisalign is an orthodontic appliance system used to inconspicuously treat crooked and crowded teeth in adults and teens. This modern take on braces features a system of clear aligner trays that are worn at all times with the exception of during meals and when brushing or flossing. The trays are custom fitted to the teeth, making them virtually unnoticeable when laughing, talking, and eating with other people. Patients receive a sequence of trays, each of which is slightly different than the one before. The aligners provide a slight resistance to the teeth, forcing them to move into alignment over time. With Invisalign, adults and teens can achieve the smiles they’ve always wanted without feeling self-conscious about the mode of treatment.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-0xl">
                            <Image
                                src="/images/orthodontics/invisalign.png"
                                alt="Invisalign Clear Aligners"
                                fill
                                className="object-contain bg-transparent"
                                priority
                            />
                        </div>
                    </div>

                    <div className="bg-gray-50/80 border border-gray-100 rounded-3xl p-10 md:p-14 mb-20">
                        <div className="max-w-3xl mx-auto">
                            <h4 className="text-xl font-serif font-bold text-accent mb-6">
                                Did you know…
                            </h4>
                            <p className="text-lg text-gray-600 leading-relaxed italic">
                                wearing Invisalign is in no way as restrictive as traditional braces? Many adults opt for this system not only because it is discreet, but also because there is no need to change your diet to avoid foods that could damage braces. This is because the Invisalign system is free of braces and brackets, instead opting for a removable tray that can be taken out prior to meals. Also, Invisalign fits well into busy adult schedules, as there is no need to attend frequent visits for wire tightening. Most patients simply change to a new aligner tray every couple of weeks.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal text-center mb-12">
                            Frequently Asked Questions
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 max-w-4xl mx-auto">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-accent pl-6">
                                    Am I a candidate for Invisalign?
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-7">
                                    If you have crooked or crowded teeth that are embarrassing to you or otherwise preventing you from achieving optimal oral health, Invisalign could be the solution for you. Visit your Invisalign dentist for a complete consultation to find out if you could benefit from clear orthodontics.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-accent pl-6">
                                    What should I expect during my Invisalign treatment?
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-7">
                                    You will wear your aligners nearly all of the time, with the exception of about two hours per day. Invisalign treatments are different for everyone, but most patients can achieve their ideal smiles within one to two years. During that time, you can expect to make occasional dental visits to monitor your progress.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-gray-900 border-l-4 border-accent pl-6">
                                    Will I need any post-treatment care?
                                </h3>
                                <p className="text-gray-600 leading-relaxed pl-7">
                                    Following your treatment, you will no longer need to wear Invisalign trays. However, you will need to wear a retainer each day to help protect your new smile. It is also important to continue visiting your dentist for routine check-up and twice-yearly cleaning.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-10 bg-accent/5 border border-accent/10 rounded-3xl text-center shadow-sm">
                        <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">
                            Ready for Your New Smile?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Schedule a consultation today to see if Invisalign is the right choice for you. Our team is here to help you achieve the smile you've always dreamed of.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact-us"
                                className="px-10 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/20"
                            >
                                Book Appointment
                            </Link>
                            <a
                                href="tel:9059364663"
                                className="text-charcoal font-bold text-lg hover:text-accent transition-colors flex items-center gap-2"
                            >
                                <span className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </span>
                                (905) 936-4663
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
