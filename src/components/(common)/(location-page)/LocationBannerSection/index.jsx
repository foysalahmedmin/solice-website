import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const LocationBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        image="/images/(location-page)/banner-image.jpg"
      />
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Your Home and Ours</BannerTitle>
          <BannerDescription>
            <p>
              On hand with the care you need, when and where you need it. You
              move locations and so do we.
            </p>
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default LocationBannerSection;
