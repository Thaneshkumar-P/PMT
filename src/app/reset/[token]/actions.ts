import axios from 'axios';
import { jwtVerify } from 'jose';

export const verifyToken = async (token: string) => {
  console.log(token)
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/token/${token}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if(!response?.data?.resetToken){
      throw new Error('Already Set')
    }

    const secret = process.env.NEXT_PUBLIC_JWT;

    if (!secret) {
      throw new Error("JWT secret is not defined in the environment variables");
    }

    const encodedSecret = new TextEncoder().encode(secret);

    const { payload } = await jwtVerify(token, encodedSecret);

    return payload ? payload : null;
  } catch (err) {
    console.error("Token verification failed:", err);
    return null;
  }
};

export const setPassword = async (password: string, resetToken: string) => {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      { password, resetToken },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    return response.data;
  } catch (err) {
    console.error("Error setting password:", err);
    return null;
  }
};
