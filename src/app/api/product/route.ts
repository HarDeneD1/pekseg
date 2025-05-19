import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../client";
import { Product } from "@prisma/client";

export async function POST(req: NextRequest) {
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

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json({ message: "No query found" }, { status: 404 });
    }

    const data = query.trim();

    const res = await prisma.product.findMany({
      where: {
        name: {
          contains: data,
          mode: "insensitive",
        },
      },
    });

    if (!res) {
      return NextResponse.json(
        { message: "Error finding product" },
        { status: 404 },
      );
    }
    if (res.length === 0) {
      return NextResponse.json({ res: null }, { status: 404 });
    }

    return NextResponse.json({ res }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Error query product: " + e },
      { status: 500 },
    );
  }
}
