import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const ExperienceBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground image="/images/(experience-page)/banner-image.jpg" />
      <BannerContainer className="bg-dark/25">
        <BannerContent>
          <BannerTitle>Imagine the Unimaginable</BannerTitle>
          <BannerDescription>
            <p>Health journeys created specifically to resonate with you.</p>
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default ExperienceBannerSection;
