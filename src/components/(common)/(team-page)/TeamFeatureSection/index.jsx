import { SplitCard } from "@/components/partials/Cards/SplitCard";

const TeamFeatureSection = () => {
  const data = [
    {
      image: "/images/(team-page)/feature-1.jpg",
      title: (
        <>
          The Founder
          <br />
          Dr Liza Osagie
        </>
      ),
      description: (
        <>
          <p>
            An award-winning orthopaedic surgeon who trained in both New York
            and London. Her PhD was in advanced research into the use of stem
            cells for healing which prompted her passion for harnessing science
            and art to achieve true modern wellbeing. From here, Dr
            Osagie-Clouard pioneered an emerging model in personalised,
            preventative healthcare and SOLICE was born.
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

export default TeamFeatureSection;
