import React, { useState } from "react";
import { X } from "lucide-react";
import navbarImg from "../assets/Navbar.svg";
import navbarImg2 from "../assets/MobileNavbar.png";
import {
  LuAlignRight,
  LuChevronDown,
  LuLayoutDashboard,
  LuSearch,
  LuShield,
  LuSparkles,
  LuUser,
} from "react-icons/lu";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [getStarted, setGetStarted] = useState(false);

  return (
    <nav className="w-full lg:h-30 z-100 relative ">
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2
  w-[95%] max-w-7xl
  flex justify-between items-center lg:bg-[#c4a35a]/50 bg-white/50 rounded-4xl p-3
  shadow-white-4xl border-2 border-white backdrop-blur-lg animate-in slide-in-from-bottom duration-2000"
      >
        <div className="w-30 cursor-pointer flex gap-2 items-center">
          <a href="#">
            <img src={navbarImg} className="lg:block" alt="LUCIS" />
            <img src={navbarImg2} className="hidden" alt="Mobile Nav" />
          </a>
        </div>

        <div className="hidden lg:block ">
          <ul className="flex space-x-5 font-semibold ">
            <a href="#services">
              {" "}
              <li className="hover:bg-[#ededed]/50 rounded-4xl px-3 py-2 transition-all ease-in-out duration-300 cursor-pointer">
                Services
              </li>
            </a>
            <a href="#platform">
              <li className="cursor-pointer hover:bg-[#ededed]/50 rounded-4xl px-3 py-2 transition-all ease-in-out duration-300">
                Professionals
              </li>
            </a>
            <a href="#test">
              <li className="cursor-pointer hover:bg-[#ededed]/50 rounded-4xl px-3 py-2 transition-all ease-in-out duration-300">
                About
              </li>
            </a>
            <a href="#faq">
              <li className="cursor-pointer hover:bg-[#ededed]/50 rounded-4xl px-3 py-2 transition-all ease-in-out duration-300">
                Contact
              </li>
            </a>
          </ul>
        </div>

        <div className="hidden lg:flex space-x-2">
          <button
            className="px-6 py-2 rounded-full font-semibold hover:bg-[#ededed]/50 transition-all ease-in-out duration-300 cursor-pointer relative"
            onClick={() => setSignIn((prev) => !prev)}
          >
            {signIn ? "" : ""}
            Sign in <LuChevronDown className="inline ml-2" />
          </button>
          {signIn && (
            <div className=" bg-white w-80 h-50 absolute top-15 right-30 shadow-2xl rounded-4xl p-4 animate-in slide-in-from-top transition-all ease-in-out duration-700">
              <h1 className="text-sm font-sans text-black pt-2 tracking-wider uppercase">
                Choose Account Type
              </h1>
              <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl p-2">
                <LuUser className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                <h2 className="inline-flex font-sans text-md font-semibold">
                  Client Portal
                </h2>
                <p className="flex text-xs font-sans font-light mx-15 absolute top-22">
                  Find Photographers
                </p>
              </div>

              <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl p-2">
                <LuLayoutDashboard className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                <h2 className="inline-flex font-sans text-md font-semibold">
                  Pro Dashboard
                </h2>
                <p className="flex text-xs font-sans font-light mx-15 absolute top-38">
                  Manage Bookings
                </p>
              </div>
            </div>
          )}
          <button
            className="bg-[#c4a35a] text-white px-6 py-2 rounded-full cursor-pointer font-semibold"
            onClick={() => setGetStarted((prev) => !prev)}
          >
            {getStarted ? "" : ""}
            Get Started <LuChevronDown className="inline ml-2" />
          </button>
        </div>
        {getStarted && (
          <div className=" bg-white w-80 h-50 absolute top-15 right-0 shadow-2xl rounded-4xl p-4 animate-in slide-in-from-top transition-all ease-in-out duration-700">
            <h1 className="text-sm font-sans text-black pt-2 tracking-wider uppercase">
              Start Your Journey
            </h1>
            <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl p-2">
              <LuSearch className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
              <h2 className="inline-flex font-sans text-md font-semibold">
                Find Talent
              </h2>
              <p className="flex text-xs font-sans font-light mx-15 absolute top-22">
                Discover amazing photographers
              </p>
            </div>

            <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl p-2">
              <LuSparkles className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
              <h2 className="inline-flex font-sans text-md font-semibold">
                Showcase Skills
              </h2>
              <p className="flex text-xs font-sans font-light mx-15 absolute top-38">
                Build your photography business
              </p>
            </div>
          </div>
        )}

        <button
          className="lg:hidden p-2 cursor-pointer"
          onClick={() => setMobile((prev) => !prev)}
        >
          {mobile ? (
            <X size={24} className="text-black rounded-full" />
          ) : (
            <LuAlignRight size={24} className="" />
          )}
        </button>
      </div>
      {mobile && (
        <div className="lg:hidden fixed right-0 top-17 bg-white backdrop-blur-lg rounded-2xl p-2 shadow-white-4xl border border-white z-50 h-fit  w-80 animate-in slide-in-from-right duration-700">
          <ul className="flex flex-col space-y-2 font-semibold">
            <li
              className="hover:bg-[#ededed]/50 rounded-xl px-3 py-1 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={() => setMobile(false)}
            >
              <a href="#services"> Services</a>
            </li>
            <li
              className="hover:bg-[#ededed]/50 rounded-xl px-3 py-1 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={() => setMobile(false)}
            >
              <a href="#platform">Professionals</a>
            </li>
            <li
              className="hover:bg-[#ededed]/50 rounded-xl px-3 py-1 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={() => setMobile(false)}
            >
              <a href="#test"> About</a>
            </li>
            <li
              className="hover:bg-[#ededed]/50 rounded-xl px-3 py-1 transition-all ease-in-out duration-300 cursor-pointer"
              onClick={() => setMobile(false)}
            >
              <a href="#faq"> Contact</a>
            </li>
          </ul>
          <div className="flex flex-col border-t border-black">
            <div className="p-2 font-semibold" onClick={() => setMobile(false)}>
              <h1 className="text-sm font-sans text-black tracking-wider uppercase py-2">
                sign in
              </h1>
              <div className="cursor-pointer hover:bg-[#ededed]/50 rounded-2xl relative p-1">
                <LuUser className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                <h2 className="inline-flex font-sans text-md font-semibold">
                  Client Portal
                </h2>
                <p className="flex text-xs font-sans font-light mx-15 text-black absolute bottom-0.5">
                  Find Photographers
                </p>
              </div>
              <div className="cursor-pointer hover:bg-[#ededed]/50 rounded-2xl relative p-1">
                <LuLayoutDashboard className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                <h2 className="inline-flex font-sans text-md font-semibold">
                  Pro Dashboard
                </h2>
                <p className="flex text-xs font-sans font-light mx-15 text-black absolute bottom-0.5">
                  Manage Bookings
                </p>
              </div>

              <div className="" onClick={() => setMobile(false)}>
                <h1 className="text-sm font-sans text-black py-2 tracking-wider uppercase">
                  get started
                </h1>
                <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl relative p-2">
                  <LuSearch className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                  <h2 className="inline-flex font-sans text-md font-semibold ">
                    Find Talent
                  </h2>
                  <p className="flex text-xs font-sans font-light left-16 text-black absolute top-10">
                    Discover amazing photographers
                  </p>
                </div>

                <div className="cursor-pointer hover:bg-[#e1d1ac]/50 rounded-2xl p-2">
                  <LuSparkles className="bg-gray-300 w-13 h-13 inline-flex rounded-4xl p-3 text-[#c4a35a]" />{" "}
                  <h2 className="inline-flex font-sans text-md font-semibold">
                    Showcase Skills
                  </h2>
                  <p className="flex text-xs font-sans font-light mx-14 text-black absolute bottom-7">
                    Build your photography business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
