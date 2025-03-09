import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

/**
 * Handles the OTP verification POST request.
 * 
 * The request body should contain an object with the following properties:
 *   - `otp`: The OTP to verify.
 *   - `email`: The email address associated with the OTP.
 * 
 * On success, returns a JSON response with a 200 status code containing a success message and boolean set to true.
 * 
 * On failure, returns a JSON response with a 400 status code and a message indicating the reason for the failure.
 * 
 * In case of an internal server error, returns a JSON response with a 500 status code and a generic error message.
 */
export async function POST(req) {
  const body = await req.json();
  const { otp, email } = body.formData;

  try {
    const cachedOtp = String(await redis.get(`otp:${email}`));

    if (!cachedOtp) {
      return new Response.json({
        message: 'OTP not found or has expired',
        success: false
      }, {
        status: 400
      })
    }

    if(cachedOtp === otp) {
      await redis.del(`otp:${email}`);

      return new Response(JSON.stringify({
        message: 'OTP verified successfully',
        success: true
      }), {
        status: 200
      })
    } else {
      return new Response(JSON.stringify({
        message: 'Invalid OTP',
        success: false
      }), {
        status: 400
      })
    }
  } catch (error) {
    console.error('OTP verification error: ' + error);
    return new Response(JSON.stringify({ 
      message: 'Internal Server Error', 
      success: false 
    }), { 
      status: 500 
    });
  }
}