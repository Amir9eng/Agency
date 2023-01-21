import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bg-black  mx-auto py-12'>
      <div className='flex justify-between md:px-48 lg:flex-row flex-col'>
        <div className='mx-auto lg:mx-0'>
          <Image alt='/' src='/assets/vector/Just.svg' width={79} height={65} />
        </div>
        <aside className='text-white flex items-center flex-col lg:flex-row gap-y-6'>
          <p className='mr-3 text-white/80 whitespace-nowrap'>
            Stay Up To Date
          </p>
          <div className='flex items-center'>
            <input
              type='email'
              name='Email address'
              placeholder='Email address'
              className='placeholder:text-slate-400 outline-none bg-transparent border-b-cyan-100 border-b px-4 py-2'
            />
            <button className='bg-cyan-100 w-[50px] h-[41px] rounded-tl-xl rounded-tr-xl'>
              <Image
                alt='/'
                width={6.18}
                height={10}
                src='/assets/vector/Path.svg'
              />
            </button>
          </div>
        </aside>
      </div>
      <div className='flex lg:flex-row flex-col justify-around gap-x-8 my-6 px-8 md:px-64 mx-auto lg:text-left md:text-center gap-y-6'>
        <div className='lg:ml-8 lg:text-left md:text-center'>
          <ul className='text-white/60 flex flex-col gap-y-2'>
            <li className='text-cyan-100 font-normal text-xl'>Services</li>
            <li>Projects</li>
            <li>Team Augmentation</li>
            <li>Dedicated Teams</li>
          </ul>
        </div>
        <div>
          <ul className='text-white/60 flex flex-col gap-y-2'>
            <li className='text-cyan-100 font-medium text-xl'>Capabilities</li>
            <li>Social Media</li>
            <li>Web</li>
            <li>Our Work</li>
          </ul>
        </div>
        <div className=''>
          <ul className='text-white/60 flex flex-col gap-y-2'>
            <li className='text-cyan-100 font-medium text-xl'>Company</li>
            <Link href='/OurWork'>
              <li>About Us</li>
            </Link>
            <Link href='/Blogs'>
              <li>Blog</li>
            </Link>
            <Link href='OurTeam'>
              <li>Team</li>
            </Link>
            <Link href=''>
              <li>Careers</li>
            </Link>
            <Link href=''>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className='flex lg:flex-row flex-col justify-between md:px-48 mt-6'>
        <p className='text-sm text-white md:pt-2 px-6 ml-2 md:ml-0 md:px-0'>
          Copyright © 2022 - Bashi Media. All Rights Served | Terms & Conditions
        </p>
        <div className='flex gap-x-8 lg:mx-0 mx-auto py-6 md:py-0'>
          <Image
            alt='/'
            width={9.92}
            height={19.84}
            src='/assets/vector/facebook.svg'
          />
          <Image
            alt='/'
            width={22}
            height={17.88}
            src='/assets/vector/twitter.svg'
          />
          <Image
            alt='/'
            width={22}
            height={22}
            src='/assets/vector/instagram.svg'
          />
        </div>
      </div>
    </section>
  )
}

export default Footer
