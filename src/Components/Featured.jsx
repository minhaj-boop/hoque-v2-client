import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import icon1 from "../icons/gallery3.png";
import BlurhashImage from "./BlurhashImage";

const Featured = () => {
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
    <div className="w-screen overflow-x-scroll text-orange-400">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {images?.map((item) => (
          <div
            key={item._id}
            className="w-screen h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[75vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.url && (
              <Link
                to="/gallery"
                className="relative w-full h-3/5 hover:scale-90 transition-all duration-500 cursor-pointer hover:opacity-50"
              >
                {/* <img
                  src={item.url}
                  alt=""
                  loading="lazy"
                  className="object-fill w-full h-full "
                /> */}

                <BlurhashImage
                  src={item.url}
                  blurhash={item.blurhash}
                  featured={true}
                />

                <img
                  src={icon1}
                  alt=""
                  height={100}
                  width={100}
                  loading="lazy"
                  className="object-contain absolute top-[40%] left-[40%]"
                />
              </Link>
            )}
            {/* TEXT CONTAINER */}
            <div className="w-full h-2/5">
              <div className="flex items-center justify-center flex-col gap-2 h-full">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item?.title}
                </h1>
                <p className="p-2 2xl:p-8">{item?.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
