import { useState, useEffect } from "react";
import {
  LuArrowRight,
  LuCamera,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuMail,
  LuTwitter,
} from "react-icons/lu";

const Footer = () => {
  const images = ["/check.mp4"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-30">
      <div className="group h-80 w-[95%] rounded-4xl overflow-hidden relative m-auto">
        {/* Zooming Image */}
        <div
          className={`absolute inset-0 bg-center bg-cover 
                       transition-transform duration-700 ease-out
                       group-hover:scale-110`}
        >
          <video
            src={images[currentIndex]}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          ></video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-10">
          <LuCamera className="w-10 h-10 text-amber-500 inline-flex " />
          <h3 className="inline-flex mx-5 text-white">
            <em>Looking for Classic Photographers?</em>
          </h3>

          <h3 className="font-sans text-3xl text-white font-semibold mt-10">
            Find Photographers {""}
            <em>
              <span className="text-white font-serif">Near You</span>
            </em>
          </h3>

          <p className="text-gray-100 text-md text-relaxed mt-5">
            Thousands of verified professionals across the country{"'s"} top
            locations
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-10 justify-center items-center">
        {/**newsletter*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*/}

        <div className="">
          <h1 className="text-3xl font-sans font-light">Stay Updated</h1>
          <p className="font-light">
            Get the latest photography tips and exclusive offers
          </p>
          <div className="relative inline-flex">
            <input
              className="w-50 pl-10 pr-4 py-2 border-2 border-gray-400 rounded-full"
              type="text"
              placeholder="enter your email"
            />
            <LuMail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          </div>
          <button className="bg-[#c4a35a] p-3 rounded-full border-2 border-[#d4d4d4] inline-flex cursor-pointer mx-1 ">
            <LuArrowRight className="text-white w-5 h-5 m-auto" />
          </button>
        </div>

        {/**links........................................ */}

        <div className="flex gap-10 p-10">
          <div className="">
            <h2 className="text-lg font-semibold">Services</h2>
            <ul className="">
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Wedding
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Portrait
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Events
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Commercial
              </li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-lg font-semibold">Company</h2>
            <ul className="">
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                About
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Careers
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Blog
              </li>
              <li className="text-sm font-light hover:scale-120 transition-all duration-200">
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-400 w-[90%] m-auto p-3 justify-between flex items-center">
        {/**logo.................. */}
        <div className="font-light underline-">LUCIS 2026</div>

        {/** quick social links............... */}
        <div className="flex gap-5">
          <LuInstagram className=" border-2 border-gray-400 rounded w-10 h-10 p-2  hover:bg-[#c4a35a] hover:scale-120 transition-all ease-in-out duration-200" />
          <LuFacebook className=" border-2 border-gray-400 rounded w-10 h-10 p-2 hover:bg-[#c4a35a] hover:scale-120 transition-all ease-in-out duration-200" />
          <LuLinkedin className=" border-2 border-gray-400 rounded w-10 h-10 p-2  hover:bg-[#c4a35a] hover:scale-120 transition-all ease-in-out duration-200" />
          <LuTwitter className=" border-2 border-gray-400 rounded w-10 h-10 p-2 hover:bg-[#c4a35a] hover:scale-120 transition-all ease-in-out duration-200" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
