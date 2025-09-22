import "dotenv/config";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Service role key (server only)
);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Insert into Supabase table
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          full_name: body.name,
          email: body.email,
          message: body.text,
        },
      ]);

    if (error) throw error;

    return NextResponse.json({
      success: true,
      message: "Saved successfully!",
    });
  } catch (error: any) {
    console.error("Error inserting into Supabase:", error.message || error);
    return NextResponse.json(
      { success: false, message: "Error occurred", error: error.message },
      { status: 500 }
    );
  }
}
