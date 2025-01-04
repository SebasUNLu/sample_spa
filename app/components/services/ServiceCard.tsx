import { Service } from "@/app/types";
import Image from "next/image";
import Card from "../general/Card";

interface params {
  service: Service;
  style?: string;
}

export default function ServiceCard({ service, style = "" }: params) {
  const { description, id, img, name, price } = service;
  return (
    <Card styles={style}>
      <div className="flex flex-col w-full z-10">
        <p className="font-bold text-2xl">{name}</p>
        <p className="">{description}</p>
        <p className="">{price}</p>
      </div>
      <CardImage src={img.src} alt={img.alt} />
    </Card>
  );
}

function CardImage(img: { src: string; alt: string }) {
  return (
    <div className="rounded-lg absolute h-full right-0 top-0 z-0">
      <Image
        src={img.src}
        alt={img.alt}
        width={320}
        height={320}
        className="rounded-lg h-full w-auto opacity-50"
      />
      <div className="absolute w-full h-full top-0 bg-gradient-to-r from-card to-transparent"></div>
    </div>
  );
}
