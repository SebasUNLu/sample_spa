let heroTittle = '"Aloe Blossom"';
let heroSubTittle = "Day Spa";

export default function Hero() {
  return (
    <div className="w-full h-96 relative bg-gray-300 flex flex-col justify-center items-center text-white font-bold text-5xl">
      <p className="">{heroTittle}</p>
      <p className="">{heroSubTittle}</p>
    </div>
  );
}
