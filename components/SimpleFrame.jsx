import React from 'react'

const SimpleFrame = () => {
  return (
    <div className='relative bg-[#313439] text-white w-[244.66px] h-[55.48px] rounded-xl px-4 mt-2'>
      <div className='absolute w-[12.9px] h-[12.9px] bg-[#89F294] rounded-sm m-1.2 p-2 top-4 left-2'></div>
      <div className='ml-4'>
        <p className='pt-1'>Design Posts for Clients</p>
        <aside className='bg-[#A59F17] w-[130px] h-[14px] rounded-tr-full rounded-br-full  mt-1'>
          <p className='text-[9.98px] px-1 font-semibold'>
            Social Media Management
          </p>
        </aside>
      </div>
    </div>
  )
}

export default SimpleFrame
