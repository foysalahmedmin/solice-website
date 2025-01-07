import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const ServiceBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>Absolute peace of mind</BioTitle>
          <BioDescription>
            <p>
              A seamless experience bringing the very best in clinical
              excellence to you. Our attention elevates the concept of
              personalised healthcare to an entirely new level.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              nterlinking spheres to address every heath need and explore every
              healthspan advance; all underpinned by your on-hand concierge
              team.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default ServiceBioSection;
