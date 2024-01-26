export interface NasaImage {
  data: Array<{
    title: string;
    description: string;
    secondary_creator: string;
    nasa_id: string;
  }>;
  links: Array<{ href: string }>;
}

export interface Image {
  url: string;
  title: string;
  description: string;
  colludingWith?: string[];
}

export interface ImagePosition {
  left: number;
  top: number;
  right: number;
  bottom: number;
  height: number;
  width: number;
  url: string;
}

export type SearchTerm =
  | "moon"
  | "earth"
  | "jupiter"
  | "saturn"
  | "pluto"
  | "mars"
  | "venus";

export type GuessResult = true | false | undefined;

export type ImagePair = [Image, Image];
