import TopNav from "../../ui/TopNav";
import Image from "next/image";
import ListIcon from '@/public/icons/list-box.svg'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select'
import { LogChart, PerformanceChart, TaskChart } from "../../ui/charts/Charts";
import { dataPie, dataLog, dataPer } from "../../lib/chartData";
import { Lightbulb, MessageSquare, Timer } from "lucide-react";
import DP from '@/public/evil-rabbit.png'
import Slider from "../../ui/dashboard/Slider";
import TaskSlider from "../../ui/dashboard/TaskSlider";


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
                <div className="p-3">
                  <TaskSlider />
                </div>
              </div>
            </div>
            <div className="w-full h-full p-6 custom-box-shadow rounded-2xl bg-white">
              <div>
                <div className="flex flex-row justify-between mb-4">
                  <h4 className="font-medium bold text-[20px]">Projects</h4>
                </div>
                <div className="p-3">
                  <Slider />
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