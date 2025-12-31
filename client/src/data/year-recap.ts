import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface MonthData {
  id: string;
  month: string;
  memory: string;
  quote: string;
  image?: string; // Optional URL for the image
}

export const yearData: MonthData[] = [
  {
    id: "jan",
    month: "January",
    memory: "The start of our beautiful journey this year.",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    id: "feb",
    month: "February",
    memory: "Celebrating love in the shortest, sweetest month.",
    quote: "I love you not only for what you are, but for what I am when I am with you.",
  },
  {
    id: "mar",
    month: "March",
    memory: "As spring arrived, our love bloomed even more.",
    quote: "You are my sun, my moon, and all my stars.",
  },
  {
    id: "apr",
    month: "April",
    memory: "Rainy days and cozy nights together.",
    quote: "In all the world, there is no heart for me like yours.",
  },
  {
    id: "may",
    month: "May",
    memory: "Adventures and laughter under the sun.",
    quote: "If I had a flower for every time I thought of you, I could walk through my garden forever.",
  },
  {
    id: "jun",
    month: "June",
    memory: "Halfway through the year, and I love you more than ever.",
    quote: "I look at you and see the rest of my life in front of my eyes.",
  },
  {
    id: "jul",
    month: "July",
    memory: "Warm summer nights and starry skies.",
    quote: "I want to be with you until the sun falls from the sky.",
  },
  {
    id: "aug",
    month: "August",
    memory: "Making memories that will last a lifetime.",
    quote: "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.",
  },
  {
    id: "sep",
    month: "September",
    memory: "The leaves changed, but my feelings for you never will.",
    quote: "My heart is and always will be yours.",
  },
  {
    id: "oct",
    month: "October",
    memory: "Pumpkin spice and everything nice with you.",
    quote: "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
  },
  {
    id: "nov",
    month: "November",
    memory: "Thankful for you, every single day.",
    quote: "It was love at first sight, at last sight, at ever and ever sight.",
  },
  {
    id: "dec",
    month: "December",
    memory: "Ending the year wrapped in your arms.",
    quote: "The best thing to hold onto in life is each other.",
  },
];

export const outroData = {
  title: "To Forever",
  message: "This year has been magical because of you. I can't wait to see what the next chapter holds for us. Happy New Year, my love.",
};
