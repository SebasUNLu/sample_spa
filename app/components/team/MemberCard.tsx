import { Member } from "@/app/types";
import Image from "next/image";
import Card from "../general/Card";

interface params {
  member: Member;
}

export default function MemberCard({ member }: params) {
  const { name, description, img } = member;
  return (
    <Card styles="gap-4">
      <MemberImage alt={img.alt} src={img.src} />
      <div className="flex flex-col w-3/4 justify-center items-start ">
        <div className="font-bold">{name}</div>
        <div className="">{description}</div>
      </div>
    </Card>
  );
}

function MemberImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-1/4">
      <Image alt={alt} src={src} width={240} height={240} className="h-auto w-full rounded-full"/>
    </div>
  );
}
