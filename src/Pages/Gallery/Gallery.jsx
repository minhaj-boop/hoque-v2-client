import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Category from "../../Components/Category";

const Gallery = () => {
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
    <>
      {/* <Category data={images} /> */}
      {/* Render Category components conditionally based on categories */}
      {images.length > 0 && (
        <>
          {images.some((image) => image.category === "Bohemian") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Bohemian
              </h1>
              <Category
                data={images.filter((image) => image.category === "Bohemian")}
              />
            </>
          )}
          {images.some((image) => image.category === "Art Deco") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Art Deco
              </h1>
              <Category
                data={images.filter((image) => image.category === "Art Deco")}
              />
            </>
          )}
          {images.some((image) => image.category === "Contemporary") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Contemporary
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Contemporary"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Interior architect") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Interior architect
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Interior architect"
                )}
              />
            </>
          )}
          {images.some(
            (image) => image.category === "Eclecticism in architecture"
          ) && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Eclecticism in architecture
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Eclecticism in architecture"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Country") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Country
              </h1>
              <Category
                data={images.filter((image) => image.category === "Country")}
              />
            </>
          )}
          {images.some((image) => image.category === "Minimalism") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Minimalism
              </h1>
              <Category
                data={images.filter((image) => image.category === "Minimalism")}
              />
            </>
          )}
          {images.some((image) => image.category === "Mid-century modern") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Mid-century modern
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Mid-century modern"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Transitional") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Transitional
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Transitional"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Traditional") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Traditional
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Traditional"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Farmhouse") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Farmhouse
              </h1>
              <Category
                data={images.filter((image) => image.category === "Farmhouse")}
              />
            </>
          )}
          {images.some((image) => image.category === "Rustic") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Rustic
              </h1>
              <Category
                data={images.filter((image) => image.category === "Rustic")}
              />
            </>
          )}
          {images.some((image) => image.category === "Organic") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Organic
              </h1>
              <Category
                data={images.filter((image) => image.category === "Organic")}
              />
            </>
          )}
          {images.some((image) => image.category === "Industrial style") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Industrial style
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Industrial style"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Organic") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Organic
              </h1>
              <Category
                data={images.filter((image) => image.category === "Organic")}
              />
            </>
          )}
          {images.some((image) => image.category === "Scandinavian") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Scandinavian
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Scandinavian"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Industrial") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Industrial
              </h1>
              <Category
                data={images.filter((image) => image.category === "Industrial")}
              />
            </>
          )}
          {images.some((image) => image.category === "Coastal") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Coastal
              </h1>
              <Category
                data={images.filter((image) => image.category === "Coastal")}
              />
            </>
          )}
          {images.some(
            (image) => image.category === "Industrial interior design style"
          ) && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Industrial interior design style
              </h1>
              <Category
                data={images.filter(
                  (image) =>
                    image.category === "Industrial interior design style"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Modern") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Modern
              </h1>
              <Category
                data={images.filter((image) => image.category === "Modern")}
              />
            </>
          )}
          {images.some((image) => image.category === "Shabby Chic") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Shabby Chic
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Shabby Chic"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Traditional style") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Traditional style
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Traditional style"
                )}
              />
            </>
          )}
          {images.some((image) => image.category === "Kitchen designer") && (
            <>
              <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-semibold md:font-bold uppercase p-1 md:p-2 lg:p-4 text-slate-600">
                Art Deco
              </h1>
              <Category
                data={images.filter(
                  (image) => image.category === "Kitchen designer"
                )}
              />
            </>
          )}
          {/* Repeat for other categories as needed */}
        </>
      )}
    </>
  );
};

export default Gallery;
