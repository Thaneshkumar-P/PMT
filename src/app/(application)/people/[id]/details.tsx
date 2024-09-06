'use client'

import { Camera, CheckCircle, CheckCircle2, Edit3Icon, Lock, Unlock } from "lucide-react"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { deleteUser, getUser, lockUser, resetPassword, unlockUser } from "../actions"
import { User } from "@/src/app/lib/definition"
import Link from "next/link"

export default function Details() {
  let { id } = useParams()
  const route = useRouter()

  const [user, setUser] = useState<User>()
  const [teams, setTeams] = useState<any[]>()
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isUnlocking1, setIsUnlocking1] = useState(false);
  const [isUnlocking2, setIsUnlocking2] = useState(false);


  useEffect(() => {
    (async function() {
      let userData = await getUser(id);
      setUser(userData[0])
      setTeams(userData[1])
    })()
  }, [id])

  const handleLock = async () => {
    setIsUnlocking(true); 

    let unlock = await unlockUser(id);

    if (unlock === 200) {
      setTimeout(() => {
        setUser(prevUser => prevUser ? { ...prevUser, locked: true } : undefined);
        setIsUnlocking(false); 
      }, 5000); 
    }
  };


  const handleUnlock = async () => {
    setIsUnlocking1(true); 

    let unlock = await unlockUser(id);

    if (unlock === 200) {
      setTimeout(() => {
        setUser(prevUser => prevUser ? { ...prevUser, locked: false } : undefined);
        setIsUnlocking1(false); 
      }, 5000); 
    }
  };

  const handleReset = async () => {
    setIsUnlocking2(true); 

    let reset = await resetPassword(id)

    if (reset === 200) {
      setTimeout(() => {
        setIsUnlocking2(false); 
      }, 5000); 

    }
  }

  const handleDelete = async () => {
    let deletedUser = await deleteUser(id)

    if (deletedUser === 200) {
      route.push('/people')
    }
  }

  return (
    <>
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
                    <h4 className='font-medium text-2xl'>{user?.fullName}</h4>
                  </div>
                  <div className='flex flex-row gap-5 items-center'>
                    <h4 className='font-medium text-base'>{user?.role}</h4>
                    <h4 className='font-medium text-base'>{user?.city}</h4>
                    <h4 className='font-medium text-base'>DD/MM/YYYY</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3 flex justify-between'>
              <h4 className='text-[20px] font-semibold'>Basic Information</h4>
              <Link href={`${user?._id}/edit`}>
                <Edit3Icon />
              </Link>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='grid grid-cols-3 gap-y-5'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Full Name</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.fullName}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Father Name</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.fatherName}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Email</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.email}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Phone Number</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.phoneNo}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Country</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.country}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>State</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.state}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>City</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.city}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Address</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.address}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Pincode</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.pincode}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Role</h4>
                  <h4 className='text-md font-semibold text-black'>{user?.role}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3 flex justify-between'>
              <h4 className='text-[20px] font-semibold'>Custom Information</h4>
              <Link href={`${user?._id}/edit`}>
                <Edit3Icon />
              </Link>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='grid grid-cols-3 gap-y-5'>
                { user?.additional && Object?.keys(user?.additional).map(addInfo => (
                  <div key={addInfo}>
                    <h4 className='text-sm font-semibold text-gray-500'>{addInfo}</h4>
                    <h4 className='text-md font-semibold text-black'>{user?.additional[addInfo]}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px]">
            <div className='p-6 pb-3'>
              <h4 className='text-[20px] font-semibold'>Teams</h4>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='grid grid-cols-3 gap-5'>
                { teams && teams.map(team => (
                  <Link href={`/teams/${team._id}`} key={team._id} >
                    <div className='border border-gray-300 rounded-md p-4 custom-box-shadow'>
                      <div className='flex flex-row gap-5'>
                        {/* <Image src={DP} alt='user' className='rounded-full' width={45} ></Image> */}
                        <div>
                          <h4 className='font-medium text-[17px]'>{team.teamName}</h4>
                          <h4 className='font-small text-[15px] text-gray-500'>{team.users.length}{' members'}</h4>
                        </div>
                      </div>
                      </div>

                  </Link>
                ))}
              </div>
            </div>
          </div>
          {/* {user?.access === 1 &&  */}
            <div className="bg-white custom-box-shadow rounded-[16px]">
              <div className='p-6 pb-3'>
                <h4 className='text-[20px] font-semibold'>Actions</h4>
              </div>
              <hr></hr>
              <div className="p-6">
                <div className='flex flex-row gap-5'>
                  {user?.locked &&                 
                    <button
                      className={`py-2 px-5 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition-all duration-2000 ${
                        isUnlocking1 ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500'
                      }`}            
                      onClick={handleUnlock}
                      disabled={isUnlocking1}
                    >
                      <div
                        className={`flex items-center justify-center w-auto transition-all duration-2000 ${
                          isUnlocking1 ? 'animate-fade-in' : 'hidden'
                        }`}
                      >
                        <CheckCircle2 className="animate-bounce-on-click" />
                      </div>
                      <div
                        className={`flex flex-row items-center gap-2 transition-all duration-2000 ${
                          isUnlocking1 ? 'animate-fade-out hidden' : 'flex'
                        }`}
                      >
                        <Unlock size={15} />
                        <span>Unlock</span>
                      </div>
                    </button>
                  }
                  {!user?.locked &&                 
                  <button
                    className={`py-2 px-5 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                      isUnlocking ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500'
                    }`}            
  
                    onClick={handleLock}
                    disabled={isUnlocking}
                  >
                    <div
                      className={`flex items-center justify-center w-auto transition-all duration-2000 ${
                        isUnlocking ? 'animate-fade-in' : 'hidden'
                      }`}
                    >
                      <CheckCircle2 className="animate-bounce-on-click" />
                    </div>
                    <div
                      className={`flex flex-row items-center gap-2 transition-all duration-2000 ${
                        isUnlocking ? 'animate-fade-out hidden' : 'flex'
                      }`}
                    >
                      <Lock size={15} />
                      <span>Lock</span>
                    </div>
                  </button>
                }
                  <button                     
                    className={`py-2 px-5 rounded-md text-white font-semibold flex items-center justify-center gap-2 transition-all duration-2000 ${
                      isUnlocking2 ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500'
                    }`}            
                    onClick={handleReset}
                    disabled={isUnlocking2}
                  >
                    <div
                      className={`flex items-center justify-center w-auto transition-all duration-2000 ${
                        isUnlocking2 ? 'animate-fade-in' : 'hidden'
                      }`}
                    >
                      <CheckCircle2 className="animate-bounce-on-click" />
                    </div>
                    <div
                      className={`flex flex-row items-center gap-2 transition-all duration-2000 ${
                        isUnlocking2 ? 'animate-fade-out hidden' : 'flex'
                      }`}
                    >
                      <span>Reset Password</span>
                    </div>
                  </button>
                  <button className="py-2 px-5 bg-red-500 rounded-md text-white font-semibold" onClick={handleDelete}>Delete</button>
                </div>
              </div>
            </div>
          {/* } */}
    </>
  )
}