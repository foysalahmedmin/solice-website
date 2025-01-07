import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const HomeBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground
        iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        // image="/images/(home-page)/banner-image.jpg"
      />
      <BannerContainer className="bg-dark/25">
        <BannerContent>
          <BannerTitle>Discover the Art of Being Well</BannerTitle>
          <BannerDescription>
            <p>
              Experience precision health reimagined. <br />A single membership
              transforming what it means to see your doctor.
            </p>
          </BannerDescription>
          <BannerDescription className="text-lg md:text-xl">
            <p>GP | LONGEVITY | CONCIERGE</p>
          </BannerDescription>
          <div>
            <ButtonLink to="/individual-family-gp">
              Discover Membership
            </ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default HomeBannerSection;
