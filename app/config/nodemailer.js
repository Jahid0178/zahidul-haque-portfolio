import nodemailer from "nodemailer";

const email = "zahidul.haque767@gmail.com";
const pass = "vhesqjwxrolihnjm";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
