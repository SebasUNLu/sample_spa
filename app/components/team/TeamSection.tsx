import { Member } from "@/app/types";
import data from "./members.json";
import MemberCard from "./MemberCard";

const member: Member[] = data;

export default function TeamSection() {
  return (
    <div className="w-full flex flex-col p-4">
      <div className="w-full flex flex-wrap justify-around gap-8">
        {data.map((member) => (
          <MemberCard member={member} key={"member_" + member.id} />
        ))}
      </div>
    </div>
  );
}
