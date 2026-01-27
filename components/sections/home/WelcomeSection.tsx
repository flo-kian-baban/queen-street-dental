import QuickReadsGrid from "./QuickReadsGrid";
import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export default function WelcomeSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-7xl mx-auto px-6">
                {/* Single column layout, no sidebar */}
                <div className="flex flex-col gap-12">

                    <div className="space-y-8">
                        <header className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif text-charcoal font-bold">
                                Welcome to Queen Street Dental
                            </h1>
                            <h2 className="text-2xl text-accent font-medium">
                                Welcome to our practice!
                            </h2>
                        </header>

                        <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                            <p>
                                We are glad you have chosen us for your oral health needs and hope that every encounter with our office and staff exceeds your expectations. We know our patients have a choice in several different area dentists, so we go out of our way to deliver the level of dental care and compassion we would want for our own families.
                            </p>
                            <p>
                                Complete oral health may be our long-term goal, but our immediate priority is the patient comfort. We do our best to facilitate a relaxing, non-threatening office environment you would want to return again. This includes the implementation of multiple pain management techniques to prevent treatment discomfort and minimize dental anxiety. Whether your treatment requires a local anesthetic or a sedative to help you relax during your appointment, we have everything you need at our office.
                            </p>
                        </div>

                        {/* Video Embed */}
                        <div className="relative aspect-video w-2/3 mx-auto mt-16 rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                            <iframe
                                title="Welcome to Queen Street Dental"
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/1f1tJ5cZs9I?feature=oembed"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </div>

                        {/* NEW: Quick Reads Grid inserted here */}
                        <QuickReadsGrid />

                        <div className="space-y-4">
                            <h2 className="text-3xl font-serif text-charcoal font-bold">
                                Advanced Technology
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Dental technology is ever-changing and constantly evolving. We strive to stay relevant to the needs of our patients using advanced technology to diagnose and treat oral conditions and diseases. Our office features the most innovative oral health technology on the market that makes possible for us to provide unsurpassed patient care.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                We recently celebrated our 50th year serving the Tottenham and New Tecumseth community. Tens of thousands of patients have trusted us over the years with their dental needs. We do not take that trust for granted and our doctors and staff will tirelessly work to continue serving our community with unsurpassed dental care for many years to come.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Wheather you need a dental cleaning, a small filling or complex full mouth rehablitaton, we are confident we can provide you with the best dental care in the area.
                                <Link href={ROUTES.CONTACT_US} className="text-accent hover:text-accent-dark font-medium mx-1 underline decoration-accent/30 hover:decoration-accent">
                                    Contact
                                </Link>
                                our office at your earliest convenient to schedule you consultation. We look forward to serving you and your family for many years to come.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
