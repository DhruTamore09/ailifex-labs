import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "messages.json");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ messages: [] }, { status: 200 });
    }

    const raw = fs.readFileSync(filePath, "utf-8");
    const messages = JSON.parse(raw);

    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error("GET /api/messages error:", error);
    return NextResponse.json({ error: "Failed to load messages" }, { status: 500 });
  }
}
