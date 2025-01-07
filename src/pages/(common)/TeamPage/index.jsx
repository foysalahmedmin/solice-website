import TeamBannerSection from "@/components/(common)/(team-page)/TeamBannerSection";
import TeamFeatureSection from "@/components/(common)/(team-page)/TeamFeatureSection";
import TeamMemberSection from "@/components/(common)/(team-page)/TeamMemberSection";

const TeamPage = () => {
  return (
    <main>
      <TeamBannerSection />
      <TeamFeatureSection />
      <TeamMemberSection />
    </main>
  );
};

export default TeamPage;
