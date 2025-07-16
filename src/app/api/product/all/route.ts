import { prisma } from "../../../../../client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res =
      await prisma.$queryRaw`SELECT * FROM "Product" ORDER BY RANDOM() LIMIT 10`;

    if (!res) {
      return NextResponse.json({ res }, { status: 404 });
    }

    return NextResponse.json({ res }, { status: 200 });
  } catch (err) {
    console.error(err);

    return NextResponse.json({ err }, { status: 500 });
  }
}
