import React from "react";

import { Link } from "react-router-dom";
import icon1 from "../icons/gallery3.png";
import { featuredProducts } from "../data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-orange-400">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts?.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[90vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[75vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <Link
                to="/gallery"
                className="relative w-full h-3/5 hover:scale-90 transition-all duration-500 cursor-pointer hover:opacity-50"
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-fill w-full h-full "
                />

                <img
                  src={icon1}
                  alt=""
                  height={100}
                  width={100}
                  className="object-contain absolute top-[40%] left-[40%]"
                />
              </Link>
            )}
            {/* TEXT CONTAINER */}
            <div className="w-full h-2/5">
              <div className="flex items-center justify-center flex-col gap-2 h-full">
                <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                  {item.title}
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
