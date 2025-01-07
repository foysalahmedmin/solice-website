import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const LongevityBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>A Life Lived Better</BioTitle>
          <BioDescription>
            <p>
              Our longevity focus is not based on protocol or testing; instead
              membership delivers precision not programme.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              Initial conversations are followed by tailored investigations,
              with an ongoing discussion and navigation of your health journey.
              <br />
              <br />
              We do not simply diagnose or uncover disease, we pave the way for
              lasting transformation ensuring longevity is the result of a life
              well lived.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default LongevityBioSection;
