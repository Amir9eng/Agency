import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='w-full h-20 bg-cyan-100 flex justify-between items-center md:justify-around'>
      <aside className=' flex items-center gap-x-2'>
        {' '}
        <Image
          src='/assets/vector/logo.svg'
          width={48.63}
          height={40.29}
          alt=''
        />
        <p className='font-bold text-black'>Bashi Media</p>
      </aside>
      <div className=''>
        <aside className='hidden md:flex md:gap-x-8'>
          <Link href='/'>Capabilities</Link>
          <Link href='/'>Our Team</Link>
          <Link href='/'>Our Work</Link>
          <Link href='/'>Blog</Link>
        </aside>
        <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <aside className=' ml-8'>
        <button className='hidden md:block font-bold md:w-[207px] md:h-[52px] rounded-xl border-2 border-black bg-white text-black'>
          Contact Us
        </button>
      </aside>

      <div
        className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
      >
        <div
          className={
            nav
              ? 'h-screen fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-cyan-100 p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-5 ease-in duration-500'
          }
        >
          <div>
            <div className='w-full flex items-center justify-between'>
              {' '}
              <Image
                src='/assets/vector/logo.svg'
                width={48.63}
                height={40.29}
                alt=''
              />
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='font-semibold my-4 border-b border-gray-300'>
              <p className='py-4'>Bashi Media</p>
            </div>
          </div>
          <div>
            <ul className='uppercase py-4 flex flex-col font-semibold'>
              <Link href='/'>
                <li className='py-4 text-sm'>Capabilities</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Our Team</li>
              </Link>
              <Link href='/'>
                <li className='py-4 text-sm'>Our Work</li>
              </Link>
              <Link href='/'>
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
    </div>
  )
}

export default Navbar
