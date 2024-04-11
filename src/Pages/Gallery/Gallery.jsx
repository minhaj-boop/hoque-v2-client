import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        // Make the API call
        const response = await fetch("http://localhost:8080/api/all-images");
        // Parse the response as JSON
        const data = await response.json();
        // Update the state with the fetched data
        setImages(data.data);
        console.log(data.data);
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
    <div className="flex flex-wrap text-[#f2f7f4]">
      {images.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item._id}
          className="w-full h-[60vh]   border-b-2 border-red-500 sm:w-1/2 lg:w-1/3  flex flex-col justify-between group odd:bg-fuchsia-50"
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

export default Gallery;
