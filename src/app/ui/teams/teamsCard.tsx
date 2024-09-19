import Image from "next/image";
import DP from '@/public/evil-rabbit.png'
import { User } from "../../lib/definition";

export default function TeamCard({ users }: { users?: User[]}) {

  return (
    <>
      <div className='grid grid-cols-3 gap-2'>
      {users?.map(user => (
        <div className='border border-gray-300 rounded-md p-4 custom-box-shadow' key={user._id}>
          <div className='flex flex-row gap-5 flex-nowrap'>
            <div className='flex items-center'>
              <Image src={DP} alt='user' className='rounded-full' width={40} ></Image>
            </div>
            <div>
              <h4 className='font-medium text-[17px] text-nowrap'>{user.fullName}</h4>
              <h4 className='font-small text-[15px] text-gray-500'>{user.role}</h4>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  )
}