import CustomFields from "@/app/ui/projects/CustomFields";
import CustomFieldsSelector from "@/app/ui/projects/CustomFieldsSelector";
import { Camera } from "lucide-react";


export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Teams / Edit Team</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow col-span-3 rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='teamName' className='font-medium'>Avatar</label>
                  </div>  
                  <div className="relative">
                    <div className="h-[100px] w-[100px] bg-slate-100 rounded-full flex justify-center items-center">
                      <div className="p-3 bg-slate-200 rounded-full">
                        <Camera />
                      </div>
                    </div>
                    {/* <input
                      
                      id="teamName"
                      name="teamName"
                      type="file"
                      placeholder="Team Name"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    /> */}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='teamName' className='font-medium'>Team Name</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="teamName"
                      name="teamName"
                      type={"text"}
                      placeholder="Team Name"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-5">
                
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Save</button>
                    <button className="py-2 px-5 border-blue-500 border text-blue-500 rounded-md font-semibold">Cancel</button>
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