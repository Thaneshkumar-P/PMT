'use client'

import eghai from '@/public/eghai.png'
import DP from '@/public/evil-rabbit.png'
import Image from 'next/image'
import { BellIcon, SearchIcon } from 'lucide-react'
import SearchBar from './searchbar'
import { useAppSelector } from '@/src/lib/store'

export default function TopNav() {

  const user = useAppSelector((state) => state.user?.user);

  return (
    <>
      <div className="p-1 border-b shadow-md">
        <div className="flex ml-4 me-4 mb-2 items-center gap-5">
          <div className="w-[70%]">
            <Image src={eghai} alt='eghai' width={75}/>
          </div>
          <div className="w-[30%]">
            <SearchBar placeholder='Search . . .'/>
          </div>
          <BellIcon width={30}/>
          <div className="flex flex-row gap-4 max-w-fit w-[50%]">
            <div className='flex flex-col items-end'>
              <h4 className='text-small font-medium'>{user?.fullName}</h4>
              <h4 className='text-small -mt-2'>{user?.role}</h4>
            </div>
            <div className='flex items-center'>
              <Image src={DP} alt='DP' width={40} height={40} className='rounded-full'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}