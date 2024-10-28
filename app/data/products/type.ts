export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  type: "perfume" | "crema";
  img: {
    src: string;
    alt: string;
  };
};