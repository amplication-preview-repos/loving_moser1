import { SortOrder } from "../../util/SortOrder";

export type BillingOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  paymentMethod?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
