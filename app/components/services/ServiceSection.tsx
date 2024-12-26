import { Service } from "@/app/types";
import data from "./services.json";
import ServiceCard from "./ServiceCard";

const servicios: Service[] = data;

export default function ServiceSection() {
  return (
    <div className="w-full flex flex-col p-4">
			<p className="font-bold">Servicios que ofrecemos</p>
      {data.map((service) => (
        <ServiceCard service={service} />
      ))}
    </div>
  );
}
