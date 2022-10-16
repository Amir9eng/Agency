import React from "react";
import Image from "next/image";

const Talents = () => {
  return (
    <section className="mx-auto">
      <h2 className="text-center">Awesome People, Different Talents</h2>
      <p className="text-center md:w-[830px] mt-6 mx-auto">
        Our expert talent is currently focused around providing you the best
        services within the following areas. If you need us to cover all your
        bases, we can of course provide your business a team for that too.
      </p>
      <div className="flex lg:flex-row md:flex-col flex-col px-48 mt-6">
        <Image
          alt="/"
          width={366.71}
          height={366.71}
          layout="responsive"
          src="/assets/media/Social.png"
        />
        <Image
          alt="/"
          width={366.71}
          height={366.71}
          layout="responsive"
          src="/assets/media/Graphic.png"
        />
        <Image
          alt="/"
          width={366.71}
          height={366.71}
          layout="responsive"
          src="/assets/media/Photo.png"
        />
      </div>
    </section>
  );
};

export default Talents;
