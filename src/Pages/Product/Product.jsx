import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlurhashImage from "../../Components/BlurhashImage";
// import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        // Make the API call
        const response = await fetch(
          `https://hoque-v2-server.vercel.app/api/single-product/${id}`
        );
        // Parse the response as JSON
        const data = await response.json();
        // console.log(data);
        // Update the state with the fetched data
        setProduct(data.data);
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
    <div className="flex flex-col justify-evenly items-center w-full h-full p-[10px] md:p-[15px] lg:p-[20px] xl:p-[25px]">
      <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold lg:font-bold mb-[20px] uppercase">
        {product?.category}
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-slate-500">
          {product.url && product.blurhash && (
            <BlurhashImage
              src={product?.url}
              blurhash={product?.blurhash}
              product={true}
            />
          )}
        </div>
        <div className=" flex flex-col items-start justify-center flex-1 bg-orange-50 min-h-[320px] mt-[15px] lg:mt-[0px] lg:ml-[15px] text-orange-400 uppercase">
          <div className="text-lg pl-[10px] pb-[5px] md:pb-[10px] lg:pb-[15px] md:text-2xl lg:text-3xl xl:text-4xl font-normal lg:font-semibold">
            Title: {product?.title}
          </div>
          <div className=" text-lg pl-[10px] md:text-2xl lg:text-3xl xl:text-4xl font-normal lg:font-semibold">
            Description: {product?.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
