'use client'

import { Grid3X3, List } from "lucide-react"
import { useState } from "react"
import { ListGridEmitter } from "../lib/events/projectTabsEmitter"

export default function ListGrid() {

  const [selected, setSelected] = useState(2)

  const handleEmit = (tab: number) => {
    setSelected(tab)
    return ListGridEmitter.emit('ListGrid', tab)
  }


  return (
    <>
      <div className='flex gap-3'>
        <div className={`p-1.5 ${selected === 1 ? 'bg-blue-100' : ''} rounded-md hover:bg-blue-50`} onClick={() => handleEmit(1)}>
          <List color={selected === 1 ? 'blue' : 'black'} />
        </div>
        <div className={`p-1.5 ${selected === 2 ? 'bg-blue-100' : ''} rounded-md hover:bg-blue-50`} onClick={() => handleEmit(2)}>
          <Grid3X3 color={selected === 2 ? 'blue' : 'black'} />
        </div>
      </div>
    </>
  )
}