import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { LuArrowRight, LuPlay } from "react-icons/lu";
import TopLeftImage from "../assets/img1.webp";
import MainRightImage from "../assets/Hero-image14.jpg";
import BottomLeftImage from "../assets/Hero-image3.webp";
import studioImg from "../assets/black and white photography.webp";

const Hero = () => {
  const images = [TopLeftImage, MainRightImage, BottomLeftImage, studioImg];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" group flex justify-between items-center  md:px-0 pb-10">
      <div
        className={`absolute inset-0 bg-center bg-cover lg:hidden`}
        style={{
          backgroundImage: `linear-gradient(
                rgba(0,0,0,0.5),
                rgba(0,0,0,0.5)
              ), url(${images[currentIndex]})`,
        }}
      ></div>
      <motion.div
        className=" relative lg:py-10 py-30 px-10 lg:text-left md:text-center sm:text-center text-center mt-10"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.span
          className=" font-semibold lg:text-[#666666] text-xs font-sans tracking-widest lg:absolute top-0 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          WHERE VISION MEETS REALITY
        </motion.span>
        <br />
        <motion.span
          className="lg:text-7xl lg:text-black md:text-6xl text-5xl font-serif text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Every Frame
        </motion.span>
        <br />
        <motion.span
          className="text-[#c4a35a] lg:text-7xl  md:text-6xl text-5xl font-serif py-1 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Tells a Story.
        </motion.span>
        <motion.p
          className="text-lg font-light lg:text-[#565656] flex py-5 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Connect with exceptional visual storytellers who transform fleeting
          moments into timeless art. Curated talent, seamless booking.
        </motion.p>

        <motion.div
          className="space-x-1 space-y-4  mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.button
            className="bg-[#c4a35a] hover:bg-[#b08f4e] text-white px-8 py-4 rounded-full font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            Discover Talent
            <LuArrowRight className="inline ml-2" />
          </motion.button>
          <motion.button
            className="font-semibold lg:hover:bg-[#ededed] hover:bg-gray-400 px-8 py-4 rounded-full lg:text-black text-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ scale: 1.05 }}
          >
            <LuPlay className="inline ml-2" /> View Portfoilo
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-125 h-125 mx-37 hidden lg:block md:hidden sm:hidden"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Left Image */}
        <div className="absolute w-52 mr-30 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
          <img
            src={TopLeftImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Right Image */}
        <div className="absolute top-8 w-70 h-100 ml-30 rounded-2xl overflow-hidden shadow-2xl z-20 ">
          <img
            src={MainRightImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-10 w-56 h-64 rounded-2xl overflow-hidden shadow-lg z-10">
          <img
            src={BottomLeftImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Floating Badge */}
        <motion.div
          className="absolute right-16 bottom-24 bg-white px-4 py-2 rounded-full shadow-md text-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          2.5K+ Stories Told
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
