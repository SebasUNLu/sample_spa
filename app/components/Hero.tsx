import HeroTittle from "./HeroTittle";

export default function Hero() {
  return (
    <div className="w-full h-96 relative bg-gradient-to-t from-transparent from-0% to-hero_background flex flex-col justify-center items-center text-white">
      <HeroTittle />
    </div>
  );
}
