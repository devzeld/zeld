import React from 'react';
import Link from 'next/link';

export default function Header() {

    const styles = {
        li: 'hover:text-blue-500 hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-clip-text hover:text-transparent transition delay-150 duration-200 ease-in-out',
    }

    return (
        <header className='flex justify-center items-center py-4 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
            <nav className='flex text-align-center'>
                <ul className='flex space-x-4 content-center font-semibold text-lg'>
            
                    <li className={styles.li}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href='/projects'>Projects</Link>
                    </li>
                    <li className={styles.li}>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
