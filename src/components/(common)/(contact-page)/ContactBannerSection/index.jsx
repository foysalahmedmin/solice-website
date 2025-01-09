import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const ContactBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground
        //  iframe="https://player.vimeo.com/video/844556204?h=83f2a719c2&autoplay=1&loop=1&muted=1&background=1"
        image="/images/(contact-page)/banner-image.jpg"
      />
      <BannerContainer className="bg-dark/25">
        <BannerContent>
          <BannerTitle>Welcome to ARKangel Clinic</BannerTitle>
          <BannerDescription>
            <p>
              To experience 21st century healthcare, contact us to enquire about
              membership.
            </p>
          </BannerDescription>
          <BannerDescription>
            <p>GP | LONGEVITY | CONCIERGE</p>
          </BannerDescription>
        </BannerContent>
      </BannerContainer>
    </BannerSection>
  );
};

export default ContactBannerSection;
