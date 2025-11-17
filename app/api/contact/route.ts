import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'


export async function POST(req: Request) {
  try {
    const { name, email, phone, company, subject, message } = await req.json()

    // ⚠️ YOUR MAIL CONFIG HERE
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "unfazed7eera9eya@gmail.com",
        pass: "kejzhmhddyzxagkw",   // ← put password here
      },
    })

      const mailOptions = {
        from: email,
        to: "bassirelhoussein@gmail.com", // main recipient
        cc: ["fabtower.contact@gmail.com", email], // <-- fixed

        subject: `Nouveau message: ${subject}`,
        html: `
          <h2>Nouveau Message Contact</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Téléphone:</strong> ${phone}</p>
          <p><strong>Entreprise:</strong> ${company}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      };



    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
