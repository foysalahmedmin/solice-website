import { SplitCard } from "@/components/partials/Cards/SplitCard";

const AboutFeatureSection = () => {
  const data = [
    {
      image: "/images/(about-page)/feature-1.jpg",
      title: "The Doctor’s Doctor:",
      description: (
        <>
          <p>
            Published. Awarded. Acclaimed.
            <br /> <br />
            Our team of experts are pioneering practitioners from across both
            western and eastern practices, seasoned GP’s, and longevity
            medicine.
            <br /> <br />
            Together they form the framework for our future-facing programme of
            care.
          </p>
        </>
      ),
    },
    {
      image: "/images/(about-page)/feature-2.jpg",
      title: "Our Commitment",
      description: (
        <>
          <p>
            Membership delivers healthcare that is intuitive and can deliver
            true change.
            <br /> <br />
            Our ethos embodies a 360-degree approach that addresses not only
            your immediate concerns but also empowers your ongoing journey to
            health optimisation.
            <br /> <br />
            We are your advocate, whether it’s attending appointments with you
            or simply being on hand for day-to-day discussions, our highly
            attentive care means your wellbeing-prioritised, supported, and
            above all else, delivered with absolute trust.
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

export default AboutFeatureSection;
