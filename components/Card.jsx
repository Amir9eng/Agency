import Image from 'next/image'
import React from 'react'

const Card = props => {
  return (
    <div className='bg-cyan-100 w-full md:w-[335px] h-[292px] px-4 py-8 shadow-2xl'>
      <p>{props.text}</p>
      <div className='flex mt-4 gap-x-6'>
        <Image alt='/' width={48} height={48} src={props.image} />
        <aside className='flex flex-col'>
          <p className='font-semibold'>Will Teig</p>
          <p className='text-gray-500'>CEO of Greatbusiness</p>
        </aside>
      </div>
    </div>
  )
}

export default Card
