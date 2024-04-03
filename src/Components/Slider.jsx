import React, { useEffect, useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const data = [
  {
    id: 1,
    title: "Neque porro quisquam est qui dolorem.",
    image: img1,
  },
  {
    id: 2,
    title: "Nie je nikto, kto by mal rád bolesť.",
    image: img2,
  },
  {
    id: 3,
    title: "Det finns ingen som älskar smärta.",
    image: img3,
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  //   const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
        // setIsAnimating(false);
      }, 500); // Change slide after 500ms to allow for fade out effect
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-[50vh] md:h-[75vh] bg-fuchsia-50 relative overflow-hidden">
      {/* IMAGE AND TEXT CONTAINER */}
      <div className="w-full absolute h-[50vh] md:h-[75vh]">
        {data.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col justify-center items-center transition-transform duration-1000 ${
              index === currentSlide
                ? "transform-none"
                : "transform translate-x-full"
            }`}
            style={{
              opacity: index === currentSlide ? 1 : 0,
            }}
          >
            {
              // <Image
              //   src={item.image}
              //   alt=""
              //   layout="fill"
              //   objectFit="cover"
              //   className="transition-opacity duration-500"
              // />
              <img
                src={item.image}
                alt=""
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            }
            <div className="absolute top-[40%] flex flex-col justify-center items-center">
              <h1 className="text-3xl text-center uppercase p-4 md:p-10 md:text-4xl xl:text-6xl text-orange-400 transition-opacity duration-500">
                {item.title}
              </h1>
              <button className="bg-orange-500 text-white py-4 px-8 transition-opacity duration-500">
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
