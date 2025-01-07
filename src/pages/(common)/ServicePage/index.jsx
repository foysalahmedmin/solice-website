import ServiceBannerSection from "@/components/(common)/(service-page)/ServiceBannerSection";
import ServiceBannerSectionMember from "@/components/(common)/(service-page)/ServiceBannerSectionMember";
import ServiceBioSection from "@/components/(common)/(service-page)/ServiceBioSection";
import ServiceFeatureSection from "@/components/(common)/(service-page)/ServiceFeatureSection";
import IframeVideSection from "@/components/partials/Sections/IframeVideoSection";

const ServicePage = () => {
  return (
    <main>
      <ServiceBannerSection />
      <ServiceBioSection />
      <IframeVideSection />
      <ServiceFeatureSection />
      <ServiceBannerSectionMember />
    </main>
  );
};

export default ServicePage;
