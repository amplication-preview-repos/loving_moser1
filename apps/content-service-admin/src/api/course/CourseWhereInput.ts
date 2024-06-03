import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LessonListRelationFilter } from "../lesson/LessonListRelationFilter";

export type CourseWhereInput = {
  author?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  lessons?: LessonListRelationFilter;
  title?: StringNullableFilter;
};
