'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

// Import custom icons from the public directory
import HomeIcon from '../../../public/icons/home-variant.svg';
import FolderIcon from '@/public/icons/folder.svg';
import PerformanceIcon from '@/public/icons/poll.svg';

// Import lucide-react icons
import { Home, Folder, User2, Users2 } from 'lucide-react';


const links = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
  { name: 'Projects', href: '/projects', icon: <Folder className="w-5 h-5" /> }, 
  { name: 'People', href: '/people', icon: <User2 className="w-5 h-5" /> },
  { name: 'Teams', href: '/teams', icon: <Users2 className="w-5 h-5" />},
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'flex grow items-center justify-center gap-2 rounded-md p-1 text-sm font-medium hover:bg-blue-100 hover:text-blue-400 md:flex-none md:justify-start md:p-2 md:px-3',
            {
              'bg-blue-200 text-blue-600': ('/' + pathname.split('/')[1]) === link.href,
            },
            {
              'text-gray-600': ('/' + pathname.split('/')[1]) !== link.href,
            }
          )}
        >
          {link.icon}
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
