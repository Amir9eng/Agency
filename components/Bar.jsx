import Image from 'next/image'
import React from 'react'

const Bar = () => {
  return (
    <section>
      <aside>
        <div>
          <p>1000+</p> <p>Designs Made</p>
        </div>
        <p>For Clients In</p>
        <div>
          <p>7</p>
          <p>Countries</p>
        </div>
        <p>On</p>
        <div>
          <p>4</p>
          <p>Continents</p>
        </div>
      </aside>
      <aside className='flex gap-x-4'>
        <div className='rounded-xl'>
          <Image alt='/' width={335} height={346} src='/assets/media/Bar.png' />
        </div>
        <div>
          <p className='font-bold text-2xl'>A Norwegian and a Sri Lankan/</p>
          <p className='font-bold text-2xl'>Australian Walked Into A Bar</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </aside>
    </section>
  )
}

export default Bar
