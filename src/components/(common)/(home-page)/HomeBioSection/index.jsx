import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const HomeBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>Welcome to solice</BioTitle>
          <BioDescription>
            <p>
              A pioneering concept like no other, we provide an integrated
              medical practice and concierge service underpinned by a holistic
              and innovative approach to longevity.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              Relationship-based medicine to enrich you every day, enhance your
              healthspan and empower your wellness.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default HomeBioSection;
