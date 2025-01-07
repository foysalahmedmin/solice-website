import { SplitCard } from "@/components/partials/Cards/SplitCard";

const LocationFeatureSection = () => {
  const data = [
    {
      image: "/images/(location-page)/feature-1.jpg",
      title: "An International Reach",
      description: (
        <>
          <p>
            Our network of leading doctors extends across the globe.
            <br />
            <br />
            Members receive exemplary transatlantic care from our curated global
            partners, ensuring we provide you the best care wherever you are.
            <br />
            <br />
            We have partnered with SOLLIS Health, the leading medical concierge
            in the United States for members’-only 24/7 medical care across the
            United States, including:
          </p>
          <br />
          <br />
          <ul className="ml-4 list-outside list-disc space-y-4">
            <li>New York</li>
            <li>Los Angeles</li>
            <li>The Hamptons</li>
            <li>San Francisco</li>
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

export default LocationFeatureSection;
