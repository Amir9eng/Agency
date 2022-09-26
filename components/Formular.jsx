import React from 'react'
import Image from 'next/image'

const Formular = () => {
  return (
    <section className='mx-auto bg-cyan-100'>
      <h2 className='text-center'>Our Formula</h2>
      <aside className='flex'>
        <div className='flex flex-col px-4 py-3'>
          <Image
            alt=''
            width={96.38}
            height={96.38}
            src='/assets/vector/Strategy.svg'
          />
          <h2>Strategy</h2>
          <p>
            We set out a specific strategy for your brand by analyzing your
            brand, your industri and your competitors. Your strategy will inform
            and define your content pillars
          </p>
        </div>
        <div className='flex flex-col px-4 py-3'>
          {' '}
          <Image
            alt=''
            width={96.38}
            height={96.38}
            src='/assets/vector/Production.svg'
          />
          <h2>Production</h2>
          <p>
            With the strategy in place our social media team in conjunction with
            our graphic design team will design, write and arrange your social
            media posts, in monthly increments.
          </p>
        </div>
        <div className='flex flex-col px-4 py-3'>
          {' '}
          <Image
            alt=''
            width={96.38}
            height={96.38}
            src='/assets/vector/Distribution.svg'
          />
          <h2>Distribution</h2>
          <p>
            We distribute your social media content calendar to your social
            media platform using best practices for each particular platform
          </p>
        </div>
        <div className='flex flex-col px-4 py-3'>
          {' '}
          <Image
            alt=''
            width={96.38}
            height={96.38}
            src='/assets/vector/Management.svg'
          />
          <h2>Management</h2>
          <p>
            We provide ongoing management to your social media platforms to
            ensure they act like living, human entities, not just static robots.
          </p>
        </div>
      </aside>
    </section>
  )
}

export default Formular
