'use client'

import { Camera } from "lucide-react";
import { useEffect, useState } from "react";
import { getUsers } from "../../people/actions";
import Image from "next/image";
import DP from '@/public/evil-rabbit.png'
import { User } from "@/src/app/lib/definition";
import { createTeam } from "../actions";
import { useRouter } from "next/navigation";
import SnackBar from "@/src/app/ui/SnackBar";


export default function Page() {

  const router = useRouter()

  const [users, setUsers] = useState<User[]>()
  const [teamName, setTeamName] = useState<string>('')
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [disabled, setDisabled] = useState(false)
  const [open, setOpen] = useState(false)
  const [snackColor, setSnackColor] = useState('')
  const [snackMessage, setSnackMessage] = useState('')

  useEffect(() => {
    (async function() { 
      const usersData = await getUsers()
      setUsers(usersData)
    })() 
  }, [])

  async function addOrRemove(_id: string | undefined) {
    if(!_id) return 
    
    const index = selectedUsers?.indexOf(_id)
    if(index !== -1 && index) {
      selectedUsers?.splice(index, 1)
      if(selectedUsers)
        setSelectedUsers([...selectedUsers])
      else
        setSelectedUsers([])
    }
    else{
      if(selectedUsers)
        setSelectedUsers([...selectedUsers, _id])
      else
        setSelectedUsers([_id])
    }
  }

  async function createNewTeam() {
    let res = await createTeam(teamName, selectedUsers)
  
    if (res?._id) {
      setOpen(true)
      setSnackColor('bg-green-500')
      setSnackMessage('Team created successfully')
  
      setTimeout(() => {
        setOpen(false)
        setSnackColor('')
        setSnackMessage('')
        router.push(`${res._id}`);
      }, 5000)
    }
  }

  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Teams / Create Team</h4>
        </div>
        <div className="gap-2">
          <div className="bg-white shadow rounded-[16px]">
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
                      onChange={(e) => setTeamName(e.target.value)}
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 pt-0">
              <div className="relative mt-2 rounded-md col-span-2">
                <div className='mb-2'>
                  <h4 className='font-medium'>Users</h4>
                </div>  
              </div>
              <div className="p-2">
                <div className='grid grid-cols-4 gap-2'>
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
                        <div className='flex items-center  ml-auto'>
                          <input type="checkbox" onClick={() => addOrRemove(user._id)}></input>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold" onClick={() => createNewTeam()} disabled={disabled}>Create Team</button>
                    <button className="py-2 px-5 border-blue-500 border text-blue-500 rounded-md font-semibold">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SnackBar open={open} color={snackColor} message={snackMessage} />
    </>
  )
}