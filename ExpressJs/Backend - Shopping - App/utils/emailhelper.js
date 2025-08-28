const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // use TLS
  secure: false,
  auth: {
    user: process.env.SMPT_USER,
    pass: process.env.SMPT_PASSWORD,
  },
});

// verify transporter once
(async () => {
  try {
    await transporter.verify();
    console.log("Ready to send emails");
  } catch (err) {
    console.error("Error in email verification:", err);
  }
})();

// function to send email
const sendEmail = async (toEmail, subject, htmltext) => {
  try {
    const info = await transporter.sendMail({
      from: `"My-Shopping-App-Verification" <${process.env.SMPT_USER}>`,
      to: toEmail,
      subject,
      html: htmltext,
    });

    console.log("Message sent:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error in sending email:", err.message);
    throw new Error("Email sending failed");
  }
};

// function to send OTP email
const sendOtpEmail = async (toEmail, otp) => {
  const subject = "OTP for My Shopping App";
  const htmltext = `<h1>Your OTP is ${otp}</h1>`;

  try {
    await sendEmail(toEmail, subject, htmltext);
  } catch (err) {
    console.error("Error in sending OTP email:", err.message);
  }
};

module.exports = { sendOtpEmail };
