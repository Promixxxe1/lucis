import React from "react";
import { motion } from "framer-motion";
import platform1 from "../assets/platform1.webp";
import platform2 from "../assets/professional-1.jpg";
import platform3 from "../assets/event-photography.jpg";
import platform4 from "../assets/Download premium image of Black photographer capturing a picture with a retro film camera by Felix about hand, person, man, vintage, and technology 1219058.jpg";

import {
  LuBackpack,
  LuBellElectric,
  LuCalendar,
  LuCamera,
  LuCloudLightning,
  LuLightbulb,
  LuShield,
} from "react-icons/lu";

const Platform = () => {
  return (
    <section id="platform">
      <div className="bg-amber-50 pb-15">
        <motion.div
          className="text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="font-semibold text-[#666666] text-xs font-sans pt-30 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            THE PLATFORM
          </motion.h2>
          <motion.h1
            className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif py-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Built For{" "}
            <span className="text-[#c4a35a] text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif">
              Photography
            </span>
          </motion.h1>
          <motion.p
            className="lg:text-2xl md:text-xl sm:text-md text-md font-light-8xl text-[#565656] mb-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Experience seamless booking, verified talent, and professional
            results
          </motion.p>
        </motion.div>
        {/**card sectiion................................................................. */}
        {/**card section..................................... */}
        <motion.div
          className="grid lg:grid-cols-3 gap-y-10 md:grid-cols-2 md:flex-col-reverse p-5 gap-x-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="bg-white w-full p-4 rounded-md shadow-2xl border border-gray-400"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="bg-white rounded-md w-fit shadow-2xl justify-between flex border border-gray-400 p-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
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
          </motion.div>

          <motion.div
            className="bg-white rounded-md shadow-2xl  p-5 border border-gray-400 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <div className=" flex">
              <LuBackpack className="inline-flex bg-amber-500/50 w-8 h-8 rounded p-1" />
            </div>
            <h1 className="text-md font-sans font-semibold ">Payment Secure</h1>
            <p className="text-[#565656] text-sm">
              Protected transactions, guaranteed delivery
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platform;
