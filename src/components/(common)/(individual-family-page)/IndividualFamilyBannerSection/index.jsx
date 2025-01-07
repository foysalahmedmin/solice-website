import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const IndividualFamilyBannerSection = () => {
  return (
    <BannerSection>
      <BannerBackground className="bg-[#afcad6]" />
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Discover your GP, made-to-measure</BannerTitle>
          <BannerDescription>
            <p>
              Healthcare that expects the unexpected: an integrated, seamless
              experience with the very best in clinical expertise.
            </p>
          </BannerDescription>
          <div>
            <ButtonLink to="/contact-us">Enquire Here</ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default IndividualFamilyBannerSection;
