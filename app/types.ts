export type CustomImage = {
  src: string;
  alt: string;
};

export type Service = {
  id: number;
  name: string;
  description: string;
  price: number;
  img: CustomImage;
};

export type Member = {
  id: number;
  name: string;
  description: string;
  img: CustomImage;
};
