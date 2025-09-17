import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

interface Message {
  id: number;
  text: string;
  sender?: string;
  timestamp: string;
}

// In-memory store (not persistent — use a real DB in production)
const messages: Message[] = [];

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    if (!data.text) {
      return NextResponse.json(
        { success: false, message: "Message text is required" },
        { status: 400 }
      );
    }

    const newMessage: Message = {
      id: messages.length + 1,
      text: data.text,
      sender: data.sender || "Anonymous",
      timestamp: new Date().toISOString(),
    };

    messages.push(newMessage);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("POST /messages error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
