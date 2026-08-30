import { units13 } from "./content1";
import { units46 } from "./content2";
import type { Unit, Lesson } from "./types";

export const UNITS: Unit[] = [...units13, ...units46];

export const ALL_LESSONS: { unit: Unit; lesson: Lesson }[] = UNITS.flatMap(
  (unit) => unit.lessons.map((lesson) => ({ unit, lesson })),
);

export function findLesson(id: string) {
  return ALL_LESSONS.find((l) => l.lesson.id === id);
}

export const TOTAL_LESSONS = ALL_LESSONS.length;
