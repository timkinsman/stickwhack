export interface Work {
    id: number;
    thumbnail: string;
    stickers?: {
        image: string; 
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
        rotate?: number;
    }[],
    margin?: string;
    heading: string;
    subheading: string;
    brief: string;
    description: string;
    images: string[];
}