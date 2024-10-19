import MainTittle from "./components/MainTittle";
import ProductList from "./components/ProductList";
import ServiceList from "./components/ServiceList";
import TeamList from "./components/TeamList";
import Location from "./components/Location";
import ContactList from "./components/ContactList";

export default function Home() {
  return (
    <div className="w-full">
      <MainTittle name="Enterprise" />
      <ProductList />
      <ServiceList/>
      <TeamList />
      <Location />
      <ContactList />
    </div>
  );
}
