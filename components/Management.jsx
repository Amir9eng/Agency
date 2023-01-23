import React from "react";
import Image from "next/image";

const Management = () => {
  return (
    <section className="flex lg:flex-row flex-col gap-y-6 mx-auto gap-x-6 md:px-48">
      <div className="mt-28 w-fit text-center md:text-left">
        <h3 className="text-cyan-500">Social Media</h3>
        <h3>Management</h3>
        <p className="mt-4 px-4 md:w-[28.625rem] text-gray-500">
          Source your businesses social media responsebilities out to our team
          of experts
        </p>
        <button className="border-black border-2 rounded-xl px-3 py-2 font-semibold mt-3 hover:scale-105 hover:text-white hover:bg-black">
          Lets Get Started
        </button>
      </div>
      <div className="w-fit h-fit">
        <Image alt="/" width={588} height={680} src="/assets/media/Phone.png" />
      </div>
    </section>
  );
};

export default Management;
