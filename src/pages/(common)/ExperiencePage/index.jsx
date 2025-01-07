import ExperienceBannerSection from "@/components/(common)/(experience-page)/ExperienceBannerSection";
import ExperienceBannerSectionMember from "@/components/(common)/(experience-page)/ExperienceBannerSectionMember";
import ExperienceBioSection from "@/components/(common)/(experience-page)/ExperienceBioSection";
import ExperienceFeatureSection from "@/components/(common)/(experience-page)/ExperienceFeatureSection";
import IframeVideSection from "@/components/partials/Sections/IframeVideoSection";

const ExperiencePage = () => {
  return (
    <main>
      <ExperienceBannerSection />
      <ExperienceBioSection />
      <IframeVideSection />
      <ExperienceFeatureSection />
      <ExperienceBannerSectionMember />
    </main>
  );
};

export default ExperiencePage;
