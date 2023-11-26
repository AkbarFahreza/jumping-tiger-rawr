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
        category: "YT Chat Commissions",
        Datecreated: "June 2023",
      },
      {
        id: 2,
        name: "Nekonyan Aimi",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700558869/FzYyB61akAAJB-v_b3uisg.jpg",
        sourceLink: "https://x.com/Revernry/status/1672579350674444288?s=20",
        category: "YT Chat Commissions",
        Datecreated: "June 2023",
      },
      {
        id: 3,
        name: "DYMAX",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559109/F0uoR6paYAAoOpU_e0bzbj.jpg",
        sourceLink: "https://x.com/Revernry/status/1678620351830568960?s=20",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 4,
        name: "Narumi Eiko",
        image:
          "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700559599/F1JBHMWaUAETYD2_ycojzs.jpg",
        sourceLink: "https://x.com/Revernry/status/1680477239748755456?s=20",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 5,
        name: "Aisu Rain",
        image:
          "https://pbs.twimg.com/media/F14c4mraEAAyu_h?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1683815123906097155?s=20",
        ytLink: "https://www.youtube.com/@Aisu_rain",
        category: "YT Chat Commissions",
        Datecreated: "July 2023",
      },
      {
        id: 6,
        name: "Winter Gea",
        image:
          "https://pbs.twimg.com/media/F2hs-FzakAAAjiU?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1686717913271554048?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 7,
        name: "Castella Eri",
        image:
          "https://pbs.twimg.com/media/F2q0JjtbwAAyyiG?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1687359118053662720?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 8,
        name: "Ade Deviela Ch",
        image:
          "https://pbs.twimg.com/media/F3aFwAKbYAAUdm8?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1690685799514431488?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 9,
        name: "Mahiru Rui",
        image:
          "https://pbs.twimg.com/media/F4g2arOasAAZPoo?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1695665154455970240?s=20",
        category: "YT Chat Commissions",
        Datecreated: "August 2023",
      },
      {
        id: 10,
        name: "Yukari Blackheart Ch.",
        image:
          "https://pbs.twimg.com/media/F6CbRMWbEAAYqjD?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1702531433225670664?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 11,
        name: " Taki Takahiro ",
        image:
          "https://pbs.twimg.com/media/F6iPu5oaYAAjPSz?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1704770531973808208?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 12,
        name: "Selene Aria",
        image:
          "https://pbs.twimg.com/media/F6mnBoea0AAmOL0?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1705077641546707234?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 13,
        name: "Céline Leonhart",
        image:
          "https://pbs.twimg.com/media/F7CFKOFaUAAU32d?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1707010711703138495?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 14,
        name: "Ayana Shan Elise Ch.",
        image:
          "https://pbs.twimg.com/media/F7GPGu0b0AAc5dW?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1707303127890936284?s=20",
        category: "YT Chat Commissions",
        Datecreated: "September 2023",
      },
      {
        id: 15,
        name: "Seina Ginevra Ch.",
        image:
          "https://pbs.twimg.com/media/F8eoN7Ya0AAp3fD?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1713523180261048648?s=20",
        category: "YT Chat Commissions",
        Datecreated: "Oktober 2023",
      },
      {
        id: 16,
        name: "Eliza Hemlock Ch.",
        image:
          "https://pbs.twimg.com/media/F9NAF2HaAAAe2on?format=jpg&name=medium",
        sourceLink: "https://x.com/Revernry/status/1716786883265806588?s=20",
        category: "YT Chat Commissions",
        Datecreated: "Oktober 2023",
      },

      // {
      //   id: 5,
      //   name: "",
      //   image: "",
      //   sourceLink: "",
      //   category: "YT Chat Commissions",
      //   Datecreated: "",
      // },
      // Add more items as needed
    ],
  },
];

export async function GET(request) {
  return NextResponse.json(items);
}
