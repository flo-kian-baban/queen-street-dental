import React from 'react';
import Image from 'next/image';
import TechnologyArticle from '@/components/sections/technology/TechnologyArticle';

export default function DiagnodentPage() {
    return (
        <TechnologyArticle
            title="DIAGNOdent Laser by KaVo"
            headerImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/DIAGNOdent-Laser-by-KaVo.jpg.optimal.jpg"
            featuredImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/DIAGNOdent-Laser-by-KaVo-768x512.jpg.optimal.jpg"
        >
            <p>
                DIAGNOdent is the future of dental decay detection, providing a highly accurate and reliable means of identifying dental caries. With DIAGNOdent, dentists can discover the beginnings of decay before it has a chance to progress. DIAGNOdent is capable of detecting even the tiniest of caries, pits and crevices that are potential sources of decay. It uses a special wavelength of light that causes bacteria and decayed tooth matter to fluoresce. The decay not only becomes visible, but a small audio effect helps ensure every questionable spot is identified. The DIAGNOdent laser technology is successful in detecting more than 9 out of 10 carries, allowing dentists to better monitor the progress of decay over time and also treat it early enough to preserve as much of the natural tooth structure as possible.
            </p>

            <div className="flex justify-center my-10">
                <div className="relative w-full max-w-[567px] aspect-[567/152]">
                    <Image
                        src="http://optizign.net/general_images/education_images/dental/diagnodent.jpg"
                        alt="DIAGNOdent"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>

            <blockquote>
                <h4>Did you know&hellip;</h4>
                <p>
                    that DIAGNOdent is among the most effective means of identifying decay? Where x-rays are 67 percent accurate and magnified exams are about 56 percent effective, DIAGNOdent is 90 percent effective, which improves outcomes. Even studies by the National Institutes of Health confirm that DIAGNOdent is more effective than conventional methods in detecting caries located within the enamel.
                </p>
            </blockquote>

            <h2>Frequently Asked Questions</h2>

            <h3>How can I benefit from DIAGNOdent?</h3>
            <p>
                With DIAGNOdent, you can benefit from increased accuracy in cavity detection. Many patients also appreciate that the DIAGNOdent laser is more comfortable than the traditional dental probes that can cause anxiety in some patients.
            </p>

            <h3>What should I expect if my dentist uses DIAGNOdent?</h3>
            <p>
                DIAGNOdent is a completely painless procedure that is best used as a supplement to dental x-rays. A staff member will calibrate the laser and carefully scan each tooth. The laser is completely safe and harmless to surrounding tissues, so you should experience no discomfort during your visit.
            </p>

            <h3>What happens after my DIAGNOdent examination?</h3>
            <p>
                If your DIAGNOdent exam reveals the presence of cavities or decay, your dentist will make a recommendation for treatment. If you do not have any decay, or if DIAGNOdent discovers the beginnings of potential trouble-spots, your dentist will use the results of your exam to track the progress of decay at future appointments.
            </p>
        </TechnologyArticle>
    );
}
