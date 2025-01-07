import {
  BannerBackground,
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerSection,
  BannerTitle,
} from "@/components/partials/Sections/BannerSection";

const ServiceBannerSection = () => {
  return (
    <BannerSection className="dark">
      <BannerBackground image="/images/(service-page)/banner-image.jpg" />
      <BannerContainer className="bg-dark/50">
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

export default ServiceBannerSection;
