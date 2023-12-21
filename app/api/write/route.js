import { NextResponse } from "next/server";

const guide = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700495783/F7Ja4TEasAEcAPv_q2bvmy.jpg",
    title: "The differences between basic and full package",
    desc: "Some of you still confusing what is the difference between basic and full package",
    write_by: "Dek Reza",
    source_link: "https://x.com/Revernry/status/1707527886440403075?s=20",
  },
];

export async function GET(request) {
  return NextResponse.json(guide);
}
