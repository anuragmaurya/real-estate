"use client"

import { navItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const toggleMenu = () => setIsActive((prev) => !prev);

    return (
        <header
            className={`w-full h-[80px] mx-auto sticky top-0 z-10 flex justify-between items-center bg-white/90 backdrop-blur-md transition-all duration-300 ${isScrolled
                ? 'lg:max-w-[80%] lg:top-4 lg:backdrop-blur-sm lg:rounded-2xl'
                : 'lg:w-full'
                }`}
        >
            <div className="bg-[url('/assets/home/hero-bg.jpg')]"></div>
            <div className="container w-full flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/assets/home/site-logo.svg"
                        alt="PollPe Form Logo"
                        className="w-32 h-auto"
                        width={32}
                        height={20}
                    />
                </Link>
                <nav className="hidden md:flex flex-1 justify-center items-center space-x-6">
                    {navItems.map(({ name, href }, index) => (
                        <Link key={index} href={href}>{name}</Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

export default Navbar