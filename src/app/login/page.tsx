import Image from "next/image"
import hero from "@/public/hero.jpg"
import PasswordButton from "../ui/login/PasswordButton"
import LoginButton from "../ui/login/login"
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { jwtVerification } from "../(application)/actions";

export default async function Page() {
  
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value as string;

  return (
    <>
      <div className="m-5">
        <div className="flex m-5 items-center">
          <div className="w-[50%]">
            Projects
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <div className="w-[60%] flex justify-center">
            <Image src={hero} alt="hero" width={500} />
          </div>
          <div className="w-[40%] flex flex-col gap-10 p-20 justify-center">
            <div>
              <h4 className="font-medium bold text-[40px]">Welcome back!</h4>
              <h4 className="font-small text-[20px]">Please enter your details!</h4>
            </div>
            <div>
              <div className="flex flex-col gap-7">
                <input type="email" id="email" placeholder="Email" className="border-b w-full input-border text-black placeholder-black border-gray-400 pb-2 outline-none" />
                <PasswordButton />
              </div>
              <div className="flex justify-end mt-4">
                <p className="underline text-black-100">Forgot Password?</p>
              </div>
              <div className="flex justify-center mt-4">
                <LoginButton token={token} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}