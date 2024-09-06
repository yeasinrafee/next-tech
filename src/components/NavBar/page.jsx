'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavBar = () => {
  const router = useRouter();
  const pathName = usePathname();
  const navItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Services',
      path: '/service',
    },
    {
      title: 'Blogs',
      path: '/blogs',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
    },
  ];
  const handler = () => {
    router.push('/login');
  };
  return (
    <div className='flex justify-around items-center py-12'>
      <div>
        <Link href='/'>
          <h2 className='font-bold text-3xl italic'>NextTech</h2>
        </Link>
      </div>
      <div>
        <ul className='flex justify-around items-center gap-10'>
          {navItems?.map((nav) => (
            <li
              key={nav.path}
              className='hover:text-gray-400 transition-all duration-200'
            >
              <Link
                href={nav.path}
                className={(
                  pathName === nav.path &&
                  'border-b-2 pb-1 transition-all duration-200'
                ).toString()}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='border-2 px-4 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-200'>
        <button onClick={handler}>Login</button>
      </div>
    </div>
  );
};

export default NavBar;
