import Image from "next/image";
import React from "react";

const Bar = () => {
  return (
    <section>
      <aside className="flex flex-col lg:flex-row gap-y-6 md:px-56 items-center justify-between">
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="">1000+</h2> <p>Designs Made</p>
        </div>
        <h2 className="">For Clients In</h2>
        <div className="flex flex-col gap-y-4 items-center">
          <h2>7</h2>
          <p>Countries</p>
        </div>
        <h2 className="">On</h2>
        <div className="flex flex-col gap-y-4 items-center">
          <h2 className="">4</h2>
          <p>Continents</p>
        </div>
      </aside>
      <aside className="flex flex-col lg:flex-row mx-auto gap-y-6 gap-x-4 md:px-56 mt-4">
        <div className="rounded-xl">
          <Image alt="/" width={335} height={346} src="/assets/media/Bar.png" />
        </div>
        <div className="md:w-[31.75rem] px-6">
          <p className="font-bold text-3xl">A Norwegian and a Sri Lankan/</p>
          <p className="font-bold text-3xl">Australian Walked Into A Bar</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Bar;
