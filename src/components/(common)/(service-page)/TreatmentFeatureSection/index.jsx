import { SplitCard } from "@/components/partials/Cards/SplitCard";

const TreatmentFeatureSection = () => {
  const data = [
    {
      image: "/images/(treatment-page)/breast-firming.webp",
      title: "Breast Firming",
      description: (
        <>
          <p>
            Breast firming can be achieved through non-invasive methods like laser or radiofrequency therapy, which boost collagen and tighten skin. Surgical options, such as a breast lift, provide dramatic, long-term results by reshaping and firming the breasts.
            <br /> <br />
            Natural remedies like firming creams, herbal masks, or massages can complement professional treatments, improving skin elasticity and texture. Consult a specialist to determine the best option for your needs.
          </p>
        </>
      ),
    },
    {
      image: "/images/(treatment-page)/carbon.jpeg",
      title: "Carbon Laser Facial",
      description: (
        <>
          <p>
            Carbon laser facial is a non-invasive treatment that uses a carbon mask and laser to exfoliate the skin, reduce oiliness, and minimize pores. It also boosts collagen production for a smoother, more radiant complexion.
            <br /> <br />
            This treatment is effective for reducing acne, pigmentation, and fine lines with no downtime. It’s suitable for most skin types and delivers noticeable results after a few sessions.
            <br /> <br />
            Natural skincare routines and hydration can complement the procedure, enhancing skin health and longevity of results. Consult a dermatologist to ensure it’s the right choice for your skin.
          </p>
        </>
      ),
    },
    {
      image: "/images/(treatment-page)/teeth.jpg",
      title: "Cosmetic Teeth Whitening",
      description: (
        <>
          <p>
            Cosmetic teeth whitening is a non-invasive procedure that removes stains and brightens teeth, offering a whiter, more radiant smile. Professional methods include laser whitening or bleaching gels applied by a dentist for quick, noticeable results.
            <br /> <br />
            This treatment is effective for removing discoloration caused by coffee, tea, or smoking. Results are immediate and can last months with proper care.
            <br /> <br />
            Maintaining oral hygiene and avoiding stain-causing foods can prolong the effects. Consult a dentist to choose the safest and most effective whitening option for your teeth.
          </p>
        </>
      ),
    },
    {
      image: "/images/(treatment-page)/anti-acne.jpg",
      title: "Anti Acne Treatment",
      description: (
        <>
          <p>
            Anti-acne treatments target breakouts, reduce inflammation, and prevent future acne. Professional options include chemical peels, laser therapy, and blue light treatment, which clear pores and kill acne-causing bacteria.
            <br /> <br />
            These treatments are effective for all skin types and help reduce scars and pigmentation. Consistent sessions deliver smoother, clearer skin over time.
            <br /> <br />
            Complementing professional care with a gentle skincare routine and hydration ensures lasting results. Consult a dermatologist for personalized treatment options.
          </p>
        </>
      ),
    },
    {
      image: "/images/(treatment-page)/plexr.webp",
      title: "Plexr Treatment",
      description: (
        <>
          <p>
            Plexr is a non-invasive cosmetic procedure that uses plasma energy to tighten skin, reduce wrinkles, and remove blemishes like scars or age spots. It stimulates collagen production for a firmer, more youthful appearance.
            <br /> <br />
            This treatment is effective for delicate areas like eyelids and around the mouth, offering noticeable results with minimal downtime. It’s a safe alternative to surgical procedures.
            <br /> <br />
            Maintaining healthy skin and following aftercare instructions enhance the results. Consult a qualified practitioner to determine if Plexr suits your needs.
          </p>
        </>
      ),
    },
  ];
  return (
    <section className="my-16 md:my-24">
      <div className="container pt-16 md:pt-24">
        <div className="space-y-32 md:space-y-40">
          {data?.map((item, index) => (
            <SplitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentFeatureSection;
