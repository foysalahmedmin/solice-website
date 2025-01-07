import { SplitCard } from "@/components/partials/Cards/SplitCard";

const IndividualFamilyFeatureSection = () => {
  const data = [
    {
      image: "/images/(individual-family-page)/feature-1.jpg",
      title: "A Team Dedicated to You",
      description: (
        <>
          <p>
            Your GP is not simply your doctor but also your advocate, taking the
            time to get to know you and your family.
            <br />
            <br />
            Membership includes complimentary biannual preventative health
            checks and privileged preferential hospital access, creating a
            roadmap for your health, with targeted therapies included for you
            and your family.
          </p>
        </>
      ),
    },
    {
      image: "/images/(individual-family-page)/feature-2.jpg",
      title: "An International Reach",
      description: (
        <>
          <p>
            In the USA, Ibiza and South of France, we are well positioned to
            look after you as you travel.
            <br /> <br />
            Should an issue arise in another country, we remain your first port
            of call. Be it evacuation from the Alps or delivering forgotten
            medication to Marrakech, our care is here for you today and in the
            future.
          </p>
        </>
      ),
    },
    {
      image: "/images/(individual-family-page)/feature-3.jpg",
      title: "Individual Membership Benefits​",
      description: (
        <>
          <p>More than a GP</p>
          <br />
          <br />
          <ul className="ml-4 list-outside list-disc space-y-4">
            <li>Dedicated GP at home or in clinic</li>
            <li>24/7 multilingual concierge</li>
            <li>Inclusive dental, functional medicine and nutrition review</li>
            <li>Comprehensive biannual preventative screen</li>
            <li>Inclusive wellness services at home or in clinic</li>
            <li>International coverage</li>
            <li>Multidisciplinary team case review</li>
          </ul>
        </>
      ),
    },
    {
      image: "/images/(individual-family-page)/feature-4.jpg",
      title: "Family Membership Benefits",
      description: (
        <>
          <p>In addition to the individual GP inclusions:</p>
          <br />
          <br />
          <ul className="ml-4 list-outside list-disc space-y-4">
            <li>Paediatric oversight</li>
            <li>Family concierge for all health management</li>
            <li>
              Tailored programmes, including neurodiversity management, allergy
              care and in home nursing
            </li>
            <li>Vaccination schedule and back to school health programmes</li>
            <li>
              Tailored therapies, including craniosacral and paediatric massage
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

export default IndividualFamilyFeatureSection;
