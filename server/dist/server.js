"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
// Middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    methods: ["POST", "GET"],
}));
app.use(express_1.default.json());
// Basic example route (optional)
app.get("/api", (req, res) => {
    res.json({ message: "Welcome to my portfolio API" });
});
app.post("/api/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, subject, number, email, message, honeypot } = req.body;
        if (honeypot) {
            return res.status(400).send('spam detected');
        }
        if (!name || !email || !message) {
            return res.status(400).json({ error: "missing required fields" });
        }
        const transporter = nodemailer_1.default.createTransport({
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
            text: `you have received a new message from your website:
        Name: ${name}
        Email: ${email}
        Number: ${number || "(not provided"}
        Subject ${subject || "(not provided)"} 
        Message: ${message}`,
        };
        yield transporter.sendMail(mailOptions);
        return res.status(200).json({ success: "email sent successfully" });
    }
    catch (error) {
        console.error("error sending email:", error);
        return res.status(500).json({ error: "failed to send email" });
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
