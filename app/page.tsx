import PageSection from "./components/general/PageSection";
import ServiceSection from "./components/services/ServiceSection";
import TeamSection from "./components/team/TeamSection";

export default function Home() {
  const sectionList = [
    { title: "Servicios que ofrecemos", component: <ServiceSection /> },
    { title: "Conoce a nuestro equipo", component: <TeamSection /> },
  ];

  return (
    <main className="flex flex-col grow items-center justify-center self-center w-full max-w-screen-lg">
      
      {sectionList.map(({ component, title }, index) => (
        <PageSection
          title={title}
          children={component}
          key={"section_" + index}
        />
      ))}
    </main>
  );
}
