"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';


export default function Header() {

    const path = usePathname();
    const isActive = (pathname: string) => path === pathname;


    const styles = {
        li: 'underline transition delay-150 duration-200 all',
    }

    return (
        /*header = bg-gradient-to-r from-blue-500 to-blue-700*/
        <header className='flex justify-center items-center py-4 px-8 text-white'>
            <nav className='flex text-align-center'>
                <ul className='flex space-x-8 content-center font-semibold text-xl'>
                    <li className={styles.li + isActive('/') ? 'text-red-500' : ''}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.li + isActive('/about') ? 'text-red-500' : ''}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={styles.li + isActive('/projects') ? 'text-red-500' : ''}>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className={styles.li + isActive('/contact') ? 'text-red-500' : ''}>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
