import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: "Nuevo mensaje desde Web Masa Divina",
      html: `<p><b>Nombre:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Mensaje:</b> ${message}</p>`,
    });

    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: error.toString() });
  }
});

app.listen(process.env.PORT || 3001, () => console.log("Backend en funcionamiento"));
