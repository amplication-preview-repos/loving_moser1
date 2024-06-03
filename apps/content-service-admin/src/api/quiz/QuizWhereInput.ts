import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type QuizWhereInput = {
  id?: StringFilter;
  questions?: StringNullableFilter;
  title?: StringNullableFilter;
};
