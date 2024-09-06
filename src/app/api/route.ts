import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return new Response();
  }

  try {
    // jwt.verify(token, process.env.JWT_SECRET);
    return new Response();
  } catch (err) {
    return new Response();
  }
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const token = req.headers.authorization?.split(' ')[1];

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   try {
//     // jwt.verify(token, process.env.JWT_SECRET);
//     return res.status(200).json({ message: 'Token is valid' });
//   } catch (err) {
//     return res.status(401).json({ message: 'Invalid token' });
//   }
// }
