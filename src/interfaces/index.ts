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
  thumbnail: string;
  stickers?: Sticker[];
  margin?: string;
  heading: string;
  subheading: string;
  brief: string;
  description: string;
  images: string[];
}
