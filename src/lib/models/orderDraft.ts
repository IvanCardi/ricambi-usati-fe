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
  info?: {
    firstName: string;
    lastName: string;
    email: string;
    details?: string;
    address: {
      streetName: string;
      streetName2?: string;
      city?: string;
      country: string;
      province?: string;
      administrativeArea?: string;
      dependentLocality?: string;
      postalCode?: string;
    };
  };
};
