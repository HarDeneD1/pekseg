import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../client";
import { Product } from "@prisma/client";

export async function POST(req: NextRequest, res: Response) {
  try {
    const body: Product = await req.json();

    if (!body) {
      return NextResponse.json({ message: "Empty body" }, { status: 200 });
    }

    const res = await prisma.product.create({ data: body });

    if (!res) {
      return NextResponse.json(
        { message: "Error creating product" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Product successfully created" },
      { status: 200 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Error: " + e }, { status: 500 });
  }
}
