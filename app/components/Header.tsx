import clsx from "clsx";
import Link from "next/link";

let sectionList = [
  { name: "Inicio", href: "" },
  { name: "Servicios", href: "servicios" },
  { name: "Reserva Sesión", href: "reserva" },
  { name: "Sobre Nosotros", href: "aboutus" },
];

let title = '"Aloe Blossom"';

export default function Header() {
  return (
    <div className="fixed top-0 flex justify-between h-20 z-50 w-full bg-gradient-to-b from-aloe_pink to-blossom_blue drop-shadow-md">
      <div className="w-1/5 flex items-center justify-center text-4xl italic">
        {title}
      </div>
      <div className="w-2/5 flex items-center justify-around">
        {sectionList.map(({ href, name }) => {
          return (
            <Link id={href} className="font-bold text-xl" href={`/${href}`}>
              {name}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center justify-center w-1/5 gap-2">
        <HeaderButton href="register" text="Registrate" />
        <HeaderButton href="login" text="Inicia Sesión" altColor />
      </div>
    </div>
  );
}

interface buttonParams {
  text: String;
  href: String;
  altColor?: boolean;
}
/**
 * AltColor -> button with filled background
 * @param param0
 */
function HeaderButton({ text, href, altColor }: buttonParams) {
  const defaultStyle = "bg-white hover:bg-blossom_blue_2";
  const altStyle = "bg-white hover:bg-aloe_pink_2";
  return (
    <Link
      href={`/${href}`}
      className={clsx(
        "rounded p-2 border font-bold text-black transition-all duration-200",
        altColor ? altStyle : defaultStyle
      )}
    >
      {text}
    </Link>
  );
}
