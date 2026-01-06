import React from 'react'
import platform1 from "../assets/platform1.webp";
import platform2 from "../assets/professional-1.jpg";
import platform3 from "../assets/event-photography.jpg";
import platform4 from "../assets/Download premium image of Black photographer capturing a picture with a retro film camera by Felix about hand, person, man, vintage, and technology 1219058.jpg";

import { LuBackpack, LuBellElectric, LuCalendar, LuCamera, LuCloudLightning, LuLightbulb, LuShield } from 'react-icons/lu';

const Platform = () => {
  return (
    <section id='platform'>
      <div className="bg-amber-50 pb-15">
        <div className="text-center leading-relaxed ">
          <h2 className="font-semibold text-[#666666] text-xs font-sans pt-30 tracking-widest">
            THE PLATFORM
          </h2>
          <h1 className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif py-8">
            Built For{" "}
            <span className="text-[#c4a35a] text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif">
              Photography
            </span>
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-md text-md font-light-8xl text-[#565656] mb-20">
            Experience seamless booking, verified talent, and professional
            results
          </p>
        </div>
        {/**card sectiion................................................................. */}
        {/**card section..................................... */}
        <div className="grid lg:grid-cols-3 gap-y-10 md:grid-cols-2 md:flex-col-reverse p-5 gap-x-10">
          <div className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400 group">
            <div className="justify-center items-center flex">
              <img
                src={platform1}
                className="w-full h-40 object-cover rounded-lg"
                alt=""
              />
            </div>
            <h1 className="text-md font-sans text-center font-semibold mt-3 ">
              <LuLightbulb className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />{" "}
              Instant Booking
            </h1>
            <p className="text-[#565656] text-xs text-center">
              Book sessions in under 2 minutes
            </p>
          </div>

          <div className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400">
            <div className="justify-center items-center flex">
              <img
                src={platform2}
                className="w-full h-40 object-cover"
                alt=""
              />
            </div>
            <h1 className="text-xs font-sans text-center font-semibold mt-3">
              <LuBackpack className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />{" "}
              Instant Booking
            </h1>
            <p className="text-[#565656] text-xs text-center">
              Book sessions in under 2 minutes
            </p>
          </div>

          <div className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400">
            <div className="justify-center items-center flex ">
              <img
                src={platform3}
                className="w-full h-40 object-cover"
                alt=""
              />
            </div>
            <h1 className="text-xs font-sans text-center font-semibold mt-3">
              <LuCamera className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />{" "}
              Portfolio Builder{" "}
            </h1>
            <p className="text-[#565656] text-xs text-center">
              Showcase your best work effortlessly
            </p>
          </div>

          <div className="bg-white rounded-md w-fit shadow-2xl justify-between flex border border-gray-400 p-4">
            <div className=" flex">
              <img src={platform4} className="w-60 h-40 object-cover" alt="" />
            </div>

            <div className="m-auto mx-10">
              <h1 className="text-xs font-sans font-semibold">
                <LuShield className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />{" "}
                Verified Pros
              </h1>
              <p className="text-[#565656] text-xs">
                Every photographer is vetted & reviewed
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-md shadow-2xl  p-5 border border-gray-400 overflow-hidden">
              <div className=" flex">
                <LuCalendar className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />
              </div>
              <h1 className="text-md font-sans font-semibold">
                Smart Calendar Sync
              </h1>
              <p className="text-[#565656] text-sm">
                Seamlessly integrates with your schedule
              </p>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-2xl  p-5 border border-gray-400 overflow-hidden">
            <div className=" flex">
              <LuBackpack className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />
            </div>
            <h1 className="text-md font-sans font-semibold ">Payment Secure</h1>
            <p className="text-[#565656] text-sm">
              Protected transactions, guaranteed delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Platform