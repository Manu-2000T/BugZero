import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  console.log("📩 API /api/contact called");

  try {
    const body = await req.json();
    const { name, email, text } = body;

    // Validate input fields
    if (!name || !email || !text) {
      console.warn("⚠️ Missing fields in request body:", body);
      return NextResponse.json(
        { success: false, message: "Missing fields" }, 
        { status: 400 }
      );
    }

    // Additional validation for email format and string lengths
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("⚠️ Invalid email format:", email);
      return NextResponse.json(
        { success: false, message: "Invalid email format" }, 
        { status: 400 }
      );
    }

    if (name.length > 100 || text.length > 1000) {
      console.warn("⚠️ Name or text exceeds allowed length");
      return NextResponse.json(
        { success: false, message: "Name or text exceeds allowed length" },
        { status: 400 }
      );
    }

    // Save message to the database - using correct field names from schema
    const message = await prisma.message.create({
      data: { 
        name, 
        email, 
        text, 
        sender: name,
        // timestamp is automatically set by Prisma default
      },
    });

    console.log("✅ Message saved successfully:", message);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully!",
        data: {
          id: message.id,
          text: message.text,
          sender: message.sender,
          timestamp: message.timestamp,
        },
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    console.error("❌ API Error:", err);

    // Handle Prisma-specific errors
    if (err && typeof err === 'object' && 'code' in err && err.code === "P2002") {
      return NextResponse.json(
        { success: false, message: "Duplicate entry error" },
        { status: 400 }
      );
    }

    const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
    return NextResponse.json(
      { success: false, message: "Server error", error: errorMessage },
      { status: 500 }
    );
  }
}