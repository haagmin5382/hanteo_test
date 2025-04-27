import { NextRequest, NextResponse } from "next/server";
import songs from "./data.json";
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const offset = parseInt(searchParams.get("offset") ?? "0", 10); // 10진수로 파싱
  const limit = parseInt(searchParams.get("limit") ?? "20", 10); // 10진수로 파싱

  const data = songs.slice(offset, offset + limit);
  const total = songs.length;

  return NextResponse.json({ data, total });
}
