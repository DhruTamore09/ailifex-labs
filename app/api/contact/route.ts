import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

interface ContactMessage {
  id: string;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message: string;
}

/**
 * 100% Open-Source Lead & Contact Dispatch Route
 * - Stores all inquiries into local filesystem (data/messages.json)
 * - Sends automated emails using standard open-source Nodemailer (SMTP protocol)
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, role, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      timestamp: new Date().toISOString(),
      firstName,
      lastName,
      email,
      company,
      role: role || "Not specified",
      message: message || "No message content",
    };

    // 1. OPEN-SOURCE LOCAL FILE STORAGE (data/messages.json)
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "messages.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let messages: ContactMessage[] = [];
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, "utf-8");
        messages = JSON.parse(raw);
      } catch {
        messages = [];
      }
    }

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

    // 2. OPEN-SOURCE SMTP EMAIL DISPATCH (Nodemailer)
    const targetEmail = process.env.NOTIFICATION_EMAIL || "info.ailifexlabs@gmail.com";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: { user: smtpUser, pass: smtpPass },
        });

        await transporter.sendMail({
          from: `"AILifeX Labs Website" <${smtpUser}>`,
          to: targetEmail,
          replyTo: email,
          subject: `New Lead Inquiry from ${firstName} ${lastName} (${company})`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e8e4f4; border-radius: 12px;">
              <h2 style="color: #6c3fc5; margin-bottom: 16px;">New AILifeX Labs Contact Inquiry</h2>
              <hr style="border: 0; border-top: 1px solid #e8e4f4; margin-bottom: 20px;" />
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Company:</strong> ${company}</p>
              <p><strong>Role:</strong> ${role || "Not specified"}</p>
              <div style="background: #f5f0ff; padding: 15px; border-radius: 8px; margin-top: 15px;">
                <p style="margin: 0; font-weight: bold; color: #4e27c3;">Message:</p>
                <p style="margin-top: 8px; white-space: pre-wrap; color: #333;">${message || "No message content"}</p>
              </div>
              <p style="font-size: 12px; color: #888; margin-top: 24px;">Received at ${new Date().toLocaleString()}</p>
            </div>
          `,
        });
      } catch (err) {
        console.error("Open-source Nodemailer SMTP error:", err);
      }
    } else {
      console.log(`[Open-Source Handler] Lead logged to data/messages.json. Add SMTP_USER & SMTP_PASS to .env.local to send SMTP email to ${targetEmail}.`);
    }

    return NextResponse.json(
      {
        success: true,
        id: newMessage.id,
        targetEmail,
        message: "Message saved to open-source database and dispatched via Nodemailer SMTP.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
