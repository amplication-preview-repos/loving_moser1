import { SortOrder } from "../../util/SortOrder";

export type QuizOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questions?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
