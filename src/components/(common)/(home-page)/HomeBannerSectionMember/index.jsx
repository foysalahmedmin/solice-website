import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const HomeBannerSectionMember = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground image="/images/(home-page)/banner-image-member.jpg" />
      <BannerContainer className="bg-dark/50">
        <BannerContent className="md:space-y-6">
          <BannerDescription className="text-lg uppercase md:text-xl">
            <p>Become a Member</p>
          </BannerDescription>
          <BannerTitle>Discover the Art of Being Well</BannerTitle>
          <BannerDescription className="text-lg md:text-xl">
            <p>GP | LONGEVITY | CONCIERGE</p>
          </BannerDescription>
          <div>
            <ButtonLink to="/contact-us">Enquire Here</ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default HomeBannerSectionMember;
