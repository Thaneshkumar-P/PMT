import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Camera, Edit3Icon, Lock, Unlock } from 'lucide-react'
import Link from 'next/link'
import Details from './details'

export default function Page() {

  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-1 gap-5">
          <Details />
        </div>
      </div>
    </>
  )
}