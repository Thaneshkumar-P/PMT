import SettingsNavBar from "@/app/ui/projects/settings/navbar"
import { Bell, Cog, Delete, DeleteIcon, Trash } from "lucide-react"


export default function ProjectSettingsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="p-5 w-full h-auto grow">
        <div className="bg-white custom-box-shadow rounded-[16px]">
          <div className="flex flex-row pt-6 pb-6">
            <div className="w-[200px]">
              <div className="flex flex-col gap-1">
                <SettingsNavBar />
              </div>
            </div>
            <div className="w-full pt-3 px-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}