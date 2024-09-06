'use client';
import { projectTabsEmitter } from "@/src/app/lib/events/projectTabsEmitter";
import { useState } from "react";

export default function Tabs() {
  let [tab, setTab] = useState<number>(0)

  const handleEmit = (tab: number) => {
    setTab(tab)
    return projectTabsEmitter.emit('all', tab)
  }

  return (
    <div id="tabs">
      <div className="flex flex-row justify-center gap-6">
        <button className={`py-2 ${tab === 0 && 'border-b-2 border-blue-600'} text-sm font-medium`} onClick={() => handleEmit(0)}>All</button>
        <button className={`py-2 ${tab === 1 && 'border-b-2 border-blue-600'} text-sm font-medium`} onClick={() => handleEmit(1)}>Active</button>
        <button className={`py-2 ${tab === 2 && 'border-b-2 border-blue-600'} text-sm font-medium`} onClick={() => handleEmit(2)}>In Active</button>
        <button className={`py-2 ${tab === 3 && 'border-b-2 border-blue-600'} text-sm font-medium`} onClick={() => handleEmit(3)}>Admin</button>
      </div>
    </div>
  )
}