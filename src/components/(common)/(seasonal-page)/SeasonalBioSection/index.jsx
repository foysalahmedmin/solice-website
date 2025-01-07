import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const SeasonalBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>The Evolution of Healthcare</BioTitle>
          <BioDescription>
            <p>
              A condensed, short-term membership to uncover and overcome
              specific health concerns and experience modern healthcare whilst
              in London
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              A three-month membership, whether medical or longevity focused,
              delivers immersive care specific to your most pressing needs.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default SeasonalBioSection;
