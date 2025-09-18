import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Received:", body);

    // Save to DB
    const saved = await prisma.message.create({
      data: {
        name: body.name,
        email: body.email,
        text: body.text,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Saved successfully!",
      contact: saved,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, message: "Error occurred" },
      { status: 500 }
    );
  }
}
