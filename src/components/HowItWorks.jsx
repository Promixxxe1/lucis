import potraitImg from "../assets/black and white photography.webp";
import eventImg from "../assets/img1.webp";
import weddingImg from "../assets/Hero-image3.webp";
import studioImg from "../assets/Hero-image.jpeg";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <div className="pt-20">
      <motion.h1
        className="text-center text-5xl lg:text-6xl md:text-6xl sm:text-5xl font-serif pb-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        How It <span className="text-[#c4a35a]">Works</span>
      </motion.h1>
      <motion.div
        className="grid lg:grid-cols-2 rounded-4xl gap-5 p-10 sm:grid-cols-1 md:grid-cols-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="group h-80 w-full rounded-4xl overflow-hidden relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Zooming Image */}
          <div
            className="absolute inset-0 bg-center bg-cover 
               transition-transform duration-700 ease-out
               group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ), url(${potraitImg})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            <h2 className="text-7xl text-white/30 font-sans font-extralight">
              01
            </h2>

            <h3 className="font-serif text-2xl text-white font-semibold mt-15">
              Browse & Select
            </h3>

            <p className="text-white text-sm">
              Explore our curated network of professional photographers
            </p>
          </div>
        </motion.div>
        <motion.div
          className="group h-80 w-full rounded-4xl overflow-hidden relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Zooming Image */}
          <div
            className="absolute inset-0 bg-center bg-cover 
               transition-transform duration-700 ease-out
               group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ), url(${eventImg})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            <h2 className="text-7xl text-white/30 font-sans font-extralight">
              02
            </h2>

            <h3 className="font-serif text-2xl text-white font-semibold mt-15">
              Book & Connect
            </h3>

            <p className="text-white text-sm">
              Schedule your session and discuss your vision
            </p>
          </div>
        </motion.div>
        <motion.div
          className="group h-80 w-full rounded-4xl overflow-hidden relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Zooming Image */}
          <div
            className="absolute inset-0 bg-center bg-cover 
               transition-transform duration-700 ease-out
               group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ), url(${weddingImg})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            <h2 className="text-7xl text-white/30 font-sans font-extralight">
              03
            </h2>

            <h3 className="font-serif text-2xl text-white font-semibold mt-15">
              Capture Moments
            </h3>

            <p className="text-white text-sm">
              Professional photography session with artistic precision
            </p>
          </div>
        </motion.div>

        <motion.div
          className="group h-80 w-full rounded-4xl overflow-hidden relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Zooming Image */}
          <div
            className="absolute inset-0 bg-center bg-cover 
               transition-transform duration-700 ease-out
               group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(
        rgba(0,0,0,0.5),
        rgba(0,0,0,0.5)
      ), url(${studioImg})`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 p-6">
            <h2 className="text-7xl text-white/30 font-sans font-extralight">
              04
            </h2>

            <h3 className="font-serif text-2xl text-white font-semibold mt-15">
              Receive & Share
            </h3>

            <p className="text-white text-sm">
              Get your edited photos delivered to your gallery
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
