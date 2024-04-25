import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const BlurhashImage = ({ src, blurhash, gallery, featured }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded ? "none" : "inline",
        }}
        className="w-full h-full object-cover"
      >
        <Blurhash
          hash={blurhash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </div>

      {gallery || featured ? (
        <img
          src={src}
          alt=""
          loading="lazy"
          style={{
            display: !imageLoaded ? "none" : "inline",
            width: "100%",
            height: "100%",
            objectFit: "fill",
            //   transitionProperty: "opacity",
            //   transitionDuration: "500ms",
          }}
        />
      ) : (
        <img
          src={src}
          alt=""
          loading="lazy"
          style={{
            display: !imageLoaded ? "none" : "inline",
            width: "100%",
            height: "auto",
            objectFit: "cover",
            transitionProperty: "opacity",
            transitionDuration: "500ms",
          }}
          //   className="w-full h-auto object-cover transition-opacity duration-500"
        />
      )}
    </>
  );
};

export default BlurhashImage;
