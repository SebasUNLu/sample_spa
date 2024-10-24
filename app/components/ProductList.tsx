import Image from "next/image";
import { Product, productList } from "./products/productList";

export default function ProductList() {
  return (
    <div className="w-full flex flex-col">
      <div className="">
        <p>Filtros:</p>
      </div>
      <div className="">
        {productList.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </div>
    </div>
  );
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  const { description, id, img, name, price } = product;
  return (
    <div className="bg-slate-400 flex flex-col p-4">
      <Image src={img.src} alt={img.alt} width={200} height={200} />
      <div>
        <p className="font-bold text-4xl">{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
