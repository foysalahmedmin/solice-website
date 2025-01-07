import { SplitCard } from "@/components/partials/Cards/SplitCard";

const LongevityFeatureSection = () => {
  const data = [
    {
      image: "/images/(longevity-page)/feature-1.jpg",
      title: "The Best in Clinical Excellence",
      description: (
        <>
          <p>
            Our philosophy is rooted in integration and providing best-in-class
            experts alongside your SOLICE GP. Longevity is led by Dr Tam Lewis,
            a true luminary who weaves together her vast expertise as a medical
            doctor, nutritional specialist, and world-class endurance athlete.
            <br /> <br />
            Backed by our scientific advisory board, each team is curated
            specific to your needs.
          </p>
        </>
      ),
    },
    {
      image: "/images/(longevity-page)/feature-2.jpg",
      title: "Longevity Membership Benefits",
      description: (
        <>
          <p>Continued care from Dr Tam and her team underpins our offering:</p>
          <br /> <br />
          <ul className="ml-4 list-outside list-disc space-y-4">
            <li>
              <span style="font-weight: 400;">
                Full body MRI, low resolution CT, DEXA
              </span>
            </li>
            <li>AI powered cardiac testing</li>
            <li>Functional performance review</li>
            <li>Full epigenetic and genetic analysis</li>
            <li>Early detection cancer screening</li>
            <li>Glucose monitors and wearables</li>
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

export default LongevityFeatureSection;
