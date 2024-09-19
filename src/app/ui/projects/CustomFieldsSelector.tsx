'use client'

import { projectFieldsEmitter } from "@/src/app/lib/events/projectTabsEmitter";
import { useEffect, useState } from "react";
import { getCustomFields } from "../../(application)/people/actions";

interface Data {
  fieldName: string;
  fieldType: string;
  value: boolean;
  fieldFor: string;
}

export default function CustomFieldsSelector({ id, additional }: { id: string, additional?: any }) {

  const [fields, setFields] = useState<Data[]>([]);

  useEffect(() => {
    (async function () {
      let customFields: Data[] = await getCustomFields(id);
      let usedFields: any = []
      if(additional)
        usedFields=  Object.keys(additional);
      for (let field of customFields) {
        if (usedFields.includes(field.fieldName)) field['value'] = true;
        else field['value'] = false;
      }
      setFields(customFields);

    })();
  }, [id, additional]);

  useEffect(() => {
    let data = (value: Data) => setFields((prevFields) => (prevFields ? [...prevFields, value] : [value]));
    projectFieldsEmitter.on('update', data);
    return () => {
      projectFieldsEmitter.off('update', data);
    };
  }, [fields]);

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
          {fields?.filter(field => field.fieldFor === id)?.map((field, index) => (
            <div className='flex gap-4 items-center p-2 pl-3 pe-3' key={field.fieldName}>
              <input type='checkbox' className='bg-blue-400 mt-1 w-3' checked={field.value} id={field.fieldName} onChange={() => handleFields(field, index)} />
              <h4 className='font-medium text-md'>{field.fieldName}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
