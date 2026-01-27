import React from 'react';
import Image from 'next/image';
import TechnologyArticle from '@/components/sections/technology/TechnologyArticle';

export default function LaserDentistryPage() {
    return (
        <TechnologyArticle
            title="Laser Dentistry"
            headerImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Laser-Dentistry.jpg.optimal.jpg"
            featuredImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Laser-Dentistry-768x512.jpg.optimal.jpg"
        >
            <p>
                For nearly two decades, lasers have been used for restorative and cosmetic purposes in dentistry. Today, lasers are approved for safety by the Food and Drug Administration, and they have become much more prevalent and standard in dental offices across the country. Lasers work by delivering energy in the form of light. This energy can be used to achieve accuracy and precision when shaping the gums, biopsying oral tissues, removing tooth decay, and killing bacteria during a root canal. Lasers are even being used for elective procedures, such as to expedite in-office tooth whitening.
            </p>

            <div className="flex justify-center my-10">
                <div className="relative w-full max-w-[567px] aspect-[567/152]">
                    <Image
                        src="http://optizign.net/general_images/education_images/dental/laser_dentistry.jpg"
                        alt="Laser Dentistry"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <blockquote>
                <h4>Did you know…</h4>
                <p>
                    that dental lasers offer a long list of benefits for patients and dentists? Specifically, laser dentistry has grown in popularity among patients because it is highly effective for reducing inflammation, bleeding and swelling during and following dental procedures. Many patients also report experiencing less pain when lasers are used as opposed to drills. For this reason alone, many patients experience less anxiety and apprehension before and during their dental appointments.
                </p>
            </blockquote>

            <h2>Frequently Asked Questions</h2>

            <h3>Could I benefit from laser dentistry?</h3>
            <p>
                Possibly. Laser dentistry is generally not used in examinations and cleanings. However, if you need a filling, root canal, biopsy, periodontal treatment or tooth whitening, a dental laser could provide a better overall experience and recovery. To find out if laser dentistry is right for you, schedule an appointment to meet with your dentist and discuss your options for treatment.
            </p>

            <h3>What should I expect during a laser dental treatment?</h3>
            <p>
                Your experience will be similar to those you may have had before, only without the pressure, vibrations and sound of a dental drill. Just as with traditional dental treatments, you will be anesthetized before having laser treatment. However, because dental lasers may help minimize pain, you may not require as much anesthesia as you would with a non-laser treatment.
            </p>

            <h3>Do I need to follow any special care instructions after being treated with a dental laser?</h3>
            <p>
                Your post-treatment care will not differ from the instructions you would have from a dentist using a drill or other dental tool. However, you may find that your recovery time is shorter and that bleeding is minimal immediately following your treatment.
            </p>
        </TechnologyArticle>
    );
}
