import Image from "next/image";
import { Product, productList } from "./products/productList";

let perfumeList = productList.filter((prod) => (prod.type == "perfume"));
let cremaList = productList.filter((prod) => (prod.type == "crema"));

export default function ProductList() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col w-full">
        <p>Perfumes</p>
        <div className="flex overflow-x-scroll gap-4 w-4/5 self-center">
          {perfumeList.map((prod, index) => (
            <ProductCard product={prod} key={`perfume_${index}`} />
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <p>Cremas</p>
        <div className="flex overflow-x-scroll gap-4 w-4/5 self-center">
          {cremaList.map((prod, index) => (
            <ProductCard product={prod} key={`crema_${index}`} />
          ))}
        </div>
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
    <div className="bg-slate-400 flex flex-col p-2 listCard w-40">
      <Image src={img.src} alt={img.alt} width={200} height={200} />
      <div>
        <p className="font-bold">{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}
