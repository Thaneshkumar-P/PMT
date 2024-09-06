import eghai from '@/public/eghai.png'
import Bell from '@/public/icons/bell.svg'
import Search from '@/public/icons/search-web.svg'
import DP from '@/public/evil-rabbit.png'
import Image from 'next/image'
import { BellIcon, SearchIcon } from 'lucide-react'

export default function TopNav() {
  return (
    <>
      <div className="p-1 border-b shadow-md">
        <div className="flex ml-4 me-4 mb-2 items-center gap-5">
          <div className="w-[70%]">
            <Image src={eghai} alt='eghai' width={75}/>
          </div>
          <div className="w-[30%]">
            <div className="relative rounded-md">
              <div className="relative">
                <input
                  id="projectSearch"
                  name="projectSearch"
                  type="text"
                  placeholder="Search project"
                  className="border rounded-md w-full input-border text-black placeholder-gray-500 border-gray-400 p-0.5 pb-1.5 pl-10 outline-none"
                />
                <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" width={50} />
              </div>
            </div>
          </div>
          <BellIcon width={30}/>
          <div className="flex flex-row gap-4 max-w-fit w-[50%]">
            <div className='flex flex-col items-end'>
              <h4 className='text-small font-medium'>Username</h4>
              <h4 className='text-small -mt-2'>Role</h4>
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