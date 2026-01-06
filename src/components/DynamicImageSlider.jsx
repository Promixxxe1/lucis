import { useState, useEffect } from "react";
import studioImg from "../assets/black and white photography.webp"
import MainRightImage from "../assets/Hero-image14.jpg";
import BottomLeftImage from "../assets/Hero-image3.webp";
import { LuCamera } from 'react-icons/lu';

const DynamicImageSlider = () => {
  const images = [studioImg, MainRightImage, BottomLeftImage];

  const [fade, setFade] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="group h-80 w-[95%] rounded-4xl overflow-hidden relative m-auto">
      {/* Zooming Image */}
      <div
        className={`absolute inset-0 bg-center bg-cover 
                       transition-transform duration-700 ease-out
                       group-hover:scale-110`}
                       
        style={{
          backgroundImage: `linear-gradient(
                rgba(0,0,0,0.5),
                rgba(0,0,0,0.5)
              ), url(${images[currentIndex]})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-10">
        <LuCamera className="w-10 h-10 text-amber-500 inline-flex " />
        <h3 className="inline-flex mx-5 text-white">FEATURED</h3>

        <h3 className="font-sans text-3xl text-white font-semibold mt-10">
          Stunning Portfolio
        </h3>

        <p className="text-gray-300 text-md text-relaxed mt-5">
          Dynamic showcase of professional photography work
        </p>
      </div>
    </div>
  );
}




export default DynamicImageSlider