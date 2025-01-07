import { SplitCard } from "@/components/partials/Cards/SplitCard";

const SeasonalFeatureSection = () => {
  const data = [
    {
      image: "/images/(longevity-page)/feature-1.jpg",
      title: "Three Months to Uncover Complete Care",
      description: (
        <>
          <p>Seasonal GP</p>
          <br />
          <br />
          <ul className="ml-4 list-outside list-disc space-y-4">
            <li>Tailored and specific to your health and wellness worry</li>
            <li>
              Full functional support and unlimited consultations led by Dr Tam
              Lewis
            </li>
            <li>Unlimited GP support</li>
            <li>
              Tailored screening and diagnostics to investigate your health
              query
            </li>
            <li>Biohacking therapies that resonate with you</li>
            <li>Formulated and guided plans with tracked progress</li>
            <li>
              Tailored nutrition, personal trainer and aesthetics treatments
              available.
            </li>
          </ul>
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

export default SeasonalFeatureSection;
