import Image from 'next/image'
import React from 'react'
import Board from './Board'

const Main = () => {
  return (
    <section className='w-full bg-cyan-100 py-12 px-20 justify-between items-center flex  flex-col md:flex-row'>
      <div className='md:max-w-[31.75rem] py-10 px-2  '>
        <h1 className='text-black'>Elevate Your</h1>
        <h1 className='text-cyan-900'> Social Media</h1>
        <h1 className='text-black'>Team With Us</h1>
        <div className=' py-8 leading-8'>
          <p className='w-[20rem] font-semibold'>
            We’re a team of digital consultants ready to augment your team, take
            on your next project or to be your complete dedicated team for the
            forseeable future. <br /> Scale your business online with our
            solutions today.
          </p>
        </div>
        <aside className='font-semibold  flex-col md:flex-row  flex gap-x-12 gap-y-3'>
          <button className='bg-white border-black border-2 sm:px-12 md:my-4 px-6 py-2 rounded-xl'>
            Lets Get Started
          </button>
          <button className='border-black border-2 sm:px-12 md:my-4 px-6 py-2 rounded-xl'>
            See Our Work
          </button>
        </aside>
      </div>
      <div className='grid grid-cols-2 h-[29.3125rem] relative'>
        <div className='absolute z-10 md:w-[14.8125rem] h-[4.8125rem] rounded-xl bg-gradient-to-r from-[#C7D2CF] to-[#E3F9FB] left-[-20%] bottom-0 px-4 py-2'>
          <h4 className='text-xl'>William Teig</h4>
          <p className='text-sm'>Creative Director</p>
        </div>
        <div className=''>
          <Image
            alt='/'
            src='/assets/media/Hero.png'
            width={350}
            height={465}
            loading='eager'
            className='rounded-xl'
          />
        </div>
        <div className='ml-[-.5rem] z-20 mb-[-.625rem]'>
          <Board />
        </div>
      </div>
    </section>
  )
}

export default Main
