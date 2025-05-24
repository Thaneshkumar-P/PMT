'use client'

import { AlertCircle, ArrowLeft, Lightbulb, MessageSquare, Timer } from "lucide-react";
import Image from "next/image";
import DP from '@/public/evil-rabbit.png'
import Link from "next/link";
import Task from "@/src/app/ui/tasks/ShowTask";
import { useEffect, useState } from "react";
import CreateTask from "@/src/app/ui/tasks/CreateForm";
import { useParams } from "next/navigation";
import { Phase } from "@/src/app/lib/definition";
import { getPhaseById } from "../actions";


export default function TaskPage() {

  const { id, phase_id }: { id: string, phase_id: string } = useParams();
  const [open, setOpen] = useState<boolean>(false)
  const [openCT, setOpenCT] = useState<boolean>(false)
  const [phase, setPhase] = useState<Phase>()

  useEffect(() => {
    (async function() {
      const res = await getPhaseById(phase_id)
      setPhase(res)
      console.log(res)
    })()
  }, [id, phase_id])

  return (
    <>
      <div className="p-5 w-full">
        <div className="relative flex flex-col justify-center items-center mb-6 bg-white shadow rounded-[16px] p-6 w-full border-b">
          <Link href={`/projects/${id}/phases`}>
            <div className="absolute top-4 left-4 rounded-full hover:bg-gray-100 p-2">
              <ArrowLeft color="black" />
            </div>
          </Link>
          <h4 className="text-[23px] font-medium">{phase?.phaseName}</h4>
          <h4 className="text-sm font-normal text-center border-t w-full py-4">{phase?.description}</h4>
          <div className="flex gap-5 items-center justify-between w-full px-5">
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-gray-500">{phase?.tasks.length}</h4>
              <h4 className="font-medium text-sm">Total</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-gray-500">07/{phase?.tasks.length}</h4>
              <h4 className="font-medium text-sm">Started</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-gray-500">07/{phase?.tasks.length}</h4>
              <h4 className="font-medium text-sm">Completed</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-gray-500">07/{phase?.tasks.length}</h4>
              <h4 className="font-medium text-sm">Approved</h4>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h4 className="font-semibold text-lg text-gray-500">07/{phase?.tasks.length}</h4>
              <h4 className="font-medium text-sm">Cancelled</h4>
            </div>
            <div className="">
              {
                phase?.status === 'Drafted' &&
                <h4 className="bg-[#ce141459] p-5 py-2 font-medium">Drafted</h4>
              }
              {
                phase?.status === 'Completed' &&
                <h4 className="bg-[#14ce5e59] p-5 py-2 font-medium">Completed</h4>
              }
              {
                phase?.status === 'On-Going' &&
                <h4 className="bg-[#d1e22d59] p-5 py-2 font-medium">On-Going</h4>
              }
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-[16px]">
          <div className="p-6 flex flex-col gap-3">
            <div className="flex flex-row justify-between mb-2 bg-white border-b p-2">
              <h4 className="text-[23px] font-medium">Tasks</h4>
              <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2 ml-auto" onClick={() => setOpenCT(true)}>Create</button>
            </div>
            <div className="bg-white shadow rounded-[16px]" onClick={() => setOpen(true)}>
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
                      <div className="flex flex-row gap-2 items-center rounded-md p-2">
                        <AlertCircle />
                        <h4 className="font-medium text-base text-black">High</h4>
                      </div>
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
      <Task open={open} setOpen={setOpen} />
      <CreateTask open={openCT} setOpen={setOpenCT} />
    </>
  )
}