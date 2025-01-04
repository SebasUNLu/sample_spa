import clsx from "clsx";

interface params {
  children: React.ReactNode;
  styles?: string;
}

export default function Card({ children, styles }: params) {
  return (
    <div
      className={clsx(
        "p-4 flex text-black rounded-lg bg-card justify-between max-w-96 relative shadow-md",
        styles
      )}
    >
      {children}
    </div>
  );
}
