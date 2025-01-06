import LocationBannerSection from "@/components/(common)/(location-page)/LocationBannerSection";
import LocationBannerSectionMember from "@/components/(common)/(location-page)/LocationBannerSectionMember";
import LocationBioSection from "@/components/(common)/(location-page)/LocationBioSection";
import LocationFeatureSection from "@/components/(common)/(location-page)/LocationFeatureSection";
import ServiceBannerSectionMember from "@/components/(common)/(service-page)/ServiceBannerSectionMember";

const LocationPage = () => {
  return (
    <main>
      <LocationBannerSection />
      <LocationBioSection />
      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center text-xl md:text-2xl">
            <p>
              “The best doctors take the time to pause, listen and truly
              understand. to restore health, and reverse disease. Put simply, we
              optimise and advocate every aspect of your health.”
            </p>
            <p>Dr Liza Osagie-Clouard</p>
          </div>
        </div>
      </section>
      <LocationFeatureSection />
      <ServiceBannerSectionMember />
      <LocationBannerSectionMember />
    </main>
  );
};

export default LocationPage;
