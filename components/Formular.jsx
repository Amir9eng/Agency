import React from "react";
import Image from "next/image";

const Formular = () => {
  return (
    <section className="mx-auto bg-cyan-100 md:px-40 py-8">
      <h3 className="font-semibold text-center py-4">Our Formula</h3>
      <aside className="flex mx-auto lg:flex-row flex-col gap-y-4 gap-x-4">
        <div className="px-4 py-3">
          <Image
            alt=""
            width={96.38}
            height={96.38}
            src="/assets/vector/Strategy.svg"
          />
          <p className="font-semibold text-3xl py-2">Strategy</p>
          <p className="font-[Raleway]">
            We set out a specific strategy for your brand by analyzing your
            brand, your industry and your competitors. Your strategy will inform
            and define your content pillars
          </p>
        </div>
        <div className="px-4 py-3">
          {" "}
          <Image
            alt=""
            width={96.38}
            height={96.38}
            src="/assets/vector/Production.svg"
          />
          <p className="font-semibold">Production</p>
          <p className="font-[Raleway]">
            With the strategy in place our social media team in conjunction with
            our graphic design team will design, write and arrange your social
            media posts, in monthly increments.
          </p>
        </div>
        <div className="px-4 py-3">
          {" "}
          <Image
            alt=""
            width={96.38}
            height={96.38}
            src="/assets/vector/Distribution.svg"
          />
          <p className="font-semibold">Distribution</p>
          <p>
            We distribute your social media content calendar to your social
            media platform using best practices for each particular platform
          </p>
        </div>
        <div className="px-4 py-3">
          {" "}
          <Image
            alt=""
            width={96.38}
            height={96.38}
            src="/assets/vector/Management.svg"
          />
          <p className="font-semibold">Management</p>
          <p>
            We provide ongoing management to your social media platforms to
            ensure they act like living, human entities, not just static robots.
          </p>
        </div>
      </aside>
    </section>
  );
};

export default Formular;
