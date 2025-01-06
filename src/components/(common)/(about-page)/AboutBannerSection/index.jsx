import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const AboutBannerSection = () => {
  return (
    <BannerSection>
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        // image="/images/(home-page)/banner-image.jpg"
        className="bg-secondary"
      />
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Our Story</BannerTitle>
          <BannerDescription>
            <p>
              SOLICE was founded to deliver medicine without boundaries. <br />
              Our ethos is rooted in modern preventative care, dedicated to you
              and every aspect of your health.
            </p>
          </BannerDescription>
          <BannerDescription className="text-lg md:text-xl">
            <p>GP | LONGEVITY | CONCIERGE</p>
          </BannerDescription>
          <div>
            <ButtonLink to="/team">Meet our team</ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default AboutBannerSection;
