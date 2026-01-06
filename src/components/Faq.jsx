import React, {useState} from 'react';
import { LucideCircleQuestionMark } from 'lucide-react';

const Faq = () => {

const services = [
  {
    id: "btn1",
    title: "Getting Started",
    heading: "How do I find and book a photographer?",

    paragraph:
      "Browse our curated network of photographers, view their portfolios, check availability, and book directly through our platform. You can filter by location, style, and service type.",
  },
  {
    id: "btn2",
    title: "Pricing",
    heading: "How much does it cost to book a photographer?",

    paragraph:
      "Pricing varies by photographer and service type. Wedding photography ranges from $2,500-$5,000+, while portraits start at $350. Each photographer sets their own rates.",
  },
  {
    id: "btn3",
    title: "Safety",
    heading: "How do you verify photographers?",

    paragraph:
      "All photographers undergo background checks, portfolio review, and client verification. We maintain a 4.9+ rating system to ensure quality.",
  },
  {
    id: "btn4",
    title: "Timelines",
    heading: "How long does it take to get my photos?",

    paragraph:
      "Most photographers deliver edited photos within 2-4 weeks. Rush delivery options are available for an additional fee.",
  },
];

  const [activeId, setActiveId] = useState("btn1");

  const activeService = services.find((service) => service.id === activeId);
 




  return (
    <section id='faq'>
      <div className="bg-[#fffbeb] p-5">
        <div className="text-center leading-relaxed pt-10">
          <div className="bg-white w-fit mx-auto rounded-4xl px-2 py-1 bg-">
            <h2 className="font-medium text-[#666666] text-md font-sans">
              <LucideCircleQuestionMark className="inline w-6 h-6 mr-2 mb-1" />{" "}
              FAQ
            </h2>
          </div>

          <h1 className="text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif py-8 font-light">
            Questions? We Have{" "}
            <span className="text-[#c4a35a] text-4xl lg:text-7xl md:text-6xl sm:text-5xl font-serif">
              Answers
            </span>
          </h1>
          <p className="lg:text-2xl md:text-xl sm:text-md text-md  text-[#565656] mb-20">
            Everything you need to know about booking and managing photography
            services
          </p>
        </div>

        <div className="flex justify-center">
          {services.map((service) => (
            <div key={service.id} onClick={() => setActiveId(service.id)}>
              <button
                className={`lg:px-6 md:px-6 px-2 py-2 rounded-full transition cursor-pointer shadow-gray-500-4xl mx-2 mb-4 font-semibold border-2 border-[#d4d4d4] hover:shadow-white shadow-lg text-xs
                ${
                  activeId === service.id
                    ? "bg-[#c4a35a] text-white"
                    : "bg-white text-black"
                }`}
              >
                {service.title}
              </button>

              <h1 className="hidden">{service.heading || service.title}</h1>
              <p className="hidden">{service.paragraph}</p>
            </div>
          ))}
        </div>
        {/**disdplay text............... */}
        <div
          className={` ${
            activeId === activeService.id
              ? "bg-white text-black border-2 border-[#d4d4d4] rounded-4xl overflow-hidden m-auto mb-10 w-fit"
              : "bg-white text-black"
          }`}
        >
          <h1 className="text-2xl py-8 font-semibold text-center font-sans">
            {activeService.heading || activeService.title}
          </h1>
          <em>
            {" "}
            <p className="text-xl  text-center px-20 mb-20">
              {activeService.paragraph}
            </p>
          </em>
        </div>

        <p className="text-center font-light mb-5">Still have questions?</p>
        <button className="flex m-auto mb-40 bg-[#c4a35a] rounded-4xl px-6 py-4 font-semibold cursor-pointer  text-white hover:scale-110 transition-all ease-in-out duration-300 shadow-2xl">
          Contact Support
        </button>
      </div>
    </section>
  );
}

export default Faq