import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getValueAtIndex = (arr: any[], index: number): any | undefined => {
  const length = arr.length;

  // Normalize negative indices
  if (index < 0) {
    index += length;
  }

  // Check if the index is within bounds
  if (index >= 0 && index < length) {
    return arr[index];
  } else {
    return undefined; // Out of bounds
  }
}

export const scrollToView = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });
  console.log(`Scrolled`);
};