import { TreatmentDetailSection } from "@/components/(common)/(service-page)/TreatmentDetailSection";

const treatmentData = {
  facialRejuvenation: {
    image: "/images/(treatment-page)/carbon.jpeg",
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
  // Add more treatment data objects here...
};

const TreatmentDetailPage = ({ treatmentId }) => {
  // In a real application, you would fetch the treatment data based on the treatmentId
  const treatment = treatmentData[treatmentId] || treatmentData.facialRejuvenation;

  return <TreatmentDetailSection treatment={treatment} />;
};

export default TreatmentDetailPage;
