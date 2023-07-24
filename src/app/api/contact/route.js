import { mailOptions, transporter } from "@/nodemailer/nodemailer";
import connectMongoDB from "../../../db/mongodb";
import Contact from "../../../models/contact";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email, subject, message } = await request.json();
  await transporter.sendMail({
    ...mailOptions,
    subject: subject,
    html: `${name},<br/>${email},<br/>${message}`,
  });
  await connectMongoDB();
  await Contact.create({ name, email, subject, message });
  return NextResponse.json(
    { message: "Contact Created Successfully" },
    { status: 201 }
  );
}
