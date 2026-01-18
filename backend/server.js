import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173", // local development
      "https://pegrummeafrica.co.ke", // production domain
      "https://www.pegrummeafrica.co.ke", // optional (recommended)
    ],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }),
);
app.use(express.json());

// ✅ Nodemailer transporter (CORRECT)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp.hmailplus.com
  port: Number(process.env.SMTP_PORT), // 587
  secure: false, // MUST be false for STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // avoids TLS handshake issues
  },
});

// ✅ Verify SMTP connection
transporter.verify((error) => {
  if (error) {
    console.error("❌ SMTP connection error:", error);
  } else {
    console.log("✅ SMTP ready to send emails");
  }
});

// ✅ Email endpoint
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // MUST be your domain email
      replyTo: email, // sender's email
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      text: message,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Send mail error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
