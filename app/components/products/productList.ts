export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: {
    src: string;
    alt: string;
  };
};

export const productList: Product[] = [
  {
    id: 1,
    name: "Perfume",
    description: "Descripcion perfume",
    img: {
      src: "/imgs/img_perfume.png",
      alt: "Perfume en venta",
    },
    price: 10,
  },
  {
    id: 2,
    name: "Crema",
    description: "Descripcion crema",
    img: {
      src: "/imgs/img_crema.jpg",
      alt: "Crema en venta",
    },
    price: 15,
  },{
    id: 1,
    name: "Perfume",
    description: "Descripcion perfume",
    img: {
      src: "/imgs/img_perfume.png",
      alt: "Perfume en venta",
    },
    price: 10,
  },
  {
    id: 2,
    name: "Crema",
    description: "Descripcion crema",
    img: {
      src: "/imgs/img_crema.jpg",
      alt: "Crema en venta",
    },
    price: 15,
  },{
    id: 1,
    name: "Perfume",
    description: "Descripcion perfume",
    img: {
      src: "/imgs/img_perfume.png",
      alt: "Perfume en venta",
    },
    price: 10,
  },
  {
    id: 2,
    name: "Crema",
    description: "Descripcion crema",
    img: {
      src: "/imgs/img_crema.jpg",
      alt: "Crema en venta",
    },
    price: 15,
  },{
    id: 1,
    name: "Perfume",
    description: "Descripcion perfume",
    img: {
      src: "/imgs/img_perfume.png",
      alt: "Perfume en venta",
    },
    price: 10,
  },
  {
    id: 2,
    name: "Crema",
    description: "Descripcion crema",
    img: {
      src: "/imgs/img_crema.jpg",
      alt: "Crema en venta",
    },
    price: 15,
  },
];
