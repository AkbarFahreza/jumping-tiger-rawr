import { NextResponse } from "next/server";

const items = [
  {
    id: 1,
    source_link: "https://x.com/Revernry/status/1705077641546707234?s=20",
    image:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700493277/Frame_1_22_1_qqelap.png",
    name: "Selene Aria",
    latest: false,
  },
  {
    id: 2,
    source_link: "https://x.com/Revernry/status/1707010711703138495?s=20",
    image:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700493353/Frame_11_8_2_aee1zb.png",
    name: "Celine Leonhart",
    latest: false,
  },
  {
    id: 3,
    source_link: "https://x.com/Revernry/status/1704770531973808208?s=20",
    image:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700494686/Frame_5_22_px9hsg.png",
    name: "Taki Takahiro",
    latest: false,
  },
];

export async function GET(request) {
  return NextResponse.json(items);
}
