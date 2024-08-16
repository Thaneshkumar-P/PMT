

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="font-medium text-xl">Preferences</h4>
          <p className="font-small text-base text-gray-500"></p>
        </div>
        <hr></hr>
        <div className="flex flex-col gap-5">
          
        </div>
        <div className="flex flex-row gap-5">
          <button className="py-2 px-5 bg-blue-500 rounded-md text-white font-semibold">Save Changes</button>
          <button className="py-2 px-5 border-blue-500 border rounded-md text-blue-500 font-semibold">Cancel</button>
        </div>
      </div>
    </>
  )
}