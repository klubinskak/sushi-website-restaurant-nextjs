
import nodemailer from 'nodemailer';

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

//you need to generate psw in https://myaccount.google.com/apppasswords

export const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
        user: email,
        pass: pass,
    }
});