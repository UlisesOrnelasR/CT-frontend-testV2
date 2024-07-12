import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = string | undefined | null | { [className: string]: any };

export function cn(...inputs: ClassValue[]): string {
  const filteredInputs = inputs.filter(Boolean);

  const classString = clsx(filteredInputs);

  return twMerge(classString);
}
