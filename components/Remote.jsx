import React from 'react'
import Image from 'next/image'

const Remote = () => {
  return (
    <section className='flex lg:flex-row flex-col px-48 py-32 gap-x-8 mx-auto'>
      <div>
        <aside className='relative'>
          <Image
            src='/assets/media/Chat.png'
            width={570.71}
            height={359.82}
            alt='/'
          />
          <div className='absolute top-[-15px] right-0'>
            <Image
              src='/assets/media/person1.png'
              alt='/'
              width={160.92}
              height={160.92}
            />
          </div>
          <div className='absolute bottom-0 left-[-60px]'>
            <Image
              src='/assets/media/person2.png'
              alt='/'
              width={145.92}
              height={145.92}
            />
          </div>
          <div className='absolute bottom-[-7.5rem] left-11'>
            <Image
              src='/assets/media/person3.png'
              alt='/'
              width={145.92}
              height={145.92}
            />
          </div>
          <div className='absolute right-[-4.8rem] top-14'>
            <Image
              src='/assets/media/person4.png'
              alt='/'
              width={145.92}
              height={145.92}
            />
          </div>
        </aside>
      </div>
      <div className='w-[796px] py-8'>
        <h2 className='font-semibold'>Mastering Remote</h2>
        <h2 className='font-semibold'>Work</h2>
        <p className='w-[526px]'>
          We are a global consultancy with clients in the US, Europe, Australia
          and Asia and we do not let borders limit where we do business. Our
          curated team of specialists in Colombo, Sri Lanka will cater to
          whichever region your business targets
        </p>
        <button className='border-black border-2 rounded-xl px-3 py-2 font-semibold mt-3 hover:scale-105 hover:text-white hover:bg-black'>
          Lets Get Started
        </button>
      </div>
    </section>
  )
}

export default Remote
