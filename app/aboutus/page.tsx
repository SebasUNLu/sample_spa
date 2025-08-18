import HeroTittle from "../components/HeroTittle";
import clsx from "clsx";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl  self-center p-5 gap-10 my-10">
      <HeroTittle />
      <Paragraph
        text=" En Aloe-Blossom Day Spa creemos que el cuidado personal es un ritual
        esencial para la mente, el cuerpo y el espíritu; inspirados en la pureza
        del aloe y la frescura de la naturaleza, ofrecemos un refugio donde
        desconectarte del estrés y reconectar con tu bienestar, a través de
        experiencias únicas de relajación, rejuvenecimiento y belleza,
        combinando técnicas modernas y tradicionales para que en cada visita
        florezca tu equilibrio interior."
      />
      <Paragraph
        text=" Este sitio web forma parte de un proyecto personal desarrollado con
        fines educativos y de práctica. La empresa Aloe-Blossom Day Spa es
        completamente ficticia y fue creada únicamente como escenario para
        aplicar y experimentar con nuevas tecnologías en el desarrollo web. No
        existe ningún propósito comercial ni de generación de beneficios
        económicos en este proyecto. Todo el contenido, imágenes y servicios
        presentados son simulados y se utilizan únicamente como material de
        prueba en un entorno de aprendizaje y experimentación."
        classname="opacity-50"
      />
    </div>
  );
}

function Paragraph({ text, classname }: { text: string; classname?: string }) {
  return <p className={clsx("text-center", classname)}>{text}</p>;
}
