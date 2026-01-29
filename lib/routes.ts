import { TREATMENTS_DATA } from "./treatments-data";

export const ROUTES = {
    HOME: "/",
    CONTACT: "/contact-us",
    CONTACT_US: "/contact-us",
    PRIVACY_POLICY: "/privacy-policy",
    TERMS_OF_USE: "/terms-of-use",
    DISCLAIMER: "/disclaimer",

    // A Closer Look
    A_CLOSER_LOOK: "/a-closer-look", // Footer link
    OUR_STORY: "/our-story",
    DR_ELVIS_FILO: "/doctor/dr-elvis-filo",
    DR_TONY_DONATELLI: "/doctor/dr-tony-donatelli",
    MEET_THE_STAFF: "/meet-the-staff",

    // Treatments
    TREATMENTS: "/treatments",
    CLEANING_PREVENTION: "/treatments/cleaning-prevention",
    COSMETIC_DENTISTRY: "/treatments/cosmetic-dentistry",
    PERIODONTAL_DISEASE: "/treatments/periodontal-disease",
    RESTORATIONS: "/treatments/restorations",
    ORTHODONTICS: "/treatments/orthodontics",
    INVISALIGN: "/treatments/orthodontics/invisalign",
    ENDODONTICS: "/treatments/endodontics",
    DENTAL_IMPLANTS: "/treatments/dental-implants",
    ORAL_SURGERY: "/treatments/oral-surgery",
    SEDATION_DENTISTRY: "/treatments/sedation-dentistry",
    SLEEP_DENTISTRY: "/treatments/sedation-dentistry/sleep-dentistry",
    TMJ_THERAPY: "/treatments/tmj-therapy",
    DENTURES: "/treatments/dentures",
    FULL_MOUTH_REHABILITATION: "/treatments/full-mouth-rehabilitation",
    FLUORIDE_PREVENTION: "/fluoride-and-decay-prevention", // Used in QuickReads
    FULL_MOUTH_REHAB: "/full-mouth-implant-rehabilitation", // Used in QuickReads

    // Technology
    TECHNOLOGY: "/technology",
    CEREC: "/cerec",
    DIAGNODENT: "/diagnodent-laser-by-kavo",
    AIR_ABRASION: "/air-abrasion",
    LASER_DENTISTRY: "/laser-dentistry",
    INTRA_ORAL_CAMERA: "/intra-oral-camera",
    VELSCOPE_VX: "/velscope-vx",
    DIGITAL_X_RAYS: "/digital-x-rays",
    LOW_LEVEL_LASERS: "/low-level-lasers",

    // Patient Resources
    PATIENT_RESOURCES: "/patient-resources",
    BLOG: "/blog",
    PATIENT_TESTIMONIALS: "/patient-testimonials",
    FIRST_VISIT: "/patient-resources/first-visit",
    FINANCIAL_POLICY: "/patient-resources/financial-policy",
    FAQS: "/patient-resources/faqs",
    PATIENT_FORMS: "/patient-forms",
};

export const NAV_ITEMS = [
    {
        label: "A Closer Look",
        href: "#",
        children: [
            { label: "Our Story", href: ROUTES.OUR_STORY },
            { label: "Dr. Elvis Filo", href: ROUTES.DR_ELVIS_FILO },
            { label: "Dr. Tony Donatelli", href: ROUTES.DR_TONY_DONATELLI },
            { label: "Meet The Staff", href: ROUTES.MEET_THE_STAFF },
        ],
    },
    {
        label: "Treatments",
        href: ROUTES.TREATMENTS,
        children: TREATMENTS_DATA.map((category) => ({
            label: category.title,
            href: category.href,
            children: category.treatments.map((t) => ({
                label: t.title,
                href: t.href,
            })),
        })),
    },
    {
        label: "Technology",
        href: ROUTES.TECHNOLOGY,
        children: [
            { label: "CEREC", href: ROUTES.CEREC },
            { label: "DIAGNOdent Laser by KaVo", href: ROUTES.DIAGNODENT },
            { label: "Air Abrasion", href: ROUTES.AIR_ABRASION },
            { label: "Laser Dentistry", href: ROUTES.LASER_DENTISTRY },
            { label: "Intra-Oral Camera", href: ROUTES.INTRA_ORAL_CAMERA },
            { label: "VELscope Vx", href: ROUTES.VELSCOPE_VX },
            { label: "Digital X-Rays", href: ROUTES.DIGITAL_X_RAYS },
            { label: "Low Level Lasers", href: ROUTES.LOW_LEVEL_LASERS },
            { label: "Sedation Dentistry", href: ROUTES.SEDATION_DENTISTRY },
        ]
    },
    {
        label: "Patient Resources",
        href: ROUTES.PATIENT_RESOURCES,
        children: [
            { label: "Blog", href: ROUTES.BLOG },
            { label: "Patient Testimonials", href: ROUTES.PATIENT_TESTIMONIALS },
            { label: "First Visit", href: ROUTES.FIRST_VISIT },
            { label: "Financial Policy", href: ROUTES.FINANCIAL_POLICY },
            { label: "FAQs", href: ROUTES.FAQS },
            { label: "Patient Forms", href: ROUTES.PATIENT_FORMS },
        ]
    },
    { label: "Contact", href: ROUTES.CONTACT_US },
];
