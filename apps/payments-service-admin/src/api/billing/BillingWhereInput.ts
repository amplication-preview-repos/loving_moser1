import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BillingWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  user?: StringNullableFilter;
};
