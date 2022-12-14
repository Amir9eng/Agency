import React from 'react'
import Image from 'next/image'
import Mark from './Mark'

const Pricing = () => {
  return (
    <section className='mx-auto py-6'>
      <h2 className='text-center my-4'>Pricing</h2>
      <aside className='flex lg:flex-row flex-col gap-y-4 gap-x-4 px-6 md:px-20'>
        <div className='bg-cyan-100 rounded-xl flex flex-col justify-between h-[49.6875rem] md:w-[19.6875rem] py-6 px-6 mx-auto'>
          <aside className='flex flex-col gap-y-2'>
            <p className='font-semibold text-2xl'>Team</p>
            <p className='font-semibold text-2xl'>Augumentation</p>
            <small>What You’ll Get</small>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Social Media Management on an hourly basis
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Static social media{' '}
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Unlimited Flexibility
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Billed by hours invested at the beginning of each month
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Deploy Our Team Whenever You Need To
            </p>
          </aside>
          <aside>
            <div className='flex items-center my-1'>
              <p className='font-semibold text-2xl'>A27$/</p>
              <small className='mt-2'>Hour</small>
            </div>
            <button className='text-white px-24 py-3 rounded-xl bg-cyan-900 font-semibold'>
              Choose
            </button>
          </aside>
        </div>
        <div className='bg-cyan-100 rounded-xl h-[49.6875rem] md:w-[19.6875rem] py-6 px-6 flex flex-col justify-between'>
          <aside>
            <h3>Standard</h3>
            <small>What You’ll Get</small>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              10 Hours of social media management per week
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              2-3 Static Social Media Posts per week
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Full distribution and addaption to all platforms
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Complementary stories for all posts
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Daily Community Management
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              Daily access to social media manager via slack or other platform
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>{' '}
              No Minimum Term
            </p>
          </aside>
          <aside>
            <div className='flex items-center my-1'>
              <p className='font-semibold text-2xl'>A700$/</p>
              <small className='mt-2'>month</small>
            </div>
            <button className='text-white px-24 py-3 rounded-xl bg-cyan-900 font-semibold'>
              Choose
            </button>
          </aside>
        </div>
        <div className='bg-cyan-100 h-[49.6875rem] md:w-[19.6875rem] py-6 px-6 rounded-xl flex flex-col justify-between'>
          <aside>
            <h3>Accellerated</h3>
            <small>What You’ll Get</small>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              20 Hours of social media management per week
            </p>
            <p className='flex'>
              {' '}
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              3-5 Static and Motion Social Media Posts per week
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Advanced Graphic Design & Motion Design Support
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Paid Marketing and Post Boosting Support
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Full distribution and addaption to all platforms
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Daily Stories
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Daily Community Management
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              Daily access to social media manager via slack or other platform
            </p>
            <p className='flex'>
              <span className='min-w-[18.9px] min-h-[18.9px]'>
                <Mark />
              </span>
              No Minimum Term
            </p>
          </aside>
          <aside>
            <div className='flex items-center my-1'>
              <p className='font-semibold text-2xl'>A1050$/</p>
              <small className='mt-2'>month</small>
            </div>
            <button className='text-white px-24 py-3 rounded-xl bg-cyan-900 font-semibold'>
              Choose
            </button>
          </aside>
        </div>
        <div className='bg-cyan-900 h-[49.6875rem] md:w-[19.6875rem] px-6 rounded-xl flex flex-col justify-between'>
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
