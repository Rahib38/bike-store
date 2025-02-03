export type Bike = {
  name: string;
  brand: string;
  image?: string;
  price: number;
  category: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  description: string;
  quantity: number;
  inStock?: boolean;
};
