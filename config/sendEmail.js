import nodemailer from 'nodemailer';

const sendEmail = async (options) => {

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  const message = {
    from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };
  try {
    await transporter.sendMail(message);
    return 1;
  }
  catch (err) {
    console.log(err)
    return 0;
  }

};

export default sendEmail;
