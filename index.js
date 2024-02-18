const nodemailer = require('nodemailer');
// setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'daianakv12@gmail.com',
        pass: 'jfma ilfd xvuq quwr'
    }
});
// email settings
const mailOptions = {
    from: 'daianakv12@gmail.com',
    to: 'valikhanagai@gmail.com',
    subject: 'тестирую код',
    text: 'делаю дз по бэку, нужно прогу написать чтобы письма высылать'
};
// to send email
function sendEmail() {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('error:', error.message);
        } else {
            console.log('email sent successfully:', info.response);
        }
    });
}
// to call function
sendEmail();
