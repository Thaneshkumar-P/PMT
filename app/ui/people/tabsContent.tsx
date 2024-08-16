'use client'
import { ListGridEmitter, projectTabsEmitter } from "@/app/lib/events/projectTabsEmitter"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import DP from '@/public/evil-rabbit.png'
import { projects } from "@/app/lib/projectData"
import { UserData } from "@/app/lib/user"
import { User } from "@/app/lib/definition"
import { Activity, ArrowLeft, ArrowRight, Mail, User as UserIcon } from "lucide-react"

export default function TabsContent({
  query,
}: {
  query: string;
}) {
  const [tab, setTab] = useState(0)
  const [view, setView] = useState(2)
  const [data, setData] = useState<User[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 8 

  useEffect(() => {
    const handleLayout = (value: number) => setView(value)
    ListGridEmitter.on('ListGrid', handleLayout)
    return () => {
      ListGridEmitter.off('ListGrid', handleLayout)
    }
  }, [view])

  useEffect(() => {
    const handleUpdate = (value: number) => setTab(value)
    
    let filteredData = UserData

    if (tab === 1) {
      filteredData = UserData.filter(project => project.status === 'Active')
    } else if (tab === 2) {
      filteredData = UserData.filter(project => project.status === 'In Active')
    } else if (tab === 3) {
      filteredData = UserData.filter(project => project.type === 'Admin')
    }

    if (query) {
      const lowerCaseQuery = query.toLowerCase()
      filteredData = filteredData.filter(project =>
        project.username.toLowerCase().includes(lowerCaseQuery) ||
        project.userId.toLowerCase().includes(lowerCaseQuery)
      )
    }

    setData(filteredData)
    setCurrentPage(1)
    projectTabsEmitter.on('all', handleUpdate)

    return () => {
      projectTabsEmitter.off('all', handleUpdate)
    }
  }, [tab, query])

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentUsers = data.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(data.length / projectsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1)
    }
  }

  return (
    <>
      {currentUsers.map(user => (
        <Link href={`people/${user.userId}`} key={user.userId} className={`${view === 1 ? 'col-span-4' : ''}`}>
          <div className={`border ${view === 1 ? 'flex flex-row items-center gap-5' : ''} border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300`}>
            <div className='flex flex-row gap-5'>
              <Image src={DP} alt='user' className='rounded-full' width={45} ></Image>
              <div>
                <h4 className='font-medium text-[17px]'>{user.username}</h4>
                <h4 className='font-small text-[15px] text-gray-500'>{user.role}</h4>
              </div>
            </div>
            <div className={`flex ${view === 1 ? 'flex-row gap-16 justify-evenly': 'flex-col gap-4 mt-4'}`}>
              <div className='flex flex-row gap-3 items-center'>
                <Mail size={20}/>
                <h4 className='font-small text-[15px] text-gray-500'>{user.email}</h4>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <UserIcon size={20} />
                <h4 className='font-small text-[15px] text-gray-500'>{user.type}</h4>
              </div>
              <div className='flex flex-row gap-3 items-center'>
                <Activity size={20}/>
                <h4 className='font-small text-[15px] text-gray-500'>{user.status}</h4>
              </div>
            </div>
          </div>
        </Link>      
      ))}
      <div className="flex items-center gap-4 mt-5 col-span-4 justify-center">
        <button 
          onClick={handlePrevPage} 
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-600/10 active:bg-blue-600/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          <ArrowLeft width={15}/>
          Previous
        </button>
        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase transition-all ${
                currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-blue-600/10 active:bg-blue-600/20'
              }`}
              type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                {index + 1}
              </span>
            </button>
          ))}
        </div>
        <button 
          onClick={handleNextPage} 
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-600 uppercase align-middle transition-all rounded-lg select-none hover:bg-blue-600/10 active:bg-blue-600/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button">
          Next
          <ArrowRight width={15}/>
        </button>
      </div>
    </>
  )
}
