import Image from 'next/image'
import React from 'react'
import Board from './Board'

const Main = () => {
  return (
    <section className='w-full bg-cyan-100 py-12 px-20 flex md:flex-wrap md:flex-row flex-col'>
      <div className='w-[508.35px] py-10 px-2'>
        <h1 className='text-black'>Elevate Your</h1>
        <h1 className='text-cyan-900'> Social Media</h1>
        <h1 className='text-black'>Team With Us</h1>
        <div className='w-[430px] py-8 leading-8'>
          <p className='font-semibold'>
            We’re a team of digital consultants ready to augment your team, take
            on your next project or to be your complete dedicated team for the
            forseeable future. <br /> Scale your business online with our
            solutions today.
          </p>
        </div>
        <aside className='font-semibold flex gap-x-12'>
          <button className='bg-white border-black border-2 px-6 py-2 rounded-xl'>
            Lets Get Started
          </button>
          <button className='px-6 py-2 border-black border-2 rounded-xl'>
            See Our Work
          </button>
        </aside>
      </div>
      <div className='flex h-[469px] relative'>
        <div className='absolute z-10 w-[237px] h-[77px] rounded-xl bg-gradient-to-r from-[#C7D2CF] to-[#E3F9FB] left-[-20%] bottom-0 px-4 py-2'>
          <h4 className='text-xl'>William Teig</h4>
          <p className='text-sm'>Creative Director</p>
        </div>
        <div>
          <Image
            alt='/'
            src='/assets/media/Hero.png'
            width={350}
            height={465}
            className='rounded-xl'
          />
        </div>
        <div className='ml-[-20px] z-[20] mb-[-10px]'>
          <Board />
        </div>
      </div>
    </section>
  )
}

export default Main
