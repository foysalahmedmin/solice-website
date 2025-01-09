import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const AboutBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>DEDICATED TO YOU​</BioTitle>
          <BioDescription>
            <p>
              Founded by an award-winning
              orthopaedic surgeon.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              Our commitment to excellence has seen us partner with renowned
              longevity expert to deliver the most
              comprehensive and holistic approach to modern health and
              longevity.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default AboutBioSection;
