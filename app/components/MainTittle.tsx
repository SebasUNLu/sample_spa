type props = {
  name: string;
};

export default function MainTittle({ name }: props) {
  return (
    <div className="w-full h-32 flex items-center justify-center text-4xl font-serif">
      {name}
    </div>
  );
}
