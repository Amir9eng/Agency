import Image from 'next/image'
import React from 'react'

const Connect = () => {
  return (
    <section className='mx-auto'>
      <h2 className='text-center'>Connect With Our Team</h2>
      <p>
        Get a free discovery call with our internal social media executives to
        learn more about how we would work with your business.
      </p>
      <div>
        <Image alt='/' width={371} height={376} />
        <div>
          <Image alt='/' height={164} />
        </div>
      </div>
    </section>
  )
}

export default Connect
