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
          <BioTitle>Elevate Your Health</BioTitle>
          <BioDescription>
            <p>
              We offer members restorative health experiences, curating an
              entirely personalised programme built around you and your health
              needs
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              A medical retreat in a luxury Italian villa. Biohacking in the
              Indian Ocean. Private breathwork accompanied by our harpist or
              acupuncture combined with the gong.
              <br />
              <br />
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default ServiceBioSection;
