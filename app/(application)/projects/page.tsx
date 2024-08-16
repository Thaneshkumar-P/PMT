import Image from "next/image";
import DP from '@/public/evil-rabbit.png'
import Issue from '@/public/icons/folder-alert.svg'
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import Tabs from "@/app/ui/projects/tabs";
import TabsContent from "@/app/ui/projects/tabsContent";
import { Suspense } from "react";
import SearchBar from "@/app/ui/searchbar";


export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {

  const query = searchParams?.query || '';


  return (
    <>
      <div className="min-h-screen m-5 flex flex-col w-full">
        <div className="flex flex-col mb-3 p-5 pb-0 bg-white rounded-2xl custom-box-shadow">
          <div className="flex flex-row justify-between">
            <h4 className="text-[23px] font-medium bold">Projects</h4>
            <div className="flex items-center justify-center gap-5">
              <div className="w-[35%]">
                <Link href='projects/new'>
                <button className="py-1 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
                </Link>
              </div>
              <SearchBar placeholder="Search Project" />
            </div>
          </div>
          <Tabs />
        </div>
        <div className="w-full h-full mt-4">
          <div className="grid grid-cols-3 gap-8 grid-rows-2">
            <Suspense fallback={<h4>Loading</h4>}>
              <TabsContent query={query}/>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  )
}
