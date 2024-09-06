import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { ChevronRight, CogIcon, Edit3Icon, FolderArchive, FolderDot, FolderIcon, MoreVertical, Settings } from 'lucide-react'
import { PerformanceChart, TaskChart } from '@/src/app/ui/charts/Charts'
import { dataPer, dataPie } from '@/src/app/lib/chartData'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white shadow col-span-2 rounded-[16px]">
            <div className="p-6">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">Project Name</h4>
                </div>
                <div>
                  <Link href={'1/edit'}>
                    <h4 className="font-medium text-xl p-3"><Edit3Icon color='gray' width={25}/></h4> 
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-[14px] font-small text-justify" style={{ lineHeight: 1.75 }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi excepturi exercitationem saepe quia velit architecto ullam quod optio quidem modi molestias consequatur ut earum pariatur porro, enim facilis iure quibusdam!</p>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="flex flex-row gap-3 mb-4">
                <h4 className="font-medium text-xl">Basic Details</h4>
              </div>
              <div className='grid grid-cols-3 gap-y-5'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Project Type</h4>
                  <h4 className='text-md font-semibold text-black'>Project Type</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Start Date</h4>
                  <h4 className='text-md font-semibold text-black'>Start Date</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>End Date</h4>
                  <h4 className='text-md font-semibold text-black'>End Date</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Priority</h4>
                  <h4 className='text-md font-semibold text-black'>Priority</h4>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-5">
              <div className='grid grid-col-1'>
                  <div>
                    <div className="flex flex-row justify-start gap-4 items-center mb-2">
                      <h4 className="font-medium text-xl">Progress</h4>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white"></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="relative bg-blue-600 h-1.5 rounded-full" style={{ width: '50' + '%', zIndex: 1 }}></div>
                        <div className="relative bg-blue-200 h-1.5 rounded-full -mt-[6px]" style={{ width: '75' + '%', zIndex: 0 }}></div>
                      </div>
                      <div className="flex justify-start gap-5 mt-1">
                        <span className="text-sm font-medium text-blue-600 dark:text-white">Approved</span>
                        <span className="text-sm font-medium text-blue-200 dark:text-white">Completed</span>
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>  
                <div>
                  <div className="flex flex-row justify-start gap-4 items-center mb-2">
                    <Link href={'100/tasks'}>
                      <h4 className="font-medium text-xl">Tasks</h4>
                    </Link>
                  </div>
                  <div className='p-2'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex gap-4 items-center'>
                        <div>
                          <h4 className='font-medium text-md'>Task name</h4>
                          <h4 className='font-medium text-sm text-gray-500'>Status</h4>
                        </div>
                        <div className='ml-auto mr-3'>
                          <h4 className='font-medium text-md'><ChevronRight /></h4>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center'>
                        <div>
                          <h4 className='font-medium text-md'>Task name</h4>
                          <h4 className='font-medium text-sm text-gray-500'>Status</h4>
                        </div>
                        <div className='ml-auto mr-3'>
                          <h4 className='font-medium text-md'><ChevronRight /></h4>
                        </div>
                      </div>
                      <div className='flex gap-4 items-center'>
                        <div>
                          <h4 className='font-medium text-md'>Task name</h4>
                          <h4 className='font-medium text-sm text-gray-500'>Status</h4>
                        </div>
                        <div className='ml-auto mr-3'>
                          <h4 className='font-medium text-md'><ChevronRight /></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">Analytics</h4>
                </div>
                <div>
                  <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                </div>
              </div>
              <div>
                <div>
                  <TaskChart data={dataPie} />
                </div>
                <div>
                  <PerformanceChart data={dataPer} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Apps</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <FolderIcon size={50} />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>File Manager</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Files</h4>                
                    </div>
                    <div className='ml-auto mr-3'>
                      <h4 className='font-medium text-md'><ChevronRight /></h4>
                    </div>
                  </div>
                  <Link href='1/settings'>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Settings size={50} />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Settings</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Project Customization</h4>                
                    </div>
                    <div className='ml-auto mr-3'>
                      <h4 className='font-medium text-md'><ChevronRight /></h4>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Custom Details</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-500'>CS 1</h4>
                    <h4 className='text-md font-semibold text-black'>CS 1</h4>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-500'>CS 2</h4>
                    <h4 className='text-md font-semibold text-black'>CS 2</h4>
                  </div>
                  <div>
                    <h4 className='text-sm font-semibold text-gray-500'>CS 3</h4>
                    <h4 className='text-md font-semibold text-black'>CS 3</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow col-span-2 rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Teams</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <div className="overflow-clip border-white border-[2px] rounded-full w-[45px] h-[45px] bg-gray-500 flex justify-center items-center text-white pb-0.5">
                        +3
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-sm text-black underline'>view all</h4>                
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}