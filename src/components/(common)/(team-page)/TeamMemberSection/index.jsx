import { TeamCard } from "@/components/partials/Cards/TeamCard";

const TeamMemberSection = () => {
  const data = [
    {
      name: "Dr Tamsin Lewis",
      title: "Longevity Lead",
      description:
        "Our expert in the science of longevity and practice of functional medicine. She trained in medicine at King’s College London and Guys and St Thomas’ hospitals, and has cast her focus on neuroscience, the biology of ageing, sports medicine, nutrition and long covid. A former ironman triathlete champion, she has first-hand experience of managing optimal health and human potential, and the power of the mind in health outcomes.",
      image: "/images/(team-page)/team-1.jpg",
    },
    {
      name: "Dr Luke Simmonds",
      title: "Head of GP Services",
      description:
        "With a commitment to patient discretion and a genuine kindness, he provides a level of care that exceeds expectations. With a wealth of experience in various medical disciplines, he leads our team of GP’s and frontline care.",
      image: "/images/(team-page)/team-2.jpg",
    },
    {
      name: "Dr Yiannis Ioannou",
      title: "Consultant in Paediatrics",
      description:
        "A consultant paediatrician of exceptional standing. Following studies at Cambridge University and Guy’s and St Thomas’ Medical School, he expanded his expertise in paediatrics from birth to teenage years while working in leading hospitals across London and Sydney.",
      image: "/images/(team-page)/team-3.jpg",
    },
    {
      name: "Professor Paul Ellis",
      title: "Consultant in Medical Oncology",
      description:
        "Professor Ellis is one of London’s most respected doctors in cancer care. A leading London consultant in oncology, he gained his medical degree at Otago University in New Zealand before pursuing an oncology fellowship and PhD at London’s Royal Marsden Hospital.",
      image: "/images/(team-page)/team-4.jpg",
    },
    {
      name: "Dr Oscar D’Agnone",
      title: "Consultant Psychiatrist",
      description:
        "Widely recognised for his effective management of complex mental health problems, Dr D’Agone meets the challenging consequences for patients and families with both pharmacological and psychosocial solutions. His many years of experience teaching psychiatry and treating anxiety disorders, addictions, trauma, depression and ADHD at the highest level has led to advisory positions in government and pharmaceutical development.",
      image: "/images/(team-page)/team-5.jpg",
    },
    {
      title: "CLINICAL LEAD",
      name: "Professor Nicholas Goddard",
      description:
        "The many years of dedication to the practice of orthopaedic surgery and widely published research have earned Professor Nicholas Goddard international acclaim.",
      image: "/images/(team-page)/team-6.jpg",
    },
    {
      title: "SPECIALIST IN RESPIRATORY MEDICINE",
      name: "Dr Melissa Wickremasinghe",
      description:
        "A leading consultant in respiratory medicine. She qualified in London, gaining a PhD at Imperial College London where she continues to investigate complex lung conditions.",
      image: "/images/(team-page)/team-7.jpg",
    },
    {
      title: "CONSULTANT CARDIOLOGIST",
      name: "Dr Ramzi Khamis",
      description:
        "A consultant cardiologist at Imperial College Healthcare NHS Trust and is the Clinical Director of Cardiology and Cardiothoracic Surgery at Imperial College Healthcare NHS Trust.",
      image: "/images/(team-page)/team-8.jpg",
    },
    {
      name: "Gerad Kite",
      title: "FIVE ELEMENT ACUPUNCTURE MASTER",
      description:
        "Gerald Kite’s mastery of acupuncture has earned him a reputation for bringing meaningful change across many areas of wellbeing, and specifically fertility. He is the visionary who introduced the ancient eastern medical discipline to the NHS, running its first ever service at London’s Kings College Hospital. He has since gained global recognition for his pioneering practice and teaching of Five Element Acupuncture and has authored numerous books, including ‘The Art of Baby-Making’.",
      image: "/images/(team-page)/team-9.jpg",
    },
    {
      name: "Andrea Hurst",
      title: "INTERNATIONAL REFLEXOLOGIST",
      description:
        "Andrea Hurst has been refining her practice of reflexology over 25 years, and is now recognised as a global leader in the Ancient Egyptian healing art. Based in London, but taking her artistry around the world, her fine-tuned understanding of reflex points makes a session in her hands deeply restorative. With the power to rejuvenate and reset mind, body and soul, her treatments are the perfect support for a programme of health optimisation.",
      image: "/images/(team-page)/team-10.jpg",
    },
    {
      name: "Dr Kaitlin St Clair PhD MA BA",
      title: "PSYCHOLOGY LEAD",
      description:
        "Kati St Clair has thirty years of experience as a therapist and business mentor with an international client base including senior executives, politicians, actors and writers.",
      image: "/images/(team-page)/team-11.jpg",
    },
    {
      name: "Natalia Ramsden",
      title: "Cognitive Performance Lead",
      description:
        "Natalia Ramsden is a neuro-based executive coach specializing in cognitive performance, learning, and brain function. She works with individuals to enhance and sustain peak performance with a neuroscientific approach. Natalia has a Bachelor of Psychology and a Bachelor of Arts from the University of Newcastle (Australia), a Masters in Organisational Psychology from the University of London, and an MBA from the University of Cambridge.",
      image: "/images/(team-page)/team-12.jpg",
    },
  ];

  return (
    <section className="my-16 md:my-24">
      <div className="container">
        <div className="space-y-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-16">
            {data?.slice(0, 2).map((item, index) => (
              <TeamCard key={index} item={item} />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
            {data?.slice(2).map((item, index) => (
              <TeamCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
