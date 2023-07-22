const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user:" ecommerceapp58@gmail.com",
    pass: "fowjksoyjqkmfmba",
  }
});

exports.sendMail = async (mailOptions) => {
  await transporter.sendMail({
    from: 'Legal Advice <mh15721812@gmail.com>(Mahmoud Hamdi)',
    to: mailOptions.email,
    subject: 'Reset Code For Reset Password',
    text: mailOptions.text
  })
};