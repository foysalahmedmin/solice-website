import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const TeamBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        image="/images/(service-page)/banner-image.jpg"
      />
      <BannerContainer>
        <BannerContent>
          <BannerTitle>The First of its Kind</BannerTitle>
          <BannerDescription>
            <p>
              A fully integrated approach for absolute medical peace of mind. We
              combine the conventional, therapeutic, and cutting edge delivered
              by best-in-class clinical leaders.
            </p>
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default TeamBannerSection;
