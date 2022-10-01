import React from 'react'
import Image from 'next/image'
import Mark from './Mark'

const Pricing = () => {
  return (
    <section className='mx-auto py-6'>
      <h2 className='text-center my-4'>Pricing</h2>
      <aside className='flex gap-x-4 px-20'>
        <div className='bg-cyan-100 rounded-xl flex flex-col justify-between h-[49.6875rem] w-[19.6875rem] py-6 px-6 mx-auto'>
          <aside className='flex flex-col gap-y-2'>
            <p className='font-semibold text-2xl'>Team</p>
            <p className='font-semibold text-2xl'>Augumentation</p>
            <small>What You’ll Get</small>
            <p className='flex'>
              <Mark />
              Social Media Management on an hourly basis
            </p>
            <p className='flex'>
              {' '}
              <Mark /> Static social media{' '}
            </p>
            <p className='flex'>
              {' '}
              <Mark /> Unlimited Flexibility
            </p>
            <p className='flex'>
              {' '}
              <Mark /> Billed by hours invested at the beginning of each month
            </p>
            <p className='flex'>
              {' '}
              <Mark /> Deploy Our Team Whenever You Need To
            </p>
          </aside>
          <aside>
            <p className='font-semibold text-2xl'>A27$/</p>
            <small>Hour</small>
            <button className='text-white px-20 py-3 rounded-xl bg-cyan-900 font-semibold'>
              Choose
            </button>
          </aside>
        </div>
        <div className='bg-cyan-100 rounded-xl h-[49.6875rem] w-[19.6875rem] py-6 px-6'>
          <h3>Standard</h3>
          <small>What You’ll Get</small>
          <p className='flex'>
            <Mark /> 10 Hours of social media management per week
          </p>
          <p className='flex'>
            {' '}
            <Mark /> 2-3 Static Social Media Posts per week
          </p>
          <p className='flex'>
            {' '}
            <Mark /> Full distribution and addaption to all platforms
          </p>
          <p className='flex'>
            <Mark /> Complementary stories for all posts
          </p>
          <p className='flex'>
            <Mark /> Daily Community Management
          </p>
          <p className='flex'>
            <Mark /> Daily access to social media manager via slack or other
            platform
          </p>
          <p className='flex'>
            <Mark /> No Minimum Term
          </p>
        </div>
        <div className='bg-cyan-100 h-[49.6875rem] w-[19.6875rem] py-6 px-6 rounded-xl'>
          <h3>Accellerated</h3>
          <small>What You’ll Get</small>
          <p>20 Hours of social media management per week</p>
          <p>3-5 Static and Motion Social Media Posts per week</p>
          <p>Advanced Graphic Design & Motion Design Support</p>
          <p>Paid Marketing and Post Boosting Support</p>
          <p>Full distribution and addaption to all platforms</p>
          <p>Daily Stories</p>
          <p>Daily Community Management</p>
          <p>
            Daily access to social media manager via slack or other platform
          </p>
          <p>No Minimum Term</p>
        </div>
        <div className='bg-cyan-900 h-[49.6875rem] w-[19.6875rem] px-6 rounded-xl flex flex-col justify-between'>
          <div className=''>
            <p className='text-white text-2xl font-semibold mt-8'>Custom</p>
            <p className='text-white text-2xl font-semibold'> Deployment</p>
            <p className='text-white my-4'>
              We will put together a bespoke plan for you based on the hours we
              will invest with your business to get your business what it needs.
            </p>
            <button className='bg-cyan-100 rounded-xl text-cyan-900 px-24 py-3 font-semibold'>
              Choose
            </button>
          </div>
          <div>
            <Image
              width={400.06}
              height={321.37}
              alt='/'
              src='/assets/media/Jacob.png'
            />
          </div>
        </div>
      </aside>
    </section>
  )
}

export default Pricing
