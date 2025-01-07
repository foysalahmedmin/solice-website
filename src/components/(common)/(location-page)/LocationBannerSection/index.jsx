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
      <BannerBackground image="/images/(location-page)/banner-image.jpg" />
      <BannerContainer className="bg-dark/50">
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
