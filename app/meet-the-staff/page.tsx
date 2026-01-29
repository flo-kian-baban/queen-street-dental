"use client";

import React, { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

interface StaffMember {
    id: string;
    name: string;
    shortBio: string;
    fullBio: React.ReactNode;
    image: string;
}

const staffMembers: StaffMember[] = [
    {
        id: "susan",
        name: "Susan",
        shortBio: "Sue graduated from Fanshawe College as a Dental Hygienist in 2000. She has...",
        fullBio: (
            <p>
                <strong>Sue</strong> graduated from Fanshawe College as a Dental Hygienist in 2000.&nbsp; She has been working part time at Queen Street Dental since graduating.&nbsp; Sue grew up in Tottenham and still resides in the area with her husband and three children.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-1.jpg.optimal.jpg"
    },
    {
        id: "wendy",
        name: "Wendy",
        shortBio: "Wendy M. has been part of the front desk team since 2002. Wendy...",
        fullBio: (
            <p>
                <strong>Wendy M.</strong> has been part of the front desk team since 2002.&nbsp; Wendy grew up in Schomberg and now lives in Colgan with her husband, son and menagerie of pets.&nbsp; Small town business suits her love of the community!
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-2.jpg.optimal.jpg"
    },
    {
        id: "sheila",
        name: "Sheila",
        shortBio: "Sheila was raised in Midland and moved to Toronto in the late 70’s...",
        fullBio: (
            <p>
                <strong>Sheila</strong> was raised in Midland and moved to Toronto in the late 70’s to go to college. She moved back to the area in 1981 to raise a family in a small town.&nbsp;In 1991/92, she went back to school to&nbsp; take dental assisting.&nbsp; In 1999, she found her niche at Queen Street Dental and has never looked back. Sheila was told, if you love what you do, then it’s not a job.&nbsp; So… she’s still loving it!
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-3.jpg.optimal.jpg"
    },
    {
        id: "patsy",
        name: "Patsy",
        shortBio: "Patsy is a dental hygienist, graduating in 1984. She has been working at...",
        fullBio: (
            <p>
                <strong>Patsy</strong> is a dental hygienist, graduating in 1984. She has been working at Queen Street Dental since 2003. She also works in a pediatric practice in Barrie where she resides with her husband and two sons.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-4.jpg.optimal.jpg"
    },
    {
        id: "mandie",
        name: "Mandie",
        shortBio: "Mandie has been part of the Queen Street Dental Team since 2008. She...",
        fullBio: (
            <>
                <p>
                    <strong>Mandie</strong> has been part of the Queen Street Dental Team since 2008. She works at the front desk and enjoys interacting with patients and working with the front desk staff. Mandie was raised in the Alliston area and still lives locally.&nbsp; She also enjoys capturing life’s special moments with her part time photography business.
                </p>
                <p>
                    Mandie loves her job and the atmosphere and looks forward to more years to come here at Queen Street Dental.
                </p>
            </>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-5.jpg.optimal.jpg"
    },
    {
        id: "karen",
        name: "Karen",
        shortBio: "Karen has been working at Queen Street Dental since 1976. She has four...",
        fullBio: (
            <p>
                <strong>Karen</strong> has been working at Queen Street Dental since 1976. She has four children, three sons, and a daughter. Having grown up in New Tecumseth area, she moved to Collingwood five years ago. The patients and co-workers are worth the drive!
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-6.jpg.optimal.jpg"
    },
    {
        id: "jane",
        name: "Jane",
        shortBio: "Jane has been working at Queen Street Dental since 1986. She does the...",
        fullBio: (
            <p>
                <strong>Jane</strong> has been working at Queen Street Dental since 1986. She does the children’s recalls and some front desk duties.&nbsp;Jane was born and raised in Alliston.&nbsp;She is married and is the mother of four grown up boys.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-7.jpg.optimal.jpg"
    },
    {
        id: "jackie",
        name: "Jackie",
        shortBio: "Jackie has been a full time Dental Hygienist at Queen Street Dental since...",
        fullBio: (
            <p>
                <strong>Jackie</strong> has been a full time Dental Hygienist at Queen Street Dental since 1998. Jackie was born and raised in Tottenham and now currently lives in Everett with her husband and 3 boys.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-8.jpg.optimal.jpg"
    },
    {
        id: "fran",
        name: "Fran",
        shortBio: "Fran started at the dental office in 1992 continuing to assist Gerry. There...",
        fullBio: (
            <>
                <p>
                    <strong>Fran</strong> started at the dental office in 1992 continuing to assist Gerry. There are many reasons Fran loves her job at Queen Street Dental. Patients are more like friends and co-workers like family.
                </p>
                <p>
                    Residing in Tottenham allows her to walk to work… no snows days allowed! Fran is married keeping busy raising two daughters, teaching&nbsp;Yoga and performing Thai Yoga massage.
                </p>
            </>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-9.jpg.optimal.jpg"
    },
    {
        id: "debbie",
        name: "Debbie",
        shortBio: "Debbie is a long time resident of Tottenham. She has worked for Queen Street...",
        fullBio: (
            <>
                <p>
                    <strong>Debbie</strong> is a long time resident of Tottenham.&nbsp;She has worked for Queen Street Dental since 1988.&nbsp;She is married with two grown sons, who now are raising families of their own. One, still living here in Tottenham.
                </p>
                <p>
                    Debbie has 5 grandchildren. She loves her job and says the people and patients she works with are just like family.
                </p>
            </>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-10.jpg.optimal.jpg"
    },
    {
        id: "brittany",
        name: "Brittany",
        shortBio: "Brittney is a dental assistant who graduated in 2012. She has been part...",
        fullBio: (
            <p>
                <strong>Brittney</strong> is a dental assistant who graduated in 2012. She has been part of the Queen St. Dental team since 2012. Brittney was born and raised in Alliston, where she still resides.&nbsp;She looks forward to many more years to come at Queen Street Dental.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-11.jpg.optimal.jpg"
    },
    {
        id: "carla",
        name: "Carla",
        shortBio: "Carla started off at Queen Street Dental as a co-op student in 2004. She...",
        fullBio: (
            <>
                <p>
                    <strong>Carla</strong> started off at Queen Street Dental as a co-op student in 2004. She graduated from George Brown college as a dental assistant Level II and worked for four years before going back to school to do hygiene. Carla is now a registered dental hygienist having graduated from Canadore College.
                </p>
                <p>
                    Carla was born in Portugal, immigrated in 1990 and now resides in the area.
                </p>
            </>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-12.jpg.optimal.jpg"
    },
    {
        id: "ashley",
        name: "Ashley",
        shortBio: "Ashley was born in Mississauga and grew up in the New Tecumseth area. She...",
        fullBio: (
            <p>
                Ashley was born in Mississauga and grew up in the New Tecumseth area. She went to school in Tottenham and continues to be part of the community. Ashley graduated Dental Assisting school in 2015 and joined Queen Street Dental team soon after. She looks forward to many years at Queen Street Dental.
            </p>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-13.jpg.optimal.jpg"
    },
    {
        id: "cathy",
        name: "Cathy",
        shortBio: "Cathy is a long time resident of Tottenham. She grew up here with...",
        fullBio: (
            <>
                <p>
                    <strong>Cathy</strong> is a long time resident of Tottenham. She grew up here with her parents and eight siblings after immigrating from Ireland. Cathy still resides in Tottenham with her husband Jim, where they raised their children Melissa and Alex.
                </p>
                <p>
                    Cathy joined Queen Street Dental as an assistant in 1974. She still assists along with overseeing the inventory and equipment for the practice.
                </p>
            </>
        ),
        image: "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/doctor-14.jpg.optimal.jpg"
    }
];

export default function MeetTheStaffPage() {
    const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

    return (
        <div className="bg-white">
            <PageHeader
                title="Meet The Staff"
                backgroundImage=""
            />

            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.map((staff) => (
                        <div
                            key={staff.id}
                            className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                            onClick={() => setSelectedStaff(staff)}
                        >
                            <div className="relative aspect-[4/5] overflow-hidden">
                                <Image
                                    src={staff.image}
                                    alt={staff.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-primary-dark mb-2">{staff.name}</h3>
                                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{staff.shortBio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bio Modal */}
            {selectedStaff && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div
                        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 z-10"
                            onClick={() => setSelectedStaff(null)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex flex-col md:flex-row h-full">
                            <div className="w-full md:w-2/5 relative h-72 md:h-auto">
                                <Image
                                    src={selectedStaff.image}
                                    alt={selectedStaff.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">
                                <h2 className="text-3xl font-serif font-bold text-primary-dark mb-6">{selectedStaff.name}</h2>
                                <div className="text-gray-700 space-y-4 leading-relaxed">
                                    {selectedStaff.fullBio}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Overlay click to close */}
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedStaff(null)} />
                </div>
            )}
        </div>
    );
}
