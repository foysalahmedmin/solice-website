import ButtonLink from "@/components/partials/Buttons/ButtonLink";
import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const LongevityBannerSection = () => {
  return (
    <BannerSection>
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        // image="/images/(home-page)/banner-image.jpg"
        className="bg-[#afcad6]"
      />
      <BannerContainer>
        <BannerContent>
          <BannerTitle>Unlock Your Body’s Secrets</BannerTitle>
          <BannerDescription>
            <p>Listening to every aspect-to optimise your lifespan</p>
          </BannerDescription>
          <div>
            <ButtonLink to="/contact-us">Enquire Here</ButtonLink>
          </div>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default LongevityBannerSection;
