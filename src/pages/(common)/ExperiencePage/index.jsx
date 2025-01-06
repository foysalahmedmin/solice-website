import ExperienceBannerSection from "@/components/(common)/(experience-page)/ExperienceBannerSection";
import ExperienceBannerSectionMember from "@/components/(common)/(experience-page)/ExperienceBannerSectionMember";
import ExperienceBioSection from "@/components/(common)/(experience-page)/ExperienceBioSection";
import ExperienceFeatureSection from "@/components/(common)/(experience-page)/ExperienceFeatureSection";

const ExperiencePage = () => {
  return (
    <main>
      <ExperienceBannerSection />
      <ExperienceBioSection />
      <ExperienceFeatureSection />
      <ExperienceBannerSectionMember />
    </main>
  );
};

export default ExperiencePage;
