import React from 'react'
import Image from 'next/image'

const Collaboration = () => {
  return (
    <section className='flex lg:flex-row flex-col md:px-48 py-32 gap-x-8  mx-auto'>
      <div className='py-12'>
        <h2 className='font-semibold'>Collaboration</h2>
        <h2 className='font-semibold'>Done Right</h2>
        <p className='w-[32.875rem]'>
          We apply a modern tech stack to integrate seamlessly with your
          business, as if we’re sitting right there with you in the office. We
          adapt to your businesses infrastructure and always aim to maintain the
          highest level of communication and clarity.
        </p>
        <button className='border-black border-2 rounded-xl px-3 py-2 font-semibold mt-3 hover:scale-105 hover:text-white hover:bg-black'>
          Lets Get Started
        </button>
      </div>
      <div className=''>
        <Image
          alt='/'
          width={625.34}
          height={470.48}
          src='/assets/media/Collaboration.png'
        />
      </div>
    </section>
  )
}

export default Collaboration
