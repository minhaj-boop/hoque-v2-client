import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "../../Components/Dropdown";

const Images = () => {
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState([]);
  const [data, setData] = useState({
    title: "",
    desc: "",
    url: "",
    blurhash: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    // Call the fetchData function when the component mounts
    fetchData();

    // Optionally, return a cleanup function to handle component unmounting
    // This prevents memory leaks and unexpected behavior
    return () => {
      // Cleanup code, if necessary
    };
  }, []);

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

  //update

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   // Add name from values state to the data state
    //   const updatedData = { ...data, category: values[0].name };
    //   // console.log("Updated:", updatedData);
    //   const url = "https://hoque-v2-server.vercel.app/api/upload-image";
    //   const { data: res } = await axios.post(url, updatedData);
    //   //   navigate("/admin");
    //   console.log(res.message);
    //   // console.log(data);
    // } catch (error) {
    //   if (
    //     error.response &&
    //     error.response.status >= 400 &&
    //     error.response.status <= 500
    //   ) {
    //     setError(error.response.data.message);
    //   }
    // }
    // setData({
    //   title: "",
    //   desc: "",
    //   url: "",
    //   blurhash: "",
    // });
  };

  const handleEdit = (id) => {
    console.log("helloo");
  };
  const handleDelete = async (id, title) => {
    // console.log("hello");
    if (window.confirm(`Are you sure you want to delete the image ${title}?`)) {
      try {
        const response = await fetch(
          `https://hoque-v2-server.vercel.app/api/delete-image/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          alert("Image deleted successfully");
          fetchData(); // Refresh messages after deletion
        } else {
          const errorMessage = await response.text();
          alert(`Error deleting Image: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error deleting Image:", error);
        alert("Failed to delete Image. Please try again later.");
      }
    }
  };

  return (
    <>
      <div className="w-full h-full overflow-scroll flex flex-col p-1 gap-2 uppercase">
        {images.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border rounded-[10px] p-[5px]"
          >
            <div className=" text-orange-500 md:text-2xl">{item.title}</div>
            <div className="w-[100px] h-[50px]">
              <img src={item.url} alt="" className="w-full h-full" />
            </div>
            <div className=" flex justify-between items-center gap-1 ">
              <button
                onClick={() => {
                  handleEdit(item._id);
                  setShowModal(true);
                }}
                className=" w-[60px] rounded border-none p-1 bg-green-600 text-white text-sm cursor-pointer hover:bg-green-400"
              >
                EDIT
              </button>
              <button
                onClick={() => {
                  handleDelete(item._id, item.title);
                }}
                className=" w-[60px] rounded border-none p-1 bg-red-600 text-white text-sm cursor-pointer hover:bg-red-400"
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="w-100 h-full flex rounded-[10px]">
                    <div className="flex-2 flex flex-col items-center justify-center bg-white rounded-tr-[10px] rounded-br-[10px]">
                      <form
                        className="flex flex-col items-center"
                        onSubmit={handleSubmit}
                      >
                        <h1 className="text-[40px] mt-0 uppercase">
                          Upload Image
                        </h1>
                        <input
                          type="text"
                          placeholder="Image title"
                          name="title"
                          onChange={handleChange}
                          value={data.title}
                          required
                          className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-orange-100 mx-[5px] mb-[5px] text-[14px]"
                        />
                        <textarea
                          rows={5}
                          cols={50}
                          placeholder="Write the image description here"
                          name="desc"
                          onChange={handleChange}
                          value={data.desc}
                          required
                          className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-orange-100 mx-[5px] mb-[5px] text-[14px]"
                        />
                        <input
                          type="text"
                          placeholder="Image url"
                          name="url"
                          onChange={handleChange}
                          value={data.url}
                          required
                          className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-orange-100 mx-[5px] mb-[5px] text-[14px]"
                        />
                        <input
                          type="text"
                          placeholder="Blurhash string"
                          name="blurhash"
                          onChange={handleChange}
                          value={data.blurhash}
                          required
                          className="outline-none border-none w-[370px] p-[15px] rounded-[10px] bg-orange-100 mx-[5px] mb-[5px] text-[14px]"
                        />
                        <Dropdown values={values} setValues={setValues} />
                        {error && (
                          <div className="w-[370px] p-[15px] mx-[5px] text-[14px] bg-[#f34646] text-white rounded-[5px] text-center">
                            {error}
                          </div>
                        )}
                        <div>
                          <button
                            type="submit"
                            className="bg-orange-600 hover:bg-orange-400 text-white m-[10px] py-[5px] px-[15px] rounded-[5px]"
                          >
                            UPDATE
                          </button>
                          {/* <button
                            type="button"
                            onClick={() => setShowModal(true)}
                            className="bg-orange-600 hover:bg-orange-400 text-white m-[10px] py-[5px] px-[15px] rounded-[5px]"
                          >
                            Preview image
                          </button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-orange-500 background-transparent font-bold uppercase px-2 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Images;
