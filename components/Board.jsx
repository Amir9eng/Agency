import React from 'react'
import Frame from './Frame'
import SimpleFrame from './SimpleFrame'

const Board = () => {
  return (
    <section className='px-4 w-[289.01px] h-[449px] mx-auto mb-6 rounded-xl bg-gradient-to-r from-[#C7D2CF] to-[#E3F9FB]'>
      <div className='py-10'>
        <Frame />
      </div>
      <main className='relative mt-4'>
        <div className='absolute bottom-1 w-[68px] h-[76px] bg-[#A7D7E5] rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
          <p className='font-semibold text-center'>To Do</p>
        </div>
        <div className='relative bg-[#313439] text-white w-[249.66px] h-[55.48px] rounded-xl px-4'>
          <div className='absolute w-[12.9px] h-[12.9px] bg-[#A7D7E5] rounded-sm m-1.2 p-2 top-4 left-2'></div>
          <div className='ml-4'>
            <p className='pt-1 text-[13px] '>QA Header Design for Home Page</p>
            <aside className='bg-[#17A561] w-[90px] h-[14px] rounded-tr-full rounded-br-full  mt-1'>
              <p className='text-[9.98px] px-1 font-semibold'>
                Web & UI Design
              </p>
            </aside>
          </div>
        </div>
      </main>

      <div className='mt-12'>
        <main className='relative mt-4'>
          <div className='absolute bottom-1 w-[68px] h-[76px] bg-[#89F294] rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
            <p className='font-semibold text-center'>To Do</p>
          </div>
          <div className='relative bg-[#313439] text-white w-[249.66px] h-[55.48px] rounded-xl px-4'>
            <div className='absolute w-[12.9px] h-[12.9px] bg-[#89F294] rounded-sm m-1.2 p-2 top-4 left-2'></div>
            <div className='ml-4'>
              <p className='pt-1 text-[13px] '>
                QA Header Design for Home Page
              </p>
              <aside className='bg-[#17A561] w-[90px] h-[14px] rounded-tr-full rounded-br-full  mt-1'>
                <p className='text-[9.98px] px-1 font-semibold'>
                  Web & UI Design
                </p>
              </aside>
            </div>
          </div>
        </main>
        <SimpleFrame />
        <SimpleFrame />
      </div>
    </section>
  )
}

export default Board
