'use client'

import clsx from "clsx";
import { Cog } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
  { name: 'Perferences', href: 'preferences', icon: Cog },
  { name: 'Access Control', href: 'access', },
  { name: 'Notification', href: 'notification', },
  { name: 'Delete', href: 'delete', },
];

export default function SettingsNavBar() {

  let pathname = usePathname()

  return (
    <>
      {links.map(x => (
        <Link href={x.href} key={x.name}>
          <div className={clsx("pl-5 py-3 h-[50px]",
            {
              'border-r-[3px] border-blue-600 text-start bg-blue-100': (pathname.split('/').pop()) === x.href
            }
          )} >
            <div className="flex flex-row gap-2 items-center">
              {/* <Cog size={18} className="mt-0.5" color="#2F6FEB"/> */}
              <h4 className={clsx("font-medium text-md",
                {
                  'text-blue-600': (pathname.split('/').pop()) === x.href
                },
                {
                  'text-gray-400': (pathname.split('/').pop()) !== x.href
                }
              )}>{x.name}</h4>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}