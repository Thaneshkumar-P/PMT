'use client'

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";


export default function SnackBar({ open, color, message }:{ open: boolean, color: string, message: string }) {

  return (
    <>
      <div className={`fixed bottom-4 left-4 p-3 ${ color } ${ open ? 'block' : 'hidden' } bg-green-500 rounded`}>
        <div className="flex flex-row gap-3 items-center text-base font-bold">
          <CheckCircle2 color="white" />
          <h4 className="text-white">{message}</h4>
        </div>
      </div>
    </>
  )
}