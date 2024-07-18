import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ClassValue = string | undefined | null | { [className: string]: any };

export function cn(...inputs: ClassValue[]): string {
  const filteredInputs = inputs.filter(Boolean);

  const classString = clsx(filteredInputs);

  return twMerge(classString);
}

export const formatDateOfBirth = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export const getAssetUrl = (path: string) => {
  const baseUrl = import.meta.env.BASE_URL;
  return `${baseUrl}${path}`;
};
