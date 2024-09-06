import { Lightbulb, MessageSquare, Timer } from "lucide-react";
import Image from "next/image";
import DP from '@/public/evil-rabbit.png'
import Link from "next/link";


export default function TaskPage() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-[23px] font-medium bold">Tasks</h4>
          <Link href='tasks/new' className="ml-auto">
            <button className="bg-blue-400 text-white w-full p-1 pl-2 pe-2 rounded">Create</button>
          </Link>
        </div>
        <div className="bg-white shadow rounded-[16px]">
          <div className="p-6 flex flex-col gap-3">
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-3">
                <div className="flex flex-row gap-3 items-center">
                  <Lightbulb />
                  <div className="flex flex-col">
                    <h4 className="font-medium text-md">Task Name</h4>
                    <h4 className="font-medium text-sm text-gray-500">#00000 Created-Date 
                      <span className="text-md text-black">{' '}Created-By{' '}</span>
                      <span className="text-md text-black p-0.5 bg-[#ff050578] rounded-md pl-2 pe-2">Canceled</span>
                      <span className="text-md text-black p-0.5 bg-green-100 rounded-md pl-2 pe-2">Completed</span>
                    </h4>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-row gap-10 items-center">
                      <div className="flex flex-row gap-2 items-center bg-green-100 rounded-md p-2">
                        <Timer />
                        <h4 className="font-medium text-sm text-gray-500">00 : 30 : 00</h4>
                      </div>
                      <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                        <Image src={DP} alt='DP' width={30} className='rounded-full'/>
                      </div>
                      <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                        <MessageSquare />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-3">
                <div className="flex flex-row gap-3 items-center">
                  <Lightbulb />
                  <div className="flex flex-col">
                    <h4 className="font-medium text-md">Task Name</h4>
                    <h4 className="font-medium text-sm text-gray-500">#00000 Created-Date 
                      <span className="text-md text-black">{' '}Created-By{' '}</span>
                      <span className="text-md text-black p-0.5 bg-[#ff050578] rounded-md pl-2 pe-2">Canceled</span>
                      <span className="text-md text-black p-0.5 bg-green-100 rounded-md pl-2 pe-2">Completed</span>
                    </h4>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-row gap-10 items-center">
                      <div className="flex flex-row gap-2 items-center bg-green-100 rounded-md p-2">
                        <Timer />
                        <h4 className="font-medium text-sm text-gray-500">00 : 30 : 00</h4>
                      </div>
                      <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                        <Image src={DP} alt='DP' width={30} className='rounded-full'/>
                      </div>
                      <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                        <MessageSquare />
                      </div>
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