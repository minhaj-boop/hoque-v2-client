import React from "react";
import { Link } from "react-router-dom";
import { pizzas } from "../../data";

const Gallery = () => {
  return (
    <div className="flex flex-wrap text-[#f2f7f4]">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full h-[60vh]   border-b-2 border-red-500 sm:w-1/2 lg:w-1/3  flex flex-col justify-between group odd:bg-fuchsia-50"
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-full transition-all duration-500 hover:opacity-50 hover:scale-90">
              <img
                src={item.img}
                alt=""
                className="object-fill w-full h-full"
              />
              <div className=" absolute top-[45%] flex items-center justify-center font-bold">
                <p className="p-4">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
                  assumenda non quo, ipsum provident quae?
                </p>
                {/* <h1 className="text-2xl uppercase p-2">{item.title}</h1> */}
                {/* <h2 className="group-hover:hidden text-2xl">${item.price}</h2> */}
                {/* <button className="hidden uppercase group-hover:block bg-red-500 text-white p-2 rounded-md">
          Add to Cart
        </button> */}
              </div>
            </div>
          )}
          {/* TEXT CONTAINER */}
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
