import PageSection from "./components/general/PageSection";
import Hero from "./components/Hero";
import ServiceSection from "./components/services/ServiceSection";

export default function Home() {
  const sectionList = [
    { title: "Servicios que ofrecemos", component: <ServiceSection /> },
  ];

  return (
    <main className="flex flex-col pt-20 grow items-center justify-center self-center w-full max-w-screen-lg">
      <Hero />
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
