'use client';

import Link from 'next/link';
// import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import HomeIcon from '@/public/icons/home-variant.svg'
import FolderIcon from '@/public/icons/folder.svg'
import TaskIcon from '@/public/icons/pen.svg'
import LogIcon from '@/public/icons/list-box.svg'
import SettingsIcon from '@/public/icons/cog.svg'
import PerformanceIcon from '@/public/icons/poll.svg'
import Image from 'next/image'
import clsx from 'clsx';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Projects', href: '/projects', icon: FolderIcon },
  // { name: 'Tasks', href: '/tasks', icon: TaskIcon },
  // { name: 'Logs', href: '/logs', icon: LogIcon },
  // { name: 'Performance', href: '/performance', icon: PerformanceIcon },
  { name: 'People', href: '/people', icon: PerformanceIcon },
  { name: 'Teams', href: '/teams', icon: PerformanceIcon },
  // { name: 'Settings', href: '/settings', icon: SettingsIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx('flex grow items-center  justify-center gap-2 rounded-md p-1 text-sm font-medium hover:bg-blue-100 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-blue-200 text-blue-600': ('/' + pathname.split('/')[1]) === link.href
              },
              {
                'text-gray-600': ('/' + pathname.split('/')[1]) !== link.href
              }
            )}
          >
            <Image src={LinkIcon} alt={link.name} />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
