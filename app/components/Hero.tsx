let heroTittle = '"Aloe Blossom"';
let heroSubTittle = "Day Spa";

export default function Hero() {
  return (
    <div className="w-full h-96 relative bg-gradient-to-t from-transparent from-0% to-hero_background flex flex-col justify-center items-center text-white font-bold text-5xl">
      <HeroTittle />
      <p className="underline text-black">{heroSubTittle}</p>
    </div>
  );
}

function HeroTittle() {
  return (
    <div className="flex gap-5 italic">
      <p className="text-aloe_pink_2">"Aloe</p>
      <p className="text-blossom_blue_2">Blossom"</p>
    </div>
  );
}
