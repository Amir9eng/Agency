import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavWhite = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='w-full overflow-hidden flex justify-between items-center h-20 px-5 md:px-20 z-20'>
      <div className='flex items-center'>
        <Image
          alt='/'
          src='/assets/vector/logo.svg'
          width={48.63}
          height={40.29}
        />
        <Link href='/'>
          <p className='font-bold cursor-pointer text-black'>Bashi Media</p>
        </Link>
      </div>
      <aside className='hidden lg:flex items-center md:gap-x-8 w-[70%]'>
        <Link href='/Capabilities'> Capabilities</Link>
        <Link href='/OurTeam'>
          <a href='' className='whitespace-nowrap'>
            Our Team
          </a>
        </Link>
        <Link href='/OurWork'>
          <a href='' className='whitespace-nowrap'>
            Our Work
          </a>
        </Link>
        <Link href='/Blogs'>Blog</Link>
        <p className='flex-grow' />
        <button className=' font-bold md:w-[207px] md:h-[52px] rounded-xl border-2 border-black bg-white text-black'>
          Contact Us
        </button>
      </aside>
      <div onClick={handleNav} className='lg:hidden'>
        <AiOutlineMenu size={25} />
      </div>
      <div
        className={`lg:hidden absolute transition-all duration-500 w-full h-full bg-black/70 ${
          nav ? '-ml-6' : '-ml-[120vw]'
        } `}
      >
        <div
          className={
            nav
              ? 'h-screen fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-cyan-100 p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'
          }
        >
          <div className='w-full flex items-center justify-between'>
            <aside className='flex items-center gap-x-1'>
              <Image
                src='/assets/vector/logo.svg'
                width={48.63}
                height={40.29}
                alt=''
              />
              <Link href='/'>
                <p className='cursor-pointer font-bold text-black'>
                  Bashi Media
                </p>
              </Link>
            </aside>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <ul className='uppercase py-4 flex flex-col font-semibold'>
              <Link href='/Capabilities'>
                <li className='py-4 text-sm'>Capabilities</li>
              </Link>
              <Link href='/OurTeam'>
                <li className='py-4 text-sm'>Our Team</li>
              </Link>
              <Link href='/OurWork'>
                <li className='py-4 text-sm'>Our Work</li>
              </Link>
              <Link href='/Blogs'>
                <li className='py-4 text-sm'>Blog</li>
              </Link>
            </ul>
            <div>
              <button className='hover:scale-105 ease-in duration-300 font-bold w-[180px] md:w-[300px] h-[52px] rounded-xl border-2 border-black bg-white text-black'>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavWhite
