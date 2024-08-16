import CustomFields from "@/app/ui/projects/CustomFields";
import CustomFieldsSelector from "@/app/ui/projects/CustomFieldsSelector";
import { Camera } from "lucide-react";


export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">People / Edit User</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow col-span-3 rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='fullName' className='font-medium'>Avatar</label>
                  </div>  
                  <div className="relative">
                    <div className="h-[100px] w-[100px] bg-slate-100 rounded-full flex justify-center items-center">
                      <div className="p-3 bg-slate-200 rounded-full">
                        <Camera />
                      </div>
                    </div>
                    {/* <input
                      
                      id="fullName"
                      name="fullName"
                      type="file"
                      placeholder="Full Name"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    /> */}
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='fullName' className='font-medium'>Full Name</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="fullName"
                      name="fullName"
                      type={"text"}
                      placeholder="Full Name"
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='fatherName' className='font-medium'>Father Name</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="fatherName"
                      name="fatherName"
                      type="text"
                      placeholder="Father Name"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='email' className='font-medium'>Email</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="Email"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='phone' className='font-medium'>Phone Number</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='state' className='font-medium'>State</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      placeholder="State"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='city' className='font-medium'>City</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      placeholder="City"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='address' className='font-medium'>Address</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Address"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='pincode' className='font-medium'>Pincode</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="pincode"
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='access' className='font-medium'>Access</label>
                  </div>  
                  <div className="relative">
                    <select name="access" id="access" className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none">
                      <option disabled>Access</option>
                      <option value={'Level 1'}>Level 1</option>
                      <option value={'Level 2'}>Level 2</option>
                      <option value={'Level 3'}>Level 3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className='p-6'>
              <CustomFields />
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Create User</button>
                    <button className="py-2 px-5 border-blue-500 border text-blue-500 rounded-md font-semibold">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow col-span-3 rounded-[16px]">
              <div className="p-6">
                <CustomFieldsSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}