import PageHeader from "@/components/layout/PageHeader";
import TreatmentAccordion from "@/components/sections/treatments/TreatmentAccordion";
import { TREATMENTS_DATA } from "@/lib/treatments-data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dental Treatments & Services | Queen Street Dental",
    description: "Explore our comprehensive range of dental treatments in Tottenham, from cleaning and prevention to cosmetic dentistry and oral surgery.",
};

export default function TreatmentsPage() {
    return (
        <main>
            <PageHeader
                title="Our Treatments"
            />

            <section className="py-20 bg-gray-50/50">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Comprehensive Dental Care for the Whole Family
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At Queen Street Dental, we provide a wide array of dental services designed to keep your smile healthy and beautiful. Explore our treatment categories below to find exactly what you need.
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {TREATMENTS_DATA.map((category, index) => (
                            <TreatmentAccordion
                                key={category.slug}
                                title={category.title}
                                treatments={category.treatments}
                                defaultOpen={index === 0}
                            />
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-white border border-accent/10 rounded-3xl text-center shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Need Help Choosing a Treatment?
                        </h3>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Our experienced team is here to guide you toward the best solution for your oral health needs. Contact us today to schedule a consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact-us"
                                className="px-8 py-4 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                            >
                                Schedule a Consultation
                            </a>
                            <a
                                href="tel:905-936-4663"
                                className="px-8 py-4 bg-white text-gray-700 font-semibold border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
                            >
                                Call (905) 936-4663
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
