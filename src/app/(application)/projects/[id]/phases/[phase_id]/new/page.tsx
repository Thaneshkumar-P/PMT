
export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Tasks / Create Task</h4>
        </div>
        <div className="w-full gap-5">
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='TaskTitle' className='font-medium'>Task title</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="TaskTitle"
                      name="TaskTitle"
                      type={"text"}
                      placeholder="Task Title"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='TaskType' className='font-medium'>Task type</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="TaskType"
                      name="TaskType"
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
                    <label htmlFor='priority' className='font-medium'>Priority</label>
                  </div>  
                  <div className="relative">
                    <select
                      id="priority"
                      name="priority"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    >
                      <option disabled>Choose Priority</option>
                      <option value={'High'}>High</option>
                      <option value={'Medium'}>Medium</option>
                      <option value={'Low'}>Low</option>
                    </select>
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='assign' className='font-medium'>Assign To</label>
                  </div>  
                  <div className="relative">
                    <select
                      id="assign"
                      name="assign"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    >
                      <option disabled>User</option>
                      <option value={'User 1'}>User 1</option>
                      <option value={'User 2'}>User 2</option>
                      <option value={'User 3'}>User 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
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