import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <section className='flex flex-wrap gap-x-8 px-48'>
      <div className='rounded-xl w-[22.5rem] h-[44.8125rem] flex flex-col justify-betwee'>
        <Image alt='/' src='/assets/media/Blog.png' width={360} height={203} />
        <div className='mt-2 px-2'>
          <p className='font-bold text-xl'>
            How to choose the right social media manager for your business
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className='flex gap-x-1 items-center'>
            <p>Read full story</p>
            <Image
              alt='/'
              width={18.33}
              height={10}
              src='/assets/vector/line.svg'
            />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  )
}

export default Blog
