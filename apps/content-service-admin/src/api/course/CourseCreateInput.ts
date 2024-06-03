import { LessonCreateNestedManyWithoutCoursesInput } from "./LessonCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  author?: string | null;
  description?: string | null;
  lessons?: LessonCreateNestedManyWithoutCoursesInput;
  title?: string | null;
};
