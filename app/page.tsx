import Hero from "./components/Hero";
import ServiceSection from "./components/services/ServiceSection";

export default function Home() {
  // const sectionList = [
  //   { title: "Productos", component: <ProductList /> },
  //   { title: "Servicios", component: <ServiceList /> },
  //   { title: "Conoce al Equipo", component: <TeamList /> },
  //   { title: "Donde nos podes encontrar", component: <Location /> },
  //   { title: "Contáctanos", component: <ContactList /> },
  // ];

  return (
    <main className="flex flex-col pt-20 grow items-center justify-center self-center w-full max-w-screen-lg">
      <Hero />
      <ServiceSection />
    </main>
  );
}
