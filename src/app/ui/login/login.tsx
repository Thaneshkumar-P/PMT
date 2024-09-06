'use client'

import { Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { jwtVerification } from "../../(application)/actions";


export default function LoginButton({ token }: { token: string }) {
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)

  const router = useRouter();

  useEffect(() => {
    (async function() {
      if(!token) return
      try {
        const isValid = await jwtVerification(token);
        console.log(1, isValid)
        if (isValid) {
          router.replace('/dashboard');
        }
      } catch (err) {
        console.error('Token verification failed:', err);
      }
    })()
  }, [])

  const handleLogin = async () => {
    setShow(false)
    const email = document.getElementById('email') as HTMLInputElement | null;
    const password = document.getElementById('password') as HTMLInputElement | null;

    if (!email || !password) {
      return;
    }

    if(!email?.value) {
      setError('Email is missing.');
      setShow(true)
      return;
    }

    if(!password?.value) {
      setError('Password is missing.');
      setShow(true)
      return;
    }

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.value, password: password.value }),
      });

      if (res.ok) {
        router.push('/dashboard');
      } else {        
        const data = await res.json();
        setError(data.message);
        setShow(true)
      }
    } catch (error) {
      console.log('error')
      // setError('An unexpected error occurred');
    }
  };

  return (
    <>
      <div className={`flex flex-col gap-5 w-full`} >
        <div className={`rounded-md flex flex-row items-center justify-center gap-5 border border-[#ff4545] bg-[#fa606037] p-2  ${show ? '' : 'hidden'}`}>
          <Info className="opacity-100" color="red"/>
          <h4 className="text-red-500">{error}</h4>
        </div>
        <button className="bg-[#060606] text-white w-full p-2 rounded" onClick={handleLogin}>Log in</button>
      </div>
    </>
  )
}
