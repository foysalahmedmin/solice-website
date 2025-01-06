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
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        image="/images/(experience-page)/banner-image.jpg"
      />
      <BannerContainer>
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
