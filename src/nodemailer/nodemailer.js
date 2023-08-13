import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const emailZ = process.env.EMAILZ;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: emailZ,
};
