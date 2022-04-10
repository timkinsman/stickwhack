import { Work } from '../interfaces';
import { Works } from '../enums';

import logoFringe from '../assets/logos/fringe.png';
import logoBrandingAndApparel from '../assets/logos/brandingApparel.png';
import logoBrandingAndStationery from '../assets/logos/branding.png';
import logoIllustrationAndMerchDesign from '../assets/logos/illustrations.png';

// Branding And Apparel
import zepShirtFront from '../assets/brandingAndApparel/shirtFront.png';
import zepShirtBack from '../assets/brandingAndApparel/shirtBack.png';
import zepFeature from '../assets/brandingAndApparel/feature.png';

// Firestarter
import fringeShirtFront from '../assets/firestarter/shirtFront.png';
import fringeShirtBack from '../assets/firestarter/shirtBack.png';
import fringeFeature from '../assets/firestarter/feature.png';

import pollinate from '../assets/illustrations/pollinate.png';
import rodeo from '../assets/illustrations/rodeo.png';
// import rodeoTote from '../assets/illustrations/rodeoTote.png';
import phoneRed from '../assets/illustrations/phoneRed.png';
import phoneYellow from '../assets/illustrations/phoneYellow.png';
import frenchPress from '../assets/illustrations/frenchPress.png';
import sumo from '../assets/illustrations/sumo.png';
// import burntOut from '../assets/illustrations/burntOut.png';
import burntOutRed from '../assets/illustrations/burntOutRed.png';

export const works: Work[] = [
  {
    id: Works.BRANDING_AND_APPAREL,
    logo: logoBrandingAndApparel,
    feature: zepFeature,
    carouselImages: [zepShirtFront, zepShirtBack],
    subFeatures: [zepShirtFront, zepShirtBack],
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
    logo: logoFringe,
    feature: fringeFeature,
    carouselImages: [fringeShirtFront, fringeShirtBack],
    subFeatures: [fringeShirtFront, fringeShirtBack],
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
    logo: logoBrandingAndStationery,
    feature: '',
    carouselImages: [''],
    subFeatures: [''],
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
    logo: logoIllustrationAndMerchDesign,
    feature: pollinate,
    carouselImages: [pollinate, rodeo, phoneRed, phoneYellow, frenchPress, sumo, burntOutRed],
    subFeatures: [rodeo, phoneRed, phoneYellow, frenchPress, sumo, burntOutRed],
    category: 'illustration and merch design',
    title: 'illustrations',
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
