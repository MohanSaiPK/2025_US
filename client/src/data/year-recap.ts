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
  imageId: string; // Cloudinary public ID
}

export const yearData: MonthData[] = [
  {
    id: "jan",
    month: "January",
    imageId: "v1767194247/IMG_2141_mx6ma0.heic",
    memory: "The start of our beautiful journey this year.",
    quote: "Every love story is beautiful, but ours is my favorite.",
  },
  {
    id: "feb",
    month: "February",
    imageId: "v1767194244/Feb_t8fbpz.heic",
    memory: "Celebrating love in the shortest, sweetest month.",
    quote:
      "I love you not only for what you are, but for what I am when I am with you.",
  },
  {
    id: "mar",
    month: "March",
    imageId: "v1767194248/March_ttf9ek.heic",
    memory: "As spring arrived, our love bloomed even more.",
    quote: "You are my sun, my moon, and all my stars.",
  },
  {
    id: "apr",
    month: "April",
    imageId: "v1767194243/Apr_o8sthq.heic",
    memory: "Rainy days and cozy nights together.",
    quote: "In all the world, there is no heart for me like yours.",
  },
  {
    id: "may",
    month: "May",
    imageId: "v1767194247/May_vvbhtf.heic",
    memory: "Adventures and laughter under the sun.",
    quote:
      "If I had a flower for every time I thought of you, I could walk through my garden forever.",
  },
  {
    id: "jun",
    month: "June",
    imageId: "v1767194246/June_w3c0de.heic",
    memory: "Halfway through the year, and I love you more than ever.",
    quote: "I look at you and see the rest of my life in front of my eyes.",
  },
  {
    id: "jul",
    month: "July",
    imageId: "v1767194246/July_gslubc.heic",
    memory: "Warm summer nights and starry skies.",
    quote: "I want to be with you until the sun falls from the sky.",
  },
  {
    id: "aug",
    month: "August",
    imageId: "v1767194244/Aug_vxdu2n.heic",
    memory: "Making memories that will last a lifetime.",
    quote:
      "You are the finest, loveliest, tenderest, and most beautiful person I have ever known.",
  },
  {
    id: "sep",
    month: "September",
    imageId: "v1767194250/Sep_kuxsqg.heic",
    memory: "The leaves changed, but my feelings for you never will.",
    quote: "My heart is and always will be yours.",
  },
  {
    id: "oct",
    month: "October",
    imageId: "v1767194249/Oct_jwx8xt.heic",
    memory: "Pumpkin spice and everything nice with you.",
    quote:
      "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
  },
  {
    id: "nov",
    month: "November",
    imageId: "v1767194250/Nov_feztqc.heic",
    memory: "Thankful for you, every single day.",
    quote: "It was love at first sight, at last sight, at ever and ever sight.",
  },
  {
    id: "dec",
    month: "December",
    imageId: "v1767194243/Dec_trppge.heic",
    memory: "Ending the year wrapped in your arms.",
    quote: "The best thing to hold onto in life is each other.",
  },
];

export const outroData = {
  title: "To Forever",
  message:
    "This year has been magical because of you. I can't wait to see what the next chapter holds for us. Happy New Year, my love.",
};
