import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [data, setData] = useState({
    title: "",
    desc: "",
    url: "",
  });
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  //   const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://hoque-v2-server.vercel.app/api/upload-image";
      const { data: res } = await axios.post(url, data);
      //   navigate("/admin");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
    setData({
      title: "",
      desc: "",
      url: "",
    });
  };

  return (
    <>
      <div className="w-100 min-h-[100vh] bg-[#f5f5f5] flex items-center justify-center">
        <div className="w-100 h-full flex rounded-[10px] ">
          <div className="flex-2 flex flex-col items-center justify-center bg-white rounded-tr-[10px] rounded-br-[10px]">
            <form
              className="flex flex-col items-center"
              onSubmit={handleSubmit}
            >
              <h1 className="text-[40px] mt-0">Upload Image</h1>
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
              {error && (
                <div className="w-[370px] p-[15px] mx-[5px] text-[14px] bg-[#f34646] text-white rounded-[5px] text-center">
                  {error}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="bg-orange-400 text-white m-[10px] py-[5px] px-[15px] rounded-[5px]"
                >
                  Upload
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="bg-orange-400 text-white m-[10px] py-[5px] px-[15px] rounded-[5px]"
                >
                  Preview image
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"></div>

                <div className="relative p-6 flex-auto">
                  {data.url !== "" ? (
                    <img
                      src={data.url}
                      alt=""
                      className="object-fill w-full h-full"
                    />
                  ) : (
                    <div>
                      <div className="text-[34px] text-center font-bold">
                        No Image Found
                      </div>
                      <p>Please paste an image url in the "Image url field".</p>
                    </div>
                  )}
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

export default Upload;
