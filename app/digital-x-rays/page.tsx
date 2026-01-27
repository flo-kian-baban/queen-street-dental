import React from 'react';
import TechnologyArticle from '@/components/sections/technology/TechnologyArticle';

export default function DigitalXRaysPage() {
    return (
        <TechnologyArticle
            title="Digital X-Rays"
            headerImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Digital-X-Rays.jpg.optimal.jpg"
            featuredImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Digital-X-Rays-768x512.jpg.optimal.jpg"
        >
            <p>
                Digital x-rays are a more streamlined way of taking dental radiographs. Like traditional x-rays, digital versions provide an in-depth view of the structures of the mouth, helping dentists detect complications and develop effective modes of treatment. Digital x-rays are capable of revealing hidden caries, bone erosion, and even tooth decay hiding beneath restorations.
            </p>

            <p>
                Requiring less radiation and no film to process, digital x-rays have become the standard for oral imaging. These systems produce instant digital images that can easily be enhanced and enlarged for a more accurate diagnosis. The images are captured, stored, and even transmitted via in-office computers. In fact, dentists can easily print or email copies of x-rays in just seconds.
            </p>

            <p>
                Dental x-rays make for a better and more efficient patient experience. Office visits are faster, patients are exposed to less radiation, and radiographs can be sent to a specialist for review in a fraction of the time necessary for traditional film x-rays.
            </p>
        </TechnologyArticle>
    );
}
