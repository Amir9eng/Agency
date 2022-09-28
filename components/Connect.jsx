import Image from 'next/image'
import React from 'react'

const Connect = () => {
  return (
    <section className='bg-cyan-100 py-6'>
      <h2 className='text-center'>Connect With Our Team</h2>
      <p className='text-center mx-auto w-[28.875rem] my-6'>
        Get a free discovery call with our internal social media executives to
        learn more about how we would work with your business.
      </p>
      <div className='relative flex items-center justify-center'>
        <Image
          alt='/'
          width={371}
          height={376}
          src='/assets/media/Pushmi.png'
        />
        <div className='absolute bottom-[-7%] left-[58%] mx-auto'>
          <Image
            alt='/'
            height={164}
            width={164}
            src='/assets/vector/Phone.svg'
          />
        </div>
      </div>
    </section>
  )
}

export default Connect
