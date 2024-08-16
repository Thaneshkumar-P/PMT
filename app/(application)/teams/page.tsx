import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Activity, ChevronRight, CogIcon, FolderArchive, FolderDot, FolderIcon, Grid3X3, List, Mail, MoreVertical, Plus, SearchIcon, Settings, User, Users2 } from 'lucide-react'
import { PerformanceChart, TaskChart } from '@/app/ui/charts/Charts'
import { dataPer, dataPie } from '@/app/lib/chartData'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6 flex flex-col gap-5">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">Teams</h4>
                </div>
                <div className='flex flex-row gap-3'>
                  <Link href='teams/new'>
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                      <Users2 size={20}/>
                      Create Team
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='flex items-center flex-row justify-between'>
                <div className="w-[30%]">
                  <div className="relative rounded-md">
                    <div className="relative">
                      <input
                        id="teamSearch"
                        name="teamSearch"
                        type="text"
                        placeholder="Search Team"
                        className="border rounded-md w-full input-border text-black placeholder-gray-400 border-gray-300 p-0.5 pb-1.5 pl-10 outline-none"
                      />
                      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" width={50} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6 flex flex-col gap-5">
              <div className='grid grid-cols-4 gap-5'>
                <Link href={'teams/1'} >
                  <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
                    <div className='flex flex-row gap-5'>
                      <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
                      <div>
                        <h4 className='font-medium text-[17px]'>Team Name</h4>
                        <h4 className='font-small text-[15px] text-gray-500'>Member Count</h4>
                      </div>
                    </div>
                  </div>
                  
                </Link>
                <Link href={'teams/1'} >
                  <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
                    <div className='flex flex-row gap-5'>
                      <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
                      <div>
                        <h4 className='font-medium text-[17px]'>Team Name</h4>
                        <h4 className='font-small text-[15px] text-gray-500'>Member Count</h4>
                      </div>
                    </div>
                  </div>
                  
                </Link>
                <Link href={'teams/1'} >
                  <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
                    <div className='flex flex-row gap-5'>
                      <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
                      <div>
                        <h4 className='font-medium text-[17px]'>Team Name</h4>
                        <h4 className='font-small text-[15px] text-gray-500'>Member Count</h4>
                      </div>
                    </div>
                  </div>
                  
                </Link>
                <Link href={'teams/1'} >
                  <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
                    <div className='flex flex-row gap-5'>
                      <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
                      <div>
                        <h4 className='font-medium text-[17px]'>Team Name</h4>
                        <h4 className='font-small text-[15px] text-gray-500'>Member Count</h4>
                      </div>
                    </div>
                  </div>
                  
                </Link>
                <Link href={'teams/1'} >
                  <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
                    <div className='flex flex-row gap-5'>
                      <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
                      <div>
                        <h4 className='font-medium text-[17px]'>Team Name</h4>
                        <h4 className='font-small text-[15px] text-gray-500'>Member Count</h4>
                      </div>
                    </div>
                  </div>
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}