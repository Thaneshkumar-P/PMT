'use client'

import { useParams, useRouter } from "next/navigation"
import { deleteProject } from "../../../actions"
import { toast } from "sonner"


export default function Page() {

  const { id }: { id: string } = useParams()
  const router = useRouter()

  async function handleDelete() {
    const res = await deleteProject(id)

    if(res.status){
      toast.success('Project Deleted successfully', {
        style: {
          backgroundColor: 'green',
          color: '#fff'
        }
      })
      router.replace('/projects')
    }
    else{
      toast.error('Operation Failed: Not Deleted', {
        style: {
          backgroundColor: '#f30000',
          color: '#fff'
        }
      })
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="font-medium text-xl">Delete Project</h4>
          <p className="font-small text-base text-gray-500">When you delete the project it will be deleted permanently.</p>
        </div>
        <hr></hr>
        <div className="flex flex-row gap-2 items-center ">
          <input type="checkbox" className="mt-1" ></input>
          <h4 className="font-bold text-base">When you delete the project it will be deleted permanently</h4>
        </div>
        <div>
          <button className="py-2 px-7 bg-red-500 rounded-md text-white font-semibold" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  )
}