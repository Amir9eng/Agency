import React from 'react'
import Image from 'next/image'

const Clients = () => {
  const card = [
    {
      text:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.',
      image: ''
    },
    {},
    {}
  ]

  return (
    <section className='w-full lg:mx-0 mx-auto'>
      <h2 className='text-center'>Hear From Our Clients</h2>
      <aside className='px-4 md:px-48 mx-auto flex gap-x-10 mt-8 lg:flex-row flex-col gap-y-6'>
        <div className='bg-cyan-100 w-full md:w-[335px] h-[292px] px-4 py-8 shadow-2xl'>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit exercitation
            veniam.
          </p>
          <div className='flex mt-4 gap-x-6'>
            <Image
              alt='/'
              width={48}
              height={48}
              src='/assets/vector/Will.svg'
            />
            <aside className='flex flex-col'>
              <p className='font-semibold'>Will Teig</p>
              <p className='text-gray-500'>CEO of Greatbusiness</p>
            </aside>
          </div>
        </div>
        <div className='bg-cyan-100 md:w-[335px] h-[292px] px-4 py-8 shadow-2xl'>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit exercitation
            veniam.
          </p>
          <div className='flex mt-4 gap-x-6'>
            <Image
              alt='/'
              width={48}
              height={48}
              src='/assets/vector/Will.svg'
            />
            <aside className='flex flex-col'>
              <p className='font-semibold'>Will Teig</p>
              <p className='text-gray-500'>CEO of Greatbusiness</p>
            </aside>
          </div>
        </div>
        <div className='bg-cyan-100 md:w-[335px] h-[292px] px-4 py-8 shadow-2xl'>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit exercitation
            veniam.
          </p>
          <div className='flex mt-4 gap-x-6'>
            <Image
              alt='/'
              width={48}
              height={48}
              src='/assets/vector/Will.svg'
            />
            <aside className='flex flex-col'>
              <p className='font-semibold'>Will Teig</p>
              <p className='text-gray-500'>CEO of Greatbusiness</p>
            </aside>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Clients
