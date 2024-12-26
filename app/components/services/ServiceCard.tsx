import { Service } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";

interface params {
  service: Service;
  style?: string;
}

export default function ServiceCard({ service, style = "" }: params) {
  const { description, id, img, name, price } = service;
  return (
    <div
      className={clsx(
        "flex text-black rounded-lg bg-service_card_bg justify-between w-1/2 relative shadow-md",
        style
      )}
    >
      <div className="flex flex-col m-4 w-2/3">
        <p className="font-bold text-2xl">{name}</p>
        <p className="">{description}</p>
        <p className="">{price}</p>
      </div>
      <CardImage src={img.src} alt={img.alt} />
    </div>
  );
}

function CardImage(img: { src: string; alt: string }) {
  return (
    <div className="rounded-lg">
      <Image src={img.src} alt={img.alt} width={320} height={320} className="rounded-lg h-full w-auto" />
      <div className="absolute w-60 h-full top-0 bg-gradient-to-r from-service_card_bg to-transparent"></div>
    </div>
  );
}
