import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["POST", "GET"],
}));
app.use(express.json());

// Basic example route (optional)
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Welcome to my portfolio API" });
});

app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, subject, number, email, message, honeypot } = req.body;
    if (honeypot) {
      return res.status(400).send('spam detected');
    }

    if ( !name || !email || !message) {
      return res.status(400).json({error: "missing required fields"});
    }
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      from: email,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `portfolio contact - ${subject}`,
      text:`you have received a new message from your website:
        Name: ${name}
        Email: ${email}
        Number: ${number || "(not provided"}
        Subject ${subject || "(not provided)"} 
        Message: ${message}`,
    };
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: "email sent successfully"});
  } catch (error) {
    console.error("error sending email:", error);
    return res.status(500).json({ error: "failed to send email"});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});