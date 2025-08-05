"use client";

import clsx from "clsx";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import TooltipWrapper from "./general/TooltipWrapper";

let sectionList = [
  { name: "Inicio", href: "" },
  { name: "Servicios", href: "servicios" },
  { name: "Reserva Sesión", href: "reserva" },
  { name: "Sobre Nosotros", href: "aboutus" },
];

let title = '"Aloe Blossom"';

export default function Header() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <div className="fixed top-0 flex justify-between h-20 z-50 w-full bg-gradient-to-b from-aloe_pink to-blossom_blue drop-shadow-md ">
      <div className="w-1/5 flex items-center justify-center text-4xl italic">
        {title}
      </div>
      <div className="w-2/5 flex items-center justify-around">
        {sectionList.map(({ href, name }) => {
          return (
            <Link
              key={href}
              className="font-bold text-xl hover:text-slate-600 transition-all duration-200"
              href={`/${href}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
      <div className="w-1/5 flex items-center justify-center gap-4">
        {user ? (
          <>
            {/* Boton Ver perfil */}
            <TooltipWrapper tooltipText="Ver perfil">
              <Link
                href={`/perfil/${user.id}`}
                className="font-bold text-xl hover:text-slate-600 transition-all duration-200"
                onClick={() => {
                  router.push(`/perfil/${user.id}`);
                }}
              >
                {user.name}
              </Link>
            </TooltipWrapper>

            {/* Boton Logout */}
            <TooltipWrapper tooltipText="Cerrar sesión">
              <button
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
              >
                Logout
              </button>
            </TooltipWrapper>
          </>
        ) : (
          <div className=" w-full flex gap-2">
            <HeaderButton href="register" text="Registrate" />
            <HeaderButton href="login" text="Inicia Sesión" altColor />
          </div>
        )}
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
