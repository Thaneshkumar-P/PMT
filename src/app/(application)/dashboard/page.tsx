import TopNav from "../../ui/TopNav";
import Image from "next/image";
import ListIcon from '@/public/icons/list-box.svg'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select'
import { LogChart, PerformanceChart, TaskChart } from "../../ui/charts/Charts";
import { dataPie, dataLog, dataPer } from "../../lib/chartData";
import { Lightbulb, MessageSquare, Timer } from "lucide-react";
import DP from '@/public/evil-rabbit.png'


export default function Page() {

  return (
    <>
      <div className="min-h-screen m-5 flex flex-col">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-[23px] font-medium bold">Dashboard</h4>
        </div>
        <div className="w-full h-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
                <div className="mb-3">
                  <h4 className="font-medium bold text-[20px]">Pending tasks</h4>
                </div>
                <div>
                  <div className="flex flex-row gap-3 items-center shadow py-3 rounded-2xl px-4">
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
            <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
              <div>
                <div className="flex flex-row justify-between mb-4">
                  <h4 className="font-medium bold text-[20px]">Projects</h4>
                </div>
                <div className="flex flex-col justify-between gap-3">
                  <div className="bg-blue-50 rounded flex flex-row justify-between p-3">
                    <h4>Projects</h4>
                    <h4>54%</h4>
                  </div>
                  <div className="bg-blue-50 rounded flex flex-row justify-between p-3">
                    <h4>Projects</h4>
                    <h4>54%</h4>
                  </div>                  
                  <div className="bg-blue-50 rounded flex flex-row justify-between p-3">
                    <h4>Projects</h4>
                    <h4>54%</h4>
                  </div>
                  <div className="bg-blue-50 rounded flex flex-row justify-between p-3">
                    <h4>Projects</h4>
                    <h4>54%</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
              <TaskChart data={dataPie} />
            </div>
            <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
              <LogChart data={dataLog} />
            </div>
            <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
              <PerformanceChart data={dataPer} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}