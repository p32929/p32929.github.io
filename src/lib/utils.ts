import { combinedInformation } from "@/lib/DynamicValues";
import { ICombinedInformation } from "@/lib/Models";
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

export const isLinkString = (url: string) => {
  const linkStrings = ["http", "skype:", "mailto:"];

  for (var i = 0; i < linkStrings.length; i++) {
    if (
      (url ?? "").toString().toLowerCase().includes(linkStrings[i])
    ) {
      return true;
    }
  }

  return false;
};

export const getRandomLink = (): string | null => {
  const allLinks: string[] = [];

  // Collect links from directMessageItems
  combinedInformation.directMessageItems.forEach(item => {
    if (isLinkString(item.link)) {
      allLinks.push(item.link);
    }
  });

  // Helper function to collect links recursively from nested items
  const collectLinks = (items: any[]) => {
    items.forEach(item => {
      if (item.link && isLinkString(item.link)) {
        allLinks.push(item.link);
      }
      if (item.arr) {
        collectLinks(item.arr);
      }
    });
  };

  // Collect links from routes
  combinedInformation.routes.forEach(route => {
    collectLinks(route.items);
  });

  // Return a random link from the collected links
  if (allLinks.length > 0) {
    const randomIndex = Math.floor(Math.random() * allLinks.length);
    return allLinks[randomIndex];
  } else {
    return null; // Return null if no links are found
  }
};