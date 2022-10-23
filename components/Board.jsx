import React from 'react'
import Frame from './Frame'
import SimpleFrame from './SimpleFrame'

const Board = () => {
  return (
    <section className='px-4 h-[13.0625rem] w-[8.4375rem] md:w-[18.06rem] md:h-[28.06rem] mx-auto mb-6 rounded-xl bg-gradient-to-r from-[#C7D2CF] to-[#E3F9FB]'>
      <div className='py-10'>
        <Frame />
      </div>
      <main className='relative mt-4'>
        <div className='absolute bottom-1 w-[4.25rem] h-[4.75rem] bg-[#A7D7E5] rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
          <p className='font-semibold text-center'>To Do</p>
        </div>
        <div className='relative bg-[#313439] text-white w-[15.60375rem] h-[3.4675rem] rounded-xl px-4'>
          <div className='absolute w-[0.80625rem] h-[0.80625rem] bg-[#A7D7E5] rounded-sm m-1.2 p-2 top-4 left-2'></div>
          <div className='ml-4'>
            <p className='pt-1 text-[0.8125rem] '>
              QA Header Design for Home Page
            </p>
            <aside className='bg-[#17A561] w-[5.625rem] h-[.875rem] rounded-tr-full rounded-br-full  mt-1'>
              <p className='text-[0.62375rem] px-1 font-semibold'>
                Web & UI Design
              </p>
            </aside>
          </div>
        </div>
      </main>

      <div className='mt-12'>
        <main className='relative mt-4'>
          <div className='absolute bottom-1 w-[4.25rem] h-[4.75rem] bg-[#89F294] rounded-tr-xl rounded-tl-xl rounded-bl-xl'>
            <p className='font-semibold text-center'>To Do</p>
          </div>
          <div className='relative bg-[#313439] text-white w-[15.60375rem] h-[3.4675rem] rounded-xl px-4'>
            <div className='absolute w-[0.80625rem] h-[0.80625rem] bg-[#89F294] rounded-sm m-1.2 p-2 top-4 left-2'></div>
            <div className='ml-4'>
              <p className='pt-1 text-[0.8125rem] '>
                QA Header Design for Home Page
              </p>
              <aside className='bg-[#17A561] w-[5.625rem] h-[.875rem] rounded-tr-full rounded-br-full  mt-1'>
                <p className='text-[0.62375rem] px-1 font-semibold'>
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
