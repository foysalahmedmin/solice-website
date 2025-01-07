import LongevityBannerSection from "@/components/(common)/(longevity-page)/LongevityBannerSection";
import LongevityBannerSectionMember from "@/components/(common)/(longevity-page)/LongevityBannerSectionMember";
import LongevityBioSection from "@/components/(common)/(longevity-page)/LongevityBioSection";
import LongevityFeatureSection from "@/components/(common)/(longevity-page)/LongevityFeatureSection";

const LongevityPage = () => {
  return (
    <main>
      <LongevityBannerSection />
      <LongevityBioSection />
      <LongevityFeatureSection />
      <LongevityBannerSectionMember />
    </main>
  );
};

export default LongevityPage;
