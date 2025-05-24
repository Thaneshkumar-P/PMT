'use client'

import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { ChevronRight, CogIcon, Edit3Icon, FolderArchive, FolderDot, FolderIcon, MoreVertical, Settings } from 'lucide-react'
import { dataPer, dataPie } from '@/src/app/lib/chartData'
import Link from 'next/link'
import GanttChart from '@/src/app/ui/projects/Gantt'
import { getProjectById } from '../actions'
import { useParams } from 'next/navigation'
import { Project, Team } from '@/src/app/lib/definition'
import { format } from 'date-fns'
import { useEffect, useState } from 'react'
import { getTeam } from '../../teams/actions'
import dynamic from 'next/dynamic'

const TaskChart = dynamic(() => import('../../../ui/charts/Charts').then(mod => mod.TaskChart), {
  ssr: false,
});
const PerformanceChart = dynamic(() => import('../../../ui/charts/Charts').then(mod => mod.PerformanceChart), {
  ssr: false,
});



export default function Page() {

  const { id }: { id: string } = useParams()
  const [project, setProject] = useState<Project>()
  const [team, setTeam] = useState<Team>()

  const phases = [
    {
      name: 'Planning',
      status: 'In Progress',
      startDate: new Date('2024-10-01'),
      endDate: new Date('2024-10-10'),
    },
    {
      name: 'Development',
      status: 'Pending',
      startDate: new Date('2024-10-11'),
      endDate: new Date('2024-10-30'),
    },
  ];
  
  useEffect(() => {
    (async function() {
      const response = await getProjectById(id)
      setProject(response)
      const interval = setInterval(() => getProjectTeam(), 500)
      if(team) {
        clearInterval(interval)
        console.log(team)
      }
    })()
  }, [])

  async function getProjectTeam() {
    if(project?.team) {
      console.log(project)
      const teamResponse = await getTeam(project.team)
      setTeam(teamResponse)
    }
  }
  
  return (
    <>
      <div className="p-5 w-full">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-white shadow col-span-2 rounded-[16px]">
            <div className="p-6">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">{project?.name}</h4>
                </div>
                <div>
                  <Link href={`${id}/edit`}>
                    <h4 className="font-medium text-xl p-3"><Edit3Icon color='gray' width={25}/></h4> 
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-[14px] font-small text-justify" style={{ lineHeight: 1.75 }}>{project?.description}</p>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="flex flex-row gap-3 mb-4">
                <h4 className="font-medium text-xl">Basic Details</h4>
              </div>
              <div className='grid grid-cols-3 gap-y-5'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Project Type</h4>
                  <h4 className='text-md font-semibold text-black'>{project?.type}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Start Date</h4>
                  <h4 className='text-md font-semibold text-black'>{format(project?.startDate ?? new Date(), 'PPPP')}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>End Date</h4>
                  <h4 className='text-md font-semibold text-black'>{format(project?.endDate  ?? new Date(), 'PPPP')}</h4>
                </div>
                <div>
                  <h4 className='text-sm font-semibold text-gray-500'>Priority</h4>
                  <h4 className='text-md font-semibold text-black'>{project?.priority}</h4>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="grid grid-cols-1 gap-5">
              <div className='grid grid-col-1'>
                  <div>
                    <div className="flex flex-row justify-start gap-4 items-center mb-2">
                      <h4 className="font-medium text-xl">Progress</h4>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-blue-700 dark:text-white"></span>
                        <span className="text-sm font-medium text-blue-700 dark:text-white">{project?.approved}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                        <div className="relative bg-blue-600 h-1.5 rounded-full" style={{ width: `${project?.approved}%`, zIndex: 1 }}></div>
                        <div className="relative bg-blue-200 h-1.5 rounded-full -mt-[6px]" style={{ width: `${project?.completed}%`, zIndex: 0 }}></div>
                      </div>
                      <div className="flex justify-start gap-5 mt-1">
                        <span className="text-sm font-medium text-blue-600 dark:text-white">Approved</span>
                        <span className="text-sm font-medium text-blue-200 dark:text-white">Completed</span>
                      </div>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>  
                <div>
                  <div className="flex flex-row justify-start gap-4 items-center mb-2">
                    <Link href={`${id}/phases`} className='flex items-center'>
                      <h4 className="font-medium text-xl">Phases</h4>
                      <ChevronRight color='gray'/>
                    </Link>
                  </div>
                  <div className=''>
                    <div className="mx-auto">
                      <GanttChart 
                        phases={phases}
                        projectStartDate={new Date('2024-10-01')}
                        projectEndDate={new Date('2024-10-31')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className="p-6">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">Analytics</h4>
                </div>
                <div>
                  <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                </div>
              </div>
              <div>
                <div>
                  <TaskChart data={dataPie} />
                </div>
                <div>
                  <PerformanceChart data={dataPer} />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Apps</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <FolderIcon size={50} />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>File Manager</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Files</h4>                
                    </div>
                    <div className='ml-auto mr-3'>
                      <h4 className='font-medium text-md'><ChevronRight /></h4>
                    </div>
                  </div>
                  <Link href={`${id}/settings`}>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Settings size={50} />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Settings</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Project Customization</h4>                
                    </div>
                    <div className='ml-auto mr-3'>
                      <h4 className='font-medium text-md'><ChevronRight /></h4>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white shadow rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Custom Details</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  {project?.additional && Object.keys(project.additional).length > 0 ? (
                    Object.keys(project.additional).map((addInfo: any) => (
                      <div key={addInfo}>
                        <h4 className='text-sm font-semibold text-gray-500'>{addInfo}</h4>
                        <h4 className='text-md font-semibold text-black'>{project.additional?.[addInfo]}</h4>
                      </div>
                    ))
                  ) : (
                    <p>No additional information available</p>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-white shadow col-span-2 rounded-[16px]">
              <div className="p-6">
                <div className="flex items-center flex-row justify-between">
                  <div className="flex flex-row gap-3">
                    <h4 className="font-medium text-xl">Teams</h4>
                  </div>
                  <div>
                    <h4 className="font-medium text-xl p-3"><MoreVertical color='gray' width={18}/></h4> 
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <Image src={DP} alt='folder' width={40} className='rounded-full' />
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-md'>Member Name</h4>
                      <h4 className='font-medium text-sm text-gray-500'>Role</h4>                
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <div>
                      <div className="overflow-clip border-white border-[2px] rounded-full w-[45px] h-[45px] bg-gray-500 flex justify-center items-center text-white pb-0.5">
                        +3
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <h4 className='font-medium text-sm text-black underline'>view all</h4>                
                    </div>
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