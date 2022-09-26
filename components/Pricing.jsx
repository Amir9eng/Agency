import React from 'react'
import Image from 'next/image'

const Pricing = () => {
  return (
    <section className='mx-auto'>
      <h2>Pricing</h2>
      <aside className='flex gap-x-4'>
        <div className='bg-cyan-100 px-6'>
          <p className='font-semibold text-xl'>Team</p>
          <p className='font-semibold text-xl'>Augumentation</p>
          <p>What You’ll Get</p>
          <p>Social Media Management on an hourly basis</p>
          <p>Static social media </p>
          <p>Unlimited Flexibility</p>
          <p>Billed by hours invested at the beginning of each month</p>
          <p>Deploy Our Team Whenever You Need To</p>
          <p>
            A27$/<small>Hour</small>
          </p>
          <button className='text-white px-4 py-3 rounded-xl bg-cyan-300'>
            Choose
          </button>
        </div>
        <div>
          <h3>Standard</h3>
          <small>What You’ll Get</small>
          <p>10 Hours of social media management per week</p>
          <p>2-3 Static Social Media Posts per week</p>
          <p>Full distribution and addaption to all platforms</p>
          <p>Complementary stories for all posts</p>
          <p>Daily Community Management</p>
          <p>
            Daily access to social media manager via slack or other platform
          </p>
          <p>No Minimum Term</p>
        </div>
        <div>
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
        <div className='bg-cyan-900'>
          <p>Custom</p>
          <p>Deployment</p>
          <p>
            {' '}
            We will put together a bespoke plan for you based on the hours we
            will invest with your business to get your business what it needs.
          </p>
          <button className='bg-cyan-100 rounded-xl text-cyan-900'>
            Choose
          </button>
          <div>
            <Image
              width={482.06}
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
