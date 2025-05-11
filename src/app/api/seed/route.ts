import { prisma } from "@/lib/client";
import { NextResponse } from "next/server";

export async function POST() {
  const res = await prisma.categories.create({
    data: {
      name: "alma",
    },
  });
}

export async function GET() {
  const res = await prisma.categories.create({
    data: {
      name: "almad11",
    },
  });
  return NextResponse.json(res);
}
