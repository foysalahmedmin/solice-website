import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const HomeDetailsSection = () => {
  return (
    <section className="bg-secondary">
      <BannerContainer>
        <BannerContent>
          <BannerTitle className="text-3xl md:text-3xl">
            Your GP is Just the Beginning
          </BannerTitle>
          <BannerDescription>
            <p>
              Membership connects the dots with a simple philosophy: tailored
              care that not only hears but listens, understands and acts, with
              you always at the centre.
            </p>
          </BannerDescription>
          <BannerDescription>
            Curated, bespoke and precise; we are more than medical wellness – we
            are the team behind you.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
      <div className="container">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-16">
          <div className="aspect-[5/6] w-full overflow-hidden">
            <img
              className="size-full rounded-3xl object-cover object-center"
              src="/images/(home-page)/details.jpg"
              alt=""
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-questrial text-lg uppercase">
                Your longevity
              </h4>
              <p>
                Your healthspan is in our hands with a 21st century blend of
                modalities optimising your physical and emotional health. This
                is the first healthcare concept integrating longevity protocols
                and lifestyle programmes within a full GP practice.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-questrial text-lg uppercase">Your GP</h4>
              <p>
                A renaissance of the true doctor-patient relationship with
                unlimited access to your private GP team at-home, in-clinic or
                online. Membership provides, on-site diagnostics and
                preferential access to world-leading specialists across London’s
                private hospitals.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <h4 className="font-questrial text-lg uppercase">
                Your Concierge
              </h4>
              <p>
                ARKangel is where healthcare meets hospitality. You are supported
                by our medical concierge team removing the administration of
                managing your day-to-day health needs, delivering a superior
                service that surpasses expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <BannerContainer>
        <BannerContent>
          <BannerTitle className="text-3xl md:text-3xl">
            We provide the care you need, <br /> when and where you need it
          </BannerTitle>
          <BannerDescription>
            <p>Seamless. Integrated. Preventative.</p>
          </BannerDescription>
          <div>
            <ButtonLink to="/services">View our Services</ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </section>
  );
};

export default HomeDetailsSection;
