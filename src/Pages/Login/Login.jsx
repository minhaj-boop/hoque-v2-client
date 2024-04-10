import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-900 h-500 flex rounded-lg shadow-md">
        <div className="flex-2 flex flex-col items-center justify-center bg-white rounded-l-lg">
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <h1 className="mt-0 text-white text-40 self-center">
              Login to Your Account
            </h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="outline-none border-none w-370 px-15 py-15 rounded-lg bg-gray-100 my-5 text-base"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="outline-none border-none w-370 px-15 py-15 rounded-lg bg-gray-100 my-5 text-base"
            />
            {error && (
              <div className="w-370 px-15 py-15 my-5 text-14 bg-red-600 text-white rounded-md text-center">
                {error}
              </div>
            )}
            <button
              type="submit"
              className="border-none outline-none py-12 px-0 bg-white rounded-full w-180 font-bold text-14 cursor-pointer"
            >
              Sing In
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-green-500 rounded-r-lg">
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button
              type="button"
              className="border-none outline-none py-12 px-0 bg-white rounded-full w-180 font-bold text-14 cursor-pointer"
            >
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
