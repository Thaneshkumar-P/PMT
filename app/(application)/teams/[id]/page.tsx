import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Activity, Camera, ChevronRight, CogIcon, Cross, Edit3Icon, FolderArchive, FolderDot, FolderIcon, Grid3X3, Instagram, List, Lock, Mail, MoreVertical, Plus, SearchIcon, Settings, Unlock, User, X } from 'lucide-react'
import { PerformanceChart, TaskChart } from '@/app/ui/charts/Charts'
import { dataPer, dataPie } from '@/app/lib/chartData'
import Link from 'next/link'
import { Select, SelectContent, SelectGroup, SelectValue, SelectItem, SelectTrigger } from "@/components/ui/select";

export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-4 gap-5">
          <div className='col-span-1 row-span-full'>
            <div className="bg-white custom-box-shadow rounded-[16px]">
              <div className='p-6'>
                <div className='flex flex-row-reverse'>
                  <Link href={'1/edit'}>
                    <Edit3Icon />
                  </Link>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <div>
                    <div className="h-[100px] w-[100px] bg-slate-100 rounded-full flex justify-center items-center">
                      <div className="p-3 bg-slate-200 rounded-full">
                        <Camera />
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center w-full gap-2'>
                    <div>
                      <h4 className='font-medium text-2xl'>Team Name</h4>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                      <h4 className='font-medium text-base'>Member count</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px] col-span-3">
            <div className='p-6 pb-3 flex items-center'>
              <h4 className='text-[20px] font-semibold'>Teams</h4>
              <div className='flex flex-row items-center gap-4 ml-auto'>
                <div className="animate-in">
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
                <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                  <Plus size={20}/>
                  Add User
                </button>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='grid grid-cols-3 gap-2'>
                <div className='border border-gray-300 rounded-md p-4 custom-box-shadow'>
                  <div className='flex flex-row gap-5 flex-nowrap'>
                    <div className='flex items-center'>
                      <Image src={DP} alt='user' className='rounded-full' width={40} ></Image>
                    </div>
                    <div>
                      <h4 className='font-medium text-[17px] text-nowrap'>User name</h4>
                      <h4 className='font-small text-[15px] text-gray-500'>Role</h4>
                    </div>
                    <div className='flex items-center  ml-auto'>
                      <X className='rounded-full' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='flex flex-row gap-5'>
                <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Save</button>
                <button className="py-2 px-5 bg-red-500 rounded-md text-white font-semibold">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}