import {
  BioContainer,
  BioContent,
  BioDescription,
  BioSection,
  BioTitle,
} from "@/components/partials/Sections/BioSection";

const IndividualFamilyBioSection = () => {
  return (
    <BioSection className="bg-card">
      <BioContainer>
        <BioContent>
          <BioTitle>The Evolution of Healthcare</BioTitle>
          <BioDescription>
            <p>
              ARKangel Clinic GP memberships go far beyond prescriptions, medication and
              reactive care.
            </p>
          </BioDescription>
          <BioDescription>
            <p>
              Curated care for every age and life stage, membership offers peace
              of mind that you and your family are always covered.
            </p>
          </BioDescription>
        </BioContent>
      </BioContainer>
    </BioSection>
  );
};

export default IndividualFamilyBioSection;
