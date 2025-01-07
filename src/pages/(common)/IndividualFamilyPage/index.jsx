import IndividualFamilyBannerSection from "@/components/(common)/(individual-family-page)/IndividualFamilyBannerSection";
import IndividualFamilyBioSection from "@/components/(common)/(individual-family-page)/IndividualFamilyBioSection";
import IndividualFamilyFeatureSection from "@/components/(common)/(individual-family-page)/IndividualFamilyFeatureSection";

const IndividualFamilyPage = () => {
  return (
    <main>
      <IndividualFamilyBannerSection />
      <IndividualFamilyBioSection />
      <IndividualFamilyFeatureSection />
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center text-xl md:text-2xl">
            <p>
              “Healthcare can be complicated. The antidote is simple. It starts
              with having the time and caring enough to consider people’s
              individual needs.”
            </p>
            <p>Arabella, SOLICE Nurse</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndividualFamilyPage;
