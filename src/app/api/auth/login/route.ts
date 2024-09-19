import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  console.log(email)

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ message: data.message }, { status: response.status });
    }

    let res;
    if(data.access_token){
      res = NextResponse.json({ message: 'Login successful' });
      res.cookies.set('token', data.access_token, { httpOnly: true, path: '/' });
    }
    else {
      res = NextResponse.json({ message: data.msg }, { status: 401 });
      return res
    }
    
    return res;
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
