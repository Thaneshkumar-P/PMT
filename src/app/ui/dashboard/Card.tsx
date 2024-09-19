import { ProjectData } from "../../lib/definition";


export default function Card({ project }: { project: ProjectData}) {
  return (
    <>
      <div className="custom-box-shadow p-6 w-full h-[250px] rounded-2xl flex flex-col">
        <div className="">
          <h4 className="font-medium">{project.deadline}</h4>
        </div>
        <div className="h-full flex-grow flex justify-between items-center p-5">
        <h4 className="font-bold text-2xl text-center flex-grow w-full">
          {project.projectName}
        </h4>
      </div>
        <div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white"></span>
              <span className="text-sm font-medium text-blue-700 dark:text-white">50%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
              <div className="relative bg-blue-600 h-1.5 rounded-full" style={{ width: '50' + '%', zIndex: 1 }}></div>
              <div className="relative bg-blue-200 h-1.5 rounded-full -mt-[6px]" style={{ width: '75' + '%', zIndex: 0 }}></div>
            </div>
            <div className="flex justify-start gap-5 mt-1">
              <span className="text-sm font-medium text-blue-600 dark:text-white">Approved</span>
              <span className="text-sm font-medium text-blue-200 dark:text-white">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}