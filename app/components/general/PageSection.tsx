type props = {
  title: string;
  children: React.ReactNode;
};

export default function PageSection({ title, children }: props) {
  return (
    <section id={`${title}`} className="w-ful flex flex-col justify-center my-4 p-4">
      <SectionTitle title={title} />
      {children}
    </section>
  );
}

type titleProps = {
  title: string;
};

function SectionTitle({ title }: titleProps) {
  return <h2 className="">{title}</h2>;
}
