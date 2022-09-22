import React from 'react'

const Frame = () => {
  return (
    <main className='relative'>
      <div className='absolute bottom-1 w-[68px] h-[76px] bg-[#D3D3D3] rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
        <p className='font-semibold text-center'>To Do</p>
      </div>
      <div className='relative bg-[#313439] text-white w-[244.66px] h-[55.48px] rounded-xl px-4'>
        <div className='absolute w-[12.9px] h-[12.9px] bg-[#D3D3D3] rounded-sm m-1.2 p-2 top-4 left-2'></div>
        <div className='ml-4'>
          <p className='pt-1 text-[13px]'>Design Posts for Clients</p>
          <aside className='bg-[#A51717] w-[79.35px] h-[13.55px] rounded-tr-full rounded-br-full  mt-1'>
            <p className='text-[9.98px] px-1 font-semibold'>Graphic Design</p>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default Frame

{
  /* <nav className='w-full h-20 bg-cyan-100'>
      <div>
        <Image
          alt='/'
          src='/assets/vector/logo.svg'
          width={48.63}
          height={40.29}
        />
      </div>
      <div></div>
      <div></div>
    </nav> */
}
