import React from 'react'
import Image from 'next/image'

const Talk = () => {
  return (
    <section className='bg-cyan-100 py-10 px-48 flex md:flex-row flex-col mt-12'>
      <div>
        <p>Want to get in touch?</p>
        <h2 className='mt-6'>Lets Talk</h2>
        <p className='w-[599px] mt-6'>
          Send us an enquiry describing how we can fufill your businesses needs
          and we will aim to get back to you within 48 hours and book a call
          with you. We are a global consultancy with clients in the US, Europe,
          Australia and Asia and we do not let borders limit where we do
          business.{' '}
        </p>
        <button className='border-black border-2 rounded-xl px-12 py-2 font-semibold mt-3 hover:scale-105 hover:text-white hover:bg-black'>
          Lets Talk
        </button>
      </div>
      <div>
        <Image
          width={430}
          height={430}
          alt='/'
          src='/assets/vector/Director.svg'
        />
      </div>
    </section>
  )
}

export default Talk
