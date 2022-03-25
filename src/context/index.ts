import { Work } from '../interfaces';
import fstarter from '../assets/fstarter.png';
import sumo from '../assets/sumo.jpg';
import fingers from '../assets/fingers.jpg';
import sunscreen from '../assets/sunscreen.jpg';
import frodeo from '../assets/frodeo.jpg';
import frodeotote from '../assets/frodeotote.jpg';
import wolga from '../assets/wolga.png';
import unecoller from '../assets/unecoller.jpg';
import cherrypickers from '../assets/cherrypickers.jpg';

import stickernew from '../assets/new.png';
import stickerwipblue from '../assets/wipblue.png';
// import stickersmiley from "../assets/smiley.png";
// import stickerwip from "../assets/wip.png";

export const works: Work[] = [
  {
    id: 0,
    thumbnail: fstarter,
    margin: '0 125px 0 0',
    heading: 'ADELAIDE FRINGE FESTIVAL',
    subheading: '2021 Poster Entry',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [fstarter],
  },
  {
    id: 1,
    thumbnail: sumo,
    stickers: [
      {
        image: stickernew,
        bottom: -10,
        left: 0,
        rotate: -25,
      },
    ],
    heading: 'SUMO OUMO',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [sumo],
  },
  {
    id: 2,
    thumbnail: fingers,
    margin: '50px 0 0 0',
    stickers: [
      {
        image: stickerwipblue,
        top: -50,
        left: -50,
        rotate: -10,
      },
    ],
    heading: 'fingers OUMO',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [fingers],
  },
  {
    id: 3,
    thumbnail: sunscreen,
    margin: '0 0 0 150px',
    heading: 'sunscreen OUMO',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [sunscreen],
  },
  {
    id: 4,
    thumbnail: frodeo,
    heading: 'FRODEO',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [frodeo, frodeotote],
  },
  {
    id: 5,
    thumbnail: wolga,
    margin: '0 175px 0 0',
    heading: 'wolga',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [wolga],
  },
  {
    id: 6,
    thumbnail: unecoller,
    margin: '0 25px 0 10px',
    heading: 'unecoller',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [unecoller],
  },
  {
    id: 7,
    thumbnail: cherrypickers,
    stickers: [
      {
        image: stickerwipblue,
        top: 0,
        right: 110,
        rotate: -10,
        width: '175px',
      },
      {
        image: stickernew,
        top: -40,
        right: 240,
        rotate: 20,
        width: '175px',
      },
    ],
    heading: 'cherrypickers',
    subheading: 'yummy',
    brief:
      'Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.',
    description: '',
    images: [cherrypickers],
  },
];
