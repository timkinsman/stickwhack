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
  logo: string;
  feature: string;
  subfeatures: string[];
  thumbs: string[];
  title: string;
  desc: string;
  left: string;
  right: string;
  color: string;
  category: string;
  longDesc: string[];
}
