import React from "react";
import { motion } from "framer-motion";
import { LuQuote, LuStar } from "react-icons/lu";
import testimonialImage from "../assets/Hero-image12.jpg";
import testimonialImage2 from "../assets/Hero-image.jpeg";
import testimonialImage3 from "../assets/img1.webp";

const Testimonials = () => {
  return (
    <section id="test">
      <div className="pb-20">
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
            CLIENT STORIES
          </motion.h2>
          <motion.h1
            className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif py-8 font-light"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Capturing{" "}
            <em>
              <span className="text-[#c4a35a] text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif">
                Memories
              </span>
            </em>
          </motion.h1>
          <motion.p
            className="lg:text-2xl md:text-xl sm:text-md text-md font-light text-[#565656] mb-20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Stories from our clients who found their perfect photographer
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10 gap-x-25 gap-y-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="bg-white shadow-4xl border border-[#d4d4d4] w-fit rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonialImage}
              className="w-full h-90 object-cover rounded-t-2xl"
              alt=""
            />

            <div className="p-5 ">
              <LuQuote className="w-10 h-10 text-gray-300" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <em>
                {" "}
                <p className="">
                  "Every moment of our special day was captured with such
                  artistry and emotion.Looking at our photos brings us right
                  back to those magical moments."
                </p>
              </em>
              <h6 className="text-xl font-semibold">Sarah & Michael Chen</h6>
              <p className="font-light text-sm">Wedding • Napa Valley, CA</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-4xl border border-[#d4d4d4] w-fit rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonialImage2}
              className="w-full h-90 object-cover rounded-t-2xl"
              alt=""
            />

            <div className="p-5 ">
              <LuQuote className="w-10 h-10 text-gray-300" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <em>
                {" "}
                <p className="">
                  "The photographer made me feel so <br /> comfortable. These
                  portraits are exactly <br /> what I envisioned."
                </p>
              </em>
              <h6 className="text-xl font-semibold">Jessica Williams</h6>
              <p className="font-light text-sm">Portrait Session</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-4xl border border-[#d4d4d4] w-fit rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={testimonialImage3}
              className="w-full h-90 object-cover rounded-t-2xl"
              alt=""
            />

            <div className="p-5 ">
              <LuQuote className="w-10 h-10 text-gray-300" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <LuStar className="inline text-yellow-400 fill-black" />
              <em>
                {" "}
                <p className="">
                  "Beautiful, timeless photos that we will treasure forever.
                  Absolutely stunning work."
                </p>
              </em>
              <h6 className="text-xl font-semibold">Emily & Jamess</h6>
              <p className="font-light text-sm">Engagement</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-amber-50 shadow-4xl border border-[#d4d4d4] w-fit rounded-2xl justify-center items-center p-10 h-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <LuQuote className="w-10 h-10 text-gray-300 text-center" />
            <h1 className="font-semibold text-xl"> Your Story Next</h1>
            <p className="text-lg">Join hundreds of satisfied clients</p>
          </motion.div>
        </motion.div>

        <div className=" grid justify-between p-10 md: grid-cols-2 lg:grid-cols-4 text-center gap-y-10 leading-relaxed">
          <span className="p-1 animate-bounce duration-1000 delay-100">
            <h2 className="text-4xl">2.5K+</h2>
            <p className="text-sm font-light leading-relaxed ">Happy Clients</p>
          </span>
          <span className="p-1 animate-bounce duration-1000 delay-200">
            <h2 className="text-4xl">4.9</h2>
            <p className="text-sm font-light leading-relaxed">Average Rating</p>
          </span>
          <span className="p-1 animate-bounce duration-1000 delay-300">
            <h2 className="text-4xl">98%</h2>
            <p className="text-sm font-light leading-relaxed">
              Satisfaction Rate
            </p>
          </span>
          <span className="p-1 animate-bounce duration-1000 delay-400">
            <h2 className="text-4xl">24h</h2>
            <p className="text-sm font-light leading-relaxed">Response Time</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
