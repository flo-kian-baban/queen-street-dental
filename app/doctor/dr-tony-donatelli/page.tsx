import React from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

export default function DrTonyDonatelliPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Dr. Tony Donatelli"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2016/11/tonywork3-1.png"
            />
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed font-sans">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-full md:w-1/3 flex-shrink-0 order-2 md:order-1">
                            <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden shadow-lg">
                                <Image
                                    src="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/10/half-built-1-90-240x300.jpg.optimal.jpg"
                                    alt="Dr. Tony Donatelli and family"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-2/3 order-1 md:order-2 space-y-6">
                            <p>
                                Dr. Tony Donatelli has been practicing dentistry in Tottenham since graduating from the University of Toronto in 1994.
                            </p>
                            <p>
                                He lives in Bolton with his wife, Lisa and their three children, who are all actively involved in the community through school and sports.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
