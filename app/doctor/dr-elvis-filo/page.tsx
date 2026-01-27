import React from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

export default function DrElvisFiloPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Dr. Elvis Filo"
                backgroundImage="" // Reusing a dental hero image as specific one wasn't found inline
            />
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="relative aspect-[3/4] w-full rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/elvis-filo.jpg.optimal.jpg"
                                    alt="Dr. Elvis Filo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 space-y-6 text-lg text-gray-700 leading-relaxed font-sans">
                            <p>
                                Dr. Elvis Filo became partner at Queen Street Dental in 2011 and has been serving the Tottenham community ever since. He is proud to provide up-to-date dentistry with the most advanced procedures for all our patients. He combines scientific diagnosis of dental problems with precise skill.
                            </p>
                            <p>
                                Dr. Filo holds an Honors BSc degree in Pharmacology from University of Toronto and Doctor of Dental Medicine from Case Western Reserve University in Cleveland. Dr. Filo has invested extensive training in the fields of cosmetic dentistry, implant dentistry, advanced dental surgery and full mouth rehabilitation. Dr. Filo has providing affordable implant solutions to our patients for over 10 years. He holds membership to numerous associations and dental clubs, constantly updating his knowledge in all fields of dentistry.
                            </p>
                            <p>
                                Elvis currently lives in Etobicoke with his wife Victoria and thier twin babies, Marcus and Alexandra. When not travelling, you can find Elvis cooking or at a Raptors game.  Feel free to contact Dr. Filo directly at <a href="mailto:elvis.filo@queenstreetdental.ca" className="text-primary hover:underline">elvis.filo@queenstreetdental.ca</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
