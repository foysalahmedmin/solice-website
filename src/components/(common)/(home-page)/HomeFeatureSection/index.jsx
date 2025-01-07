import { SplitCard } from "@/components/partials/Cards/SplitCard";

const HomeFeatureSection = () => {
  const data = [
    {
      image: "/images/(home-page)/feature-1.jpg",
      title: "The ARKangel Difference",
      description: (
        <>
          <p>
            Our unwavering dedication to you ensures we notice the subtle
            changes.
            <br />
            <br />
            Not simply your private doctor, this is precision medicine 24-hours
            a day.
            <br />
            <br />
            Our Three Pillar Philosophy is tailored and simple:
            <br />
            <br />
            LONGEVITY | GP | CONCIERGE
          </p>
        </>
      ),
    },
    {
      image: "/images/(home-page)/feature-2.jpg",
      title: "A New Horizon",
      description: (
        <>
          <p>
            We consider holistic therapies to be integral, not complementary to
            cutting edge science.
            <br /> <br /> A GP alongside our ecosystem of best-in-class experts
            and specialists means we connect the mind and body to continuously
            evolve your health.
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

export default HomeFeatureSection;
