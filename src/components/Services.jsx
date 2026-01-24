import { useState } from "react";
import { motion } from "framer-motion";
import potraitImg from "../assets/img2.jpg";
import eventImg from "../assets/img1.webp";
import weddingImg from "../assets/img4.jpg";
import studioImg from "../assets/img5.jpg";
import {
  LuArrowRight,
  LuCamera,
  LuCheck,
  LuHeart,
  LuImage,
  LuPictureInPicture,
  LuUsers,
} from "react-icons/lu";

export default function Services() {
  const services = [
    {
      id: "portraits",
      title: "Portraits",
      description: "Professional headshots and personal portraits",
      icon: <LuUsers className="text-2xl" />,
      price: "From $800",
      duration: "2–3 hours",
      deliverables: "20–40 edited photos",
      image: potraitImg,
      paragraph:
        "Capture your best self with professional portrait photography. Perfect for LinkedIn, business profiles, or personal branding.",
    },
    {
      id: "events",
      title: "Events",
      description: "Corporate & social event coverage",
      icon: <LuCamera className="text-2xl" />,
      price: "From $1,000",
      duration: "3–5 hours",
      deliverables: "40–80 edited photos",
      image: eventImg,
      paragraph: "Document your events with professional photography that captures the energy and essence of your occasion.",
    },
    {
      id: "wedding",
      title: "Wedding",
      description: "Beautiful wedding shots",
      icon: <LuHeart className="text-2xl" />,
      price: "From $2,000",
      duration: "6–8 hours",
      deliverables: "100–200 edited photos",
      image: weddingImg,
      paragraph: "Capture every precious moment of your special day with our award-winning wedding photographers.",
    },
    {
      id: "studio",
      title: "Studio",
      description: "Professional studio photography",
      icon: <LuImage className="text-2xl" />,
      price: "From $1,200",
      duration: "4–6 hours",
      deliverables: "50–150 edited photos",
      image: studioImg,
      paragraph: "Elevate your brand with stunning studio photography. Perfect for product shots and commercial work.",
    },
  ];

  const [activeId, setActiveId] = useState("portraits");

  const activeService = services.find((service) => service.id === activeId);

  return (
    <section id="services">
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
            OUR SERVICES
          </motion.h2>
          <motion.h1 
            className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif py-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Photography{" "}
            <span className="text-[#c4a35a] text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif">
              Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-md font-light-7xl text-[#565656] lg:text-2xl md:text-xl sm:text-md"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Professional photography for every occasion
          </motion.p>
        </motion.div>
        <div className="min-h-screen px-6 py-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* LEFT SIDEBAR */}
              <motion.div 
                className="space-y-4 lg:col-span-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    onClick={() => setActiveId(service.id)}
                    className={`flex cursor-pointer items-center gap-4 rounded-xl p-4 transition
                  ${
                    activeId === service.id
                      ? "border-2 border-yellow-500 bg-yellow-50"
                      : "bg-white shadow-2xl hover:bg-gray-50"
                  }`}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg text-lg
                    ${
                      activeId === service.id ? "bg-yellow-100" : "bg-gray-100"
                    }`}
                    >
                      {service.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CENTER IMAGE */}
              <motion.div 
                className="lg:col-span-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-4 top-4 rounded-full  px-4 py-1 text-sm font-semibold shadow-2xl bg-[#bababa]">
                    {activeService.price}
                  </span>
                </div>
              </motion.div>

              {/* RIGHT DETAILS */}
              <motion.div 
                className="lg:col-span-4 rounded-2xl p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                  {activeService.icon}
                </div>

                <h2 className="mb-3 text-5xl font-serif">
                  {activeService.title}
                </h2>

                <p className="mb-6 text-gray-600 font-light text-xl">
                  {activeService.paragraph}
                </p>

                <div className="mb-6 grid grid-cols-2 gap-4 py-4">
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-2xl">
                      {activeService.duration}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Deliverables</p>
                    <p className="font-semibold text-2xl">
                      {activeService.deliverables}
                    </p>
                  </div>
                </div>

                <h4 className="mb-3 font-semibold">What's included:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <LuCheck className="inline mr-2 text-[#c4a35a]" />{" "}
                    Professional lighting
                  </li>
                  <li>
                    <LuCheck className="inline mr-2 text-[#c4a35a]" /> Full
                    studio access
                  </li>
                  <li>
                    <LuCheck className="inline mr-2 text-[#c4a35a]" /> Expert
                    retouching
                  </li>
                  <li>
                    <LuCheck className="inline mr-2 text-[#c4a35a]" /> Online
                    delivery
                  </li>
                </ul>
                <button>
                  <div className="mt-10 bg-[#c4a35a] hover:bg-[#b08f4e] text-white px-20 py-4 rounded-full font-semibold text-center">
                    Book Potrait{" "}
                    <LuArrowRight className="inline ml-2 hover:scale-x-100" />
                  </div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
