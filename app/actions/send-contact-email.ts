"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: {
  name: string;
  email: string;
  contactNumber?: string;
  message: string;
}) {
  const { name, email, contactNumber, message } = data;

  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: process.env.CONTACT_RECEIVER_EMAIL!,
    subject: `New Contact Message on my Portfolio from ${name}`,
    replyTo: email,
    html: `
      <div style="font-family: sans-serif; line-height: 1.6">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${
          contactNumber
            ? `<p><strong>Contact Number:</strong> ${contactNumber}</p>`
            : ""
        }
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `,
  });
}
