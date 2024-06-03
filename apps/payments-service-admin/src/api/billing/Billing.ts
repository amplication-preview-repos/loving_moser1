export type Billing = {
  address: string | null;
  createdAt: Date;
  id: string;
  paymentMethod?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
