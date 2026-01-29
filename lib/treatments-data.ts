export interface Treatment {
    title: string;
    href: string;
    description: string;
    imageUrl?: string;
}

export interface TreatmentCategory {
    title: string;
    slug: string;
    href: string;
    treatments: Treatment[];
}

export const TREATMENTS_DATA: TreatmentCategory[] = [
    {
        "title": "Cleaning & Prevention",
        "slug": "cleaning-prevention",
        "href": "/treatments/cleaning-prevention",
        "treatments": [
            {
                "title": "The Benefits of Regular Dental Cleanings and Exams",
                "href": "/the-benefits-of-regular-dental-cleanings-and-exams/",
                "description": "Regular dental cleanings and exams are more than just an opportunity to get that fresh, clean feeling in your mouth—they’re a crucial aspect of maintaining your overall health. Many people underestimate the importance of these routine visits, but the benefits extend far beyond a brighter smile. Here’s why you should make dental checkups a priority.",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2024/06/dental-selfie-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Floss Like a Boss: Mastering the Art of Oral Hygiene",
                "href": "/floss-like-a-boss-mastering-the-art-of-oral-hygiene/",
                "description": "They say a smile is worth a thousand words, but did you know that the foundation of that dazzling smile starts with impeccable oral hygiene? At Queen Street Dental, we believe that the path to optimal oral health begins at home. In this article, we’re diving...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/08/shutterstock_737831566-400x250.jpg.optimal.jpg"
            },
            {
                "title": "10 Foods That Are Bad For Your Teeth",
                "href": "/10-foods-that-are-bad-for-your-teeth/",
                "description": "We all know that sugary foods and drinks are bad for our teeth, but did you know that some seemingly healthy foods can also harm your teeth?   What you eat can have a major impact on the health of your teeth. While there are plenty of foods that can promote healthy...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/04/pexels-karolina-grabowska-4016509-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Panoramic X-rays",
                "href": "/panoramic-x-rays/",
                "description": "Panoramic X-rays (also known as Panorex® or orthopantomograms) are wraparound photographs of the face and teeth. They offer a view that would otherwise be invisible to the naked eye. X-rays in general, expose hidden structures, such as wisdom teeth, reveal preliminary...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Digital-X-Rays.jpg.optimal.jpg"
            },
            {
                "title": "VELscope Vx",
                "href": "/velscope-vx/",
                "description": "The VELscope VX is a groundbreaking technology that is changing the way dentists screen for oral cancer. This cordless device is used to painlessly and quickly examine the soft tissues of the mouth for signs of abnormal, pre-cancerous or cancerous cells. Dentists wear...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/velscope-400x250.jpg.optimal.jpg"
            },
            {
                "title": "DIAGNOdent Laser by KaVo",
                "href": "/diagnodent-laser-by-kavo/",
                "description": "DIAGNOdent is the future of dental decay detection, providing a highly accurate and reliable means of identifying dental caries. With DIAGNOdent, dentists can discover the beginnings of decay before it has a chance to progress. DIAGNOdent is capable of detecting even...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/DIAGNOdent-Laser-by-KaVo-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Dental Sealants",
                "href": "/pediatric-dental-sealants/",
                "description": "Dental sealants are clear coatings applied to the surfaces of a child’s molars to prevent the development of tooth decay. They work by preventing food and plaque from resting in the grooves and crevices of molars – an area especially susceptible to cavities. According...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Sealants.jpg.optimal.jpg"
            },
            {
                "title": "Dental X-Rays",
                "href": "/dental-x-rays/",
                "description": "For years, dental x-rays have been used to diagnose oral health complications and detect decaying or damaged teeth. X-rays provide a unique view of the mouth that isn’t possible with a visual exam alone. When x-rays are taken, the teeth and bones absorb the majority...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Xray.jpg.optimal.jpg"
            },
            {
                "title": "Dental Cleaning & Consultation",
                "href": "/dental-cleaning-consultation/",
                "description": "Preventative care is a foundation of dentistry. The American Dental Association recommends visiting your dentist regularly – usually about twice yearly – for full cleanings, examinations, and consultations for potential treatment. Professional dental cleanings help...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Cleaning-Consultation.jpg.optimal.jpg"
            },
            {
                "title": "Fluoride and Decay Prevention",
                "href": "/fluoride-and-decay-prevention/",
                "description": "Fluoride is a naturally occurring element that has been shown to help strengthen teeth in children and also prevent decay in people of all ages. Topical fluoride, in particular is helpful for promoting oral health. The American Dental Association has publicly endorsed...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Fluoride-and-Decay-Prevention.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Cosmetic Dentistry",
        "slug": "cosmetic-dentistry",
        "href": "/treatments/cosmetic-dentistry",
        "treatments": [
            {
                "title": "Top 5 Cosmetic Dentistry Treatments to Transform Your Smile",
                "href": "/top-5-cosmetic-dentistry-treatments-to-transform-your-smile/",
                "description": "A confident smile can make a world of difference in how you feel and how others perceive you. If you’ve ever wished for whiter, straighter, or more evenly shaped teeth, cosmetic dentistry has a solution! Whether you’re looking for a minor touch-up or a...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2025/03/top-5-cosmetic-dentistry-treatments-to-transform-your-smile-400x250.jpeg.optimal.jpeg"
            },
            {
                "title": "How Invisalign Can Transform Your Smile",
                "href": "/how-invisalign-can-transform-your-smile/",
                "description": "Are you dreaming of a straighter smile without the hassle of traditional metal braces? Invisalign might be the perfect solution for you! This revolutionary orthodontic treatment has changed the way people think about straightening their teeth, offering a clear,...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2024/08/Aligner-case-with-spring-time-colors-social-media-image-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Revealing the Secrets of Professional Teeth Whitening: Unveiling Your Radiant Smile!",
                "href": "/revealing-the-secrets-of-professional-teeth-whitening-unveiling-your-radiant-smile/",
                "description": "Welcome to the world of professional teeth whitening, where dull smiles are transformed into dazzling masterpieces! Are you ready to uncover the secrets behind that bright, Hollywood-worthy smile? In this article, we’ll take you on a journey to explore the...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/07/woman-with-yellow-flower-400x250.jpg.optimal.jpg"
            },
            {
                "title": "10 Foods That Are Bad For Your Teeth",
                "href": "/10-foods-that-are-bad-for-your-teeth/",
                "description": "We all know that sugary foods and drinks are bad for our teeth, but did you know that some seemingly healthy foods can also harm your teeth?   What you eat can have a major impact on the health of your teeth. While there are plenty of foods that can promote healthy...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/04/pexels-karolina-grabowska-4016509-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Dental Implants: What You Need to Know",
                "href": "/dental-implants-what-you-need-to-know/",
                "description": "Consider this scenario: your dentist at Queen Street Dental has just recommended dental implants to restore your mouth structure and smile following a loss of a tooth or teeth. You are likely nervous about the procedure and have a ton of questions. We hope that these...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2023/02/dental-implants-what-you-need-to-know-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Everything You Need to Know About Porcelain Veneers",
                "href": "/everything-you-need-to-know-about-porcelain-veneers/",
                "description": "When you meet someone new, whether in-person or virtually, one of the first things they notice is your smile. If you’re not happy with the appearance of that smile, it can impact your self-esteem and confidence, which can have a negative effect on the way you carry...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2022/12/porcelain-veneers-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Dental Sealants",
                "href": "/pediatric-dental-sealants/",
                "description": "Dental sealants are clear coatings applied to the surfaces of a child’s molars to prevent the development of tooth decay. They work by preventing food and plaque from resting in the grooves and crevices of molars – an area especially susceptible to cavities. According...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Sealants.jpg.optimal.jpg"
            },
            {
                "title": "Teeth Whitening",
                "href": "/teeth-whitening/",
                "description": "Teeth whitening procedures are used to brighten the appearance of a patient’s smile – sometimes by as many as 5 to 10 shades in a single session. According to the American Dental Association, teeth whitening procedures have become some of the most popular esthetic...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Teeth-Whitening.jpg.optimal.jpg"
            },
            {
                "title": "Veneers and Laminates",
                "href": "/veneers-and-laminates/",
                "description": "Dental veneers – also known as laminates – are used to cosmetically enhance the appearance of one or more teeth. Veneers are very thin, porcelain or resin shells that are customized for a desirable color and shape. They are bonded to the surface of the teeth to...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Veneers.jpg.optimal.jpg"
            },
            {
                "title": "Crowns and Bridges",
                "href": "/crowns-and-bridges/",
                "description": "Dental crowns and bridges are custom-fitted tooth prosthetics that are used to replace or restore damaged or missing teeth. Crowns – also known as caps – are fixed over the surfaces of natural tooth structures or dental implants. Bridges are used to fill in the gaps...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Crowns-and-Bridges.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Periodontal Disease",
        "slug": "periodontal-disease",
        "href": "/treatments/periodontal-disease",
        "treatments": [
            {
                "title": "Maintenance",
                "href": "/maintenance/",
                "description": "It only takes twenty-four hours for plaque that is not removed from your teeth to turn into calculus (tartar)! Daily home cleaning helps control plaque and tartar formation, but those hard to reach areas will always need special attention. Once your periodontal...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/shutterstock_119779942-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Diagnosis",
                "href": "/diagnosis/",
                "description": "Periodontal disease – also known as gingivitis and periodontitis – is most easily identified by the visible symptoms it causes as it progresses. In its beginning stages, a periodontal disease often causes no symptoms at all, making it difficult for the average person...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/shutterstock_75515080-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Periodontal Treatment",
                "href": "/periodontal-treatment/",
                "description": "There is a wide range of procedures at the disposal of periodontists for the treatment of periodontal diseases and conditions. When multiple treatment choices are available, the American Academy of Periodontology supports the use of the most minimally invasive and...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Non-Surgical-Gum-Treatments-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Periodontal Gum Surgery",
                "href": "/what-is-periodontal-gum-disease/",
                "description": "Periodontists treat their patients with the most conservative measures possible, but sometimes surgery is necessary to facilitate oral health and aesthetics. Some of the reasons your periodontist may recommend gum surgery include: To restore gum tissues lost to...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Gum-Surgery-400x250.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Restorations",
        "slug": "restorations",
        "href": "/treatments/restorations",
        "treatments": [
            {
                "title": "Air Abrasion",
                "href": "/air-abrasion/",
                "description": "Restorative dentistry techniques have evolved over the years, with air abrasion being one of those micro-dentistry procedures that have been truly enhanced, from the traditional dental drills to using a new drill-less concept. Air abrasion is a dental procedure that...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/08/air-abrasion-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Partial Dentures",
                "href": "/partial-dentures/",
                "description": "Like a bridge, partial dentures rest on surrounding teeth to fill in the gaps where one or more teeth are missing. But unlike a bridge, partial dentures are fully removable by the wearer. Partials are affordable alternatives to other types of dental prosthetics and...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Partial-Dentures.jpg.optimal.jpg"
            },
            {
                "title": "Root Canals",
                "href": "/root-canals/",
                "description": "Root canals are valuable dental procedures used to treat and preserve teeth with badly infected roots. The pulp is the live portion of the tooth that extends into the root and contains nerve endings and tissues. When it becomes infected, patients can experience pain,...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/shutterstock_272009093.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Orthodontics",
        "slug": "orthodontics",
        "href": "/treatments/orthodontics",
        "treatments": [
            {
                "title": "Why Straighten Teeth",
                "href": "/why-straighten-teeth/",
                "description": "Straighter teeth perform chewing, biting and speaking functions more effectively than crooked teeth. In addition, a straight smile boosts confidence, is aesthetically pleasing to look at, and can help stave off a wide variety of dental ailments. There are several...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Cosmetic-Dentistry.jpg.optimal.jpg"
            },
            {
                "title": "Care Following Orthodontics – Retainers",
                "href": "/care-following-orthodontics-retainers/",
                "description": "When braces are finally removed, the “retention” phase begins for most individuals. The objective of this phase is to ensure the teeth do not regress back to their previous position. A retainer will be used to maintain the improved position of the teeth. A retainer is...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/retainers-400x250.jpg.optimal.jpg"
            },
            {
                "title": "What is Orthodontics?",
                "href": "/what-is-orthodontics/",
                "description": "Orthodontics is one of many dental specialties. The word “orthodontics” is derived from the Greek words orthos, meaning proper or straight and odons meaning teeth. Orthodontics is specifically concerned with diagnosing and treating tooth misalignment and irregularity...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/shutterstock_214264423-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Who Can Benefit From Orthodontics?",
                "href": "/who-can-benefit-from-orthodontics/",
                "description": "Orthodontics is a specialized branch of dentistry that is concerned with diagnosing, treating and preventing malocclusions (bad bites) and other irregularities in the jaw region and face. Orthodontists are specially trained to correct these problems and to restore...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/General-Dentistry.jpg.optimal.jpg"
            },
            {
                "title": "What is a Malocclusion?",
                "href": "/what-is-a-malocclusion/",
                "description": "A malocclusion is an incorrect relationship between the maxilla (upper arch) and the mandible (lower arch), or a general misalignment of the teeth. Malocclusions are so common that most individuals experience one, to some degree. The poor alignment of the teeth is...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dentistry-Post-Op-Questions.jpg.optimal.jpg"
            },
            {
                "title": "Invisalign",
                "href": "/treatments/orthodontics/invisalign",
                "description": "Invisalign is an orthodontic appliance system used to inconspicuously treat crooked and crowded teeth in adults and teens. This modern take on braces features a system of clear aligner trays that are worn at all times with the exception of during meals and when...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/Invisalign-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Children Orthodontics",
                "href": "/children-orthodontics/",
                "description": "The majority of patients undergoing orthodontic care are children and teens. When kids are young, their jaws are constantly growing to accommodate new teeth. It is during this time that the teeth are easily moved, allowing for a shorter treatment time – especially in...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/shutterstock_85444150-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Orthodontic Treatment Braces",
                "href": "/orthodontic-treatment-braces/",
                "description": "Orthodontists primarily treat patients who need help correcting certain maxillofacial problems, such as misaligned teeth, malocclusion, or too much space between the teeth. Treating these conditions requires the assistance of orthodontic appliances, of which there are...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/shutterstock_294454880-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Adult Orthodontics",
                "href": "/adult-orthodontics/",
                "description": "Everyone deserves a smile they can be proud of, and many achieve straightened, well-aligned teeth after undergoing orthodontic treatment as a child. But for adults who do not have the privilege of having straight teeth, orthodontics are still an option. In fact, there...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/07/shutterstock_140079640-400x250.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Endodontics",
        "slug": "endodontics",
        "href": "/treatments/endodontics",
        "treatments": [
            {
                "title": "Root Amputation",
                "href": "/root-amputation/",
                "description": "Root amputation is a specialized dental procedure, whereby one root is removed from a multi-root tooth. The tooth is then stabilized and rendered fully functional with a crown or filling. The multi-root teeth best suited to the root amputation procedure are the molars...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/endo.jpg.optimal.jpg"
            },
            {
                "title": "Cracked Tooth",
                "href": "/cracked-tooth/",
                "description": "Cracked and fractured teeth are common dental problems. As people retain their natural teeth longer (due to advances in dental technology), the likelihood of cracked teeth increases. There are many reasons why teeth may crack, for example, biting on hard objects,...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Root-Canal-Re-Treatment-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Root Canal Re-Treatment",
                "href": "/root-canal-re-treatment/",
                "description": "Root canal retreatment is a procedure used to clean the canals of a tooth that have already been subject to a root canal. Although most root canals are successful the first time, there are many reasons why a retreatment may be necessary. For example, some patients may...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/Root-Canal-Treatment-400x250.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Dental Implants",
        "slug": "dental-implants",
        "href": "/treatments/dental-implants",
        "treatments": [
            {
                "title": "Rediscover Confidence with Implant-Supported Dentures: A Comprehensive Solution",
                "href": "/rediscover-confidence-with-implant-supported-dentures-a-comprehensive-solution/",
                "description": "Are you weary of contending with ill-fitting dentures that undermine your self-assurance and everyday comfort? You’re not alone. Many individuals grapple with conventional dentures, which can shift, cause discomfort, and impede regular activities like eating and...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2024/04/all-on-4-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Implant Supported Dentures",
                "href": "/implant-supported-dentures/",
                "description": "Implant supported dentures are preferred by many dental patients who are missing all of their teeth but want a more stable prosthetic replacement option than traditional dentures provide. Unlike regular dentures, which rest on the gums unsupported, an implant...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/shutterstock_197557466-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Dental Implants",
                "href": "/dental-implants/",
                "description": "Dental implants are surgical-grade root devices that support permanent tooth prosthetics that are manufactured to last a lifetime. These artificial roots are anchored in the bone beneath the gums where they become fused into the jaw. A crown is mounted atop the...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dental-Implants.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Oral Surgery",
        "slug": "oral-surgery",
        "href": "/treatments/oral-surgery",
        "treatments": [
            {
                "title": "Restoring Oral Health Through Professional Surgery",
                "href": "/restoring-oral-health-through-professional-surgery/",
                "description": "At Queen Street Dental, we understand that some dental procedures require specialized care beyondroutine check-ups and cleanings. Our team is proud to offer professional oral surgery services to helppatients restore their oral health safely and comfortably. As a...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2025/12/oral-surgery-blog-dec-2025-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Wisdom Teeth Removal",
                "href": "/wisdom-teeth-removal/",
                "description": "The wisdom teeth are the final four teeth to erupt from the gums – usually sometime between age 17 and 25. Ideally, the teeth emerge without complication. But according to the American Association of Oral and Maxillofacial Surgeons, as many as 9 in 10 Americans have...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/wisdom-teeth-removal-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Ridge and Sinus Augmentations",
                "href": "/ridge-and-sinus-augmentations/",
                "description": "Ridge and sinus augmentations are surgical dental procedures used to fill in areas of the gum line and underlying bone that have deteriorated as a result of tooth loss or extraction. Specifically, a ridge augmentation refers to the reconstruction of degenerated or...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/shutterstock_89051371-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Bone Grafting",
                "href": "/bone-grafting/",
                "description": "Bone grafting – also known as ridge and sinus augmentation – is a procedure used to build up the bone beneath the surface of the gums. The bones in the upper and lower arch of the mouth are responsible for supporting the teeth. When one or more teeth fall out, bone...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/bone-graft-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Guided Implant Surgery",
                "href": "/implant-surgery/",
                "description": "Guided implant surgery is a method that allows dentists to plan your implant surgery on a computer using Computerized Tomography (CT) as opposed to traditional panoramic x-rays that offer the dentist a limited approach during the planning and execution of the oral...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/shutterstock_9099214-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Tooth Extractions",
                "href": "/tooth-extractions/",
                "description": "Tooth extractions are routine dental procedures used to remove decayed, damaged or otherwise problematic teeth. Dentists usually make every effort to preserve natural teeth, although sometimes an extraction is necessary. Although the procedure is performed in a...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Tooth-Extraction.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Sedation Dentistry",
        "slug": "sedation-dentistry",
        "href": "/treatments/sedation-dentistry",
        "treatments": [
            {
                "title": "Sedation Dentistry in Tottenham: Relax and Smile with Confidence",
                "href": "/sedation-dentistry-in-tottenham-relax-and-smile-with-confidence/",
                "description": "For many people, visiting the dentist can bring feelings of anxiety or fear. At Queen Street Dental in Tottenham, we understand that dental visits can be stressful and that’s why we offer sedation dentistry to make your experience as comfortable and relaxed as...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2026/01/sedation-dentistry-in-tottenham-relax-and-smile-with-confidence-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Embrace Comfort: General Anesthesia for Dental Procedures",
                "href": "/embrace-comfort-general-anesthesia-for-dental-procedures/",
                "description": "Are you facing nerves or unease ahead of your next dental appointment? At Queen Street Dental, we recognize the importance of your comfort during dental treatments. That’s why we offer the option of general anesthesia to ensure a relaxed and stress-free...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2024/02/embrace-comfort-general-anesthesia-for-dental-procedures-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Sedation Dentistry",
                "href": "/sedation-dentistry/",
                "description": "The use of sedation in dentistry has revolutionized the way patients view dental visits. Patients who once were afraid or anxious about even the most routine dental procedures now visit the dentist with confidence. Sedation is typically administered to healthy...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/09/Sedation-Dentistry-400x250.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "TMJ Therapy",
        "slug": "tmj-therapy",
        "href": "/treatments/tmj-therapy",
        "treatments": [
            {
                "title": "Everything You Need to Know About TMJ",
                "href": "/everything-you-need-to-know-about-tmj/",
                "description": "Temporomandibular Joint Disorder, more often known as TMJ, is a common problem that can cause pain, discomfort, and difficulty eating, speaking, and chewing. The good news is that TMJ is often treatable with help from your family dentist in Tottenham. What is TMJ? The...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2022/10/tmj-400x250.jpg.optimal.jpg"
            },
            {
                "title": "TMJ Treatment",
                "href": "/tmj-treatment/",
                "description": "TMJ refers to the temporomandibular joint, which is the bone structure, muscles and connective tissues that surround the jaw and control chewing. When patients experience disorders of this joint, they are said to have a temporomandibular joint disorder or TMD....",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/shutterstock_139302251.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Dentures",
        "slug": "dentures",
        "href": "/treatments/dentures",
        "treatments": [
            {
                "title": "Dentures",
                "href": "/dentures/",
                "description": "Dentures are an effective and affordable way of replacing missing teeth. Composed of a durable plastic resin and sometimes porcelain, both partial and full dentures can be fabricated to look and feel natural. Today’s dentures are custom-fit to make it possible to eat...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/02/Dentures.jpg.optimal.jpg"
            }
        ]
    },
    {
        "title": "Full Mouth Rehabilitation",
        "slug": "full-mouth-rehabilitation",
        "href": "/treatments/full-mouth-rehabilitation",
        "treatments": [
            {
                "title": "How to Determine if a Full Mouth Rehabilitation Right for You",
                "href": "/how-to-determine-if-a-full-mouth-rehabilitation-right-for-you/",
                "description": "While a full mouth restoration sounds intimidating, this is just a term used in the dental community to describe the use of multiple techniques and procedures to help bring the mouth up to its healthiest-possible state. Do I need a full mouth rehabilitation? Have you...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2022/11/full-mouth-rehabilitation-400x250.jpg.optimal.jpg"
            },
            {
                "title": "Full Mouth Rehabilitation",
                "href": "/full-mouth-implant-rehabilitation/",
                "description": "Full mouth reconstruction, rehabilitation and restoration are terms often used interchangeably to describe the process of rebuilding or simultaneously restoring all of the teeth in both the upper and lower jaws. Full mouth reconstruction typically involves general or...",
                "imageUrl": "https://s16736.pcdn.co/wp-content/uploads/sites/374/2017/11/Full-mouth-rehab-400x250.jpg.optimal.jpg"
            }
        ]
    }
];
