import React, { useEffect, useState } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import BlurhashImage from "./BlurhashImage";

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

  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        // Make the API call
        const response = await fetch(
          "https://hoque-v2-server.vercel.app/api/all-images"
        );
        // Parse the response as JSON
        const data = await response.json();
        // Update the state with the fetched data
        setImages(data.data);
        // console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();

    // Optionally, return a cleanup function to handle component unmounting
    // This prevents memory leaks and unexpected behavior
    return () => {
      // Cleanup code, if necessary
    };
  }, []);

  return (
    <div className="flex h-[45vh] md:h-[75vh] bg-fuchsia-50 relative overflow-hidden">
      {/* IMAGE AND TEXT CONTAINER */}
      <div className="w-full absolute h-[45vh] md:h-[75vh]">
        {images.map((item, index) => (
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
              // <img
              //   src={item.url}
              //   alt=""
              //   loading="lazy"
              //   className="w-full h-auto object-cover transition-opacity duration-500"
              // />
              <BlurhashImage src={item.url} blurhash={item.blurhash} />
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
