import React from 'react';
import TechnologyArticle from '@/components/sections/technology/TechnologyArticle';

export default function SedationDentistryPage() {
    return (
        <TechnologyArticle
            title="Sedation Dentistry"
            headerImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Sedation-Dentistry.jpg.optimal.jpg"
            featuredImage="https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Sedation-Dentistry-768x511.jpg.optimal.jpg"
        >
            <p>
                The use of sedation in dentistry has revolutionized the way patients view dental visits. Patients who once were afraid or anxious about even the most routine dental procedures now visit the dentist with confidence. Sedation is typically administered to healthy individuals who need help relaxing or managing treatment anxiety. Reasons for needing sedation may include lengthy procedure times, dental phobias, or fear caused by negative experiences in the past.
            </p>

            <blockquote>
                <h4>Did you know…</h4>
                <p>
                    that here are three different types of sedation dentistry? You can opt for sedation administered in one of the following ways:
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><strong>Oral Sedation</strong> – A pharmacological agent administered prior to treatment to alleviate anxiety and help patients relax.</li>
                    <li><strong>Inhalation Sedation</strong> – Also known as laughing gas, nitrous oxide offers a euphoric feeling that makes dental treatments more pleasant.</li>
                    <li><strong>IV Sedation</strong> – This is a deep sedation reserved for patients who want little or no memory of their dental visits.</li>
                </ul>
            </blockquote>

            <h2>Frequently Asked Questions</h2>

            <h3>Should I choose sedation dentistry?</h3>
            <p>
                Only you and your dentist can determine if sedation is right for you. Because sedation covers a spectrum of treatments, you will need to consult with your dentist to discuss whether light, moderate or deep sedation best meets your needs. Your eligibility for sedation will depend on your age, health, and any other medications you may be taking.
            </p>

            <h3>What should I expect if I am sedated for my dental procedure?</h3>
            <p>
                That depends on the type of sedation you undergo. Oral sedation is relatively simple and involves taking a prescribed medication about an hour prior to your procedure. You’ll feel more relaxed, yet completely aware of your surroundings during treatment. If you choose nitrous oxide, you’ll be instructed to inhale the gas at the beginning of your appointment. Additional nitrous can be administered throughout your procedure to keep you in a state of euphoria. At the conclusion of your treatment, you’ll be given oxygen to help ‘snap’ you out of your sedated state.
            </p>
            <p>
                If IV sedation is right for you, you’ll be instructed to avoid foods and beverages the night before your treatment. A sedative will be administered to you intravenously prior to your procedure, causing you to fall into a deep sleep. A dental anesthesiologist will monitor you throughout the procedure and adjust dosage as needed.
            </p>

            <h3>Are there any precautions I need to take after being sedated?</h3>
            <p>
                Depending on the type of sedation you undergo, a licensed driver may need to drive you home from your dental appointment. If you undergo IV sedation, you may need to be supervised for several hours following the procedure.
            </p>
        </TechnologyArticle>
    );
}
