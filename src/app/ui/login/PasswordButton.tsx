'use client'

import EyeOpen from "@/public/icons/eye-outline.svg"
import EyeOff from "@/public/icons/eye-off-outline.svg"
import Image from "next/image"
import { useState } from "react"

export default function PasswordButton() {

  const [show, setShow] = useState(false)

  const handleToggle = () => setShow(!show)


  return (
    <>
      <div className="relative mt-2 rounded-md">
        <div className="relative">
          <input
            id="password"
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
            className="border-b w-full input-border text-black placeholder-black border-gray-400 pb-2 outline-none"
          />
          {show ? 
            <Image src={EyeOpen} alt="EyeOpen" className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" onClick={handleToggle}/> 
            :
            <Image src={EyeOff} alt="EyeOpen" className="absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" onClick={handleToggle}/>
          }
          
        </div>
      </div>
    </>
  )
}