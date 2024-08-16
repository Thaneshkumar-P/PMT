'use client'
import { projectTabsEmitter } from "@/app/lib/events/projectTabsEmitter"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import DP from '@/public/evil-rabbit.png'
import Issue from '@/public/icons/folder-alert.svg'
import { projects } from "@/app/lib/projectData"
import { ProjectData } from "@/app/lib/definition"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function TabsContent({
  query,
}: {
  query: string;
}) {
  const [tab, setTab] = useState(0)
  const [data, setData] = useState<ProjectData[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6 

  useEffect(() => {
    const handleUpdate = (value: number) => setTab(value)
    
    let filteredData = projects

    if (tab === 1) {
      filteredData = projects.filter(project => project.status === 'Completed')
    } else if (tab === 2) {
      filteredData = projects.filter(project => project.status === 'Incomplete')
    } else if (tab === 3) {
      filteredData = projects.filter(project => project.assignedToYou === true)
    }

    if (query) {
      const lowerCaseQuery = query.toLowerCase()
      filteredData = filteredData.filter(project =>
        project.projectName.toLowerCase().includes(lowerCaseQuery) ||
        project.description.toLowerCase().includes(lowerCaseQuery) ||
        project.status.toLowerCase().includes(lowerCaseQuery)
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
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject)
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
      {currentProjects.map(project => (
        <Link href={`projects/${project.projectId}`} key={project.projectId}>
          <div className="w-full h-full p-5 pl-7 pe-7 custom-box-shadow rounded-2xl bg-white flex flex-col">
            <div className="flex justify-between flex-row items-center border-b-2">
              <div className="flex flex-row items-center gap-2">
                <h4 className="bold font-medium">{project.projectName}</h4>
              </div>
              <h4 className="p-1 pl-3 pe-3 mb-1 rounded bg-green-100 text-[#00dc3a] text-nowrap bold font-medium">{project.status}</h4>
            </div>
            <div className="mt-5 mb-5 text-sm text-justify flex grow">
              {project.description}
            </div>
            <div>
              <div className="mb-2">
                <h4 className="text-[#ff0000] font-medium text-sm">Deadline: {project.deadline}</h4>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-end">
                  <div className="overflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                    <Image src={DP} alt='DP' width={35} className='rounded-full'/>
                  </div>
                  <div className="overflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                    <Image src={DP} alt='DP' width={35} className='rounded-full'/>
                  </div>                   
                  <div className="overflow-clip border-[2px] border-white rounded-full ml-[-8px]">
                    <Image src={DP} alt='DP' width={35} className='rounded-full'/>
                  </div>                    
                  <div className="overflow-clip border-white border-[2px] rounded-full ml-[-8px]">
                    <Image src={DP} alt='DP' width={35} className='rounded-full'/>
                  </div>
                  <div className="overflow-clip border-white border-[2px] rounded-full ml-[-8px] w-[40px] h-[40px] bg-gray-500 flex justify-center items-center text-white pb-0.5">
                    +3
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1.5">
                  <Image src={Issue} alt='Issue' width={20} className='rounded-full'/>
                  <h4>14 Issue</h4>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <div className="flex items-center gap-4 mt-5 col-span-3 justify-center">
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
