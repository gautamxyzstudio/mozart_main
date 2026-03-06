import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface NewsletterData {
  email: string;
}

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json();
  const { email } = body as NewsletterData;

  if (!email) {
    return NextResponse.json(
      { message: "Email is required." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  const recipients = [
    process.env.USER_EMAIL,
    ...(process.env.ADDITIONAL_EMAILS?.split(",") || []),
  ].join(",");

  const htmlTemplate = `
   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
      <div style="background-color: #f8f8f8; padding: 20px; text-align: center;">
        <img src="https://xyz-media-xyzmedia-wmk4ya-01ca70-82-180-162-246.traefik.me/assets/Logo-CqqoaRZc.png" alt="Logo" style="max-width: 200px;" />
      </div>
      <div style="padding: 20px;">
        <h2 style="color: #6739b7;">New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
      </div>
      <div style="background-color: #f0f0f0; padding: 10px; text-align: center; color: #555;">
        This email was collected from your website newsletter form.
      </div>
    </div>
  `;

  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: recipients,
    subject: "New Newsletter Subscription",
    html: htmlTemplate,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Subscription received!" });
  } catch (error) {
    console.error("Error sending newsletter email:", error);
    return NextResponse.json(
      { message: "Failed to process subscription." },
      { status: 500 }
    );
  }
}
