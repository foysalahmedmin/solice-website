import ServiceBannerSection from "@/components/(common)/(service-page)/ServiceBannerSection";
import ServiceBannerSectionMember from "@/components/(common)/(service-page)/ServiceBannerSectionMember";
import ServiceBioSection from "@/components/(common)/(service-page)/ServiceBioSection";
import ServiceFeatureSection from "@/components/(common)/(service-page)/ServiceFeatureSection";

const ServicePage = () => {
  return (
    <main>
      <ServiceBannerSection />
      <ServiceBioSection />
      <ServiceFeatureSection />
      <ServiceBannerSectionMember />
    </main>
  );
};

export default ServicePage;
