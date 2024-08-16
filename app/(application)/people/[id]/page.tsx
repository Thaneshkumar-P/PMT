import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Camera, Edit3Icon, Lock, Unlock } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className="p-6">
              <div className='flex flex-col items-center gap-3'>
                <div>
                  <div className="h-[100px] w-[100px] bg-slate-100 rounded-full flex justify-center items-center">
                    <div className="p-3 bg-slate-200 rounded-full">
                      <Camera />
                    </div>
                  </div>
                </div>
                <div className='flex flex-col items-center w-full gap-2'>
                  <div>
                    <h4 className='font-medium text-2xl'>Username</h4>
                  </div>
                  <div className='flex flex-row gap-5 items-center'>
                    <h4 className='font-medium text-base'>Developer</h4>
                    <h4 className='font-medium text-base'>Location</h4>
                    <h4 className='font-medium text-base'>DD/MM/YYYY</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3 flex justify-between'>
              <h4 className='text-[20px] font-semibold'>Basic Information</h4>
              <Link href={'1/edit'}>
                <Edit3Icon />
              </Link>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='grid grid-cols-3 gap-y-5'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Full Name</h4>
                  <h4 className='text-md font-semibold text-black'>User Full Name</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Father Name</h4>
                  <h4 className='text-md font-semibold text-black'>User Father Name</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Email</h4>
                  <h4 className='text-md font-semibold text-black'>User Email Address</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Phone Number</h4>
                  <h4 className='text-md font-semibold text-black'>User Phone Number</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Country</h4>
                  <h4 className='text-md font-semibold text-black'>User Country</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>State</h4>
                  <h4 className='text-md font-semibold text-black'>User State</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>City</h4>
                  <h4 className='text-md font-semibold text-black'>User City</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Address</h4>
                  <h4 className='text-md font-semibold text-black'>User Address</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Pincode</h4>
                  <h4 className='text-md font-semibold text-black'>User Pincode</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Role</h4>
                  <h4 className='text-md font-semibold text-black'>User Role</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3 flex justify-between'>
              <h4 className='text-[20px] font-semibold'>Custom Information</h4>
              <Link href={'1/edit'}>
                <Edit3Icon />
              </Link>
            </div>
            <hr></hr>
            <div className="p-6">
              Custom Info
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3'>
              <h4 className='text-[20px] font-semibold'>Teams</h4>
            </div>
            <hr></hr>
            <div className="p-6">
              Teams
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3'>
              <h4 className='text-[20px] font-semibold'>Actions</h4>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='flex flex-row gap-5'>
                <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                  <Lock size={15} />
                  Lock
                </button>
                <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                  <Unlock size={15} />
                  Unlock
                </button>
                <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Reset Password</button>
                <button className="py-2 px-5 bg-red-500 rounded-md text-white font-semibold">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}