import { mailOptions, transporter } from "@/app/config/nodemailer";

export async function POST(request) {
  const header = new Headers({ "Content-Type": "application/json" });
  const body = await request.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Portfolio Visitor Contact",
      text: body.message,
      html: `<h1>Name: ${body.fullName}</h1><p>Message: ${body.message}</p>`,
    });
    return new Response();
  } catch (error) {
    console.log(error.message);
  }
  return new Response(POST, header);
}
