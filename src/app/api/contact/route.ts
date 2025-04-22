"use server";

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("dummy_api_key");

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "info@Purifya.ca",
      // to: "zie.mc@hotmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
