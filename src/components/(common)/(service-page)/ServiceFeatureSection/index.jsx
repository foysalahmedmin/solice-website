import { SplitCard } from "@/components/partials/Cards/SplitCard";

const ServiceFeatureSection = () => {
  const data = [
    {
      image: "/images/(service-page)/feature-1.jpg",
      title: "Your Longevity",
      description: (
        <>
          <p>
            Led by true luminary, Dr Tam Lewis, SOLICE Longevity delivers
            meaningful change with small day-to-day tweaks rather than grand
            about turns.
            <br />
            <br />
            Targeted diagnostics that avoid formulae and are tailored to each
            member to assess, understand and modify; ensuring a life lived not
            simply longer, but better.
            <br />
            <br />
            Your physical and emotional wellness is supported with a menu of the
            most advanced biohacking and in-house therapies.
            <br />
            <br />
            Be it healthspan strategies, perfecting your performance or avoiding
            genetic risks, longevity medicine is always results-focused and life
            enhancing.
          </p>
        </>
      ),
    },
    {
      image: "/images/(service-page)/feature-2.jpg",
      title: "Your GP",
      description: (
        <>
          <p>
            We offer the services of a GP and more.
            <br />
            <br />
            It’s a life-long relationship; trusted and transparent to provide
            thoughtful care, with a deep understanding of you and your
            lifestyle.
            <br />
            <br />
            Members receive unlimited access to their doctor 24-hours a day,
            seven days a week. Whether at-home, online or from our Mayfair
            clinic; referrals are immediate, unbiased, and bespoke to you
          </p>
        </>
      ),
    },
    {
      image: "/images/(service-page)/feature-3.jpg",
      title: "Your Concierge",
      description: (
        <>
          <p>
            A 24-hour medical concierge for every need. Multilingual and
            proactive, providing full health administration from insurance
            liaison to appointment scheduling, our concierge underpins your
            membership.
            <br />
            <br />
            Always reliable, always discreet. Whether it’s hand delivering
            medication to Doha, emergency evacuation from Costa Rica or creating
            a confidential repository of your results; our concierge provides
            support and ensures a seamless service.
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
