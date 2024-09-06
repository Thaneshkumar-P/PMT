import { jwtVerify } from 'jose';

export const jwtVerification = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT);
    const { payload } = await jwtVerify(token, secret);
    return !!payload;
  } catch (err) {
    console.error('JWT verification failed:', err);
    return false;
  }
};
