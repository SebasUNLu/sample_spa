export default function Footer() {
  return (
    <div className="flex flex-col w-full p-4 mt-4 bg-footer_bg text-footer_text gap-4">
      <div className="flex flex-col gap-4">
        <p>Mail: example@gmail.com</p>
        <p>Tel: +54 2323456789</p>
      </div>
      <div className="flex w-full items-center justify-center">
        <p>© Aloe Blossom 2025</p>
      </div>
    </div>
  );
}
