import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { SiN8N } from "react-icons/si";
import { MdOutlineCloudQueue } from "react-icons/md";
import { IoCodeSlashSharp } from "react-icons/io5";

function WhatWeDo() {
  const cardContents = [
    {
      title: "Startup-focused",
      desc: "Built around real constraints, clear milestones and momentum.",
      icon: <FaRegBuilding size={25} className="text-slate-500" />,
    },
    {
      title: "AI & automationAI & automation",
      desc: "Practical systems that remove repetitive work from the business.",
      icon: <SiN8N size={25} className="text-slate-500" />,
    },
    {
      title: "Cloud & infrastructure",
      desc: "Production environments designed to be secure and observable.",
      icon: <MdOutlineCloudQueue size={25} className="text-slate-500" />,
    },
    {
      title: "End-to-end engineering",
      desc: "One partner from first architecture sketch to ongoing operations.",
      icon: <IoCodeSlashSharp size={25} className="text-slate-500" />,
    },
  ];

  return (
    <>
      <div className="mt-20 grid gap-10 grid-cols-1 lg:grid-cols-2">
        <section className="flex flex-col justify-center items-center gap-3 w-full lg:w-xl">
          <h2 className="text-center font-sans text-4xl font-black leading-[1.05] tracking-tight">
            What exactly is <span className="text-sky-500">DuooTech</span>?
          </h2>
          <p className="text-center text-balance text-base text-white/60">
            DuooTech is an engineering partner for startups and growing
            businesses. We turn complex operations into reliable software,
            automation and infrastructure that keeps working after launch.
          </p>
        </section>

        <section className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
            {cardContents.map((card) => (
              <section
                key={card?.title}
                className="bg-slate-500/10 px-5 py-5 rounded-xl"
              >
                {card?.icon}
                <section className="mt-5">
                  <p className="font-semibold text-lg font-sans leading-[1.05]">
                    {card?.title}
                  </p>
                  <p className="text-md text-white/60 mt-2">{card?.desc}</p>
                </section>
              </section>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default WhatWeDo;
