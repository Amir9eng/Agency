import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <section className="flex md:flex-row flex-col md:px-48 py-12 gap-x-4">
      <div className="py-12">
        <p>Case Studies</p>
        <h2 className="mt-4">See Our Work</h2>
        <p className="w-[440px] mt-6">
          We adapt to all types of businesses and immerse ourselves into your
          market to operate as a part of your company. Anything from e-sports to
          real estate to hospitality and music. Our evidence lies in the work we
          have done for our current and past clients, which you are encouraged
          to check out.
        </p>
        <button className="px-3 py-2 border-2 border-black font-semibold rounded-xl mt-6">
          See Our Work
        </button>
      </div>
      <div className="md:w-[659px] grid grid-cols-2 md:grid-cols-3 gap-x-2">
        <Image
          alt="/"
          src="/assets/media/Grid.png"
          width={202.43}
          height={202.43}
        />

        <Image
          alt="/"
          src="/assets/media/Grid-2.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-3.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-4.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-5.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-6.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-7.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-8.png"
          width={202.43}
          height={202.43}
        />
        <Image
          alt="/"
          src="/assets/media/Grid-9.png"
          width={202.43}
          height={202.43}
        />
      </div>
    </section>
  );
};

export default Work;
