'use client'

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getAllPhases } from "./actions";
import { useEffect, useState } from "react";
import { Phase } from "@/src/app/lib/definition";
import { format } from "date-fns";


export default function PhasePage() {

  const { id } = useParams();
  const [phases, setPhases] = useState<Phase[]>([])

  useEffect(() => {
    (async function() {
      const res = await getAllPhases()
      setPhases(res)
      console.log(res)
    })()
  }, [id])

  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between items-center mb-6 bg-white shadow rounded-[16px] p-6 relative">
          <Link href={`/projects/${id}`}>
            <div className="top-4 left-4 rounded-full hover:bg-gray-100 p-2 mr-2">
              <ArrowLeft color="black" className="" />
            </div>
          </Link>
          <h4 className="text-[23px] font-medium bold">Phases</h4>
          <Link href='phases/new' className="ml-auto">
            <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
          </Link>
        </div>
        <div className="bg-white shadow rounded-[16px]">
          <div className="p-6 flex flex-col gap-3">
            {phases.map(phase => (
              <Link href={{
                pathname: `phases/${phase._id}`,
              }} key={phase._id}>
                <div className="p-4 border-b flex items-center justify-start gap-5 hover:bg-gray-100">
                  <div>
                    <h4 className="font-semibold text-lg">{phase.phaseName}</h4>
                    <h4 className="text-[#ff0000] font-medium text-sm">Deadline: {format(phase.endDate, 'PPPP')}</h4>
                  </div>
                  <div className="flex gap-5 ml-auto items-center">
                    <div className="flex flex-col justify-center items-center">
                      <h4 className="font-semibold text-lg text-gray-500">{phase.completionPercentage}%</h4>
                      <h4 className="font-medium text-sm">Completed</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h4 className="font-semibold text-lg text-gray-500">{phase.completed}/{phase.tasks.length}</h4>
                      <h4 className="font-medium text-sm">Total</h4>
                    </div>
                    <div className="">
                      {
                        phase.status === 'Drafted' &&
                        <h4 className="bg-[#ce141459] p-5 py-2 font-medium">Drafted</h4>
                      }
                      {
                        phase.status === 'Completed' &&
                        <h4 className="bg-[#14ce5e59] p-5 py-2 font-medium">Completed</h4>
                      }
                      {
                        phase.status === 'On-Going' &&
                        <h4 className="bg-[#d1e22d59] p-5 py-2 font-medium">On-Going</h4>
                      }
                    </div>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </div>
    </>
  )
}