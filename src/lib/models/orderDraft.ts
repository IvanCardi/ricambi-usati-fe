export type OrderDraft = {
  id: string;
  products: {
    id: string;
    name: string;
    photo: string;
    description: string;
    price: number;
    discountedPrice?: number;
  }[];
  totalProductsPrice: number;
  shippingCosts: number;
};
