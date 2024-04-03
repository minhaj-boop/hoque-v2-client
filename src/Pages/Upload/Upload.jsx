import React, { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState("");

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
    };
  }

  function uploadImage() {
    fetch("http://localhost:8080/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-screen h-screen flex justify-center items-center">
        <input accept="image/" type="file" onChange={convertToBase64} />
        {image === "" || image === null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} alt="" />
        )}
        <button onClick={uploadImage}>Upload</button>
      </div>
    </div>
  );
};

export default Upload;
