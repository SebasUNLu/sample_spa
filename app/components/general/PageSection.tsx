import clsx from "clsx";
import styled from "styled-components";

type props = {
  title: string;
  children: React.ReactNode;
  styles?: string;
};

export default function PageSection({ title, children, styles = "" }: props) {
  return (
    <section
      id={`${title}`}
      className={clsx("w-full flex flex-col justify-center my-4 p-4", styles)}
    >
      <SectionTitle title={title} />
      {children}
    </section>
  );
}

type titleProps = {
  title: string;
};

function SectionTitle({ title }: titleProps) {
  return <h2 className="text-4xl mb-8">{title}</h2>;
}
