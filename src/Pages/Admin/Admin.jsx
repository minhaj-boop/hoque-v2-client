import React from "react";

const Admin = () => {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class="max-w-md w-full bg-white rounded p-6 space-y-4">
        <div class="flex justify-center items-center mb-4">
          <p class="text-gray-600">Sign In</p>
          {/* <h2 class="text-xl font-bold">Join our community</h2> */}
        </div>
        <div>
          <input
            class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            class="w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600"
            type="text"
            placeholder="Password"
          />
        </div>
        <div>
          <button class="w-full py-4 bg-orange-500 hover:bg-orange-400 rounded text-sm font-bold text-gray-50 transition duration-200">
            Sign In
          </button>
        </div>
        <div class="flex items-center justify-between">
          {/* <div class="flex flex-row items-center">
            <input
              type="checkbox"
              class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label
              for="comments"
              class="ml-2 text-sm font-normal text-gray-600"
            >
              Remember me
            </label>
          </div> */}
          {/* <div>
              <a class="text-sm text-blue-600 hover:underline" href="#">Forgot password?</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
