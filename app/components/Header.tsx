let sectionList = [
  { name: "Inicio", id: "inicio" },
  { name: "Servicios", id: "servicios" },
  { name: "Reserva Sesión", id: "reserva" },
  { name: "Sobre Nosotros", id: "aboutus" },
];

let title = '"Aloe Blossom"'

export default function Header() {
  return (
    <div className="fixed top-0 flex h-20 w-full bg-gradient-to-b from-aloe_pink to-blossom_blue drop-shadow-md">
      <div className="w-1/5 flex items-center justify-center text-4xl italic">
        {title}
      </div>
      <div className="w-4/5 flex items-center justify-around">
        {sectionList.map(({ id, name }) => {
          return <a id={id} className="font-bold text-xl" href={`#${id}`}>{name}</a>;
        })}
      </div>
    </div>
  );
}
