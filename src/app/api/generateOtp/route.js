import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';
import { Redis } from '@upstash/redis';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
})

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

const OTP_EXPIRATION_TIME = 10 * 60;

  /**
   * Generate and send an OTP to the user's email address.
   * 
   * @param {Object} req - The request object.
   * @param {Object} req.body - The request body.
   * @param {string} req.body.formData.email - The user's email address.
   * 
   * @returns {Promise<Response>} A promise that resolves with the response object.
   * 
   * @example
   * curl -X POST -H "Content-Type: application/json" -d '{"formData": {"email": "user@example.com"}}' http://localhost:3000/api/generateOtp
   */
export async function POST(req) {
  const body = await req.json();

  if(req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { email } = body.formData;
    const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });

    await redis.set(`otp:${email}`, otp, { ex: OTP_EXPIRATION_TIME });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: 'OTP Verification',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a;">Your Verification Code</h2>
          <p style="font-size: 16px; color: #333;">
            Use this code to complete your verification:
          </p>
          <div style="background: #f5f5f5; padding: 20px; text-align: center; margin: 20px 0;">
            <strong style="font-size: 24px; letter-spacing: 2px;">${otp}</strong>
          </div>
          <p style="font-size: 14px; color: #666;">
            This code will expire in 10 minutes.
          </p>
        </div>
      `
    };
  
    await transporter.sendMail(mailOptions);
  
    return new Response(JSON.stringify({ message: 'Email sent', otp: otp }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Bad Request' }), { status: 400 });
  }
}