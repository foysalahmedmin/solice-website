import ServiceBannerSection from "@/components/(common)/(service-page)/ServiceBannerSection";
import ServiceBannerSectionMember from "@/components/(common)/(service-page)/ServiceBannerSectionMember";
import ServiceBioSection from "@/components/(common)/(service-page)/ServiceBioSection";
import TreatmentFeatureSection from "@/components/(common)/(service-page)/TreatmentFeatureSection";

const TreatmentPage = () => {
  return (
    <main>
      <ServiceBannerSection />
      <ServiceBioSection />
      <TreatmentFeatureSection />
      <ServiceBannerSectionMember />
    </main>
  );
};

export default TreatmentPage;
