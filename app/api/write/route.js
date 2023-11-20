import { NextResponse } from "next/server";

const guide = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700495783/F7Ja4TEasAEcAPv_q2bvmy.jpg",
    title: "The differences between basic and full package",
    desc: "Hello everyone, here i will give you the simple Sample of the differences between basic and full package is i dont know",
    write_by: "Dek Reza",
    source_link: "https://x.com/Revernry/status/1707527886440403075?s=20",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700496892/Frame_31_2_njjqof.png",
    title: "How to remove the heart icon on livechat",
    desc: "Hello everyone, here i will give you the simple code to remove hearth icon on livechat",
    source_link: "https://x.com/Revenry",
  },
];

export async function GET(request) {
  return NextResponse.json(guide);
}
