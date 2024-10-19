import MainTittle from "./components/MainTittle";
import ProductList from "./components/ProductList";
import ServiceList from "./components/ServiceList";
import TeamList from "./components/TeamList";
import Location from "./components/Location";
import ContactList from "./components/ContactList";
import PageSection from "./components/general/PageSection";

export default function Home() {
  const sectionList = [
    { title: "Productos", component: <ProductList /> },
    { title: "Servicios", component: <ServiceList /> },
    { title: "Conoce al Equipo", component: <TeamList /> },
    { title: "Donde nos podes encontrar", component: <Location /> },
    { title: "Contáctanos", component: <ContactList /> },
  ];

  return (
    <main className="flex flex-col grow items-center justify-center self-center w-full">
      {sectionList.map((section) => {
        const { component, title } = section;
        return <PageSection children={component} title={title} />;
      })}
    </main>
  );
}
