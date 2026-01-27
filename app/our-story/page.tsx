import React from "react";
import Image from "next/image";
import PageHeader from "@/components/layout/PageHeader";

export default function OurStoryPage() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Our Story"
                backgroundImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/a-closer-look-our-story-1.png"
            />
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed font-sans">
                    <p>
                        I came to Tottenham in 1971 right after graduation from dental school. At the time, the practice owner was Dr. Howard Young, who also had a practice in Toronto. I worked 3 days a week in Tottenham and 2 days in Toronto. After doing this for a year, I found that I much preferred the small town practice, in part because I was much busier in Tottenham. In 1973, I purchased the Tottenham practice from Dr. Young and renamed it Queen Street Dental.
                    </p>
                    <p>
                        Dentistry was very different those days. OHIP covered dental surgery, so twice a month, patients were admitted to the hospital in Alliston and multiple tooth extractions and wisdom teeth extractions were done under anesthesia and were fully covered. In those days only about 5% of patients had insurance coverage. All back fillings were amalgam (silver fillings) as white fillings on back teeth were totally unreliable. Since there were few dental specialists north of Toronto, I had to learn many more procedures than dentists in larger city centers. In addition to Surgery, Orthodontics, Root Canal Therapy, and Gum Surgery all had to be offered in-office. At the time, there was a tremendous shortage of Dental Hygienists so most dentists had to perform all cleanings. It was 1978 before I had a Dental Hygienist, when one of my assistants, Karen, returned to school and got her Hygiene diploma.
                    </p>
                    <p>
                        There was also a shortage of dentists north of Toronto and we were all booked at least 3 months in advance. The only way to survive was to expand the number of treatment rooms, as well as hire more auxiliaries and new dentists as associates to help keep with patient traffic. In 1974, I hired a young girl, Cathy, just out of school, followed by Karen in 1976. Both still work in the office today.
                    </p>
                    <p>
                        Throughout the years, many dentists have worked in the office as associates; however, 1994 I hired Dr. Tony Donatelli to work full time. We got along so well that a year later Tony became my partner and half owner of the practice. As the Tottenham community grew in population, so did the number of our patients, staff members and size of the building. Tony and I practiced together in harmony for many years, which can be considered rare in dentistry where about 75% of partnerships fail.
                    </p>
                    <p>
                        In 2011, I was approaching 65, so Tony and I hired a consultant to help us find a new dentist who shared our patient-first practice philisophy and help us grow the practice. She found Dr. Elvis Filo, a Mississauga native, who was graduating form Case Western University in Cleveland. Elvis joined us in 2011 and by the end of the year, we all agreed the office dynamic worked so well, he purchased my share of the practice. Upon taking over, Elvis totally renovated the office and installed the latest high tech equipment converting it into the modern facilty we are today. Elvis has extensive training in dental surgery and has allowed us to offer services we previously had to refer out such as implant surgery, wisdom tooth extractions and a number of other advanced surgical procedures. It was a wonderful decision as the harmony and co-operation between the three of us continues today.
                    </p>
                    <p>
                        After all these years, three generations of dentists and all our staff continue to tirelessly work together with one simple goal in mind: to provide our patients with the best dentistry in an honest, relaxing and neighborhood friendly environment. Please stop by anytime to meet our staff and doctors!
                    </p>

                    <p className="font-semibold text-xl pt-4">
                        – Dr. Gerry Ross
                    </p>
                </div>
            </div>
        </div>
    );
}
