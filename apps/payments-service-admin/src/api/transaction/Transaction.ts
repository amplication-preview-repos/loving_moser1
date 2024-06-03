export type Transaction = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user: string | null;
};
