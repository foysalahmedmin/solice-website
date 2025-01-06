import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const ExperienceBioSection = () => {
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
              <br />
              <br />
              A medical retreat in a luxury Italian villa. Biohacking in the
              Indian Ocean. Private breathwork accompanied by our harpist or
              acupuncture combined with the gong.
              <br />
              <br />
              We provide end-to-end curation of combined therapies that work on
              the deepest level to restore and reignite your health.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default ExperienceBioSection;
