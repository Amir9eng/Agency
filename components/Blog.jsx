import React from 'react'
import Image from 'next/image'

const Blog = () => {
  return (
    <section className='px-48'>
      <h2 className='text-center my-10'>Blogs</h2>
      <aside className='flex gap-x-8 flex-col gap-y-8 lg:flex-row'>
        <div className='container rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>
              How to choose the right social media manager for your business
            </p>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-8 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
        <div className='rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>6 Different types of</p>
            <p className='font-bold text-2xl'>content | With</p>
            <p className='font-bold text-2xl'>Examples</p>
            <p className='text-gray-500 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-8 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
        <div className='rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>
              Beginner’s guide in creating a brand kit
            </p>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-16 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
      </aside>

      <aside className='flex gap-x-8 my-8 flex-col gap-y-8 lg:flex-row'>
        <div className='container rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>
              How to choose the right social media manager for your business
            </p>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-8 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
        <div className='rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>6 Different types of</p>
            <p className='font-bold text-2xl'>content | With</p>
            <p className='font-bold text-2xl'>Examples</p>
            <p className='text-gray-500 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-8 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
        <div className='rounded-xl w-[22.5rem] flex flex-col bg-cyan-100'>
          <Image
            alt='/'
            src='/assets/media/Blog.png'
            width={360}
            height={203}
          />
          <div className='mt-2 px-6'>
            <p className='font-bold text-2xl'>
              Beginner’s guide in creating a brand kit
            </p>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='flex gap-x-3 items-center mt-16 mb-4'>
              <p className='text-cyan-300'>Read full story</p>
              <Image
                alt='/'
                width={18.33}
                height={10}
                src='/assets/vector/line.svg'
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Blog
