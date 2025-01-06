import AboutBannerSection from "@/components/(common)/(about-page)/AboutBannerSection";
import AboutBioSection from "@/components/(common)/(about-page)/AboutBioSection";
import HomeFeatureSection from "@/components/(common)/(home-page)/HomeFeatureSection";

const AboutPage = () => {
  return (
    <main>
      <AboutBannerSection />
      <AboutBioSection />
      <HomeFeatureSection />
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
    </main>
  );
};

export default AboutPage;
