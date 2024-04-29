import React, { useRef, useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Handle form submission logic here
    const currentDate = new Date().toLocaleDateString("en-GB").toString();
    // setFormData({ ...formData, date: currentDate });
    // console.log(formData);
    const formDataWithDate = {
      ...formData,
      date: currentDate, // Add 'date' property to formData
    };

    try {
      const url = "https://hoque-v2-server.vercel.app/api/message";
      const { data: res } = await axios.post(url, formDataWithDate);
      console.log(res.message);
    } catch (error) {
      console.log(error);
      // if (
      //   error.response &&
      //   error.response.status >= 400 &&
      //   error.response.status <= 500
      // ) {
      //   setError(error.response.data.message);
      // }
    }
    // console.log(formData);
    // Reset form fields after submission
  };

  //Email
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j0gww2x", "template_7ck1nn5", form.current, {
        publicKey: "qAvqh1qDjHDFGaVwM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="flex-1 p-4 text-orange-400">
        <h1 className="text-3xl md:text-4xl xl:text-6xl pb-2">Contact Us</h1>
        <p className="text-md md:text-xl xl:text-2xl pb-2">
          If you want to learn about how we can make your dream home come to
          reality.
        </p>
        <p className="text-md md:text-xl xl:text-2xl">
          We cant wait to hear from you.
        </p>
      </div>
      <div className="flex-1 flex flex-col p-4">
        {/* FORM */}
        <div className=" shadow-2xl rounded-[10px] flex items-center justify-center p-2">
          <form
            ref={form}
            onSubmit={(e) => {
              sendEmail(e);
              handleSubmit(e);
            }}
            className="w-full max-w-lg flex flex-col"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-orange-500 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-orange-500 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="text"
                className="block text-orange-500 font-bold mb-2"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-orange-500 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 md:px-8 focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
