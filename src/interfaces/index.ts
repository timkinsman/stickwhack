export interface Sticker {
  image: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  rotate?: number;
}

export interface Work {
  id: number;
  thumbnail?: string;
  stickers?: Sticker[];
  margin?: string;
  heading?: string;
  subheading?: string;
  brief?: string;
  description?: string;
  images?: string[];
}

export interface ShowCase {
  id: number;
  logo: string;
  thumbs: string[];
  title: string;
  desc: string;
  left: string;
  right: string;
  color: string;
}