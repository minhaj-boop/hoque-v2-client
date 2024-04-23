import React from "react";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  //   console.log(data);
  return (
    <div className="flex flex-wrap text-[#f2f7f4] border-b border-red-500">
      {data.map((item) => (
        <Link
          href={`/product/${item._id}`}
          key={item._id}
          className="w-full h-[60vh] sm:w-1/2 lg:w-1/3 flex flex-col justify-between group odd:bg-fuchsia-50"
        >
          {/* IMAGE CONTAINER */}
          {item.url && (
            <div className="relative h-full transition-all duration-500 hover:opacity-50 hover:scale-90">
              <img
                src={item.url}
                alt=""
                className="object-fill w-full h-full"
              />
              <div className=" absolute top-[45%] flex items-center justify-center font-bold">
                <p className="p-4">{item.desc}</p>
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

export default Category;
