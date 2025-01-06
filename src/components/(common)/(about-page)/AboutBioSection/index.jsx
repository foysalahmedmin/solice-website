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
              Founded by Dr Liza Osagie-Clouard MD PhD, an award-winning
              orthopaedic surgeon.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              Our commitment to excellence has seen us partner with renowned
              longevity expert, Dr Tamsin Lewis, to deliver the most
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
