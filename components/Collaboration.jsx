import React from 'react'
import Image from 'next/image'

const Collaboration = () => {
  return (
    <section>
      <div className='py-8'>
        <h2 className='font-semibold'>Collaboration</h2>
        <h2 className='font-semibold'>Done Right</h2>
        <p>
          We apply a modern tech stack to integrate seamlessly with your
          business, as if we’re sitting right there with you in the office. We
          adapt to your businesses infrastructure and always aim to maintain the
          highest level of communication and clarity.
        </p>
        <button className='border-black border-2 rounded-xl px-3 py-2 font-semibold mt-3'>
          Lets Get Started
        </button>
      </div>
      <div>
        <aside>
          <Image
            src='/assets/media/Collab.png'
            width={570.71}
            height={359.82}
            alt=''
          />
          <Image
            src='/assets/media/Trace.png'
            width={570.71}
            height={359.82}
            alt=''
          />
        </aside>
      </div>
    </section>
  )
}

export default Collaboration
