import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const ServiceBannerSectionMember = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground image="/images/(service-page)/banner-image-member.jpg" />
      <BannerContainer className="bg-dark/25">
        <BannerContent className="md:space-y-6">
          <BannerDescription className="text-lg uppercase md:text-xl">
            <p>Become a Member</p>
          </BannerDescription>
          <BannerTitle>The Art of the Possible</BannerTitle>
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

export default ServiceBannerSectionMember;
