'use client'
// import { navItems } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { navItems } from '../../constants'

const Header = () => {
  const pathname = usePathname()
  return (
    <header
      className={`w-full h-[80px] pl-20
                     mx-auto absolute top-10 z-10 flex justify-between items-center transition-all duration-300 
                `}
    // ${isScrolled ? 'lg:max-w-[80%] lg:top-4 lg:backdrop-blur-sm lg:rounded-2xl' : 'lg:w-full'}
    >
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
        <nav className="md:flex flex-1 justify-center items-center space-x-6">
          {navItems.map(({ name, href }, index) => (
            <Link key={index} href={href} className={` hover:text-[#34a0a4] 
                                ${pathname === href ? "text-[#34a0a4]" : "text-white"}
                                `}>{name}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header