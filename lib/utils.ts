import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateTime: number): string => {
  const date = new Date(Number(dateTime));
  // Format the date using date-fns
  return format(date, "MMM dd, yyyy");
};

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
