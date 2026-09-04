import { NextResponse } from "next/server";
import { resume } from "@/app/data/Data";

export function GET() {
  return NextResponse.redirect(resume.link, {
    status: 302,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
