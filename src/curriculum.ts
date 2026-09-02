import { units13 } from "./content1";
import { units46 } from "./content2";
import { karpathyUnit } from "./karpathy";
import { agentsDeepUnit } from "./agentsDeep";
import type { Unit, Lesson } from "./types";

export const UNITS: Unit[] = [
  units13[0],
  units13[1],
  karpathyUnit,
  units13[2],
  units46[0],
  agentsDeepUnit,
  units46[1],
  units46[2],
];

export const ALL_LESSONS: { unit: Unit; lesson: Lesson }[] = UNITS.flatMap(
  (unit) => unit.lessons.map((lesson) => ({ unit, lesson })),
);

export function findLesson(id: string) {
  return ALL_LESSONS.find((l) => l.lesson.id === id);
}

export const TOTAL_LESSONS = ALL_LESSONS.length;
