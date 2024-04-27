import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    // Define a function to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://hoque-v2-server.vercel.app/api/product/${id}`
        );
        const data = response.data;
        setProduct(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    return () => {
      // Cleanup code, if necessary
    };
  }, []);
  return <div>{id}</div>;
};

export default Product;
