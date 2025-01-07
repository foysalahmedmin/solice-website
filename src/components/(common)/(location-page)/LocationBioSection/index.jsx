import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const LocationBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>Your Home from Home</BioTitle>
          <BioDescription>
            <p>
              Re-envisioning what a doctor’s practice should be, membership
              includes unlimited consultations at-home, online or from our
              Mayfair clinic.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              The ARKangel philosophy values conversations over consultations.
              Each floor is dedicated to see one member at a time and provides a
              private space to discuss care and receive treatment.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default LocationBioSection;
