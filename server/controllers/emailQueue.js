
import Queue from 'bull';
import nodemailer from 'nodemailer';


const emailQueue = new Queue('emailQueue', {
    redis: { port: 6379, host: '127.0.0.1' }
});

const sendOTPEmail = async (email, otpcode) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email", 
        port: 587,
        secure: false, 
        pool: true,
        maxConnections: 5, 
        maxMessages: 100, 
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL, 
        to: email, 
        subject: 'Your OTP Code', 
        text: `Your OTP code is ${otpcode}`, 
        html: `<p>Hello,</p><p>Your OTP code is <b>${otpcode}</b></p>`, 
    });

    console.log(`OTP email sent to ${email}`);
};


emailQueue.process(async (job) => {
    const { email, otpcode } = job.data;
    await sendOTPEmail(email, otpcode);
});


const queueEmail = (email, otpcode) => {
    emailQueue.add({ email, otpcode });
};

export {queueEmail}
