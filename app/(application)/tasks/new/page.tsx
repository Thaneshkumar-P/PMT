import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";


export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Tasks / Create Task</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow col-span-3 rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='taskTitle' className='font-medium'>Task title</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="taskTitle"
                      name="taskTitle"
                      type="text"
                      placeholder="Task Title"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='taskType' className='font-medium'>Task type</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="taskType"
                      name="taskType"
                      type="text"
                      placeholder="Task Type"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='startDate' className='font-medium'>Start date</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='endDate' className='font-medium'>End date</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='description' className='font-medium'>Task Description</label>
                  </div>
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Task Description"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none resize-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='startDate' className='font-medium'>Assign To</label>
                  </div>  
                  <div className="relative">
                    <Select>
                      <SelectTrigger className="outline-none focus:none">
                        <SelectValue placeholder="Assign" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Member 1">Member 1</SelectItem>
                          <SelectItem value="Member 2">Member 2</SelectItem>
                          <SelectItem value="Member 3">Member 3</SelectItem>
                          <SelectItem value="Member 4">Member 4</SelectItem>
                          <SelectItem value="Member 5">Member 5</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>                  
                  </div>
                </div>
              </div>
              <div className="w-full mt-6">
                <div className="flex flex-row-reverse w-full items-center gap-5">
                  <button className="p-2 pl-6 pe-6 bg-blue-200 rounded-xl">Create</button>
                  <button className="p-2 pl-6 pe-6 bg-yellow-200 rounded-xl">Clear</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow col-span-3 rounded-[16px]">
              <div className="p-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}