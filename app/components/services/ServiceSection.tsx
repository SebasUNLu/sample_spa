import { Service } from "@/app/types";
import data from "./services.json";
import ServiceCard from "./ServiceCard";

const servicios: Service[] = data;

export default function ServiceSection() {
  return (
    <div className="w-full flex flex-col p-4">
      <p className="font-bold">Servicios que ofrecemos</p>
      <div className="w-full flex flex-wrap justify-around gap-8">
        {data.map((service) => (
          <ServiceCard service={service} key={"service_" + service.id} />
        ))}
      </div>
    </div>
  );
}
