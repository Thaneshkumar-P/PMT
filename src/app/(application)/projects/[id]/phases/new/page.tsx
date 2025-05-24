'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { createPhase } from "../actions"
import { Phase } from "@/src/app/lib/definition"


export default function PhasePage() {
  const [phase, setPhase] = useState<Phase>({
    phaseName: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    priority: "",
    actualStartDate: undefined,
    actualEndDate: undefined,
    completed: 0,
    status: "Drafted",
    completionPercentage: 0,
    tasks: [],
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPhase((prev) => ({
      ...prev,
      [name]: name.includes("Date") ? new Date(value) : value, // Handle date input
    }));
  };

  const validateForm = () => {

    const startDate = document.getElementById('startDate') as HTMLInputElement
    const endDate = document.getElementById('startDate') as HTMLInputElement
    const newErrors: { [key: string]: string } = {};
    if (!phase.phaseName) newErrors.phaseName = "Phase title is required";
    if (!startDate.value) newErrors.startDate = "Start date is required";
    if (!endDate.value) newErrors.endDate = "End date is required";
    if (new Date(phase.startDate) > new Date(phase.endDate)) newErrors.dateRange = "End date must be after start date";
    if (!phase.description) newErrors.description = "Phase description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  async function handleCreate() {
    if (!validateForm()) return;

    console.log(phase)

    const res: Phase = await createPhase(phase);

    if (res._id) {
      toast.success('Phase created successfully', {
        style: {
          backgroundColor: 'green',
          color: '#fff'
        }
      });
      router.replace(`/projects/${res._id}`);
    } else {
      toast.error('Internal Server Error', {
        style: {
          backgroundColor: '#f30000',
          color: '#fff'
        }
      });
    }
  }

  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Phase / Create Phase</h4>
        </div>
        <div className="w-full gap-5">
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='PhaseTitle' className='font-medium'>Phase title</label>
                  </div>  
                  <input
                    id="PhaseTitle"
                    name="phaseName"
                    type="text"
                    placeholder="Phase Title"
                    value={phase.phaseName}
                    onChange={handleInputChange}
                    className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                  />
                  {errors.phaseName && <span className="text-red-500 text-sm">{errors.phaseName}</span>}
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='priority' className='font-medium'>Priority</label>
                  </div>  
                  <div className="relative">
                    <select
                      id="priority"
                      name="priority"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                      onChange={handleInputChange}
                      defaultValue=""
                    >
                      <option value="" disabled>Choose Priority</option>
                      <option value={'High'}>High</option>
                      <option value={'Medium'}>Medium</option>
                      <option value={'Low'}>Low</option>
                    </select>
                  </div>
                </div>

                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='startDate' className='font-medium'>Start date</label>
                  </div>  
                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    onChange={handleInputChange}
                    className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                  />
                  {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='endDate' className='font-medium'>End date</label>
                  </div>  
                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    onChange={handleInputChange}
                    className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                  />
                  {errors.endDate && <span className="text-red-500 text-sm">{errors.endDate}</span>}
                  {errors.dateRange && <span className="text-red-500 text-sm">{errors.dateRange}</span>}
                </div>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='description' className='font-medium'>Phase Description</label>
                  </div>  
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Phase Description"
                    value={phase.description}
                    onChange={handleInputChange}
                    className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none resize-none"
                  />
                  {errors.description && <span className="text-red-500 text-sm">{errors.description}</span>}
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2" onClick={handleCreate}>Create</button>
                    <button className="py-1.5 px-5 border border-blue-500 text-blue-500 rounded-md bg-white font-semibold flex items-center gap-2 hover:bg-gray-100 ">Clear</button>
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
