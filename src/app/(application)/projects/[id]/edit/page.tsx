'use client'

import CustomFields from "@/src/app/ui/projects/CustomFields";
import CustomFieldsSelector from "@/src/app/ui/projects/CustomFieldsSelector";
import { useEffect, useState } from "react";
import { getTeam, getTeams } from "../../../teams/actions";
import { Project, Team, User } from "@/src/app/lib/definition";
import TeamCard from "@/src/app/ui/teams/teamsCard";
import { createProject, getProjectById, updateProject } from "../../actions";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Page() {

  const { id }: { id: string } = useParams()
  const router = useRouter()

  const [customFields, setCustomFields] = useState<any>({});
  const [teams, setTeams] = useState<Team[]>()
  const [selectedTeam, setSelectedTeam] = useState<User[]>()
  const [project, setProject] = useState<Project>({
    _id: '',
    name: '',
    type: '',
    startDate: new Date(),
    endDate: new Date(),
    status: 'Drafted',
    description: '',
    priority: '',
    approved: 0,
    completed: 0,
    settings: {
      access: [],
      assigned: false,
      mentioned: false,
      isDue: false
    },
    team: ''  
  })

  useEffect(() => {
    (async function() {
      const response = await getProjectById(id)
      setProject(response)
      setCustomFields(response.additional)
    })()
  }, [id])



  function updateState(field: keyof Project, value: string | number): void {
    setProject({
      ...project,
      [field]: value
    });

    // validateField(field, value);
  }


  useEffect(() => {
    (async function() {
      const teamsData = await getTeams()
      setTeams(teamsData)
    })()
  }, [])

  function handleCustomFieldChange(id: string, value: string): void {
    setCustomFields({
      ...customFields,
      [id]: value
    });
  }

  async function getSelectedTeam(id: string) {    
    const team = await getTeam(id)
    setSelectedTeam(team.users)
    setProject({
      ...project,
      team: id
    })
    return;
  }

  async function handleSave() {

    const completeProject = {
      ...project,
      additional: customFields
    }

    console.log(completeProject)

    const res = await updateProject(id, completeProject)

    if(res._id){
      toast.success('Project updated successfully', {
        style: {
          backgroundColor: 'green',
          color: '#fff'
        }
      })
      router.replace(`/projects/${res._id}`)
    }
    else{
      toast.error('Validation Error', {
        style: {
          backgroundColor: '#f30000',
          color: '#fff'
        }
      })
    }

  }

  return (
    <>
      <div className="p-5 w-full">
        <div className="flex flex-row justify-between mb-3">
          <h4 className="text-md font-medium bold text-gray-500">Projects / Edit Project</h4>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="bg-white shadow col-span-3 rounded-[16px]">
            <div className="p-6">
              <div className='grid grid-cols-4 gap-3'>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='projectTitle' className='font-medium'>Project title</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="projectTitle"
                      name="projectTitle"
                      type={"text"}
                      placeholder="Project Title"
                      value={project.name}
                      onChange={(e) => updateState('name', e.target.value)}
                      className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='projectType' className='font-medium'>Project type</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="projectType"
                      name="projectType"
                      type="text"
                      value={project.type}
                      placeholder="Project Type"
                      onChange={(e) => updateState('type', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='startDate' className='font-medium'>Start date</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={new Date(project.startDate).toISOString().substring(0, 10)}
                      onChange={(e) => updateState('startDate', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='endDate' className='font-medium'>End date</label>
                  </div>  
                  <div className="relative">
                    <input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={new Date(project.endDate).toISOString().substring(0, 10)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-4">
                  <div className='mb-2'>
                    <label htmlFor='description' className='font-medium'>Project Description</label>
                  </div>  
                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      placeholder="Project Description"
                      value={project.description}
                      onChange={(e) => updateState('description', e.target.value)}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none resize-none"
                    />
                  </div>
                </div>
                <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='priority' className='font-medium'>Priority</label>
                  </div>  
                  <div className="relative">
                    <select
                      id="priority"
                      name="priority"
                      value={project.priority}
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                      onChange={(e) => updateState('priority', e.target.value)}
                      defaultValue=""
                    >
                      <option value="" disabled>Choose Priority</option>
                      <option value={'High'}>High</option>
                      <option value={'Medium'}>Medium</option>
                      <option value={'Low'}>Low</option>
                    </select>
                  </div>
                </div>
                {/* <div className="relative mt-2 rounded-md col-span-2">
                  <div className='mb-2'>
                    <label htmlFor='team' className='font-medium'>Team</label>
                  </div>  
                  <div className="relative">
                    <select
                      id="team"
                      name="team"
                      className="border rounded-md pt-[11px] pb-[11px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 outline-none"
                      value={project.team}
                      onChange={(e) => getSelectedTeam(e.target.value)}
                    >
                      <option value="" disabled>Choose Team</option>
                      {teams?.map(team => (
                        <option value={team._id} key={team._id} >{team.teamName}</option>
                      ))}
                    </select>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <hr></hr>
            <div className='p-6'>
              <TeamCard users={selectedTeam} />
            </div> */}
            <hr></hr>
            <div className='p-6'>
              <CustomFields id="project" onChange={handleCustomFieldChange} additional={customFields} />
            </div>
            <hr></hr>
            <div>
              <div className="p-6">
                <div className="w-full">
                  <div className="flex flex-row-reverse w-full items-center gap-5">
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2" onClick={handleSave}>Save</button>
                    <button className="py-1.5 px-5 border border-blue-500 text-blue-500 rounded-md bg-white font-semibold flex items-center gap-2 hover:bg-gray-100 ">Clear</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow col-span-3 rounded-[16px]">
              <div className="p-6">
                <CustomFieldsSelector id="project" additional={customFields} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}