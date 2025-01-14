import { SplitCard } from "@/components/partials/Cards/SplitCard";

const TreatmentFeatureSection = () => {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      title: "Facial Rejuvenation",
      link: "/treatments/facial-rejuvenation",
      description: (
        <>
          <p>
            Experience comprehensive facial rejuvenation with our advanced treatments including HydraFacial, Chemical Peels, and Microneedling. These treatments work together to improve skin texture, reduce signs of aging, and enhance your natural radiance.
            <br /> <br />
            Our Dermaplaning and LED Light Therapy treatments provide immediate skin renewal and promote cellular regeneration, helping you achieve a more youthful and glowing complexion.
            <br /> <br />
            Each treatment is tailored to address your specific skin concerns, ensuring optimal results for your unique needs.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      title: "Anti-Wrinkle Injections",
      link: "/treatments/anti-wrinkle-injections",
      description: (
        <>
          <p>
            Our anti-wrinkle treatments offer precise and effective solutions for facial rejuvenation. These treatments can target specific areas such as forehead lines, crow's feet, and frown lines to create a naturally refreshed appearance.
            <br /> <br />
            We also provide specialized treatments for hyperhidrosis (excessive sweating), offering long-lasting relief and improved confidence in your daily life.
            <br /> <br />
            All treatments are performed by highly qualified practitioners using premium products to ensure your safety and satisfaction.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
      title: "Dermal Fillers",
      link: "/treatments/dermal-fillers",
      description: (
        <>
          <p>
            Our dermal filler treatments provide natural-looking enhancement for various facial features. From subtle lip enhancement to comprehensive facial contouring, we can help you achieve your desired aesthetic goals.
            <br /> <br />
            Advanced treatments include cheek enhancement for added volume, jawline contouring for improved definition, and tear trough treatment to reduce under-eye hollows.
            <br /> <br />
            Each treatment is carefully planned and executed to maintain natural facial proportions while enhancing your unique features.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
      title: "Laser Treatments",
      link: "/treatments/laser-treatments",
      description: (
        <>
          <p>
            Our advanced laser treatments offer versatile solutions for various concerns. From permanent hair reduction to skin resurfacing and pigmentation removal, our technology delivers precise and effective results.
            <br /> <br />
            These treatments are suitable for various skin types and concerns, utilizing state-of-the-art technology for optimal outcomes with minimal downtime.
            <br /> <br />
            We create personalized treatment plans to ensure you achieve the best possible results for your specific needs.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?q=80&w=2070&auto=format&fit=crop",
      title: "Body Contouring",
      link: "/treatments/body-contouring",
      description: (
        <>
          <p>
            Transform your body with our advanced contouring treatments. Our Cryolipolysis technology targets stubborn fat deposits, while Radiofrequency treatments provide effective skin tightening for a more toned appearance.
            <br /> <br />
            Our Cellulite Reduction Therapy combines multiple techniques to improve skin texture and reduce the appearance of cellulite, helping you achieve smoother, firmer skin.
            <br /> <br />
            These non-invasive treatments offer visible results with minimal downtime, perfect for those seeking natural body sculpting solutions.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2070&auto=format&fit=crop",
      title: "IV Therapy & Vitamin Drips",
      link: "/treatments/iv-therapy",
      description: (
        <>
          <p>
            Boost your wellness from within with our comprehensive IV therapy options. Our treatments include hydration therapy for optimal cellular function, immune support for enhanced resistance, and specialized cocktails for anti-aging benefits.
            <br /> <br />
            Each drip is carefully formulated with essential vitamins, minerals, and antioxidants to support your body's natural healing and rejuvenation processes.
            <br /> <br />
            Treatments are administered by qualified healthcare professionals in a safe, comfortable environment for your peace of mind.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
      title: "Skin Tightening",
      link: "/treatments/skin-tightening",
      description: (
        <>
          <p>
            Experience advanced skin tightening with our HIFU (High-Intensity Focused Ultrasound) technology, delivering dramatic non-surgical lifting and tightening results by stimulating natural collagen production.
            <br /> <br />
            Our Radiofrequency treatments offer a gentler approach to skin firming, perfect for maintaining skin elasticity and preventing early signs of aging.
            <br /> <br />
            Both treatments work with your body's natural processes to achieve long-lasting results with minimal downtime.
          </p>
        </>
      ),
    },
    {
      image: "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?q=80&w=2070&auto=format&fit=crop",
      title: "Acne & Scar Treatments",
      link: "/treatments/acne-scar-treatments",
      description: (
        <>
          <p>
            Our comprehensive acne and scar treatments combine advanced laser technology with specialized therapies to improve skin texture and clarity. These treatments effectively target active acne while reducing the appearance of existing scars.
            <br /> <br />
            The popular Carbon Laser Peel provides deep cleansing and skin renewal, perfect for maintaining clear, healthy skin and preventing future breakouts.
            <br /> <br />
            Each treatment plan is customized to address your specific skin concerns, ensuring the best possible outcome for your skin health.
          </p>
        </>
      ),
    },
  ];
  return (
    <section className="my-16 md:my-24">
      <div className="container pt-16 md:pt-24">
        <div className="space-y-32 md:space-y-40">
          {data?.map((item, index) => (
            <SplitCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentFeatureSection;
