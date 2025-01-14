import TreatmentDetailSection from "@/components/(common)/(service-page)/TreatmentDetailSection";
import { useParams } from "react-router-dom";

const treatmentData = {
  "facial-rejuvenation": {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    title: "Facial Rejuvenation",
    shortDescription:
      "Advanced treatments to restore your skin's youthful appearance and radiance",
    description: (
      <>
        <p>
          Our facial rejuvenation treatments combine cutting-edge technology with proven techniques to help you achieve naturally younger-looking skin. We offer a comprehensive range of treatments that work synergistically to address multiple signs of aging and skin concerns.
        </p>
        <p>
          From deep hydration and exfoliation with HydraFacial to collagen stimulation with Microneedling, our treatments are designed to provide both immediate and long-lasting results. Each treatment is customized to your specific skin type and concerns.
        </p>
      </>
    ),
    benefits: [
      "Improved skin texture and tone",
      "Reduced appearance of fine lines and wrinkles",
      "Enhanced natural collagen production",
      "Brighter, more radiant complexion",
      "Minimized pore appearance",
      "Increased skin hydration",
      "Even skin tone",
      "Reduced signs of sun damage",
    ],
    process: [
      {
        title: "Consultation",
        description:
          "Our expert practitioners will assess your skin condition and discuss your goals to create a personalized treatment plan.",
      },
      {
        title: "Preparation",
        description:
          "Your skin will be cleansed and prepared for the selected treatment.",
      },
      {
        title: "Treatment",
        description:
          "The chosen rejuvenation procedure will be performed using state-of-the-art technology and techniques.",
      },
      {
        title: "Aftercare",
        description:
          "You'll receive detailed aftercare instructions and product recommendations to maintain your results.",
      },
    ],
    pricing: [
      {
        service: "HydraFacial",
        amount: "120",
      },
      {
        service: "Chemical Peel - Light",
        amount: "95",
      },
      {
        service: "Chemical Peel - Medium",
        amount: "130",
      },
      {
        service: "Microneedling",
        amount: "200",
      },
      {
        service: "Dermaplaning",
        amount: "80",
      },
      {
        service: "LED Light Therapy",
        amount: "60",
      },
    ],
    duration: "30-90 minutes depending on treatment",
    recovery: "Minimal to no downtime for most treatments",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
        comment: "The HydraFacial treatment completely transformed my skin. I've never felt more confident!",
        date: "December 2024",
      },
      {
        name: "Michael Chen",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
        comment: "After just three sessions, I saw a remarkable improvement in my skin texture and tone.",
        date: "November 2024",
      },
      {
        name: "Emma Williams",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
        comment: "The LED therapy combined with chemical peels gave me amazing results. Highly recommend!",
        date: "January 2025",
      },
    ],
    faqs: [
      {
        question: "How often should I get facial rejuvenation treatments?",
        answer:
          "The frequency depends on the specific treatment and your skin's needs. Generally, treatments are scheduled every 4-6 weeks for optimal results.",
      },
      {
        question: "Are the treatments painful?",
        answer:
          "Most treatments are comfortable with minimal discomfort. For treatments like microneedling, we use numbing cream to ensure your comfort.",
      },
      {
        question: "When will I see results?",
        answer:
          "Many treatments show immediate results, while others develop over time. A series of treatments is often recommended for optimal, long-lasting results.",
      },
      {
        question: "Are there any side effects?",
        answer:
          "Side effects are typically minimal and may include temporary redness or sensitivity. All potential side effects will be discussed during your consultation.",
      },
    ],
  },
  "anti-wrinkle-injections": {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    title: "Anti-Wrinkle Injections",
    shortDescription:
      "Targeted treatments to reduce wrinkles and restore youthful facial expressions",
    description: (
      <>
        <p>
          Our anti-wrinkle injections are administered with precision to help reduce the appearance of fine lines and wrinkles. These treatments work by relaxing specific facial muscles, resulting in smoother, younger-looking skin.
        </p>
        <p>
          We offer treatments for various areas including forehead lines, crow's feet, and frown lines. Our expertise extends to treating hyperhidrosis (excessive sweating) for enhanced comfort and confidence.
        </p>
      </>
    ),
    benefits: [
      "Reduced appearance of wrinkles and fine lines",
      "Prevention of new wrinkle formation",
      "Natural-looking results",
      "Quick treatment with minimal downtime",
      "Long-lasting results",
      "Improved facial symmetry",
      "Boosted confidence",
      "Treatment for excessive sweating",
    ],
    process: [
      {
        title: "Consultation",
        description: "Detailed assessment of your concerns and desired outcomes.",
      },
      {
        title: "Treatment Planning",
        description: "Mapping of injection sites and customized treatment plan.",
      },
      {
        title: "Treatment",
        description: "Precise injections using ultra-fine needles for minimal discomfort.",
      },
      {
        title: "Follow-up",
        description: "Review of results and touch-up if needed after 2 weeks.",
      },
    ],
    pricing: [
      {
        service: "1 Area",
        amount: "180",
      },
      {
        service: "2 Areas",
        amount: "250",
      },
      {
        service: "3 Areas",
        amount: "300",
      },
      {
        service: "Hyperhidrosis",
        amount: "450",
      },
    ],
    duration: "15-30 minutes",
    recovery: "Immediate return to daily activities",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Rachel Thompson",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
        comment: "The results are amazing and so natural-looking. Nobody can tell I've had anything done!",
        date: "January 2025",
      },
      {
        name: "David Miller",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
        comment: "The treatment for my excessive sweating has been life-changing.",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "How long do results last?",
        answer: "Results typically last 3-4 months for wrinkle reduction and 6-12 months for hyperhidrosis treatment.",
      },
      {
        question: "Is the treatment safe?",
        answer: "Yes, when administered by our qualified practitioners. We use only FDA-approved products with proven safety records.",
      },
    ],
  },
  "dermal-fillers": {
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    title: "Dermal Fillers",
    shortDescription: "Natural-looking volume enhancement and facial contouring",
    description: (
      <>
        <p>
          Our dermal filler treatments use premium hyaluronic acid fillers to restore volume, enhance features, and create natural-looking results. Each treatment is tailored to your unique facial structure and aesthetic goals.
        </p>
        <p>
          From subtle lip enhancement to comprehensive facial harmonization, our expert practitioners use advanced techniques to achieve beautiful, balanced results that complement your natural features.
        </p>
      </>
    ),
    benefits: [
      "Immediate volume restoration",
      "Enhanced facial contours",
      "Natural-looking results",
      "Reduced appearance of lines and wrinkles",
      "Improved facial symmetry",
      "Long-lasting results",
      "Minimal downtime",
      "Reversible treatment",
    ],
    process: [
      {
        title: "Consultation",
        description: "Comprehensive facial assessment and treatment planning.",
      },
      {
        title: "Preparation",
        description: "Application of topical anesthetic for comfort.",
      },
      {
        title: "Treatment",
        description: "Strategic placement of fillers using advanced techniques.",
      },
      {
        title: "Review",
        description: "Follow-up appointment to assess results and any touch-ups needed.",
      },
    ],
    pricing: [
      {
        service: "Lip Enhancement",
        amount: "250",
      },
      {
        service: "Nasolabial Folds",
        amount: "300",
      },
      {
        service: "Cheek Enhancement",
        amount: "350",
      },
      {
        service: "Jawline Contouring",
        amount: "400",
      },
      {
        service: "Tear Trough",
        amount: "400",
      },
    ],
    duration: "30-60 minutes",
    recovery: "24-48 hours for any swelling to subside",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Sophie Anderson",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_6",
        comment: "The lip enhancement looks so natural, exactly what I wanted!",
        date: "January 2025",
      },
      {
        name: "James Wilson",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_7",
        comment: "The jawline contouring has given me so much more confidence.",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "How long do fillers last?",
        answer: "Results typically last 6-18 months depending on the treatment area and product used.",
      },
      {
        question: "Is there any downtime?",
        answer: "Minimal downtime, with some possible swelling and bruising for 24-48 hours.",
      },
    ],
  },
  "laser-treatments": {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    title: "Laser Treatments",
    shortDescription: "Advanced laser technology for skin rejuvenation and hair removal",
    description: (
      <>
        <p>
          Our state-of-the-art laser treatments offer effective solutions for various skin concerns. From permanent hair reduction to skin resurfacing and pigmentation removal, we use the latest technology to deliver optimal results.
        </p>
        <p>
          Each treatment is customized to your skin type and concerns, ensuring safe and effective results. Our advanced cooling systems maintain comfort throughout the treatment process.
        </p>
      </>
    ),
    benefits: [
      "Permanent hair reduction",
      "Improved skin texture",
      "Reduced pigmentation",
      "Minimized scarring",
      "Vascular lesion treatment",
      "Acne reduction",
      "Even skin tone",
      "Minimal discomfort",
    ],
    process: [
      {
        title: "Consultation",
        description: "Skin type assessment and treatment customization.",
      },
      {
        title: "Test Patch",
        description: "Small area treatment to ensure optimal settings and comfort.",
      },
      {
        title: "Treatment",
        description: "Full treatment with advanced cooling technology for comfort.",
      },
      {
        title: "Aftercare",
        description: "Post-treatment care instructions and follow-up schedule.",
      },
    ],
    pricing: [
      {
        service: "Full Face Laser Hair Removal",
        amount: "150",
      },
      {
        service: "Full Body Laser Hair Removal",
        amount: "500",
      },
      {
        service: "Pigmentation Treatment",
        amount: "200",
      },
      {
        service: "Skin Resurfacing",
        amount: "300",
      },
    ],
    duration: "15-60 minutes depending on treatment area",
    recovery: "Minimal downtime, some redness for 24-48 hours",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Lisa Chen",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_8",
        comment: "After years of waxing, laser hair removal has been life-changing!",
        date: "January 2025",
      },
      {
        name: "Mark Davies",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_9",
        comment: "The pigmentation treatment has completely transformed my skin.",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "How many sessions will I need?",
        answer: "For hair removal, typically 6-8 sessions are recommended. For skin treatments, this varies based on your concerns.",
      },
      {
        question: "Is laser treatment painful?",
        answer: "Most clients describe the sensation as mild discomfort. Our advanced cooling systems help minimize any discomfort.",
      },
    ],
  },
  "body-contouring": {
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2070&auto=format&fit=crop",
    title: "Body Contouring",
    shortDescription: "Non-invasive body sculpting and fat reduction treatments",
    description: (
      <>
        <p>
          Our body contouring treatments use advanced technology to target stubborn fat deposits and improve body shape. We combine multiple techniques including Cryolipolysis and Radiofrequency for optimal results.
        </p>
        <p>
          These non-invasive treatments are perfect for those looking to refine their silhouette without surgery. Results develop naturally over time for a subtle yet effective transformation.
        </p>
      </>
    ),
    benefits: [
      "Targeted fat reduction",
      "Improved body contours",
      "Skin tightening",
      "Cellulite reduction",
      "No surgery required",
      "Natural-looking results",
      "No downtime",
      "Long-lasting results",
    ],
    process: [
      {
        title: "Assessment",
        description: "Body analysis and treatment area mapping.",
      },
      {
        title: "Treatment Plan",
        description: "Customized combination of technologies for optimal results.",
      },
      {
        title: "Treatment",
        description: "Non-invasive procedure with comfort monitoring.",
      },
      {
        title: "Follow-up",
        description: "Progress tracking and maintenance recommendations.",
      },
    ],
    pricing: [
      {
        service: "Small Area Cryolipolysis",
        amount: "400",
      },
      {
        service: "Large Area Cryolipolysis",
        amount: "600",
      },
      {
        service: "Radiofrequency Skin Tightening",
        amount: "300",
      },
      {
        service: "Cellulite Treatment",
        amount: "250",
      },
    ],
    duration: "45-90 minutes per area",
    recovery: "No downtime required",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1583454155184-870a1f63be44?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Jennifer Adams",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_10",
        comment: "The results exceeded my expectations. My clothes fit so much better now!",
        date: "January 2025",
      },
      {
        name: "Robert King",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_11",
        comment: "Finally found a solution for my stubborn fat areas. Amazing results!",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "When will I see results?",
        answer: "Initial results can be seen within 4-6 weeks, with optimal results at 12 weeks.",
      },
      {
        question: "How many sessions are needed?",
        answer: "Most clients achieve their goals with 1-3 sessions per area.",
      },
    ],
  },
  "iv-therapy": {
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop",
    title: "IV Therapy & Vitamin Drips",
    shortDescription: "Customized nutrient therapy for optimal wellness",
    description: (
      <>
        <p>
          Our IV therapy treatments deliver essential vitamins, minerals, and antioxidants directly into your bloodstream for maximum absorption. Each formula is carefully designed to address specific health and wellness goals.
        </p>
        <p>
          From boosting energy and immunity to enhancing skin health and athletic performance, our treatments provide rapid and effective results.
        </p>
      </>
    ),
    benefits: [
      "100% nutrient absorption",
      "Immediate hydration",
      "Enhanced energy levels",
      "Improved immune function",
      "Better skin health",
      "Faster recovery",
      "Customized formulas",
      "Quick treatment time",
    ],
    process: [
      {
        title: "Health Assessment",
        description: "Review of medical history and wellness goals.",
      },
      {
        title: "Formula Selection",
        description: "Customization of IV cocktail to your needs.",
      },
      {
        title: "Treatment",
        description: "Comfortable IV administration in a relaxing environment.",
      },
      {
        title: "Monitoring",
        description: "Regular assessment of progress and formula adjustments.",
      },
    ],
    pricing: [
      {
        service: "Wellness Boost",
        amount: "150",
      },
      {
        service: "Immune Support",
        amount: "180",
      },
      {
        service: "Beauty Glow",
        amount: "200",
      },
      {
        service: "Athletic Performance",
        amount: "220",
      },
      {
        service: "Hangover Relief",
        amount: "180",
      },
    ],
    duration: "45-60 minutes",
    recovery: "No downtime required",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1586798271654-0471bb1b0517?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1586798271322-7c1d56b7ec1d?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1584516150804-3b184c3be830?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Tom Bradley",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_12",
        comment: "Regular IV therapy has boosted my energy levels and improved my recovery time.",
        date: "January 2025",
      },
      {
        name: "Maria Garcia",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_13",
        comment: "The beauty glow drip has made such a difference to my skin!",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "How often can I have IV therapy?",
        answer: "Frequency depends on your goals and health status, typically ranging from weekly to monthly sessions.",
      },
      {
        question: "Is IV therapy safe?",
        answer: "Yes, all treatments are administered by qualified healthcare professionals in a sterile environment.",
      },
    ],
  },
  "skin-tightening": {
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    title: "Skin Tightening",
    shortDescription: "Advanced non-surgical skin tightening solutions",
    description: (
      <>
        <p>
          Our skin tightening treatments use HIFU (High-Intensity Focused Ultrasound) and Radiofrequency technology to stimulate collagen production and tighten loose skin. These treatments provide a non-surgical alternative to traditional face and body lifting procedures.
        </p>
        <p>
          Results develop naturally over time as your body produces new collagen, leading to firmer, more youthful-looking skin.
        </p>
      </>
    ),
    benefits: [
      "Non-surgical lifting",
      "Natural collagen stimulation",
      "Long-lasting results",
      "No downtime required",
      "Suitable for face and body",
      "Gradual improvement",
      "Safe for all skin types",
      "Customizable treatment areas",
    ],
    process: [
      {
        title: "Consultation",
        description: "Assessment of skin laxity and treatment planning.",
      },
      {
        title: "Preparation",
        description: "Skin cleansing and marking of treatment areas.",
      },
      {
        title: "Treatment",
        description: "Precise application of HIFU or RF energy.",
      },
      {
        title: "Follow-up",
        description: "Progress monitoring and maintenance planning.",
      },
    ],
    pricing: [
      {
        service: "Full Face HIFU",
        amount: "500",
      },
      {
        service: "Neck HIFU",
        amount: "300",
      },
      {
        service: "Face & Neck RF",
        amount: "250",
      },
      {
        service: "Body Area RF",
        amount: "350",
      },
    ],
    duration: "30-90 minutes depending on area",
    recovery: "No downtime required",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Patricia Lee",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_14",
        comment: "The HIFU treatment gave me the lift I wanted without surgery!",
        date: "January 2025",
      },
      {
        name: "John Martinez",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_15",
        comment: "RF treatments have made a noticeable difference to my skin's firmness.",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "When will I see results?",
        answer: "Initial results can be seen within 4-6 weeks, with continued improvement for up to 6 months.",
      },
      {
        question: "How long do results last?",
        answer: "Results typically last 12-18 months, with maintenance treatments recommended annually.",
      },
    ],
  },
  "acne-scar-treatments": {
    image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=2070&auto=format&fit=crop",
    title: "Acne & Scar Treatments",
    shortDescription: "Comprehensive solutions for acne and scar reduction",
    description: (
      <>
        <p>
          Our acne and scar treatments combine multiple modalities including laser therapy, chemical peels, and microneedling to address both active acne and existing scars. We create personalized treatment plans based on your skin type and concerns.
        </p>
        <p>
          The popular Carbon Laser Peel provides deep cleansing and skin renewal, while our advanced scar treatments help improve skin texture and tone.
        </p>
      </>
    ),
    benefits: [
      "Reduced acne breakouts",
      "Improved scar appearance",
      "Enhanced skin texture",
      "Minimized pore size",
      "Balanced oil production",
      "Even skin tone",
      "Reduced inflammation",
      "Prevention of future scarring",
    ],
    process: [
      {
        title: "Skin Analysis",
        description: "Assessment of acne type and scarring pattern.",
      },
      {
        title: "Treatment Plan",
        description: "Customized combination of treatments for optimal results.",
      },
      {
        title: "Treatment",
        description: "Application of selected treatments with comfort management.",
      },
      {
        title: "Maintenance",
        description: "Ongoing care plan and product recommendations.",
      },
    ],
    pricing: [
      {
        service: "Carbon Laser Peel",
        amount: "200",
      },
      {
        service: "Acne Scar Treatment",
        amount: "250",
      },
      {
        service: "Active Acne Treatment",
        amount: "180",
      },
      {
        service: "Combined Treatment",
        amount: "350",
      },
    ],
    duration: "45-60 minutes",
    recovery: "Minimal downtime, some redness for 24-48 hours",
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1600&auto=format&fit=crop"
      },
      {
        before: "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?q=80&w=1600&auto=format&fit=crop",
        after: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1600&auto=format&fit=crop"
      }
    ],
    testimonials: [
      {
        name: "Alex Turner",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_16",
        comment: "Finally found a solution that works for my acne scars!",
        date: "January 2025",
      },
      {
        name: "Emily White",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_17",
        comment: "The Carbon Laser Peel has completely transformed my skin.",
        date: "December 2024",
      },
    ],
    faqs: [
      {
        question: "How many treatments will I need?",
        answer: "Most clients see significant improvement after 3-6 treatments, spaced 4-6 weeks apart.",
      },
      {
        question: "Can all scar types be treated?",
        answer: "We offer various treatments suitable for different scar types, including ice pick, boxcar, and rolling scars.",
      },
    ],
  },
};

const TreatmentDetailPage = () => {
  const { treatment } = useParams();
  const treatmentInfo = treatmentData[treatment];

  if (!treatmentInfo) {
    return <div>Treatment not found</div>;
  }

  return <TreatmentDetailSection treatment={treatmentInfo} />;
};

export default TreatmentDetailPage;
