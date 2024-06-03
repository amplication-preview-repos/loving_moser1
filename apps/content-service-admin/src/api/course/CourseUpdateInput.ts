import { LessonUpdateManyWithoutCoursesInput } from "./LessonUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  author?: string | null;
  description?: string | null;
  lessons?: LessonUpdateManyWithoutCoursesInput;
  title?: string | null;
};
