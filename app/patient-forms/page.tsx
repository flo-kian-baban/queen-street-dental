import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import Image from "next/image";
import { FileText, Download, ExternalLink } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export const metadata: Metadata = {
    title: "Patient Forms | Queen Street Dental",
    description: "New patients can download and fill out our registration and history forms to expedite their first visit to Queen Street Dental in Tottenham.",
};

const FORMS = [
    {
        title: "TMJ History Questionnaire",
        href: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/tmj-history-questionnaire.pdf",
        external: true
    },
    {
        title: "TMJ Diagram",
        href: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/tmj-diagram.pdf",
        external: true
    },
    {
        title: "New Patient Exam- Adult",
        href: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2018/01/Tottenham-Dental-medical-form.pdf",
        external: false
    },
    {
        title: "New Patient Exam- Child",
        href: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2018/01/Childs-Registration-and-History.pdf",
        external: false
    }
];

export default function PatientFormsPage() {
    return (
        <main>
            <PageHeader
                title="Patient Forms"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/Patient-Forms-1.png"
            />

            <section className="py-20 bg-white">
                <div className="container max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Content Side */}
                        <div className="lg:w-2/3">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                Patient Forms
                            </h1>

                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-12">
                                <p>
                                    If you are a new patient to our office, the attached files contain our new patient bundle with forms that will need to be filled out when you arrive at our office. Printing them, filling them out, and bringing them with you will allow us to attend to your dental needs quicker than completing them on your arrival. Thank you and please call our office if you have any questions.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {FORMS.map((form) => (
                                    <a
                                        key={form.title}
                                        href={form.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-5 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                                            <FileText className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-gray-900 group-hover:text-accent transition-colors">
                                                {form.title}
                                            </h3>
                                            <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-medium flex items-center">
                                                Download PDF
                                                <Download className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </p>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-accent ml-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar/CTA Side */}
                        <div className="lg:w-1/3">
                            <div className="sticky top-32 p-10 bg-off-white rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Need Help?
                                </h3>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    If you have any questions about the forms or need assistance, please don't hesitate to reach out to our team.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:905-936-4663"
                                        className="w-full flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
                                    >
                                        Call (905) 936-4663
                                    </a>
                                    <a
                                        href={ROUTES.CONTACT_US}
                                        className="w-full flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-bold border border-gray-200 rounded-full hover:bg-gray-50 transition-all"
                                    >
                                        Contact Us
                                    </a>
                                </div>

                                <div className="mt-10 pt-10 border-t border-gray-200">
                                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                                        Office Hours
                                    </h4>
                                    <div className="space-y-2 text-sm text-gray-600 font-medium">
                                        <div className="flex justify-between">
                                            <span>Mon, Tue, Thu</span>
                                            <span>8:30 AM – 9:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Wed, Fri</span>
                                            <span>8:30 AM – 5:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
