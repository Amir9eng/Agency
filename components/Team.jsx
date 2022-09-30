import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <section className='py-8 mx-auto px-48'>
      <h3 className='text-center my-4 whitespace-nowrap'>Our Team</h3>
      <div className='flex lg:flex-row flex-col gap-x-6 gap-y-6 mx-auto container'>
        <Image width={342} height={342} src='/assets/media/Teig.png' alt='/' />
        <Image width={342} height={342} src='/assets/media/Teig2.png' alt='/' />
        <Image width={342} height={342} src='/assets/media/Teig3.png' alt='/' />
      </div>
      <div className='hidden lg:grid lg:grid-cols-3 gap-x-6 mt-4'>
        <Image width={342} height={342} src='/assets/media/Teig.png' alt='/' />
        <Image width={342} height={342} src='/assets/media/Teig.png' alt='/' />
        <Image width={342} height={342} src='/assets/media/Teig.png' alt='/' />
      </div>
    </section>
  )
}

export default Team
