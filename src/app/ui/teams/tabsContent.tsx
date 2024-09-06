'use client'
import { ListGridEmitter, projectTabsEmitter } from "@/src/app/lib/events/projectTabsEmitter"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import DP from '@/public/evil-rabbit.png'
import { Team } from "@/src/app/lib/definition"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { getTeams } from "../../(application)/teams/actions"

export default function TabsContent({
  query,
}: {
  query: string;
}) {
  const [tab, setTab] = useState(0)
  const [view, setView] = useState(2)
  const [TeamData, setPeople] = useState<Team[]>([])
  const [data, setData] = useState<Team[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 8 


  useEffect(() => {
    
    (async function() {
      const Teams = await getTeams();
      setPeople(Teams)
    })()
  }, [])

  useEffect(() => {
    const handleLayout = (value: number) => setView(value)
    ListGridEmitter.on('ListGrid', handleLayout)
    return () => {
      ListGridEmitter.off('ListGrid', handleLayout)
    }
  }, [view])

  useEffect(() => {
    
    let filteredData = TeamData

    if (query) {
      const lowerCaseQuery = query.toLowerCase()
      filteredData = filteredData.filter(project =>
        project.teamName.toLowerCase().includes(lowerCaseQuery)
      )
    }

    setData(filteredData)
    setCurrentPage(1)

  }, [tab, query, TeamData])

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentTeams = data && data?.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math?.ceil(data.length / projectsPerPage)

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
      {currentTeams.map(Team => (
        <Link href={`teams/${Team._id}`} key={Team._id}>
          <div className='border border-gray-300 rounded-md p-4 custom-box-shadow hover:-translate-y-1 duration-300'>
            <div className='flex flex-row gap-5'>
              <Image src={DP} alt='Team' className='rounded-full' width={45} ></Image>
              <div>
                <h4 className='font-medium text-[17px]'>{Team.teamName}</h4>
                <h4 className='font-small text-[15px] text-gray-500'>{Team.users.length+ ' ' + ' Members'}</h4>
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
