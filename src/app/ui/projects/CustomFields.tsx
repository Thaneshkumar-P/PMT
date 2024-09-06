'use client'

import { useEffect, useState } from "react"
import { projectFieldsEmitter } from "@/src/app/lib/events/projectTabsEmitter";
import { customFields, getUsed } from "../../(application)/people/actions";

interface Data {
  fieldName: string;
  fieldType: string;
  value: boolean;
  fieldFor: string
}

export default function CustomFields({id, onChange, additional}: {id: string, onChange: (name: string, value: any) => void, additional?: any}) {
  const [fields, setFields] = useState<Data[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newFieldName, setNewFieldName] = useState("")
  const [newFieldType, setNewFieldType] = useState("")

  useEffect(() => {
    if (additional) {
      const fetchData = async () => {
        let usedFields = Object.keys(additional);
        let customFieldsData: Data[] = await getUsed(usedFields);

        for (let field of customFieldsData) {
          if (usedFields.includes(field.fieldName)) {
            field.value = true;
          } else {
            field.value = false;
          }
        }
        setFields(customFieldsData);
      };
      fetchData();
    }
  }, [additional]);

  useEffect(() => {
    let data = (value: Data) => {
      console.log(value);
      if (!fields) {
        setFields([value]);
      }

      let isAvailable = fields.findIndex((field: Data) => field.fieldName === value.fieldName);
      if (isAvailable !== -1) {
        fields.splice(isAvailable, 1);
      } else {
        fields.push(value);
      }
      setFields([...fields]);
    };

    projectFieldsEmitter.on('addOrRemove', data);

    return () => {
      projectFieldsEmitter.off('addOrRemove', data);
    };
  }, [fields]);

  const handleCreateField = async () => {
    if (newFieldName && newFieldType) {
      let field = await customFields(newFieldName, newFieldType, id);

      if (field.ok) {
        const newField = { fieldName: newFieldName, fieldType: newFieldType, value: true, fieldFor: id };
        setFields(prevFields => prevFields ? [...prevFields, newField] : [newField]);
        setNewFieldName("");
        setNewFieldType("");
        setIsModalOpen(false);

        projectFieldsEmitter.emit('update', newField);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='flex justify-between items-center'>
        <h4 className='font-medium text-md'>Custom Fields</h4>
        <button onClick={handleOpenModal} className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
      </div>
      <div className='grid grid-cols-4 gap-3'>
        {fields?.map((field, index) => (
          <div className="relative mt-2 rounded-md col-span-2" key={index}>
            <div className='mb-2'>
              <label htmlFor={field.fieldName} className='font-medium'>{field.fieldName}</label>
            </div>  
            <input
              id={field.fieldName}
              name={field.fieldName}
              type={field.fieldType}
              placeholder={field.fieldName}
              value={additional?.[field.fieldName] || ""}
              onChange={(e) => onChange(field.fieldName, e.target.value)}
              className="custom-field border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
            />
          </div>
        ))}
      </div>
      {fields.length === 0 && (
        <div className='flex justify-center items-center flex-col gap-1'>
          <h4 className='text-center text-gray-500'>No custom fields are added</h4>
          <h4 className='text-center text-gray-500'>Press the below button to create new fields</h4>
          <div className='flex justify-center'>
            <button onClick={handleOpenModal} className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
          </div>
        </div>
      )}
      
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleCloseModal}></div>
          <dialog open className="z-50">
            <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 justify-center items-center w-full h-full">
              <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Add new field</h3>
                    <button onClick={handleCloseModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative mt-2 rounded-md col-span-2">
                        <div className='mb-2'>
                          <label htmlFor='fieldName' className='font-medium'>Field Name</label>
                        </div>  
                        <input
                          id="fieldName"
                          name="fieldName"
                          type="text"
                          value={newFieldName}
                          onChange={(e) => setNewFieldName(e.target.value)}
                          placeholder="Field Name"
                          className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                        />
                      </div>
                      <div className="relative mt-2 rounded-md col-span-2">
                        <div className='mb-2'>
                          <label htmlFor='type' className='font-medium'>Field Type</label>
                        </div>  
                        <select
                          id="type"
                          value={newFieldType}
                          onChange={(e) => setNewFieldType(e.target.value)}
                          className="border rounded-md pt-[12px] pb-[12px] pl-[14px] pr-[14px] w-full input-border text-black placeholder-gray-300 border-gray-300 pb-2 outline-none"
                        >
                          <option value="" disabled>Choose type</option>
                          <option value="text">Text</option>
                          <option value="number">Number</option>
                          <option value="date">Date</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-row-reverse gap-5 p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button onClick={handleCreateField} type="button" className="py-1.5 px-5 bg-blue-500 rounded-md text-white font-semibold flex items-center gap-2">Create</button>
                    <button onClick={handleCloseModal} type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </>
      )}
    </>
  );
}
