import { Work } from "../interfaces";
import fstarter from "../assets/fstarter.png";
import sumo from "../assets/sumo.jpg";
import fingers from "../assets/fingers.jpg";
import sunscreen from "../assets/sunscreen.jpg"
import frodeo from "../assets/frodeo.jpg"
import frodeotote from "../assets/frodeotote.jpg"

import stickernew from "../assets/new.png";
// import stickersmiley from "../assets/smiley.png";
// import stickerwip from "../assets/wip.png";
import stickerwipblue from "../assets/wipblue.png";

enum workTypes {
    fstarter,
    sumo,
    fingers,
    sunscreen,
    frodeo
}

export const works: Work[] = [
    {
        id: workTypes.fstarter,
        thumbnail: fstarter,
        heading: "ADELAIDE FRINGE FESTIVAL",
        subheading: "2021 Poster Entry",
        brief: "Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.",
        description: "",
        images: [fstarter, fstarter]
    },
    {
        id: workTypes.sumo,
        thumbnail: sumo,
        stickers: [{
            image: stickernew,
            bottom: -10,
            left: 0,
            rotate: -25
        }],
        heading: "SUMO OUMO",
        subheading: "yummy",
        brief: "Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.",
        description: "",
        images: [sumo, sumo]
    },
    {
        id: workTypes.fingers,
        thumbnail: fingers,
        stickers: [{
            image: stickerwipblue,
            top: -50,
            left: -50,
            rotate: -10
        }],
        heading: "fingers OUMO",
        subheading: "yummy",
        brief: "Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.",
        description: "",
        images: [fingers, fingers]
    },
    {
        id: workTypes.sunscreen,
        thumbnail: sunscreen,
        margin: "0 0 0 30px",
        heading: "sunscreen OUMO",
        subheading: "yummy",
        brief: "Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.",
        description: "",
        images: [sunscreen, sunscreen]
    },
    {
        id: workTypes.frodeo,
        thumbnail: frodeo,
        heading: "FRODEO",
        subheading: "yummy",
        brief: "Mauris posuere auctor lobortis. Pellentesque pellentesque scelerisque libero, sed mollis tellus scelerisque consectetur. Donec dictum arcu sed odio venenatis volutpat. Vestibulum mattis vehicula ultrices. Aenean vitae odio vulputate, tempor leo ut, convallis magna. In hendrerit nec mauris sit amet ornare.",
        description: "",
        images: [frodeo, frodeotote]
    }
]