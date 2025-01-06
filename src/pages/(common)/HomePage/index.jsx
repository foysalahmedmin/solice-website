import HomeBannerSection from "@/components/(common)/(home-page)/HomeBannerSection";
import HomeBannerSectionMember from "@/components/(common)/(home-page)/HomeBannerSectionMember";
import HomeBioSection from "@/components/(common)/(home-page)/HomeBioSection";
import HomeDetailsSection from "@/components/(common)/(home-page)/HomeDetailsSection";
import HomeFeatureSection from "@/components/(common)/(home-page)/HomeFeatureSection";

const HomePage = () => {
  return (
    <main>
      <HomeBannerSection />
      <HomeBioSection />
      <HomeDetailsSection />
      <HomeFeatureSection />
      <HomeBannerSectionMember />
    </main>
  );
};

export default HomePage;
