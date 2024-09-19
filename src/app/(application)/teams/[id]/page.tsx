'use client'

import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Camera, Edit3Icon, Plus, SearchIcon, X } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { deleteTeam, getTeam } from '../actions'
import { Team, User } from '@/src/app/lib/definition'
import SnackBar from '@/src/app/ui/SnackBar'
import { useRouter } from 'next/navigation'
import TeamCard from '@/src/app/ui/teams/teamsCard'

export default function Page() {

  const { id }: { id: string } = useParams()
  const router = useRouter()

  const [users, setUsers] = useState<User[]>()
  const [team, setTeam] = useState<Team>()
  const [disabled, setDisabled] = useState(false)
  const [open, setOpen] = useState(false)
  const [snackColor, setSnackColor] = useState('')
  const [snackMessage, setSnackMessage] = useState('')

  useEffect(() => {
    (async function() { 
      const teamData = await getTeam(id)
      setTeam(teamData.team)
      setUsers(teamData.users)
    })() 
  }, [])

  async function handleDeleteTeam() {
    setDisabled(true)
    const res = await deleteTeam(id)

    if (res?._id) {
      setOpen(true)
      setSnackColor('bg-green-500')
      setSnackMessage('Team Deleted successfully')
  
      setTimeout(() => {
        setOpen(false)
        setSnackColor('')
        setSnackMessage('')
        router.replace(`/teams`);
      }, 2500)
    }
    else{
      setDisabled(false)
    }

  }

  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-4 gap-5">
          <div className='col-span-1 row-span-full'>
            <div className="bg-white custom-box-shadow rounded-[16px]">
              <div className='p-6'>
                <div className='flex flex-row-reverse'>
                  <Link href={`${id}/edit`}>
                    <Edit3Icon />
                  </Link>
                </div>
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
                      <h4 className='font-medium text-2xl'>{team?.teamName}</h4>
                    </div>
                    <div className='flex flex-col gap-5 items-center'>
                      <h4 className='font-medium text-base'>{(team?.users.length || '') + ' ' + 'Members'}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white custom-box-shadow rounded-[16px] col-span-3">
            <div className='p-6 pb-3 flex items-center'>
              <h4 className='text-[20px] font-semibold'>Teams</h4>
              <div className='flex flex-row items-center gap-4 ml-auto'>
                {/* <div className="animate-in">
                  <div className="relative rounded-md">
                    <div className="relative">
                      <input
                        id="teamSearch"
                        name="teamSearch"
                        type="text"
                        placeholder="Search Team"
                        className="border rounded-md w-full input-border text-black placeholder-gray-400 border-gray-300 p-0.5 pb-1.5 pl-10 outline-none"
                      />
                      <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" width={50} />
                    </div>
                  </div>
                </div>
                <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                  <Plus size={20}/>
                  Add User
                </button> */}
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <Suspense fallback={<h4>Loading</h4>}>
                <TeamCard users={users} />
              </Suspense>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className='flex flex-row gap-5'>
                {/* <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Save</button> */}
                <button className="py-2 px-5 bg-red-500 rounded-md text-white font-semibold" disabled={disabled} onClick={handleDeleteTeam}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SnackBar open={open} color={snackColor} message={snackMessage} />
    </>
  )
}