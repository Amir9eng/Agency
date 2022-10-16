import React from "react";
import Image from "next/image";

const Collaboration = () => {
  return (
    <section className="flex lg:flex-row flex-col md:px-48 py-32 gap-x-8  mx-auto">
      <div className="py-12">
        <h2 className="font-semibold">Collaboration</h2>
        <h2 className="font-semibold">Done Right</h2>
        <p className="w-[526px]">
          We apply a modern tech stack to integrate seamlessly with your
          business, as if we’re sitting right there with you in the office. We
          adapt to your businesses infrastructure and always aim to maintain the
          highest level of communication and clarity.
        </p>
        <button className="border-black border-2 rounded-xl px-3 py-2 font-semibold mt-3 hover:scale-105 hover:text-white hover:bg-black">
          Lets Get Started
        </button>
      </div>
      <div className="">
        <Image
          alt="/"
          width={625.34}
          height={470.48}
          // layout='responsive'
          src="/assets/media/Collaboration.png"
        />
        {/* <aside className=''>
          <Image
            src='/assets/media/Collab.png'
            width={269.77}
            height={336.98}
            alt=''
          />
          <div className='absolute top-[-5rem] right-64'>
            <Image
              src='/assets/media/Trace.png'
              width={423.47}
              height={470.48}
              alt=''
            />
          </div>

          <Image
            src='/assets/vector/Slack.svg'
            width={98.51}
            height={98.51}
            alt=''
            className='absolute'
          />

          <Image
            src='/assets/vector/Box.svg'
            width={98.51}
            height={98.51}
            alt=''
          />

          <Image
            src='/assets/vector/Insta.svg'
            width={98.51}
            height={98.51}
            alt=''
          />

          <Image
            src='/assets/vector/Meet.svg'
            width={98.51}
            height={98.51}
            alt=''
          />

          <Image
            src='/assets/vector/Icon.svg'
            width={147.29}
            height={147.29}
            alt=''
          />
        </aside> */}
      </div>
    </section>
  );
};

export default Collaboration;
