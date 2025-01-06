import { SplitCard } from "@/components/partials/Cards/SplitCard";

const ServiceFeatureSection = () => {
  const data = [
    {
      image: "/images/(service-page)/feature-1.jpg",
      title: "Reconnect",
      description: (
        <>
          <p>
            We create out-of-this-world bespoke therapies and experiences that
            transcend the ordinary.
            <br /> <br />
            Immersive experiences designed to restore and reignite your health,
            brought to you in your home or held at one of our world class
            properties.
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

export default ServiceFeatureSection;
