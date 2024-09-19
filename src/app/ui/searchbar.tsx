'use client'


import { SearchIcon } from "lucide-react";
import { useDebouncedCallback } from 'use-debounce';
import { useSearchParams, usePathname, useRouter } from "next/navigation";



export default function SearchBar({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();



  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);
  

  return (
    <>
      <div className="w-full">
        <div className="relative rounded-md">
          <div className="relative">
            <input
              id="projectSearch"
              name="projectSearch"
              type="text"
              placeholder={placeholder}
              className="border rounded-md w-full input-border text-black placeholder-gray-500 border-gray-300 p-0.5 pb-1.5 pl-10 pt-[0.3rem] outline-none"
              onChange={(e) => {
                handleSearch(e.target.value);
              }}              
              defaultValue={searchParams.get('query')?.toString()}
            />
            <SearchIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 cursor-pointer" width={50} />
          </div>
        </div>
      </div>
    </>
  )
}