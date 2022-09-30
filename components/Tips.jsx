import Image from 'next/image'
import React from 'react'

const Tips = () => {
  return (
    <div className='lg:px-40 md:px-12 sm:px8 flex flex-col lg:flex-row  gap-x-8 font-[Nunito-Sans] font-medium'>
      <aside className='w-[47.3125rem] mx-auto'>
        <div className='py-6'>
          <h1>15 helpful tips to increase</h1>
          <h1>your social media</h1>
          <h1>presence</h1>
        </div>
        <div>
          <Image
            alt='/'
            width={757}
            height={397}
            src='/assets/media/Presence.png'
          />
        </div>
        <div className='py-6'>
          <p>
            We all know that social media plays a key role in our online
            marketing strategy efforts. And one of the main goals is to increase
            your social media presence over time.
          </p>
          <p className='my-4'>
            While you can’t build a large presence overnight, you can position
            yourself in a way that will enable you to grow.
          </p>
          <p>
            Take a look at some of the most successful social media marketers
            out there – when you look at their profiles, you’ll notice two
            things:{' '}
          </p>
          <p className='my-4'>
            (1) they spent a good amount of time building their profiles up
            until they got to a high level of engagement, and{' '}
          </p>
          <p>
            (2) it’s almost always because they were able to create a
            relationship with their audience.{' '}
          </p>
          <p className='my-4'>
            Are you getting the most from your social media strategy? Or are you
            missing out on generating the results you desire?
          </p>
          <p>
            If you are struggling to get the results you want, then this blog is
            for you.{' '}
          </p>
          <p className='my-4'>
            Want to know how to get your content noticed? You might want to
            consider some of these tips.{' '}
          </p>
        </div>
        <h2 className='my-6'>1. Get to know your audience</h2>
        <div>
          <p>
            Your target audience will help you determine what content to post
            and what content they want to see. The easier your audience is to
            reach, the better.
          </p>
          <p className='my-4'>
            If you are looking to reach everyone, you will have to put a lot of
            time and effort into your posts. That is why narrowing down and
            identifying your target market is very important.{' '}
          </p>
          <p className='my-4'>
            Doing this will make it easy for you to create relevant content that
            resonates with them.
          </p>
          <p className='my-4'>Have some knowledge about them by:</p>
          <ul className='flex flex-col gap-y-1'>
            <li>Reading their profiles</li>
            <li>Knowing their hobbies</li>
            <li>Likes</li>
            <li>Dislikes</li>
          </ul>
        </div>
        <h2 className='my-6'>2. Choose the right social media platform</h2>
        <div>
          <p>
            Each platform serves different purposes, so it’s up to you to decide
            which will be the most suitable for your business. Try to understand
            the algorithm of each. You need to know what attracts people to
            certain types of content.
          </p>
          <p className='my-4'>
            In the initial stages of identifying your target audience, you will
            need to further research what platforms that they use and spend most
            of their time on. A good start would be to then create your
            pages/accounts based on them.{' '}
          </p>
          <p>
            Facebook is the most commonly used platform and is probably the
            first social media account businesses create. With a growing of 2.89
            billion active users per month, you have a wide range of audiences
            that you can reach.{' '}
          </p>
          <p className='my-4'>Some of the other popular platforms used are: </p>
          <ul className='flex flex-col gap-y-1'>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Pinterest</li>
            <li>LinkedIn</li>
            <li>and Tik Tok</li>
          </ul>
        </div>
      </aside>
      <aside className='w-[22.9375rem] flex flex-col mt-10 mx-auto  gap-y-6'>
        <div className='bg-cyan-100 px-6 gap-y-4 py-4 rounded-xl flex flex-col justify-center'>
          <Image
            alt='/'
            width={208.17}
            height={203}
            src='/assets/vector/Upgrade.svg'
          />
          <h2 className='text-center'>About Us</h2>
          <p className='text-gray-500'>
            We’re a team of digital experts specialising in web and social media
            marketing, design & branding. Our aim is to help you close the
            talent gaps in your business, and take your brand to the next level
            online. Get to know more about what we do by clicking the button
            below
          </p>
          <button className='border-2 border-black px-12 py-2 bg-white text-black font-semibold rounded-xl my-4'>
            Meet The Team
          </button>
        </div>
        <div className='bg-cyan-100 px-6 py-4 rounded-xl flex flex-col gap-y-4 items-center w-full'>
          <div className='flex gap-x-32 font-semibold'>
            <p className='text-gray-900'>Blogs</p>
            <p className=''>Case Studies</p>
          </div>
          <ul className='flex flex-col gap-y-3'>
            <li>6 Different types of content | With Examples</li>
            <li>Beginner’s guide in creating a brand kit</li>
            <li>
              How to choose the right social media manager for your business
            </li>
          </ul>
        </div>
        <div className=' bg-cyan-100 px-6 py-4 gap-y-4 rounded-xl flex flex-col justify-center'>
          <Image
            alt='/'
            width={208.17}
            height={203}
            src='/assets/vector/Woman.svg'
          />
          <p className='text-center font-bold text-2xl'>
            Get Your social media taken care of
          </p>
          <p className='text-gray-500'>
            We’re taking on new clients in 2022 for both Graphic Design and
            Social Media. If your business needs to elevate your staff or
            dedicate a team for either one of those areas, you should get in
            touch with us. We serve clients globaly
          </p>
          <button className='border-2 border-black px-12 py-2 bg-white text-black font-semibold rounded-xl my-6'>
            Lets Get Started
          </button>
        </div>
      </aside>
    </div>
  )
}

export default Tips
