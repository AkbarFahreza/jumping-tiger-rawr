import { NextResponse } from "next/server";

const items = [
  {
    data: [
      {
        id: 1,
        name: "Nanami Chia",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700558447/FzFnjyUagAA1PCz_lpde9y.jpg",
        sourceLink: "https://x.com/Revernry/status/1671230836610572289?s=20",
        ytLink: "https://www.youtube.com/@NanamiChia",
        xLink: "https://twitter.com/NanamiChia13RP",
        category: "commission",
        Datecreated: "June 2023",
      },
      {
        id: 2,
        name: "Nekonyan Aimi",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700558869/FzYyB61akAAJB-v_b3uisg.jpg",
        sourceLink: "https://x.com/Revernry/status/1672579350674444288?s=20",
        ytLink: "https://www.youtube.com/@nekonyanaimi",
        xLink: "https://twitter.com/NekonyanAimi",
        category: "commission",
        Datecreated: "June 2023",
      },
      {
        id: 3,
        name: "DYMAX",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559109/F0uoR6paYAAoOpU_e0bzbj.jpg",
        sourceLink: "https://x.com/Revernry/status/1678620351830568960?s=20",
        ytLink: "https://www.youtube.com/@DYMAXVtuber",
        xLink: "https://twitter.com/DYMAXVtuber",
        category: "commission",
        Datecreated: "July 2023",
      },
      {
        id: 4,
        name: "Narumi Eiko",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559599/F1JBHMWaUAETYD2_ycojzs.jpg",
        sourceLink: "https://x.com/Revernry/status/1680477239748755456?s=20",
        ytLink: "https://www.youtube.com/@NarumiEiko",
        xLink: "https://twitter.com/NarumiEiko",
        category: "commission",
        Datecreated: "July 2023",
      },
      {
        id: 5,
        name: "Aisu Rain",
        image:
          "https://pbs.twimg.com/media/F14c4mraEAAyu_h?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1683815123906097155?s=20",
        ytLink: "https://www.youtube.com/@Aisu_rain",
        xLink: "https://twitter.com/aisu_rain",
        category: "commission",
        Datecreated: "July 2023",
      },
      {
        id: 6,
        name: "Winter Gea",
        image:
          "https://pbs.twimg.com/media/F2hs-FzakAAAjiU?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1686717913271554048?s=20",
        ytLink: "https://www.youtube.com/@wintergea",
        xLink: "https://twitter.com/wintergea",
        category: "commission",
        Datecreated: "August 2023",
      },
      // {
      //   id: 5,
      //   name: "",
      //   image: "",
      //   sourceLink: "",
      //   ytLink: "",
      //   xLink: "",
      //   category: "commission",
      //   Datecreated: "",
      // },
      // Add more items as needed
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(items);
}
