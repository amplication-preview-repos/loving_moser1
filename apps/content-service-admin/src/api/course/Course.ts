import { Lesson } from "../lesson/Lesson";

export type Course = {
  author: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  lessons?: Array<Lesson>;
  title: string | null;
  updatedAt: Date;
};
