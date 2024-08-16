'use client'

import { projectFieldsEmitter } from "@/app/lib/events/projectTabsEmitter"
import { useEffect, useState } from "react"

interface Data {
  name: string;
  type: string;
  value: boolean;
}

export default function CustomFieldsSelector() {

  const [fields, setFields] = useState<Data[]>()

  useEffect(() => {
    let data = (value: Data) => setFields((prevFields) => (prevFields ? [...prevFields, value] : [value]));
    projectFieldsEmitter.on('update', data)
    return () => {
      projectFieldsEmitter.off('update', data)
    }
  }, [fields])

  const handleFields = (tab: Data, index: number) => {
    if (!fields) return;
  
    fields[index].value = !tab.value;
    setFields([...fields]);
  
    return projectFieldsEmitter.emit('addOrRemove', tab);
  }
  

  return (
    <>
      <div>
        <h4 className='font-medium text-md'>Custom Fields</h4>
      </div>
      <div className='p-2'>
        <div className='flex flex-col gap-3'>
          {fields?.map((field, index) => (
            <div className='flex gap-4 items-center p-2 pl-3 pe-3' key={field.name}>
              <input type='checkbox' className='bg-blue-400 mt-1 w-3' checked={field.value} id={field.name} onChange={() => handleFields(field, index)}/>
              <h4 className='font-medium text-md'>{field.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}