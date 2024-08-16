

export default function Page() {
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
          <button className="py-2 px-7 bg-red-500 rounded-md text-white font-semibold">Delete</button>
        </div>
      </div>
    </>
  )
}