// ==========================================================================
// Dr. Deshmukh Skin Hair Laser Clinic & Advance Aesthetic Center
// Ethical Medical Practice Engine - Indian NMC & Healthcare Guidelines Compliant
// Dynamic Data Binding, Bilingual Engine (English | मराठी)
// ==========================================================================

// === 1. CLINICAL CORE DATA (Factual & Verifiable) ===
const clinicData = {
    name: {
        en: "Dr. Deshmukh Skin Hair Laser Clinic & Advance Aesthetic Center",
        mr: "डॉ. देशमुख स्किन, हेअर, लेझर क्लिनिक आणि अ‍ॅडव्हान्स्ड एस्थेटिक सेंटर"
    },
    shortName: {
        en: "Dr. Deshmukh Clinic",
        mr: "डॉ. देशमुख क्लिनिक"
    },
    location: {
        en: "Ghatpuri Naka, Beside Choudhary Medical, Khamgaon - 444303, Dist. Buldhana, Maharashtra.",
        mr: "घाटपुरी नाका, चौधरी मेडिकलच्या बाजूला, खामगांव ४४४३०३, जि. बुलढाणा, महाराष्ट्र."
    },
    phones: ["9272550699", "9850162210"],
    email: "drdeshmhkhskinhairlaserclinic@gmail.com",
    timings: {
        en: "Mon – Sat: 10:00 AM – 7:30 PM | Sunday: By Prior Appointment",
        mr: "सोमवार – शनिवार: सकाळी १०:०० ते संध्याकाळी ७:३० | रविवार: पूर्व नियोजित वेळेनुसार"
    }
};

// === 2. CLINICAL PRACTICE HIGHLIGHTS (Ethical & Non-Exaggerated) ===
const trustHighlights = [
    {
        icon: "fa-solid fa-user-doctor",
        value: "12+ Years",
        label: {
            en: "Clinical Medical Practice",
            mr: "वैद्यकीय क्लिनिकल सराव"
        }
    },
    {
        icon: "fa-solid fa-notes-medical",
        value: "Diagnostic",
        label: {
            en: "Evidence-Based Clinical Protocols",
            mr: "शास्त्रोक्त वैद्यकीय उपचार पद्धती"
        }
    },
    {
        icon: "fa-solid fa-microscope",
        value: "Clinical Grade",
        label: {
            en: "Standard Medical Lasers",
            mr: "प्रमाणित लेझर व वैद्यकीय उपकरणे"
        }
    },
    {
        icon: "fa-solid fa-pump-medical",
        value: "Sterilization",
        label: {
            en: "Strict Infection Control Protocols",
            mr: "कडक स्वच्छता व निर्जंतुकीकरण"
        }
    }
];

// === 3. REGISTERED DOCTORS DATA (Factual, Legitimate Qualifications & Council Registrations) ===
const doctorsData = [
    {
        id: "dr-sagar",
        image: "images/doctor-sagar.jpg",
        name: {
            en: "Dr. Sagar Vasantrao Deshmukh",
            mr: "डॉ. सागर वसंतराव देशमुख"
        },
        qualifications: "BAMS, MUHS-NASHIK,F.DERM(IM)- <br> UK (Fellowship in Dermatology & Integrated Medicine) <br> FCAM - DELHI (Fellowship in Cosmetology & Asthetic Medicine)<br>C.C.H, C.S.D, MUMBAI",
        badge: {
            en: "Registered Medical Practitioner",
            mr: "नोंदणीकृत वैद्यकीय व्यावसायिक"
        },
        regNo: {
            en: "MCIM Reg. No: I-77847-A",
            mr: "नोंदणी क्र. (MCIM Reg. No): I-77847-A"
        },
        timing: {
            en: "Daily: 10:30 AM – 2:00 PM & 5:00 PM – 8:00 PM (Sunday by Appointment)",
            mr: "दररोज: स. १०:३० ते २:०० व सायं ५:०० ते ८:०० (रविवार पूर्व नियोजित)"
        },
        focusAreas: {
            en: [
                "Clinical Skin Health & Tissue Care",
                "PRP & GFC Hair Root Support Protocols",
                "Fractional Laser Acne Scar Management",
                "RF Benign Mole & Wart Clearance"
            ],
            mr: [
                "क्लिनिकल त्वचारोग व विकार व्यवस्थापन",
                "PRP व GFC हेअर सपोर्ट पद्धती",
                "मुरुमांच्या खड्ड्यांचे लेझर व्यवस्थापन",
                "रेडिओफ्रिक्वेन्सीने तीळ व मस्से काढणे"
            ]
        }
    },
    {
        id: "dr-pratiksha",
        image: "images/doctor-pratiksha.jpg",
        name: {
            en: "Dr. Pratiksha Sagar Deshmukh",
            mr: "डॉ. प्रतिक्षा सागर देशमुख"
        },
        qualifications: "BHMS,MUHS-NASHIK,C DERM (Dermatology) -UK <br> C.A.M (Asthetic Medicine)- UK <br> C.C.H, C.G.O MUMBAI",
        badge: {
            en: "Registered Medical Practitioner",
            mr: "नोंदणीकृत वैद्यकीय व्यावसायिक"
        },
        regNo: {
            en: "MCH Reg. No: 84591",
            mr: "नोंदणी क्र. (MCH Reg. No): 84591"
        },
        timing: {
            en: "Daily: 11:00 AM – 3:00 PM & 5:30 PM – 7:30 PM",
            mr: "दररोज: स. ११:०० ते ३:०० व सायं ५:३० ते ७:३०"
        },
        focusAreas: {
            en: [
                "Clinical Medi-Facial Hydration Procedures",
                "Supervised Peels for Melasma & Pigmentation",
                "Pediatric & Pregnancy Skin Care Advice",
                "Skin Barrier Health & Tissue Support"
            ],
            mr: [
                "क्लिनिकल मेडी-फेशिअल व हायड्रेशन पद्धती",
                "वांग व काळ्या डागांवर क्लिनिकल पील्स",
                "गर्भवती महिला व बाल त्वचारोग सल्ला",
                "त्वचेच्या आरोग्याची शास्त्रीय काळजी"
            ]
        }
    }
];

// === 4. KEY CONDITIONS & TREATMENTS SCOPE (At-A-Glance Directory) ===
const clinicalScopeData = {
    skinConditions: {
        id: "skinConditions",
        title: {
            en: "Common Skin Concerns Addressed",
            mr: "प्रमुख त्वचारोग व समस्या"
        },
        subtitle: {
            en: "Targeted care protocols and structured management for everyday, recurring, and chronic skin concerns.",
            mr: "विविध प्रकारच्या जुनाट व नव्या त्वचारोगांवर तज्ज्ञ डॉक्टरांच्या मार्गदर्शनाखाली शास्त्रीय वैद्यकीय उपचार."
        },
        icon: "fa-solid fa-hand-dots",
        targetService: "peels",
        items: [
            { en: "Acne & Pimples", mr: "मुरुम व पिंपल्स" },
            { en: "Acne Pits / Scars", mr: "मुरुमांचे खड्डे व डाग" },
            { en: "Eczema, Hives & Allergies (Urticaria)", mr: "एक्झिमा, पित्त व अ‍ॅलर्जी" },
            { en: "Moles, Freckles & Warts", mr: "तीळ, वांग व मस्से" },
            { en: "Psoriasis", mr: "सोरायसिस" },
            { en: "Ringworm & Fungal Infections", mr: "गजकर्ण व बुरशीजन्य संसर्ग" },
            { en: "White Spots (Vitiligo) & Dark Spots", mr: "पांढरे कोड (Vitiligo) व काळे डाग" },
            { en: "Melasma / Hyperpigmentation", mr: "वांग (Melasma) व काळे डाग" },
            { en: "Dry & Flaky Skin", mr: "कोरडी व निस्तेज त्वचा" },
            { en: "Premature Skin Wrinkles", mr: "अकाली सुरकुत्या" },
            { en: "Cracked Heels & Calluses", mr: "भेगाळलेल्या टाचा व घट्टे" },
            { en: "Skin Tag Removal", mr: "स्किन टॅग्ज (चामखीळ)" },
            { en: "Skin Conditions in Pregnant Women", mr: "गर्भवती महिलांमधील त्वचारोग" },
            { en: "Pediatric Skin Disorders", mr: "बालकांमधील त्वचारोग" },
            { en: "Nail Disorders", mr: "नखांचे विकार" },
            { en: "Sunburn & Tanning", mr: "सनबर्न व टॅनिंग" },
            { en: "Dark Circles & Under-Eye Puffiness", mr: "काळी वर्तुळे व डोळ्यांखालील सूज" },
            { en: "Boils, Rashes & Cysts", mr: "गळवे, पुरळ व सिस्ट" }
        ]
    },
    laserProcedures: {
        id: "laserProcedures",
        title: {
            en: "Advanced Aesthetic & Laser Procedures",
            mr: "अ‍ॅडव्हान्स्ड स्किन व लेझर कार्यपद्धती"
        },
        subtitle: {
            en: "Modern cosmetic laser and energy-based aesthetic procedures performed under strict hygiene and safety standards.",
            mr: "प्रमाणित वैद्यकीय लेझर उपकरणांच्या साहाय्याने सुरक्षितपणे केले जाणारे आधुनिक उपचार."
        },
        icon: "fa-solid fa-bolt-lightning",
        targetService: "laser",
        items: [
            { en: "Active Acne Laser Therapy", mr: "अ‍ॅक्टिव्ह अ‍ॅक्ने लेझर थेरपी" },
            { en: "RF Mole & Wart Removal (Radiofrequency Ablation)", mr: "रेडिओफ्रिक्वेन्सीने तीळ व मस्से काढणे" },
            { en: "Laser Tattoo Removal", mr: "लेझर टॅटू रिमुव्हल" },
            { en: "Carbon Laser Peel", mr: "कार्बन लेझर पील" },
            { en: "Dark Spot Reduction", mr: "काळे डाग फिके करणे" },
            { en: "Diode Laser Hair Removal (LHR)", mr: "डायोड लेझर हेअर रिडक्शन" },
            { en: "Lip Lightening & Pigmentation Correction", mr: "ओठांवरील काळेपणा निवारण" },
            { en: "Under-Eye Dark Circle & Hollow Correction", mr: "डोळ्यांखालील काळी वर्तुळे उपचार" },
            { en: "Skin Resurfacing Laser", mr: "स्किन रिसर्फेसिंग लेझर" },
            { en: "Sun Damage & Dark Spot Removal", mr: "उन्हामुळे झालेले नुकसान व डाग" },
            { en: "RF Skin Tightening", mr: "आरएफ स्किन टाइटनिंग" },
            { en: "Photo Facial Sessions", mr: "फोटो फेशिअल सेशन्स" },
            { en: "Hydrafacial Laser Sessions", mr: "हायड्राफेशिअल लेझर सेशन्स" },
            { en: "Red Velvet Face Sessions", mr: "रेड वेल्वेट फेशिअल सेशन्स" }
        ]
    },
    hairTreatments: {
        id: "hairTreatments",
        title: {
            en: "Advanced Hair & Scalp Therapies",
            mr: "आधुनिक केस व टाळू उपचार"
        },
        subtitle: {
            en: "Comprehensive scalp evaluations and non-invasive restorative therapies to support active, resilient hair growth.",
            mr: "केस गळतीची कारणे शोधून टाळूचे आरोग्य सुधारण्यासाठी व मुळांना पोषण देण्यासाठी उपचार."
        },
        icon: "fa-solid fa-scissors",
        targetService: "hair",
        items: [
            { en: "Hair & Scalp Machine-Assisted Deep Cleansing", mr: "मशिनद्वारे टाळूची सखोल स्वच्छता" },
            { en: "Baldness / Alopecia Treatment", mr: "टक्कल / अलोपेसिया उपचार" },
            { en: "Premature Graying Solutions", mr: "अकाली केस पांढरे होण्यावर उपाय" },
            { en: "Dandruff & Scalp Flaking Therapy", mr: "कोंडा व टाळूवरील खपल्या निवारण" },
            { en: "PRP Therapy (Platelet-Rich Plasma)", mr: "पीआरपी (PRP) थेरपी" },
            { en: "GFC Therapy (Growth Factor Concentrate)", mr: "जीएफसी (GFC) थेरपी" },
            { en: "Hair Mesotherapy (Vitamin Cocktails)", mr: "हेअर मेसोथेरपी (व्हिटॅमिन कॉकटेल)" },
            { en: "Hair MDA (Microdermabrasion for Scalp)", mr: "हेअर एमडीए (टाळूचे एक्सफोलिएशन)" },
            { en: "Microneedling (Dermapen) for Hair Regrowth", mr: "मायक्रोनीडलिंग डर्मापेन हेअर ग्रोथ" },
            { en: "Scalp Exo-GFC Treatment", mr: "स्कॅल्प एक्सो-जीएफसी उपचार" },
            { en: "Hair Follicle Nourishment & Density Therapies", mr: "केसांच्या मुळांचे पोषण व घनता वाढ" }
        ]
    }
};

// === 5. SPECIALIZED CLINICAL SERVICES (72 Detailed Procedures with Full Descriptions) ===
const servicesData = [
    {
        id: "hair",
        category: {
            en: "Hair & Scalp Care",
            mr: "केस व टाळू काळजी"
        },
        title: {
            en: "Hair Treatments",
            mr: "केस व टाळू उपचार"
        },
        icon: "fa-solid fa-scissors",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        description: {
            en: "Comprehensive hair wellness combining detailed scalp analysis with advanced restorative procedures to support root vitality and follicle density.",
            mr: "केस गळतीची मुळापासून तपासणी करून, टाळूचे आरोग्य सुधारण्यासाठी आणि मुळांना पोषण देण्यासाठी आधुनिक वैद्यकीय उपचार."
        },
        highlightTags: {
            en: ["PRP & GFC Therapy", "Digital Micro-Analysis", "Scalp Exo-GFC", "Anti-Dandruff Peel", "Dermapen Microneedling", "Mesotherapy Cocktails"],
            mr: ["पीआरपी व जीएफसी", "डिजिटल स्कॅल्प तपासणी", "एक्सो-जीएफसी उपचार", "अँटी-डँड्रफ पील", "मायक्रोनीडलिंग", "मेसोथेरपी कॉकटेल"]
        },
        detailedTreatments: [
            {
                name: { en: "Hair Fall Treatment", mr: "केस गळती नियंत्रण उपचार" },
                icon: "fa-solid fa-hand-holding-medical",
                desc: {
                    en: "Specialized clinical therapy to control shedding, stimulate dormant follicles, and strengthen roots.",
                    mr: "केस गळती रोखण्यासाठी, मुळांना बळकटी देण्यासाठी आणि सुप्त फॉलिकल्स सक्रिय करण्यासाठी क्लिनिकल उपचार."
                }
            },
            {
                name: { en: "Hair & Scalp Analysis", mr: "टाळू व केसांचे सूक्ष्म निदान" },
                icon: "fa-solid fa-microscope",
                desc: {
                    en: "Deep microscopic diagnostic evaluation to identify root causes and customize treatment.",
                    mr: "कॅमेऱ्याद्वारे टाळूची व मुळांची सूक्ष्म तपासणी करून योग्य उपचार आराखडा तयार केला जातो."
                }
            },
            {
                name: { en: "Hair Microneedling", mr: "हेअर मायक्रोनीडलिंग" },
                icon: "fa-solid fa-wand-magic-sparkles",
                desc: {
                    en: "Controlled micro-stimulation to activate scalp circulation and trigger new follicle growth.",
                    mr: "टाळूतील रक्तभिसरण वाढवण्यासाठी आणि नवीन केस उगवण्यास चालना देण्यासाठी मायक्रो-स्टिम्युलेशन."
                }
            },
            {
                name: { en: "PRP Hair Treatment", mr: "पीआरपी हेअर ट्रीटमेंट" },
                icon: "fa-solid fa-droplet",
                desc: {
                    en: "Uses concentrated platelets from your own blood to naturally halt thinning and stimulate dense hair regrowth.",
                    mr: "स्वतःच्या रक्तातील प्लेटलेट्सचा वापर करून केस पातळ होणे थांबवणारी व वाढीस चालना देणारी नैसर्गिक पद्धती."
                }
            },
            {
                name: { en: "Hair Mesotherapy (Cocktails)", mr: "हेअर मेसोथेरपी (व्हिटॅमिन कॉकटेल)" },
                icon: "fa-solid fa-syringe",
                desc: {
                    en: "Direct micro-infusions of vital vitamins, minerals, and peptides directly into the roots.",
                    mr: "केसांच्या मुळांमध्ये आवश्यक व्हिटॅमिन्स, खनिजे आणि पेप्टाइड्स थेट पोहोचवणारी सूक्ष्म थेरपी."
                }
            },
            {
                name: { en: "Advanced Hair Regrowth Therapy", mr: "अ‍ॅडव्हान्स्ड हेअर रिग्रोथ थेरपी" },
                icon: "fa-solid fa-seedling",
                desc: {
                    en: "Targeted stimulation of weak follicles for thicker, resilient hair strands.",
                    mr: "कमकुवत फॉलिकल्सना लक्ष्य करून केस दाट आणि मजबूत बनवणारी आधुनिक उपचार पद्धती."
                }
            },
            {
                name: { en: "Hair GFC Treatment", mr: "हेअर जीएफसी ट्रीटमेंट" },
                icon: "fa-solid fa-dna",
                desc: {
                    en: "Advanced Growth Factor Concentrate therapy to repair damaged follicles and boost volume.",
                    mr: "ग्रोथ फॅक्टर कॉन्सन्ट्रेट थेरपीद्वारे खराब झालेल्या मुळांची दुरुस्ती करून केसांची घनता वाढवली जाते."
                }
            },
            {
                name: { en: "Hair Exo-GFC Treatment", mr: "हेअर एक्सो-जीएफसी उपचार" },
                icon: "fa-solid fa-atom",
                desc: {
                    en: "Exosomes combined with GFC for cellular-level follicle repair and accelerated growth.",
                    mr: "एक्सोसोम्स आणि जीएफसीच्या संयोगाने पेशी स्तरावर केसांच्या मुळांची जलद दुरुस्ती व वाढ."
                }
            },
            {
                name: { en: "Hair MDA (for Scalp & Dandruff)", mr: "हेअर एमडीए (टाळू व कोंडा निवारण)" },
                icon: "fa-solid fa-wind",
                desc: {
                    en: "Microdermabrasion exfoliation to remove stubborn sebum, dead build-up, and clear congested follicles.",
                    mr: "टाळूवरील हट्टी मृत पेशी, तेलकटपणा आणि कोंडा साफ करून फॉलिकल्स मोकळे करणारे एक्सफोलिएशन."
                }
            },
            {
                name: { en: "Thinning Hair & Graying Management", mr: "पातळ व पांढऱ्या केसांचे व्यवस्थापन" },
                icon: "fa-solid fa-scissors",
                desc: {
                    en: "Slows down premature pigmentation loss and improves shaft thickness.",
                    mr: "अकाली केस पांढरे होण्याचा वेग कमी करून केसांची जाडी व मजबुती सुधारण्यास मदत."
                }
            },
            {
                name: { en: "Scalp Rejuvenation", mr: "स्कॅल्प रिजुव्हनेशन" },
                icon: "fa-solid fa-spa",
                desc: {
                    en: "Restores healthy scalp pH balance and enhances blood microcirculation.",
                    mr: "टाळूचा नैसर्गिक pH संतुलित ठेवून रक्तप्रवाह सुधारणारी पुनरुज्जीवन पद्धती."
                }
            },
            {
                name: { en: "Hair Nutrition & Growth Therapy", mr: "हेअर न्युट्रिशन व ग्रोथ थेरपी" },
                icon: "fa-solid fa-capsules",
                desc: {
                    en: "Concentrated nutrient delivery for shine, tensile strength, and reduced breakage.",
                    mr: "केसांचा तुटणे कमी करून त्यांना नैसर्गिक चमक आणि मजबुती देणारे पोषक उपचार."
                }
            },
            {
                name: { en: "Anti-Dandruff Peel", mr: "अँटी-डँड्रफ पील" },
                icon: "fa-solid fa-shield-virus",
                desc: {
                    en: "Specialized medical-grade scalp peeling to eradicate persistent flaking and excess oiliness.",
                    mr: "हट्टी कोंडा, टाळूवरील खपल्या आणि अतिरिक्त तेलकटपणा समूळ नष्ट करणारे वैद्यकीय पील."
                }
            }
        ]
    },
    {
        id: "facials",
        category: {
            en: "Medi-Facial Procedures",
            mr: "क्लिनिकल मेडी-फेशिअल्स"
        },
        title: {
            en: "Medi-Face Sessions",
            mr: "क्लिनिकल मेडी-फेस सेशन्स"
        },
        icon: "fa-solid fa-spa",
        image: "images/medi-facial.jpg",
        description: {
            en: "Advanced doctor-supervised clinical medi-facials utilizing medical-grade actives, hyperbaric oxygen, and gentle dermal infusion for luminous, healthy skin.",
            mr: "डॉक्टरांच्या देखरेखीखाली वैद्यकीय दर्जाची औषधे, ऑक्सिजन आणि हायड्रेशनच्या साहाय्याने त्वचेला खोलवर तजेला देणारी क्लिनिकल सत्रे."
        },
        highlightTags: {
            en: ["Hollywood Glass Skin", "Vampire PRP Face", "Celebrity Glow", "24K Gold Session", "Oxygen Medi-Face", "Fire & Ice Session"],
            mr: ["हॉलीवूड ग्लास स्किन", "व्हॅम्पायर पीआरपी", "सेलिब्रिटी ग्लो", "२४के गोल्ड फेशिअल", "ऑक्सिजन फेशिअल", "फायर अँड आइस"]
        },
        detailedTreatments: [
            {
                name: { en: "Hollywood-Face Session (Glass Skin)", mr: "हॉलीवूड-फेस सेशन (ग्लास स्किन)" },
                icon: "fa-solid fa-gem",
                desc: {
                    en: "Delivers ultra-smooth, radiant, poreless glass-skin texture.",
                    mr: "त्वचेला अत्यंत नितळ, चमकदार आणि पोअर्सरहित 'ग्लास स्किन' लूक देणारे विशेष सत्र."
                }
            },
            {
                name: { en: "Face Mesotherapy (Glutathione)", mr: "फेस मेसोथेरपी (ग्लुटाथिऑन)" },
                icon: "fa-solid fa-sparkles",
                desc: {
                    en: "Reduces dullness, brightens tone, and boosts radiant clarity.",
                    mr: "निस्तेजपणा दूर करून त्वचेचा रंग उजळवणारी आणि तजेला देणारी मेसोथेरपी."
                }
            },
            {
                name: { en: "Vampire Face Session (PRP)", mr: "व्हॅम्पायर फेस सेशन (PRP)" },
                icon: "fa-solid fa-droplet",
                desc: {
                    en: "Utilizes platelet-rich plasma to erase fine lines, trigger collagen, and regenerate skin texture.",
                    mr: "बारीक रेषा कमी करण्यासाठी आणि कोलेजन वाढवून त्वचेचा पोत सुधारण्यासाठी पीआरपीचा वापर."
                }
            },
            {
                name: { en: "Flash-Face Session (Skin Brightening)", mr: "फ्लॅश-फेस सेशन (स्किन ब्राइटनिंग)" },
                icon: "fa-solid fa-bolt",
                desc: {
                    en: "Instant radiance protocol targeting uneven dull spots.",
                    mr: "त्वचेवरील असमान निस्तेज डाग कमी करून तत्काळ तजेला देणारी पद्धती."
                }
            },
            {
                name: { en: "Celebrity Glow-Face Session", mr: "सेलिब्रिटी ग्लो-फेस सेशन" },
                icon: "fa-solid fa-star",
                desc: {
                    en: "Red-carpet skin treatment for maximum hydration, instant dewiness, and fresh glow.",
                    mr: "समारंभापूर्वी जास्तीत जास्त हायड्रेशन आणि नैसर्गिक ताजेतवानेपणा देणारे खास सत्र."
                }
            },
            {
                name: { en: "Photo-Face Session (Sensitive Skin)", mr: "फोटो-फेस सेशन (सेंसिटिव्ह त्वचा)" },
                icon: "fa-solid fa-sun",
                desc: {
                    en: "Calms inflammation, soothes redness, and strengthens sensitive barriers.",
                    mr: "नाजूक त्वचेवरील जळजळ व लालसरपणा शांत करून त्वचेचा नैसर्गिक अडथळा मजबूत करणे."
                }
            },
            {
                name: { en: "Illuminating-Face Session (Anti-Aging)", mr: "इल्यूमिनेटिंग-फेस सेशन (अँटी-एजिंग)" },
                icon: "fa-solid fa-award",
                desc: {
                    en: "Fights sagging, firms slackened skin, and restores youthful suppleness.",
                    mr: "सैल पडलेली त्वचा घट्ट करून तरुणपणा आणि लवचिकता पुनर्संचयित करणारी थेरपी."
                }
            },
            {
                name: { en: "Oxygen-Face Session", mr: "ऑक्सिजन-फेस सेशन" },
                icon: "fa-solid fa-wind",
                desc: {
                    en: "Infuses deep hydration, hyperbaric oxygen, and essential nutrients to tired cells.",
                    mr: "थकलेल्या पेशींना ऑक्सिजन, खोल हायड्रेशन आणि आवश्यक पोषक घटक पुरवणारे सत्र."
                }
            },
            {
                name: { en: "Anti-Acne-Face Session", mr: "अँटी-अ‍ॅक्ने-फेस सेशन" },
                icon: "fa-solid fa-shield-halved",
                desc: {
                    en: "Clarifies active congestion and regulates overactive sebaceous activity.",
                    mr: "अ‍ॅक्टिव्ह मुरुम शांत करून अतिरिक्त तेलकटपणा नियंत्रित करणारे क्लिनिकल फेशिअल."
                }
            },
            {
                name: { en: "Fire & Ice-Face Session", mr: "फायर अँड आइस-फेस सेशन" },
                icon: "fa-solid fa-snowflake",
                desc: {
                    en: "Thermal and cryo contrast facial that tightens enlarged pores and refines skin texture.",
                    mr: "उष्ण व थंड तापमानाच्या संयोगाने मोठी झालेली पोअर्स घट्ट करून त्वचा मऊ बनवणारी पद्धती."
                }
            },
            {
                name: { en: "24K Original Gold-Face Session", mr: "२४के ओरिजिनल गोल्ड-फेस सेशन" },
                icon: "fa-solid fa-crown",
                desc: {
                    en: "Luxurious gold therapy for supreme luminosity, glow, and cellular revitalization.",
                    mr: "त्वचेच्या पेशींचे पुनरुज्जीवन करून अप्रतिम चमक आणि तेज देणारी सुवर्ण थेरपी."
                }
            },
            {
                name: { en: "Silver-Face Session", mr: "सिल्व्हर-फेस सेशन" },
                icon: "fa-solid fa-circle",
                desc: {
                    en: "Clears dull surface debris and boosts vibrant, healthy skin tone.",
                    mr: "त्वचेवरील मृत घाण साफ करून निरोगी आणि फ्रेश लूक देणारे सत्र."
                }
            },
            {
                name: { en: "Recovery-Face Medi-Session", mr: "रिकव्हरी-फेस मेडी-सेशन" },
                icon: "fa-solid fa-heart-pulse",
                desc: {
                    en: "Intensive repair for compromised, damaged, or post-procedure skin.",
                    mr: "खराब झालेल्या किंवा उपचारानंतरच्या संवेदनशील त्वचेची जलद दुरुस्ती करणारे सत्र."
                }
            },
            {
                name: { en: "Moringa Rejuvenating-Face Session", mr: "मोरिंगा रिजुव्हनेटिंग-फेस सेशन" },
                icon: "fa-solid fa-leaf",
                desc: {
                    en: "Rich botanical antioxidant therapy to defend against pollution and stress.",
                    mr: "प्रदूषण आणि ताणतणावापासून त्वचेचे रक्षण करणारी वनस्पतीजन्य अँटिऑक्सिडंट थेरपी."
                }
            },
            {
                name: { en: "Red Velvet Face Medi-Session", mr: "रेड वेल्वेट फेस मेडी-सेशन" },
                icon: "fa-solid fa-feather",
                desc: {
                    en: "Targeted brightening protocol to fade stubborn melasma and hyperpigmentation.",
                    mr: "हट्टी वांग (Melasma) आणि काळे डाग फिके करून त्वचा उजळवणारे विशेष सत्र."
                }
            },
            {
                name: { en: "Microdermabrasion / Skin Polishing", mr: "मायक्रोडर्माब्रेशन / स्किन पॉलिशिंग" },
                icon: "fa-solid fa-brush",
                desc: {
                    en: "Physical dead-cell exfoliation for silken smoothness and refined texture.",
                    mr: "मृत पेशी काढून त्वचेला मखमली मऊपणा आणि नितळ पोत देणारे पॉलिशिंग."
                }
            }
        ]
    },
    {
        id: "laser",
        category: {
            en: "Advanced Medical Lasers",
            mr: "वैद्यकीय लेझर कार्यपद्धती"
        },
        title: {
            en: "Laser Aesthetic Treatments",
            mr: "लेझर एस्थेटिक उपचार"
        },
        icon: "fa-solid fa-bolt",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        description: {
            en: "Standard high-precision lasers targeting unwanted hair, acne scars, hyperpigmentation, tattoos, and vascular irregularities under strict clinical hygiene.",
            mr: "प्रमाणित लेझर तंत्रज्ञानाद्वारे मुरुमांचे खड्डे, डाग, टॅटू आणि अनपेक्षित केस सुरक्षितपणे कमी करण्याचे उपचार."
        },
        highlightTags: {
            en: ["Diode Hair Reduction", "Carbon Laser", "Fractional Scar Laser", "Tattoo Removal", "RF Skin Tightening", "Laser Toning"],
            mr: ["डायोड हेअर रिडक्शन", "कार्बन लेझर", "फ्रॅक्शनल स्कार लेझर", "टॅटू रिमुव्हल", "आरएफ टाइटनिंग", "लेझर टोनिंग"]
        },
        detailedTreatments: [
            {
                name: { en: "Carbon Laser", mr: "कार्बन लेझर पील" },
                icon: "fa-solid fa-fire",
                desc: {
                    en: "Purifies deep pores, clears dead cells, controls excess oil, and balances uneven tone.",
                    mr: "खोल पोअर्स स्वच्छ करून मृत पेशी, अतिरिक्त तेल आणि असमान रंग संतुलित करणारा लेझर."
                }
            },
            {
                name: { en: "Laser Mole Removal", mr: "लेझरने तीळ व चामखीळ काढणे" },
                icon: "fa-solid fa-bullseye",
                desc: {
                    en: "Safe, scar-minimizing laser ablation of unwanted moles and skin tags.",
                    mr: "तीळ, चामखीळ आणि मस्से डाग न पडता सुरक्षितपणे काढून टाकणे."
                }
            },
            {
                name: { en: "Birthmark Removal", mr: "जन्मतः डाग / खूण फिके करणे" },
                icon: "fa-solid fa-circle-dot",
                desc: {
                    en: "Targeted laser therapy to significantly lighten and fade congenital birthmarks.",
                    mr: "जन्मतः असलेल्या रंगाच्या खुणा आणि डाग फिके करण्यासाठी लेझर थेरपी."
                }
            },
            {
                name: { en: "Omega Light Therapy", mr: "ओमेगा लाइट थेरपी" },
                icon: "fa-solid fa-lightbulb",
                desc: {
                    en: "Multi-wavelength LED therapy to repair photodamage, brighten skin, and soothe irritation.",
                    mr: "विविध तरंगलंबींच्या एलईडी प्रकाशाने त्वचेची जळजळ शांत करून पेशी दुरुस्त करणे."
                }
            },
            {
                name: { en: "Stretch Mark Removal", mr: "स्ट्रेच मार्क्स लेझर" },
                icon: "fa-solid fa-lines-leaning",
                desc: {
                    en: "Laser collagen remodeling to smooth texture and fade discolored striae lines.",
                    mr: "कोलेजन वाढवून स्ट्रेच मार्क्सचे डाग फिके करणारा व त्वचा मऊ करणारा लेझर."
                }
            },
            {
                name: { en: "Sunspot Removal", mr: "उन्हामुळे पडलेले काळे डाग" },
                icon: "fa-solid fa-cloud-sun",
                desc: {
                    en: "Breaks down sun-induced hyperpigmentation clusters and dark spots.",
                    mr: "उन्हामुळे त्वचेवर तयार झालेले काळे डाग आणि पिग्मेंटेशन नष्ट करणे."
                }
            },
            {
                name: { en: "RF Skin Tightening", mr: "आरएफ स्किन टाइटनिंग" },
                icon: "fa-solid fa-wave-square",
                desc: {
                    en: "Radiofrequency thermal energy to stimulate dermal elastin and firm sagging contours.",
                    mr: "रेडिओफ्रिक्वेन्सीद्वारे त्वचेतील इलास्टिन सक्रिय करून सैल त्वचा घट्ट करणे."
                }
            },
            {
                name: { en: "Laser Hair Reduction (LHR)", mr: "लेझर हेअर रिडक्शन (LHR)" },
                icon: "fa-solid fa-bolt",
                desc: {
                    en: "Permanent follicle reduction across face and body with advanced diode technology.",
                    mr: "चेहरा आणि शरीरावरील अनपेक्षित केस कमी करण्यासाठी आधुनिक डायोड लेझर तंत्रज्ञान."
                }
            },
            {
                name: { en: "Photo-Laser / IPL", mr: "फोटो-लेझर / आयपीएल" },
                icon: "fa-solid fa-camera-retro",
                desc: {
                    en: "Broad-spectrum light to diminish vascular lesions, age spots, and uneven pigmentation.",
                    mr: "वयपरत्वे पडलेले डाग आणि असमान रंग हलका करण्यासाठी ब्रॉड-स्पेक्ट्रम लाइट थेरपी."
                }
            },
            {
                name: { en: "Lip Pigmentation Laser", mr: "ओठांवरील काळेपणा लेझर" },
                icon: "fa-solid fa-kiss-wink-heart",
                desc: {
                    en: "Corrects lip darkening and restores natural pinkness and hydration.",
                    mr: "ओठांचा काळेपणा दूर करून त्यांचा नैसर्गिक गुलाबी रंग व ओलावा परत मिळवणे."
                }
            },
            {
                name: { en: "Under-Eye Rejuvenation", mr: "डोळ्यांखालील काळी वर्तुळे उपचार" },
                icon: "fa-solid fa-eye",
                desc: {
                    en: "Lightens dark circles and firms thinning periorbital tissue.",
                    mr: "डोळ्यांखालील काळी वर्तुळे फिकी करून तिथली नाजूक त्वचा घट्ट करणे."
                }
            },
            {
                name: { en: "Laser Toning", mr: "लेझर टोनिंग" },
                icon: "fa-solid fa-sliders",
                desc: {
                    en: "Evens out patchy discoloration, melasma, and irregular skin tone.",
                    mr: "वांग आणि असमान रंगाचे चट्टे काढून संपूर्ण चेहऱ्याचा टोन एकसारखा करणे."
                }
            },
            {
                name: { en: "Skin Resurfacing Laser", mr: "स्किन रिसर्फेसिंग लेझर" },
                icon: "fa-solid fa-layer-group",
                desc: {
                    en: "Re-textures rough skin, softens deep crevices, and produces smooth baby skin.",
                    mr: "खडबडीत त्वचा मऊ करून बारीक रेषा व सुरकुत्या कमी करणारी लेझर प्रक्रिया."
                }
            },
            {
                name: { en: "Hyperpigmentation Laser", mr: "हायपरपिग्मेंटेशन लेझर" },
                icon: "fa-solid fa-brush",
                desc: {
                    en: "Targets excess localized melanin production for an even complexion.",
                    mr: "अतिरिक्त मेलॅनिन निर्मितीला नियंत्रित करून त्वचा स्वच्छ व नितळ करणे."
                }
            },
            {
                name: { en: "Acne Scar Laser", mr: "मुरुमांच्या खड्ड्यांसाठी फ्रॅक्शनल लेझर" },
                icon: "fa-solid fa-crosshairs",
                desc: {
                    en: "Fractional technology to break down fibrous acne crater tissue and smooth indentations.",
                    mr: "मुरुमांच्या जुनाट खड्ड्यांमधील तंतू मोडून त्वचा सपाट बनवणारा फ्रॅक्शनल लेझर."
                }
            },
            {
                name: { en: "Tattoo Removal Laser", mr: "टॅटू काढणे लेझर" },
                icon: "fa-solid fa-eraser",
                desc: {
                    en: "High-intensity Q-switched laser pulses that shatter multi-colored ink pigments safely.",
                    mr: "क्यू-स्विच्ड लेझरच्या साहाय्याने टॅटूची शाई सुरक्षितपणे फोडून फिकी करणे."
                }
            },
            {
                name: { en: "Pore Reduction Treatment", mr: "ओपन पोअर्स लेझर" },
                icon: "fa-solid fa-compress",
                desc: {
                    en: "Shrinks dilated pores and refines skin elasticity.",
                    mr: "मोठी झालेली छिद्रे बारीक करून त्वचेची लवचिकता सुधारणे."
                }
            }
        ]
    },
    {
        id: "peels",
        category: {
            en: "Clinical Peeling Therapy",
            mr: "क्लिनिकल पीलिंग थेरपी"
        },
        title: {
            en: "Advanced Peels",
            mr: "अ‍ॅडव्हान्स्ड क्लिनिकल पील्स"
        },
        icon: "fa-solid fa-droplet",
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
        description: {
            en: "Supervised clinical acid exfoliation formulated to treat persistent acne, stubborn epidermal melasma, open pores, and uneven tanning safely.",
            mr: "वांग, हट्टी डाग, तेलकटपणा आणि मृत पेशी दूर करून त्वचेचा पोत सुधारण्यासाठी वैद्यकीय देखरेखीखालील पील्स."
        },
        highlightTags: {
            en: ["Melasma Peel", "Yellow Retinol Peel", "Acne & Scar Peel", "Party Glow Peel", "Neck & Underarm", "Dull Skin Peel"],
            mr: ["वांग व डाग पील", "येलो रेटिनॉल पील", "अ‍ॅक्ने स्कार पील", "पार्टी ग्लो पील", "मान व काख पील", "डल स्किन पील"]
        },
        detailedTreatments: [
            {
                name: { en: "Acne & Pimples Peel", mr: "मुरुमांवर क्लिनिकल पील" },
                icon: "fa-solid fa-shield-virus",
                desc: {
                    en: "Clears active lesions, bacterial build-up, and unclogs comedones.",
                    mr: "अ‍ॅक्टिव्ह मुरुम, जिवाणू संसर्ग आणि बंद झालेली छिद्रे मोकळी करणारे पील."
                }
            },
            {
                name: { en: "Acne Marks & Scar Peel", mr: "मुरुमांच्या डागांवर पील" },
                icon: "fa-solid fa-notes-medical",
                desc: {
                    en: "Blends superficial post-inflammatory erythema (PIE) and post-acne pigmentation.",
                    mr: "मुरुमांनंतर पडलेले लाल व काळे डाग फिके करून रंग एकसारखा करणे."
                }
            },
            {
                name: { en: "Melasma & Pigmentation Peel", mr: "वांग व काळे डाग पील" },
                icon: "fa-solid fa-filter",
                desc: {
                    en: "High-strength clinical depigmentation peel for stubborn dermal/epidermal patches.",
                    mr: "चेहऱ्यावरील हट्टी वांग (Melasma) आणि काळ्या चट्ट्यांवर प्रभावी पील."
                }
            },
            {
                name: { en: "Dark Spot Peel", mr: "डार्क स्पॉट पील" },
                icon: "fa-solid fa-circle-half-stroke",
                desc: {
                    en: "Targeted action against localized blemishes and sun spots.",
                    mr: "विशिष्ट भागावरील काळे डाग आणि उन्हाच्या चट्ट्यांवर लक्ष्यित उपचार."
                }
            },
            {
                name: { en: "Dull Skin Peel", mr: "डल स्किन एक्सफोलिएशन पील" },
                icon: "fa-solid fa-wand-magic",
                desc: {
                    en: "Strips away oxidized dead cells to restore radiant clarity.",
                    mr: "निस्तेज झालेली मृत त्वचा काढून नैसर्गिक तेज परत मिळवणारे पील."
                }
            },
            {
                name: { en: "Open Pores Peel", mr: "ओपन पोअर्स पील" },
                icon: "fa-solid fa-compress",
                desc: {
                    en: "Tightens dilated pores and balances oily skin.",
                    mr: "मोठी छिद्रे बारीक करून त्वचेतील तेलाचे प्रमाण संतुलित करणे."
                }
            },
            {
                name: { en: "Underarm & Neck Pigmentation Peel", mr: "मान व काखेच्या काळेपणावर पील" },
                icon: "fa-solid fa-ribbon",
                desc: {
                    en: "Formulated to lighten dark underarms, friction acanthosis, and darkened neck folds.",
                    mr: "मानेभोवतीचा व काखेतील काळेपणा कमी करण्यासाठी विशेष क्लिनिकल फॉर्म्युलेशन."
                }
            },
            {
                name: { en: "Skin Brightening & Rejuvenation Peel", mr: "स्किन ब्राइटनिंग व रिजुव्हनेशन पील" },
                icon: "fa-solid fa-sparkles",
                desc: {
                    en: "Boosts cell turnover for long-term glow and refined texture.",
                    mr: "नवीन पेशींच्या निर्मितीला चालना देऊन दीर्घकालीन तजेला देणारे पील."
                }
            },
            {
                name: { en: "Party Peel", mr: "पार्टी ग्लो पील" },
                icon: "fa-solid fa-champagne-glasses",
                desc: {
                    en: "Instant luminous radiance and zero downtime prior to events.",
                    mr: "समारंभापूर्वी त्वरित तेज देणारे आणि कोणतीही विश्रांती न लागणारे पील."
                }
            },
            {
                name: { en: "Yellow Peel", mr: "येलो रेटिनॉल पील" },
                icon: "fa-solid fa-lemon",
                desc: {
                    en: "Retinol-based power peel addressing deep hyperpigmentation, photo-aging, and uneven tone.",
                    mr: "रेटिनॉलयुक्त शक्तिशाली पील, जे खोलवरचे डाग आणि सुरकुत्यांवर कार्य करते."
                }
            },
            {
                name: { en: "Fine Lines & Early Aging Peel", mr: "सुरकुत्यांवर अँटी-एजिंग पील" },
                icon: "fa-solid fa-clock-rotate-left",
                desc: {
                    en: "Softens expression lines and early chronological aging markers.",
                    mr: "चेहऱ्यावरील बारीक रेषा आणि वाढत्या वयाची लक्षणे हलकी करणारे पील."
                }
            }
        ]
    },
    {
        id: "iv",
        category: {
            en: "Infusion Therapies",
            mr: "आयव्ही ड्रिप्स व पोषण"
        },
        title: {
            en: "IV Drips / Infusion Therapy",
            mr: "आयव्ही ड्रिप्स व पोषण थेरपी"
        },
        icon: "fa-solid fa-syringe",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
        description: {
            en: "Complementary intravenous micronutrient, antioxidant, and hydration blends supporting cellular detoxification, energy, and radiant skin health.",
            mr: "शरीराचे आरोग्य, रोगप्रतिकारशक्ती आणि पेशींच्या पोषणासाठी सुरक्षित आणि पूरक आयव्ही ड्रिप्स."
        },
        highlightTags: {
            en: ["Hydration Drip", "Glutathione Glow Drip", "Hair Nutrition Drip", "Wellness & Vitamin", "B12 Support", "Antioxidant Care"],
            mr: ["हायड्रेशन ड्रिप", "ग्लो ड्रिप ग्लुटाथिऑन", "हेअर न्युट्रिशन ड्रिप", "व्हिटॅमिन ड्रिप", "बी१२ सपोर्ट", "अँटिऑक्सिडंट"]
        },
        detailedTreatments: [
            {
                name: { en: "Hydration & Rehydration IV Drip", mr: "हायड्रेशन व रिहायड्रेशन ड्रिप" },
                icon: "fa-solid fa-glass-water",
                desc: {
                    en: "Deep cellular electrolyte and fluid balance to revive dehydrated skin.",
                    mr: "शरीरातील पाण्याचे व इलेक्ट्रोलाइट्सचे प्रमाण संतुलित करून कोरडी त्वचा ताजीतवानी करणे."
                }
            },
            {
                name: { en: "Wellness IV Drip", mr: "वेलनेस आयव्ही ड्रिप" },
                icon: "fa-solid fa-heart",
                desc: {
                    en: "Comprehensive micronutrient infusion to boost immunity and internal vitality.",
                    mr: "रोगप्रतिकारशक्ती आणि शारीरिक ऊर्जा वाढवणारी सूक्ष्म पोषक घटकांची ड्रिप."
                }
            },
            {
                name: { en: "Vitamins & Nutrients IV Drip", mr: "व्हिटॅमिन्स व न्युट्रिएंट्स ड्रिप" },
                icon: "fa-solid fa-capsules",
                desc: {
                    en: "Essential therapeutic vitamins replenishment for cellular health and fatigue relief.",
                    mr: "थकवा दूर करून पेशींच्या आरोग्यासाठी आवश्यक जीवनसत्त्वे पुरवणारे सत्र."
                }
            },
            {
                name: { en: "Skin Health Support IV Drip", mr: "स्किन हेल्थ सपोर्ट ड्रिप" },
                icon: "fa-solid fa-spa",
                desc: {
                    en: "Formulated to support collagen synthesis, cellular repair, and dermal radiance.",
                    mr: "कोलेजन निर्मिती आणि त्वचेच्या दुरुस्तीसाठी मदत करणारी पोषक ड्रिप."
                }
            },
            {
                name: { en: "B12 / Folate Supplementation IV Drip", mr: "बी१२ व फोलेट सप्लिमेंट ड्रिप" },
                icon: "fa-solid fa-dna",
                desc: {
                    en: "Vital neurological and red-cell nutrient support for holistic vitality.",
                    mr: "मज्जासंस्था आणि रक्तातील पेशींच्या पोषणासाठी आवश्यक बी१२ ड्रिप."
                }
            },
            {
                name: { en: "Glow-Drip (Glutathione & Vitamin C)", mr: "ग्लो-ड्रिप (ग्लुटाथिऑन व व्हिटॅमिन सी)" },
                icon: "fa-solid fa-gem",
                desc: {
                    en: "Potent antioxidant infusion supporting radiant skin clarity and detox.",
                    mr: "शक्तिशाली अँटिऑक्सिडंट्स शरीरातील टॉक्सिन्स बाहेर काढून त्वचा उजळवण्यास मदत करतात."
                }
            },
            {
                name: { en: "Hair Nutrition Drip", mr: "हेअर न्युट्रिशन ड्रिप" },
                icon: "fa-solid fa-seedling",
                desc: {
                    en: "Targeted amino acids, biotin, and mineral nutrients to strengthen thinning hair roots.",
                    mr: "अमिनो अ‍ॅसिड्स, बायोटिन आणि खनिजांद्वारे केसांच्या मुळांना आतून पोषण देणे."
                }
            },
            {
                name: { en: "Antioxidant IV Drip", mr: "अँटिऑक्सिडंट ड्रिप" },
                icon: "fa-solid fa-shield",
                desc: {
                    en: "Scavenges oxidative stress from pollution, UV exposure, and biological fatigue.",
                    mr: "प्रदूषण आणि उन्हामुळे होणारा पेशींचा ताण कमी करणारी संरक्षणात्मक ड्रिप."
                }
            },
            {
                name: { en: "Recovery & Wellness Drip", mr: "रिकव्हरी व वेलनेस ड्रिप" },
                icon: "fa-solid fa-battery-charging",
                desc: {
                    en: "Post-stress or post-illness revitalizing nutrient blend to accelerate bodily recovery.",
                    mr: "आजारापणानंतर किंवा जास्त थकव्यानंतर शरीराला लवकर ताजेतवाने करणारी ड्रिप."
                }
            }
        ]
    },
    {
        id: "packages",
        category: {
            en: "Comprehensive Programs",
            mr: "सर्वसमावेशक पॅकेजेस"
        },
        title: {
            en: "Signature Packages",
            mr: "खास सिग्नेचर पॅकेजेस"
        },
        icon: "fa-solid fa-gift",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
        description: {
            en: "Curated multi-modality clinical skin programs designed for pre-wedding timelines, comprehensive facial rejuvenation, and disciplined long-term skin health.",
            mr: "लग्नसमारंभ, खास प्रसंग आणि दीर्घकालीन त्वचेच्या देखभालीसाठी तज्ज्ञ डॉक्टरांनी तयार केलेले विशेष उपचार पॅकेजेस."
        },
        highlightTags: {
            en: ["Bridal / Groom Plans", "Pre-Wedding Transformation", "7-Day Celebrity Plan", "Ultimate Glass Skin", "Age-Reverse Programs", "Luxury Membership"],
            mr: ["ब्राइडल / ग्रूम प्लॅन्स", "प्री-वेडिंग केअर", "७ दिवसांची स्किन योजना", "ग्लास स्किन प्रोग्राम", "अँटी-एजिंग केअर", "लक्झरी मेंबरशिप"]
        },
        detailedTreatments: [
            {
                name: { en: "Bridal / Groom Packages", mr: "ब्राइडल / ग्रूम पॅकेजेस" },
                icon: "fa-solid fa-ring",
                desc: {
                    en: "Comprehensive medical aesthetic timeline tailored for brides and grooms ahead of their special day.",
                    mr: "वधू आणि वरासाठी त्यांच्या खास दिवसापूर्वी त्वचेला संपूर्ण तजेला देणारे सुनियोजित सत्र."
                }
            },
            {
                name: { en: "Pre-Wedding Skin Transformation Programs", mr: "प्री-वेडिंग स्किन केअर प्रोग्राम" },
                icon: "fa-solid fa-champagne-glasses",
                desc: {
                    en: "Phased clinical medi-facials, peels, and body polishing for flawless celebratory glow.",
                    mr: "मेडी-फेशिअल, पील आणि स्किन पॉलिशिंगच्या साहाय्याने टप्प्याटप्प्याने त्वचा उजळवणे."
                }
            },
            {
                name: { en: "7-Day Celebrity Skin Plans", mr: "७ दिवसांची सेलिब्रिटी स्किन योजना" },
                icon: "fa-solid fa-calendar-week",
                desc: {
                    en: "Express intensive skincare protocol for immediate dewy luminosity and camera-ready radiance.",
                    mr: "कमी कालावधीत चेहऱ्याला चमकदार आणि फ्रेश लूक देणारा विशेष प्रोटोकॉल."
                }
            },
            {
                name: { en: "Ultimate Glass Skin Programs", mr: "अल्टिमेट ग्लास स्किन प्रोग्राम" },
                icon: "fa-solid fa-gem",
                desc: {
                    en: "Multi-session synergy of hydra-infusions, carbon laser, and peeling for crystal-clear texture.",
                    mr: "हायड्रा-इन्फ्युजन, कार्बन लेझर आणि पीलचा मिलाफ करून त्वचा नितळ व स्वच्छ करणे."
                }
            },
            {
                name: { en: "Age-Reverse Premium Skin Programs", mr: "प्रीमियम अँटी-एजिंग स्किन प्रोग्राम" },
                icon: "fa-solid fa-hourglass-half",
                desc: {
                    en: "Advanced RF contouring, fractional resurfacing, and cellular collagen stimulation.",
                    mr: "रेडिओफ्रिक्वेन्सी व कोलेजन वाढवून सुरकुत्या कमी करणारा आणि त्वचा घट्ट करणारा प्रोग्राम."
                }
            },
            {
                name: { en: "Skin Luxury Membership Packages", mr: "स्किन लक्झरी मेंबरशिप पॅकेजेस" },
                icon: "fa-solid fa-id-card-clip",
                desc: {
                    en: "Year-round customized dermatologist-supervised skin maintenance and preventive care.",
                    mr: "वर्षभर डॉक्टरांच्या देखरेखीखाली त्वचेची नियमित काळजी व प्रतिबंधात्मक तपासणी योजना."
                }
            }
        ]
    }
];

// === 6. PATIENT CARE & TREATMENT GUIDELINES ===
const patientGuidelinesData = [
    {
        icon: "fa-solid fa-heart-pulse",
        title: { en: "General Skin & Diet Advice", mr: "सर्वसाधारण त्वचा व आहार सल्ला" },
        desc: {
            en: "Skin health can be related to balanced nutrition, adequate water, sleep and appropriate medical care. This is general information; ask your doctor for advice specific to you.",
            mr: "त्वचेचे आरोग्य योग्य पोषण, पुरेसे पाणी, झोप आणि योग्य वैद्यकीय काळजी यांच्याशी संबंधित असू शकते. ही सर्वसाधारण माहिती आहे; वैयक्तिक सल्ल्यासाठी डॉक्टरांना भेटा."
        }
    },
    {
        icon: "fa-solid fa-bowl-food",
        title: { en: "Diet During Breakouts / Itching", mr: "पुरळ / खाज असताना आहार" },
        desc: {
            en: "Diet may affect some people\'s skin, but this differs from person to person. Your doctor will give individual diet advice after examination. Drink adequate water daily.",
            mr: "काही लोकांमध्ये आहाराचा त्वचेवर परिणाम होऊ शकतो, मात्र तो व्यक्तीनुसार वेगळा असतो. तपासणीनंतर डॉक्टर वैयक्तिक आहार सल्ला देतील. रोज पुरेसे पाणी प्या."
        }
    },
    {
        icon: "fa-solid fa-pump-soap",
        title: { en: "Daily Skincare Routine", mr: "दैनंदिन त्वचेची काळजी" },
        desc: {
            en: "Use a gentle cleanser, a moisturizer and a sunscreen suited to your skin type. Avoid picking at blemishes, scrubbing hard, or applying steroid or chemical creams without a doctor\'s advice.",
            mr: "आपल्या त्वचेस योग्य सौम्य क्लेंझर, मॉइश्चरायझर आणि सनस्क्रीन वापरा. पुरळ फोडणे, जोरात घासणे किंवा डॉक्टरांच्या सल्ल्याशिवाय स्टिरॉइड/केमिकल क्रीम लावणे टाळा."
        }
    },
    {
        icon: "fa-solid fa-shower",
        title: { en: "Hair & Scalp Hygiene", mr: "केस व टाळूची स्वच्छता" },
        desc: {
            en: "Use a mild shampoo suited to your scalp. Frequent harsh chemical dyeing, excessive heat styling and tight hairstyles can cause hair breakage or loss, so limit them.",
            mr: "टाळूस योग्य सौम्य शॅम्पू वापरा. वारंवार रासायनिक रंग, जास्त उष्णतेने स्टायलिंग आणि केस ओढून बांधणे टाळा, कारण त्यामुळे केस तुटू किंवा गळू शकतात."
        }
    },
    {
        icon: "fa-solid fa-shield-virus",
        title: { en: "Laser & Procedure Care", mr: "लेझर व इतर प्रक्रियेची काळजी" },
        desc: {
            en: "Follow the pre- and post-procedure instructions given by your doctor. Use sun protection and moisturizer as advised after sessions.",
            mr: "डॉक्टरांनी दिलेल्या प्रक्रियेपूर्वीच्या व नंतरच्या सूचनांचे पालन करा. सत्रानंतर डॉक्टरांच्या सल्ल्यानुसार सूर्यप्रकाशापासून संरक्षण व मॉइश्चरायझरचा वापर करा."
        }
    },
    {
        icon: "fa-solid fa-clipboard-check",
        title: { en: "Post-Treatment Care & Follow-Up", mr: "उपचारानंतरची काळजी व पाठपुरावा" },
        desc: {
            en: "Use prescribed creams or medicines as instructed. Avoid direct sun, exfoliants and harsh cosmetics right after a procedure. Response differs from person to person; attend follow-up visits as advised.",
            mr: "डॉक्टरांनी दिलेली औषधे/क्रीम सूचनेनुसार वापरा. प्रक्रियेनंतर थेट ऊन, एक्सफोलियंट व तीव्र सौंदर्यप्रसाधने टाळा. प्रतिसाद व्यक्तीनुसार वेगळा असतो; सांगितलेल्या वेळी पाठपुरावा करा."
        }
    }
];

// === 7. CLINICAL STANDARDS & PATIENT CARE (Safety & Ethics) ===
const clinicalStandardsData = [
    {
        icon: "fa-solid fa-stethoscope",
        title: { en: "Examination & Diagnosis", mr: "तपासणी व निदान" },
        desc: {
            en: "Treatment begins with history taking and clinical examination by the doctor. Diagnostic tools are used where the doctor considers them necessary.",
            mr: "उपचाराची सुरुवात आजाराचा इतिहास आणि डॉक्टरांच्या तपासणीने होते. गरज असल्यास उपलब्ध उपकरणांचा वापर केला जातो."
        }
    },
    {
        icon: "fa-solid fa-pump-medical",
        title: { en: "Infection Control & Sterilisation", mr: "निर्जंतुकीकरण व संसर्ग नियंत्रण" },
        desc: {
            en: "Reusable instruments are sterilised in an autoclave, and disposable items are used where applicable.",
            mr: "पुन्हा वापरली जाणारी उपकरणे ऑटोक्लेव्हद्वारे निर्जंतुक केली जातात आणि जेथे लागू असेल तेथे डिस्पोजेबल साहित्य वापरले जाते."
        }
    },
    {
        icon: "fa-solid fa-clipboard-list",
        title: { en: "Individual Treatment Planning", mr: "वैयक्तिक उपचार नियोजन" },
        desc: {
            en: "The doctor plans treatment according to your skin or hair condition, general health and severity. No result is guaranteed.",
            mr: "रुग्णाची त्वचा/केसांची स्थिती, प्रकृती आणि आजाराच्या तीव्रतेनुसार डॉक्टर उपचार ठरवतात. कोणत्याही निकालाची हमी दिली जात नाही."
        }
    },
    {
        icon: "fa-solid fa-comments",
        title: { en: "Informed Consultation", mr: "माहितीपूर्ण सल्लामसलत" },
        desc: {
            en: "The doctor explains the procedure, number of sessions, possible risks and side effects, and after-care before you decide.",
            mr: "उपचाराची प्रक्रिया, आवश्यक सेशन्स, संभाव्य धोके व दुष्परिणाम आणि उपचारानंतरची काळजी याविषयी माहिती दिली जाते."
        }
    }
];

// === 8. BILINGUAL TRANSLATIONS DICTIONARY ===
const translations = {
    en: {
        pageTitle: "Dr. Deshmukh Skin Hair Laser Clinic & Advance Aesthetic Center | Khamgaon",
        navHome: "Home",
        navServices: "Treatments",
        navStandards: "Clinical Standards",
        navGuidelines: "Patient Guidelines",
        navAbout: "About Doctors",
        navContact: "Book Appointment",

        // Hero Section
        heroHeadlinePart1: "Clinical Cosmetology &",
        heroHeadlinePart2: "Aesthetic Laser Center",
        heroSubtext: "Personalized skin rejuvenation, modern aesthetic laser procedures, and dedicated cosmetic care guided by qualified practitioners in Khamgaon.",
        heroCta: "Book Consultation",
        heroCallCta: "Call Clinic for Appointment",
        heroFloatTitle2: "Dr. Deshmukh Clinic",


        // Conditions & Clinical Scope Section
        scopeTag: "Clinical Scope & Directory",
        scopeTitle: "Key Conditions & Treatments Directory",
        scopeSubtitle: "Explore the wide spectrum of skin conditions, specialized laser procedures, and hair root therapies offered at our clinic.",
        scopeTabSkin: "Skin Concerns Addressed",
        scopeTabLaser: "Advanced Aesthetic & Laser",
        scopeTabHair: "Advanced Hair & Scalp Therapies",

        // Services Section
        serviceBookLink: "View Full Treatment Details",
        viewProtocolsBtn: "View All Detailed Protocols",
        hideProtocolsBtn: "Hide Detailed Protocols",

        // Clinical Standards
        standardsTag: "Patient Safety & Ethics",
        standardsTitle: "Our Clinical Standards & Patient Care Approach",
        standardsSubtitle: "Information about our clinical practice, sterilisation and patient-safety processes.",

        // Patient Guidelines
        guidelinesTag: "Patient Education & Care",
        guidelinesTitle: "Patient Care & Treatment Guidelines",
        guidelinesSubtitle: "General skin and hair care information, diet tips and after-care advice. This is not a substitute for a doctor's advice.",

        // Doctors Section
        aboutTag: "Our Doctors",
        aboutTitle: "Meet Our Doctors",
        aboutSubtitle: "Qualification and registration details of the practitioners at our clinic.",
        doctorTimingLabel: "Consultation Hours",
        doctorFocusLabel: "Clinical Focus Areas",
        doctorBookBtn: "Schedule Consultation",

        // Statutory Medical Disclaimer
        disclaimerTitle: "Statutory Medical Disclaimer & Patient Notice",
        disclaimerText: "The information published on this website is for general educational and patient awareness purposes only. It does not constitute medical advice, diagnosis, or clinical consultation. Treatment outcomes vary based on individual medical conditions, biological response, and compliance. The clinic and its doctors do not make commercial claims or guarantees of cure or results.",

        // CTA Band
        ctaTitle: "Have Questions About Your Skin or Hair Health?",
        ctaSubtitle: "Schedule a clinical consultation with Dr. Deshmukh in Khamgaon for an individualized medical evaluation.",
        ctaBtnPrimary: "Inquire via WhatsApp",
        ctaBtnSecondary: "Call +91 9272550699",

        // Contact Section
        contactTag: "Location & Timings",
        contactTitle: "Contact & Appointments",
        contactSubtitle: "Consultation is conducted by prior appointment during clinic working hours in Khamgaon.",
        contactInfoTitle: "Clinic Information",
        contactDesc: "Please book in advance to minimize waiting time during consultation hours.",
        contactAddressLabel: "Clinic Address",
        contactPhoneLabel: "Phone Numbers",
        contactTimingsLabel: "Clinic Working Hours",
        contactEmailLabel: "Email Address",

        // Form
        formTitle: "Schedule a Consultation",
        formSubtext: "Fill details below to send an appointment request directly via WhatsApp.",
        fieldNamePlaceholder: "Patient Full Name *",
        fieldAgePlaceholder: "Age *",
        fieldVillagePlaceholder: "Village / City *",
        fieldMobilePlaceholder: "Mobile Number (10 digits) *",
        selectDoctorDefault: "Choose Doctor (Optional)",
        selectProblemDefault: "Select Clinical Concern *",
        selectProblemSkin: "Skin Disease / Concern (त्वचा)",
        selectProblemHair: "Hair & Scalp Concern (केस)",
        selectProblemLaser: "Laser Consultation (लेझर)",
        selectProblemBeauty: "Face Glow / Aesthetic (सौंदर्य)",
        selectProblemOther: "Other Medical Issue (इतर)",
        fieldMessagePlaceholder: "Brief Symptoms or Medical History (Optional)",
        formSubmitBtn: "Send Appointment Requests",
        privacyNote: "Confidentiality Notice: Patient information is collected strictly for appointment scheduling and is never shared with third parties.",

        // Floating & Footer
        callBtnTitle: "Call Clinic for Appointment",
        waBtnTitle: "Inquire on WhatsApp",
        footerAboutText: "Clinical Skin, Hair, and Medical Laser Centre in Khamgaon, providing ethical, scientific, and patient-centered skin and aesthetic care.",
        footerQuickLinksTitle: "Quick Navigation",
        footerTreatmentsTitle: "Clinical Areas",
        footerContactTitle: "Clinic Details",
        footerRights: "© 2024 Dr. Deshmukh Skin Hair Laser Clinic & Advance Aesthetic Center. All rights reserved.",
        footerTagline: "Committed to Ethical Clinical Practice & Patient Welfare",

        // Treatment Details Dedicated Page Elements
        backToHomeBtn: "← Back to Main Website",
        categoryNavTitle: "Clinical Departments",
        allProtocolsHeading: "Available Treatments",
        protocolNumberLabel: "Protocol",
        inquireProtocolBtn: "Inquire for this Procedure",
        careInstructionsTitle: "Clinical Care & Patient Advisory",
        preCareTitle: "Pre-Procedure Preparation",
        preCareText: "A thorough diagnostic assessment is conducted before any treatment. Please disclose your complete medical history, ongoing medications, and allergies during your consultation.",
        postCareTitle: "Post-Procedure Maintenance",
        postCareText: "Strict sun protection (SPF 50+) and barrier creams are recommended post-procedure. Refrain from direct sun exposure, harsh chemical cosmetics, or scrubbing immediately following clinical sessions.",
        clinicalNoticeTitle: "Clinical Notice & Ethical Care",
        clinicalNoticeText: "All procedures are conducted or supervised by qualified registered medical practitioners. Outcomes vary based on individual physiological response; no medical treatment guarantees identical results.",
        detailsBookTitle: "Schedule Consultation for",
        detailsBookSubtitle: "Select your preferred slot with Dr. Deshmukh in Khamgaon.",

        // WhatsApp Format
        waGreeting: "Hello Dr. Deshmukh Clinic Team, 🙏\n\nI would like to request an appointment for a clinical consultation.",
        waName: "Patient Name",
        waAge: "Age",
        waVillage: "Village / City",
        waMobile: "Mobile",
        waDoctor: "Doctor",
        waProblem: "Clinical Concern",
        waMessage: "Symptoms/Notes",
        waClosing: "Please let me know the available consultation slot. Thank you!",
        validationAlert: "Please fill in all mandatory (*) fields.",
        mobileAlert: "Please enter a valid 10-digit mobile number."
    },

    mr: {
        pageTitle: "डॉ. देशमुख स्किन हेअर लेझर क्लिनिक आणि अ‍ॅडव्हान्स्ड एस्थेटिक सेंटर | खामगांव",
        navHome: "मुख्य पृष्ठ",
        navServices: "उपचार",
        navStandards: "क्लिनिकल मानके",
        navGuidelines: "रुग्ण मार्गदर्शक",
        navAbout: "आमच्याविषयी",
        navContact: "अपॉइंटमेंट बुक करा",

        // Hero Section
        heroBadge: "नोंदणीकृत वैद्यकीय केंद्र • खामगांव",
        heroHeadlinePart1: "शास्त्रोक्त त्वचारोग व ",
        heroHeadlinePart2: "क्लिनिकल एस्थेटिक्स",
        heroSubtext: "नोंदणीकृत तज्ज्ञ डॉक्टरांच्या मार्गदर्शनाखाली त्वचा, केस व लेझर उपचारांची शास्त्रीय आणि सुरक्षित वैद्यकीय सेवा.",
        heroCta: "तपासणीसाठी वेळ बुक करा",
        heroCallCta: "अपॉइंटमेंटसाठी कॉल करा",
        heroFloatTitle2: "डॉ. देशमुख क्लिनिक",


        // Conditions & Clinical Scope Section
        scopeTag: "उपचार व समस्या व्याप्ती",
        scopeTitle: "प्रमुख समस्या व उपचार पद्धती सूची",
        scopeSubtitle: "आमच्या क्लिनिकमध्ये उपलब्ध असलेल्या विविध त्वचा समस्या, आधुनिक लेझर पद्धती आणि केसांच्या उपचारांची सविस्तर माहिती.",
        scopeTabSkin: "प्रमुख त्वचारोग व समस्या",
        scopeTabLaser: "अ‍ॅडव्हान्स्ड स्किन व लेझर",
        scopeTabHair: "आधुनिक केस उपचार",

        // Services Section
        servicesTag: "विशेष क्लिनिकल सेवा",
        servicesTitle: "त्वचा, केस व सौंदर्यासाठी संपूर्ण वैद्यकीय उपचार",
        servicesSubtitle: "प्रत्येक उपचार रुग्णाची सखोल तपासणी करून, जंतुविरहित वातावरणात आणि वैद्यकीय मानकांनुसार केला जातो.",
        serviceBookLink: "सर्व सविस्तर माहिती पहा",
        viewProtocolsBtn: "सर्व सविस्तर उपचार पद्धती पहा",
        hideProtocolsBtn: "सविस्तर माहिती बंद करा",

        // Clinical Standards
        standardsTag: "रुग्ण सुरक्षा व नैतिकता",
        standardsTitle: "आमची क्लिनिकल मानके व कार्यपद्धती",
        standardsSubtitle: "आमची वैद्यकीय सराव पद्धत, निर्जंतुकीकरण आणि रुग्ण सुरक्षेबाबतची माहिती.",

        // Patient Guidelines
        guidelinesTag: "रुग्ण प्रबोधन व काळजी",
        guidelinesTitle: "रुग्ण काळजी व उपचार मार्गदर्शक तत्त्वे",
        guidelinesSubtitle: "त्वचा व केसांच्या काळजीची सर्वसाधारण माहिती, आहारविषयक टिप्स आणि उपचारानंतरची काळजी. ही माहिती डॉक्टरांच्या सल्ल्याला पर्याय नाही.",

        // Doctors Section
        aboutTag: "डॉक्टर",
        aboutTitle: "आमचे तज्ज्ञ डॉक्टर्स",
        aboutSubtitle: "क्लिनिकमधील डॉक्टरांची पात्रता व नोंदणीची माहिती.",
        doctorTimingLabel: "तपासणी वेळ",
        doctorFocusLabel: "विशेष उपचार क्षेत्रे",
        doctorBookBtn: "अपॉइंटमेंट निश्चित करा",

        // Statutory Medical Disclaimer
        disclaimerTitle: "वैधानिक वैद्यकीय अस्वीकरण व रुग्ण सूचना",
        disclaimerText: "या संकेतस्थळावरील माहिती केवळ रुग्ण प्रबोधन आणि सामान्य जनजागृतीसाठी आहे. हा थेट वैद्यकीय सल्ला, निदान किंवा उपचारांचा पर्याय नाही. उपचारांचे परिणाम प्रत्येक व्यक्तीची प्रकृती, त्वचेचा प्रकार आणि वैद्यकीय स्थितीनुसार बदलतात. क्लिनिक किंवा डॉक्टर्स हमखास परिणामांचा दावा करत नाहीत.",

        // CTA Band
        ctaTitle: "आपल्या त्वचा किंवा केसांच्या आरोग्याविषयी प्रश्न आहेत का?",
        ctaSubtitle: "वैयक्तिक वैद्यकीय तपासणीसाठी खामगाव येथे डॉ. देशमुख यांच्याशी संपर्क साधा.",
        ctaBtnPrimary: "व्हॉट्सअ‍ॅपवर विचारणा करा",
        ctaBtnSecondary: "कॉल करा: ९२७२५५०६९९",

        // Contact Section
        contactTag: "पत्ता व वेळ",
        contactTitle: "संपर्क व अपॉइंटमेंट",
        contactSubtitle: "क्लिनिकच्या वेळेत पूर्व नियोजित वेळेनुसार रुग्णांची तपासणी केली जाते.",
        contactInfoTitle: "क्लिनिक माहिती",
        contactDesc: "तपासणीच्या वेळेत जास्त वेळ थांबावे लागू नये म्हणून कृपया पूर्व नोंदणी करावी.",
        contactAddressLabel: "क्लिनिकचा पत्ता",
        contactPhoneLabel: "मोबाईल क्रमांक",
        contactTimingsLabel: "क्लिनिक वेळ",
        contactEmailLabel: "ईमेल पत्ता",

        // Form
        formTitle: "तपासणीसाठी वेळ निश्चित करा",
        formSubtext: "खालील माहिती भरून थेट व्हॉट्सअ‍ॅपवर अपॉइंटमेंटसाठी विनंती पाठवा.",
        fieldNamePlaceholder: "रुग्णाचे संपूर्ण नाव *",
        fieldAgePlaceholder: "वय *",
        fieldVillagePlaceholder: "गाव / शहर *",
        fieldMobilePlaceholder: "मोबाईल नंबर (१० अंकी) *",
        selectDoctorDefault: "डॉक्टर निवडा (ऐच्छिक)",
        selectProblemDefault: "उपचाराची समस्या निवडा *",
        selectProblemSkin: "त्वचारोग व विकार (त्वचा)",
        selectProblemHair: "केस व टाळू समस्या (केस)",
        selectProblemLaser: "लेझर उपचार (लेझर)",
        selectProblemBeauty: "चेहऱ्याचा ग्लो / एस्थेटिक (सौंदर्य)",
        selectProblemOther: "इतर वैद्यकीय समस्या (इतर)",
        fieldMessagePlaceholder: "आजाराची लक्षणे किंवा माहिती (ऐच्छिक)",
        formSubmitBtn: "व्हॉट्सअ‍ॅपद्वारे अपॉइंटमेंटची विनंती पाठवा",
        privacyNote: "गोपनीयता सूचना: रुग्णाची माहिती केवळ अपॉइंटमेंट बुकिंगसाठी वापरली जाते आणि ती कोणाशीही शेअर केली जात नाही.",

        // Floating & Footer
        callBtnTitle: "अपॉइंटमेंटसाठी थेट कॉल करा",
        waBtnTitle: "व्हॉट्सअ‍ॅपवर संपर्क करा",
        footerAboutText: "खामगांव येथील त्वचा, केस व लेझर उपचार केंद्र. नैतिक, शास्त्रीय आणि रुग्णकेंद्रित वैद्यकीय सेवेसाठी कटिबद्ध.",
        footerQuickLinksTitle: "महत्वाच्या लिंक्स",
        footerTreatmentsTitle: "प्रमुख उपचार क्षेत्रे",
        footerContactTitle: "क्लिनिक संपर्क",
        footerRights: "© 2024 डॉ. देशमुख स्किन, हेअर, लेझर क्लिनिक आणि अ‍ॅडव्हान्स्ड एस्थेटिक सेंटर. सर्व हक्क राखीव.",
        footerTagline: "नैतिक वैद्यकीय सराव व रुग्णहित हीच आमची प्राथमिकता",

        // Treatment Details Dedicated Page Elements
        backToHomeBtn: "← मुख्य पृष्ठावर जा",
        categoryNavTitle: "उपचार विभाग",
        allProtocolsHeading: "उपलब्ध उपचार",
        protocolNumberLabel: "पद्धती",
        inquireProtocolBtn: "या उपचारासाठी विचारणा करा",
        careInstructionsTitle: "क्लिनिकल काळजी व रुग्ण सल्ला",
        preCareTitle: "उपचारापूर्वी घ्यावयाची काळजी",
        preCareText: "कोणत्याही उपचारापूर्वी डॉक्टरांकडून सखोल तपासणी केली जाते. पूर्वीचे आजार, चालू औषधे किंवा अ‍ॅलर्जी असल्यास तपासणीदरम्यान नक्की सांगावे.",
        postCareTitle: "उपचारानंतरची देखभाल",
        postCareText: "उपचारानंतर कडक उन्हापासून संरक्षण (SPF 50+) आणि बॅरियर क्रीम्स वापरणे अत्यंत आवश्यक आहे. थेट सूर्यप्रकाश, स्क्रब किंवा रासायनिक सौंदर्यप्रसाधने टाळावीत.",
        clinicalNoticeTitle: "क्लिनिकल नोंद व पारदर्शक माहिती",
        clinicalNoticeText: "सर्व उपचार नोंदणीकृत तज्ज्ञ डॉक्टरांच्या देखरेखीखाली केले जातात. प्रत्येकाची प्रकृती व त्वचेचा प्रकार वेगळा असल्याने परिणाम व्यक्तीपरत्वे बदलतात. क्लिनिक कोणत्याही खोट्या दाव्यांचे समर्थन करत नाही.",
        detailsBookTitle: "तपासणीसाठी वेळ बुक करा -",
        detailsBookSubtitle: "खामगाव येथे डॉ. देशमुख यांच्याकडे आपली वेळ निश्चित करा.",

        // WhatsApp Format
        waGreeting: "नमस्कार डॉ. देशमुख क्लिनिक टीम, 🙏\n\nमला तपासणीसाठी अपॉइंटमेंट बुक करायची आहे.",
        waName: "रुग्णाचे नाव",
        waAge: "वय",
        waVillage: "गाव / शहर",
        waMobile: "मोबाईल",
        waDoctor: "डॉक्टर",
        waProblem: "समस्या",
        waMessage: "लक्षणे / माहिती",
        waClosing: "कृपया उपलब्ध वेळ सांगावी. धन्यवाद!",
        validationAlert: "कृपया सर्व आवश्यक (*) माहिती भरा.",
        mobileAlert: "कृपया योग्य 10 अंकी मोबाईल नंबर टाका (उदा. 9272550699)."
    }
};

// === 9. DYNAMIC DOM RENDERERS ===
let currentLang = 'en';
let activeScopeTab = 'skinConditions';
let activeServiceFilter = 'all';
let activeDetailService = 'hair';

const serviceFilterCategories = [
    { id: 'all', label: { en: 'All Treatments', mr: 'सर्व उपचार' } },
    { id: 'hair', label: { en: 'Hair Treatments', mr: 'केस उपचार' } },
    { id: 'facials', label: { en: 'Medi-Face Sessions', mr: 'मेडी-फेशिअल्स' } },
    { id: 'laser', label: { en: 'Laser Aesthetic', mr: 'लेझर उपचार' } },
    { id: 'peels', label: { en: 'Advanced Peels', mr: 'क्लिनिकल पील्स' } },
    { id: 'iv', label: { en: 'IV Drips Infusion', mr: 'आयव्ही ड्रिप्स' } },
    { id: 'packages', label: { en: 'Signature Packages', mr: 'खास पॅकेजेस' } }
];

// A. Render Trust Strip
function renderTrustBar(lang) {
    const container = document.getElementById('trustBarGrid');
    if (!container) return;

    container.innerHTML = trustHighlights.map(item => `
        <div class="trust-pill-card" data-aos="fade-up">
            <div class="trust-pill-icon">
                <i class="${item.icon}"></i>
            </div>
            <div class="trust-pill-content">
                <h4>${item.value}</h4>
                <p>${item.label[lang] || item.label.en}</p>
            </div>
        </div>
    `).join('');
}

// B. Render Clinical Scope Directory (Conditions Treated, Skin & Laser, Hair)
function renderClinicalScope(lang) {
    const tabsContainer = document.getElementById('clinicalScopeTabs');
    const contentContainer = document.getElementById('clinicalScopeContent');
    if (!tabsContainer || !contentContainer) return;

    const tabs = [
        { id: 'skinConditions', label: translations[lang].scopeTabSkin, icon: 'fa-solid fa-hand-dots' },
        { id: 'laserProcedures', label: translations[lang].scopeTabLaser, icon: 'fa-solid fa-bolt-lightning' },
        { id: 'hairTreatments', label: translations[lang].scopeTabHair, icon: 'fa-solid fa-scissors' }
    ];

    tabsContainer.innerHTML = tabs.map(tab => `
        <button type="button" class="scope-tab-btn ${tab.id === activeScopeTab ? 'active' : ''}" data-scope-tab="${tab.id}">
            <i class="${tab.icon}"></i>
            <span>${tab.label}</span>
        </button>
    `).join('');

    tabsContainer.querySelectorAll('.scope-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            activeScopeTab = e.currentTarget.getAttribute('data-scope-tab');
            renderClinicalScope(currentLang);
        });
    });

    const activeGroup = clinicalScopeData[activeScopeTab];
    if (activeGroup) {
        contentContainer.innerHTML = `
            <div class="scope-header-box" data-aos="fade-up">
                <h4><i class="${activeGroup.icon}"></i> ${activeGroup.title[lang]}</h4>
                <p>${activeGroup.subtitle[lang]}</p>
            </div>
            <div class="scope-badge-grid" data-aos="fade-up">
                ${activeGroup.items.map(item => `
                    <a href="treatment-details.html?service=${activeGroup.targetService}" class="scope-item-badge" title="View details for ${item[lang]}">
                        <i class="fa-solid fa-circle-check"></i>
                        <span>${item[lang]}</span>
                        <i class="fa-solid fa-arrow-up-right-from-square scope-link-icon"></i>
                    </a>
                `).join('')}
            </div>
        `;
    }
}

// Curated high-resolution aesthetic photography pool matching the luxury clinic card layout
const treatmentImagePool = {
    hair: [
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1608248597359-58b9f1d0ec2b?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1512290903912-70df78c66eb5?auto=format&fit=crop&w=700&q=80"
    ],
    beauty: [
        "https://images.unsplash.com/photo-1512290903912-70df78c66eb5?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1608248597359-58b9f1d0ec2b?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80"
    ],
    laser: [
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1512290903912-70df78c66eb5?auto=format&fit=crop&w=700&q=80"
    ],
    peels: [
        "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1608248597359-58b9f1d0ec2b?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=700&q=80"
    ],
    iv: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1512290903912-70df78c66eb5?auto=format&fit=crop&w=700&q=80"
    ],
    packages: [
        "https://images.unsplash.com/photo-1512290903912-70df78c66eb5?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=700&q=80",
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80"
    ]
};

function getTreatmentPhoto(svcId, idx, item) {
    if (item && item.image) return item.image;
    const pool = treatmentImagePool[svcId] || treatmentImagePool.beauty;
    return pool[idx % pool.length];
}

// C. Render Services Grid & Category Filters (Links to Dedicated Treatment Details Page)
function renderServices(lang) {
    const filterContainer = document.getElementById('servicesFilterTabs');
    const container = document.getElementById('servicesGrid');
    if (!container) return;

    const dict = translations[lang] || translations.en;

    // Render Filter Buttons
    if (filterContainer) {
        filterContainer.innerHTML = serviceFilterCategories.map(cat => `
            <button type="button" class="service-filter-btn ${cat.id === activeServiceFilter ? 'active' : ''}" data-cat="${cat.id}">
                ${cat.label[lang] || cat.label.en}
            </button>
        `).join('');

        filterContainer.querySelectorAll('.service-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                activeServiceFilter = e.currentTarget.getAttribute('data-cat');
                renderServices(currentLang);
            });
        });
    }

    // Filter services
    const filteredServices = activeServiceFilter === 'all'
        ? servicesData
        : servicesData.filter(svc => svc.id === activeServiceFilter);

    // Render Luxury Aesthetic Department Cards
    container.innerHTML = filteredServices.map((svc, idx) => `
        <div class="service-luxury-card" data-aos="fade-up" data-aos-delay="${((idx % 3) + 1) * 70}">
            <a href="treatment-details.html?service=${svc.id}" class="service-card-media-wrap" title="${svc.title[lang]}">
                <img src="${svc.image}" alt="${svc.title[lang]}" loading="lazy">
                <span class="service-card-badge">${svc.category[lang]}</span>
            </a>
            <div class="service-card-content">
                <div class="service-card-title-row">
                    <div class="service-card-icon-pill"><i class="${svc.icon}"></i></div>
                    <h3 class="service-card-title"><a href="treatment-details.html?service=${svc.id}">${svc.title[lang]}</a></h3>
                </div>
                <p class="service-card-summary">${svc.description[lang]}</p>
                <div class="service-card-highlight-pills">
                    ${svc.highlightTags[lang].slice(0, 3).map(tag => `<span class="service-mini-tag">${tag}</span>`).join('')}
                </div>
                <div class="service-card-action-row">
                    <a href="treatment-details.html?service=${svc.id}" class="service-explore-pill-btn">
                        <span>${lang === 'mr' ? 'उपचार पहा' : 'View Treatments'} (${svc.detailedTreatments.length})</span>
                        <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// D. Render Dedicated Treatment Details Page View (Inspired by Reference Image)
function renderTreatmentDetailsPage(lang) {
    const container = document.getElementById('treatmentDetailsContainer');
    if (!container) return;

    // Detect active service from URL param or default
    const params = new URLSearchParams(window.location.search);
    const serviceId = params.get('service') || activeDetailService || 'beauty';
    activeDetailService = serviceId;

    const svc = servicesData.find(s => s.id === serviceId) || servicesData[0];
    const dict = translations[lang] || translations.en;

    // 1. Populate top sticky category bar if present
    const navContainer = document.getElementById('detailsCategoryNav');
    if (navContainer) {
        navContainer.innerHTML = servicesData.map(s => `
            <a href="treatment-details.html?service=${s.id}" class="category-pill-btn ${s.id === svc.id ? 'active' : ''}" data-service-id="${s.id}">
                <i class="${s.icon}"></i>
                <span>${s.title[lang]}</span>
            </a>
        `).join('');

        navContainer.querySelectorAll('.category-pill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = e.currentTarget.getAttribute('data-service-id');
                activeDetailService = id;
                history.pushState(null, '', `treatment-details.html?service=${id}`);
                renderTreatmentDetailsPage(currentLang);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });
    }

    // 2. Render Full Explore Layout matching the Reference Image
    container.innerHTML = `
        <!-- Explore Header Section -->
        <div class="explore-header-section" data-aos="fade-up">
            <div class="explore-top-badge">
                <i class="fa-solid fa-sparkles"></i>
                <span>${dict.exploreServicesBadge || (lang === 'mr' ? 'क्लिनिकल सेवा शोधा' : 'Explore Our Services')}</span>
            </div>
            <h1 class="explore-page-title">${lang === 'mr' ? svc.title.mr + ' शोधा' : 'Explore ' + svc.title.en}</h1>
            <p class="explore-page-desc">${svc.description[lang]}</p>
            
            <!-- Category Filter Pills directly under title -->
            <div class="explore-category-pills" id="explorePills">
                ${servicesData.map(s => `
                    <a href="treatment-details.html?service=${s.id}" class="explore-pill ${s.id === svc.id ? 'active' : ''}" data-service-id="${s.id}">
                        <i class="${s.icon}"></i>
                        <span>${s.title[lang]}</span>
                    </a>
                `).join('')}
            </div>
        </div>

        <!-- 3-Column Clean Description Cards Grid (NO PHOTOS - Pure Clinical UI) -->
        <div class="explore-cards-grid">
            ${svc.detailedTreatments.map((t, idx) => {
        const waMsg = encodeURIComponent(`Hello Dr. Deshmukh Clinic, I would like to inquire about: ${t.name.en} (${svc.title.en})`);
        return `
                <div class="explore-text-card" data-aos="fade-up" data-aos-delay="${((idx % 3) + 1) * 60}">
                    <div class="explore-card-top-bar">
                        <span class="explore-card-num">${String(idx + 1).padStart(2, '0')}</span>
                        <div class="explore-card-icon">
                            <i class="${t.icon || svc.icon}"></i>
                        </div>
                    </div>
                    <div class="explore-card-body">
                        <h3 class="explore-card-name">${t.name[lang]}</h3>
                        <p class="explore-card-desc">${t.desc[lang]}</p>
                    </div>
                    <div class="explore-card-bottom">
                        <span class="explore-card-badge-tag"><i class="fa-solid fa-notes-medical"></i> ${lang === 'mr' ? 'क्लिनिकल सत्र' : 'Clinical Session'}</span>
                        <a href="https://wa.me/919272550699?text=${waMsg}" class="explore-pill-action" target="_blank" rel="noopener noreferrer" title="Inquire for ${t.name[lang]}">
                            <span>${lang === 'mr' ? 'विचारणा करा' : 'Inquire'}</span>
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </div>
                </div>
                `;
    }).join('')}
        </div>

        <!-- Section 3: Clinical Pre- & Post-Care Advisory -->
        <div class="treatment-care-advisory" data-aos="fade-up">
            <div class="care-advisory-card">
                <div class="care-advisory-col">
                    <div class="care-icon-title">
                        <i class="fa-solid fa-notes-medical"></i>
                        <h4>${dict.preCareTitle}</h4>
                    </div>
                    <p>${dict.preCareText}</p>
                </div>
                <div class="care-advisory-divider"></div>
                <div class="care-advisory-col">
                    <div class="care-icon-title">
                        <i class="fa-solid fa-shield-sun"></i>
                        <h4>${dict.postCareTitle}</h4>
                    </div>
                    <p>${dict.postCareText}</p>
                </div>
            </div>

            <div class="treatment-clinical-disclaimer">
                <i class="fa-solid fa-circle-exclamation"></i>
                <div>
                    <strong>${dict.clinicalNoticeTitle}:</strong>
                    <span>${dict.clinicalNoticeText}</span>
                </div>
            </div>
        </div>

        <!-- Section 4: Consultation Booking Box -->
        <div class="treatment-booking-section" id="bookingSection" data-aos="fade-up">
            <div class="treatment-booking-card">
                <div class="booking-text-side">
                    <h3>${dict.detailsBookTitle} ${svc.title[lang]}</h3>
                    <p>${dict.detailsBookSubtitle}</p>
                    <div class="booking-clinic-chips">
                        <span><i class="fa-solid fa-location-dot"></i> Ghatpuri Naka, Khamgaon</span>
                        <span><i class="fa-solid fa-phone"></i> +91 9272550699</span>
                        <span><i class="fa-regular fa-clock"></i> Mon–Sat 10:00 AM – 7:30 PM</span>
                    </div>
                </div>
                <div class="booking-cta-side">
                    <a href="https://wa.me/919272550699?text=${encodeURIComponent('Hello Dr. Deshmukh Clinic, I would like to book a consultation for: ' + svc.title.en)}" class="btn" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-whatsapp"></i> Inquire via WhatsApp
                    </a>
                    <a href="tel:9272550699" class="btn btn-outline-navy">
                        <i class="fa-solid fa-phone"></i> Call Clinic
                    </a>
                    <a href="index.html#services" class="back-link-subtle">
                        ${dict.backToHomeBtn}
                    </a>
                </div>
            </div>
        </div>
    `;

    // Attach smooth event listeners to in-page explore pills
    const inPagePills = container.querySelectorAll('.explore-pill');
    inPagePills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.currentTarget.getAttribute('data-service-id');
            activeDetailService = id;
            history.pushState(null, '', `treatment-details.html?service=${id}`);
            renderTreatmentDetailsPage(currentLang);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// E. Render Patient Care & Treatment Guidelines
function renderPatientGuidelines(lang) {
    const container = document.getElementById('guidelinesGrid');
    if (!container) return;

    container.innerHTML = patientGuidelinesData.map((item, idx) => `
        <div class="guideline-card" data-aos="fade-up" data-aos-delay="${((idx % 3) + 1) * 90}">
            <div class="guideline-icon-box">
                <i class="${item.icon}"></i>
            </div>
            <h4>${item.title[lang]}</h4>
            <p>${item.desc[lang]}</p>
            ${item.cautionItems ? `
                <div class="diet-caution-box">
                    <strong><i class="fa-solid fa-triangle-exclamation"></i> ${item.cautionBadgeTitle[lang]}</strong>
                    <div class="diet-caution-pills">
                        ${item.cautionItems.map(c => `<span class="diet-caution-pill">${c[lang]}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `).join('');
}

// F. Render Clinical Standards
function renderClinicalStandards(lang) {
    const container = document.getElementById('standardsGrid');
    if (!container) return;

    if (!document.getElementById('stdTileStyles')) {
        const st = document.createElement('style');
        st.id = 'stdTileStyles';
        st.textContent = `
#standardsGrid.std-tiles{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(min(240px,100%),1fr))!important;gap:20px!important;max-width:1200px;margin:0 auto}
.std-tile{position:relative;overflow:hidden;display:flex;flex-direction:column;gap:14px;background:#fff;border:1px solid #f1d9e2;border-radius:22px;padding:28px 24px 26px;box-shadow:0 4px 16px rgba(11,58,110,.06);transition:background .25s ease,transform .25s ease,box-shadow .25s ease}
.std-tile-num{position:absolute;top:10px;right:18px;font-family:'Playfair Display',serif;font-size:64px;font-weight:700;line-height:1;color:#fbe3ec;transition:color .25s ease}
.std-tile-icon{position:relative;width:54px;height:54px;border-radius:16px;background:#0B3A6E;color:#fff;display:flex;align-items:center;justify-content:center;font-size:21px;transition:background .25s ease}
.std-tile h4{position:relative;margin:6px 0 0;font-family:Poppins,'Mukta',sans-serif;font-size:17px;font-weight:600;line-height:1.35;color:#0B3A6E;transition:color .25s ease}
.std-tile h4::after{content:"";display:block;width:36px;height:3px;margin-top:12px;border-radius:3px;background:#e5195e}
.std-tile p{position:relative;margin:0;font-size:14px;line-height:1.7;color:#5a6472;transition:color .25s ease}
.std-tile:hover{background:#0B3A6E;transform:translateY(-5px);box-shadow:0 14px 30px rgba(11,58,110,.22)}
.std-tile:hover h4,.std-tile:hover p{color:#fff}
.std-tile:hover .std-tile-num{color:rgba(255,255,255,.12)}
.std-tile:hover .std-tile-icon{background:#e5195e}
`;
        document.head.appendChild(st);
    }
    container.classList.add('std-tiles');

    container.innerHTML = clinicalStandardsData.map((item, idx) => `
        <div class="std-tile" data-aos="fade-up" data-aos-delay="${(idx + 1) * 90}">
            <span class="std-tile-num">${String(idx + 1).padStart(2, '0')}</span>
            <div class="std-tile-icon"><i class="${item.icon}"></i></div>
            <h4>${item.title[lang]}</h4>
            <p>${item.desc[lang]}</p>
        </div>
    `).join('');
}

// G. Render Doctors Cards (Verifiable, Council-Registered)
function renderDoctors(lang) {
    const container = document.getElementById('doctorsGrid');
    if (!container) return;

    const dict = translations[lang] || translations.en;

    if (!document.getElementById('docSimpleStyles')) {
        const st = document.createElement('style');
        st.id = 'docSimpleStyles';
        st.textContent = `
#doctorsGrid.doc-simple{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(min(320px,100%),1fr))!important;gap:0!important;max-width:900px;margin:0 auto;padding:0 20px}
.doc-simple-item{padding:8px 32px 8px 0}
.doc-simple-item + .doc-simple-item{border-left:1px solid #e3e8ef;padding-left:32px}
.doc-simple-head{display:flex;align-items:center;gap:18px;margin-bottom:18px}
.doc-simple-photo{width:92px;height:92px;flex:0 0 92px;border-radius:50%;object-fit:cover;border:3px solid #fff;box-shadow:0 0 0 2px #e3e8ef}
.doc-simple-head .doc-simple-degree{margin:0}
.doc-simple-item h3{margin:0 0 6px;font-family:'Playfair Display','Mukta',serif;font-size:24px;font-weight:600;color:#0B3A6E;line-height:1.3}
.doc-simple-degree{margin:0 0 18px;font-size:16px;font-weight:600;color:#e5195e}
.doc-simple-row{margin:0 0 12px;font-size:14.5px;line-height:1.6;color:#4a5565}
.doc-simple-row strong{display:block;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:#8a94a3;margin-bottom:2px}
.doc-simple-extra{font-size:13px;color:#7a8494}
.doc-simple-link{display:inline-block;margin-top:8px;font-size:14.5px;font-weight:600;color:#0B3A6E;text-decoration:none;border-bottom:2px solid #e5195e;padding-bottom:2px}
.doc-simple-link:hover{color:#e5195e}
@media(max-width:700px){.doc-simple-item + .doc-simple-item{border-left:0;border-top:1px solid #e3e8ef;padding-left:0;padding-top:26px;margin-top:22px}.doc-simple-item{padding-right:0}}
`;
        document.head.appendChild(st);
    }
    container.classList.add('doc-simple');

    container.innerHTML = doctorsData.map((doc, idx) => {
        const parts = doc.qualifications.split('|').map(x => x.trim());
        const degree = parts[0];
        const extra = parts.slice(1).join(' | ');
        return `
        <div class="doc-simple-item" data-aos="fade-up" data-aos-delay="${(idx + 1) * 100}">
            <div class="doc-simple-head">
                <img class="doc-simple-photo" src="${doc.image}" alt="${doc.name[lang]}" loading="lazy" onerror="this.style.display='none'">
                <div>
                    <h3>${doc.name[lang]}</h3>
                    <p class="doc-simple-degree">${degree}</p>
                </div>
            </div>
            <p class="doc-simple-row"><strong>${lang === 'mr' ? 'नोंदणी' : 'Registration'}</strong>${doc.regNo[lang]}</p>
            <p class="doc-simple-row"><strong>${dict.doctorTimingLabel}</strong>${doc.timing[lang]}</p>
            <a href="#contact" class="doc-simple-link select-doctor-btn" data-doc-name="${doc.name[lang]}">${dict.doctorBookBtn} &rarr;</a>
        </div>`;
    }).join('');

    // Attach click events to "Schedule Consultation" buttons
    container.querySelectorAll('.select-doctor-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const docName = e.currentTarget.getAttribute('data-doc-name');
            const doctorSelect = document.getElementById('preferredDoctor');
            if (doctorSelect) {
                for (let i = 0; i < doctorSelect.options.length; i++) {
                    if (doctorSelect.options[i].text.includes(docName.split(' ')[1] || '')) {
                        doctorSelect.selectedIndex = i;
                        break;
                    }
                }
            }
        });
    });
}

// === 10. LANGUAGE SWITCHER CONTROLLER ===
function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;

    // 1. Update document attributes
    document.documentElement.lang = lang;
    document.title = translations[lang].pageTitle;

    // 2. Update dynamic sections bound from JS data
    renderTrustBar(lang);
    renderClinicalScope(lang);
    renderServices(lang);
    renderTreatmentDetailsPage(lang);
    renderClinicalStandards(lang);
    renderPatientGuidelines(lang);
    renderDoctors(lang);

    // 3. Update static elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // 4. Update elements with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // 5. Update elements with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            el.title = translations[lang][key];
        }
    });

    // 6. Highlight active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 7. Store preference in localStorage
    try {
        localStorage.setItem('drdeshmukh_lang_pref', lang);
    } catch (e) {
        // Fallback for private mode
    }
}

// === 11. INITIALIZATION & EVENT LISTENERS ===
document.addEventListener('DOMContentLoaded', () => {
    // 1. Attach listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // 2. Detect default language (Default: English)
    let initialLang = 'en';
    try {
        initialLang = localStorage.getItem('drdeshmukh_lang_pref') || 'en';
    } catch (e) {
        initialLang = 'en';
    }
    setLanguage(initialLang);

    // 3. Initialize AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 70,
            duration: 700
        });
    }

    // 4. Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 5. WhatsApp Appointment Form Submission (Lawful & Confidential Scheduling)
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('patientName').value.trim();
            const age = document.getElementById('patientAge').value.trim();
            const village = document.getElementById('patientVillage').value.trim();
            const mobile = document.getElementById('patientMobile').value.trim();

            const doctorSelect = document.getElementById('preferredDoctor');
            const doctorText = doctorSelect ? doctorSelect.options[doctorSelect.selectedIndex].text : '';

            const problemSelect = document.getElementById('patientProblem');
            const problemText = problemSelect ? problemSelect.options[problemSelect.selectedIndex].text : '';
            const problemVal = problemSelect ? problemSelect.value : '';

            const message = document.getElementById('patientMessage').value.trim();

            const dict = translations[currentLang] || translations.en;

            // Form Validation
            if (!name || !age || !village || !mobile || !problemVal) {
                alert(dict.validationAlert);
                return;
            }
            if (!/^[6-9]\d{9}$/.test(mobile)) {
                alert(dict.mobileAlert);
                return;
            }

            // WhatsApp Structured Message
            const text = `${dict.waGreeting}

━━━━━━━━━━━━━━━━━━━━━━━━
👤 ${dict.waName}     : ${name}
🎂 ${dict.waAge}      : ${age}
📍 ${dict.waVillage}  : ${village}
📱 ${dict.waMobile}   : ${mobile}
🩺 ${dict.waProblem}  : ${problemText}
👨‍⚕️ ${dict.waDoctor}   : ${doctorText || 'Consultation by Clinical Priority'}
📝 ${dict.waMessage}  : ${message || '—'}
━━━━━━━━━━━━━━━━━━━━━━━━

${dict.waClosing}`;

            // Send to Clinic WhatsApp
            const targetNumber = "919272550699";
            const waUrl = "https://wa.me/" + targetNumber + "?text=" + encodeURIComponent(text);
            window.open(waUrl, "_blank");

            this.reset();
        });
    }

    // 6. Handle browser Back / Forward navigation on Treatment Details page
    window.addEventListener('popstate', () => {
        activeDetailService = null;
        renderTreatmentDetailsPage(currentLang);
    });
});