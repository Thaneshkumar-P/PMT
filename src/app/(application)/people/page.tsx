import Edit from '@/public/icons/edit.svg'
import Image from 'next/image'
import DP from '@/public/evil-rabbit.png'
import { Plus, Users2 } from 'lucide-react'
import { PerformanceChart, TaskChart } from '@/src/app/ui/charts/Charts'
import { dataPer, dataPie } from '@/src/app/lib/chartData'
import Link from 'next/link'
import Tabs from '@/src/app/ui/people/tabs'
import TabsContent from '@/src/app/ui/people/tabsContent'
import SearchBar from '@/src/app/ui/searchbar'
import ListGrid from '@/src/app/ui/ListGrid'

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
      <div className="p-5 w-full">
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6 flex flex-col gap-5 pb-0">
              <div className="flex items-center flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <h4 className="font-medium text-xl">People</h4>
                </div>
                <div className='flex flex-row gap-3'>
                  <Link href='people/new'>
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                      <Plus size={20}/>
                      Add New User
                    </button>
                  </Link>
                  <Link href='teams/new'>
                    <button className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">
                      <Users2 size={20}/>
                      Create Team
                    </button>
                  </Link>
                </div>
              </div>
              <Tabs />
            </div>
          </div>
          <div>
            <div>
              <div className='flex items-center flex-row justify-between'>
                <div className="w-[30%]">
                  <SearchBar placeholder='Search User' />
                </div>
                <ListGrid />
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-[16px]">
            <div className="p-6 flex flex-col gap-5">
              <div className='grid grid-cols-4 gap-5'>
                <TabsContent query={query}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}