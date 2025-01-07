import SeasonalBannerSection from "@/components/(common)/(seasonal-page)/SeasonalBannerSection";
import SeasonalBannerSectionMember from "@/components/(common)/(seasonal-page)/SeasonalBannerSectionMember";
import SeasonalBioSection from "@/components/(common)/(seasonal-page)/SeasonalBioSection";
import SeasonalFeatureSection from "@/components/(common)/(seasonal-page)/SeasonalFeatureSection";

const SeasonalPage = () => {
  return (
    <main>
      <SeasonalBannerSection />
      <SeasonalBioSection />
      <SeasonalFeatureSection />
      <SeasonalBannerSectionMember />
    </main>
  );
};

export default SeasonalPage;
