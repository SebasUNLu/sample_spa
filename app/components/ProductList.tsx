import Image from "next/image";
import { productList } from "../data/products/productList";
import { Product } from "../data/products/type";

let perfumeList = productList.filter((prod) => prod.type == "perfume");
let cremaList = productList.filter((prod) => prod.type == "crema");

export default function ProductList() {
  return (
    <div className="w-full flex flex-col gap-8">
      <DivList title="Perfumes" list={perfumeList} />
      <DivList title="Cremas" list={cremaList} />
    </div>
  );
}

function DivList({ title, list }: { title: string; list: Product[] }) {
  return (
    <div className="flex flex-col w-full">
      <p className="text-3xl">{title}</p>
      <div className="flex gap-4 w-4/5">
        {list.map((prod, index) => (
          <ProductCard product={prod} key={`perfume_${index}`} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
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
