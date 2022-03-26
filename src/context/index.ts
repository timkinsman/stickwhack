import { Work } from '../interfaces';
import { Works } from '../enums';

// assets
import fstarter from '../assets/fstarter.png';
import fringe from '../assets/fringe.png';
import clowngirl from '../assets/clowngirl.png';
import poll from '../assets/poll.png';
import zeppyBig from '../assets/zeppyBig.png';
import ADLF1 from '../assets/ADLF1.png';
import ADLF2 from '../assets/ADLF2.png';
import backzep from '../assets/backzep.png';
import debs from '../assets/debs.png';

export const works: Work[] = [
  {
    id: Works.BRANDING_AND_APPAREL,
    logo: fringe,
    feature: zeppyBig,
    thumbs: [backzep, backzep],
    subfeatures: [backzep, backzep],
    category: 'branding and apparel',
    title: "lucky zep's",
    shortDescription:
      'Lucky Zep’s is a restaurant and bar that focuses on paying homage to retro style, yet appealing to a younger audience.',
    longDescription: [
      'Lucky Zep’s is a restaurant and bar that focuses on paying homage to retro style, yet appealing to a younger audience.',
      'Inspired by Vegas neon signs and retro diners, a logo was created, along with printed merchandise for staff and commercial sale, and an additional simple promo GIF/video for use on their website and socials.',
      'The logo was inspired by the owners dog, Zep. His personailty has been captured through the use of playful illustrations and bright colour.',
    ],
    theme: {
      primary: '#272727',
      secondary: '#000000',
      color: '#FFFFFF',
    },
  },
  {
    id: Works.FRINGE,
    logo: fringe,
    feature: fstarter,
    thumbs: [ADLF1, ADLF2],
    subfeatures: [ADLF1, ADLF2],
    category: 'Adelaide Fringe Festival 2021 poster entry',
    title: 'firestarter',
    shortDescription:
      'Firestarter was a concept for the Adelaide Fringe Festival 2021 poster competiton. The concept represents the Fringe’s role in ‘lighting the fire’ in Adelaide every year.',
    longDescription: [
      '‘Firestarter’ was a concept I created for the Adelaide Fringe Festival 2021 poster competiton. The concept represents the Adelaide Fringe’s role in ‘lighting the fire in Adelaide’ every year by facilitating excitement and culture within the city that is often though of as quite dormant. My entry was voted into the top 40, and was voted for by 100+ people',
      'Apparel that would be available for purchase/staff use was created, as well as additional match boxes as a deliverable, furthering the brand concept.',
    ],
    theme: {
      primary: '#FFE6E6',
      secondary: '#BF1E2E',
      color: '#000000',
    },
  },
  {
    id: Works.BRANDING_AND_STATIONERY,
    logo: fringe,
    feature: fstarter,
    thumbs: [debs, debs],
    subfeatures: [debs, debs],
    title: 'debbie slater',
    category: 'branding and stationery',
    shortDescription:
      'Debbie is an artist and art therapist who was looking for a refresh. We focused on representing her own art and her art therapy processes in the final design.',
    longDescription: [
      'Lucky Zep’s is a restaurant and bar that focuses on paying homage to retro style, yet appealing to a younger audience.',
      'Inspired by Vegas neon signs and retro diners, a logo was created, along with printed merchandise for staff and commercial sale, and an additional simple promo GIF/video for use on their website and socials.',
      'The logo was inspired by the owners dog, Zep. His personailty has been captured through the use of playful illustrations and bright colour.',
    ],
    theme: {
      primary: '#F5F7EC',
      secondary: '#4F5B5B',
      color: '#000000',
    },
  },
  {
    id: Works.ILLUSTRATION_AND_MERCH_DESIGN,
    logo: clowngirl,
    feature: fstarter,
    thumbs: [poll, poll],
    subfeatures: [poll, poll],
    category: 'illustration and merch design',
    title: 'like majima',
    shortDescription:
      'I have created a variety of illustrations and custom typography, with some for future use on apparel or art prints. Some I have also screen printed myself.',
    longDescription: [
      'Lucky Zep’s is a restaurant and bar that focuses on paying homage to retro style, yet appealing to a younger audience.',
      'Inspired by Vegas neon signs and retro diners, a logo was created, along with printed merchandise for staff and commercial sale, and an additional simple promo GIF/video for use on their website and socials.',
      'The logo was inspired by the owners dog, Zep. His personailty has been captured through the use of playful illustrations and bright colour.',
    ],
    theme: {
      primary: '#C9C7FF',
      secondary: '#E5AC8E',
      color: '#000000',
    },
  },
];
