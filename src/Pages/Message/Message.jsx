import React, { useEffect, useState } from "react";
// import { data } from "../../data";

const Message = () => {
  const [expandedRows, setExpandedRows] = useState(null);
  const [messages, setMessages] = useState([]);

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
        "https://hoque-v2-server.vercel.app/api/all-messages"
      );
      // Parse the response as JSON
      const data = await response.json();
      // Update the state with the fetched data
      setMessages(data.data);
      // console.log(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // expand table row
  const handleExpandRow = (userId) => {
    let currentExpandedRows = null;
    const isRowExpanded = currentExpandedRows === userId ? userId : null;
    const newExpandedRows = isRowExpanded
      ? null
      : (currentExpandedRows = userId);
    if (expandedRows !== userId) {
      setExpandedRows(newExpandedRows);
    } else {
      setExpandedRows(null);
    }
  };

  const deleteMessage = async (id, name) => {
    if (
      window.confirm(
        `Are you sure you want to delete the message from ${name}?`
      )
    ) {
      try {
        const response = await fetch(
          `https://hoque-v2-server.vercel.app/api/delete-message/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          alert("Message deleted successfully");
          fetchData(); // Refresh messages after deletion
        } else {
          const errorMessage = await response.text();
          alert(`Error deleting message: ${errorMessage}`);
        }
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message. Please try again later.");
      }
    }
  };

  return (
    <div className="w-full overflow-x-scroll h-full">
      <table className="w-full border border-red-500">
        <thead className="">
          <tr className="">
            <th className="border border-red-500">Name</th>
            <th className="border border-red-500">Email</th>
            <th className="border border-red-500">Phone</th>
            <th className="border border-red-500">Date</th>
            <th className="border border-red-500">Delete</th>
          </tr>
        </thead>
        {messages.map((item, index) => (
          <tbody className="border border-red-500">
            <tr key={item._id} className=" border-t border-red-500 ">
              {/* <td>{index + 1}</td> */}
              <td
                onClick={() => handleExpandRow(index)}
                className="border border-red-500 cursor-pointer"
              >
                {item.name}
              </td>
              <td className="border border-red-500">{item.email}</td>
              <td className="border border-red-500">{item.phone}</td>
              <td className="border border-red-500">{item.date}</td>
              <td className=" flex items-center justify-center">
                <div
                  onClick={() => {
                    // console.log(item._id);
                    deleteMessage(item._id, item.name);
                  }}
                  className="rounded border-none p-1 bg-red-600 text-white text-sm cursor-pointer hover:bg-red-400"
                >
                  Delete
                </div>
              </td>
            </tr>
            {expandedRows === index ? (
              <tr>
                <td colSpan="4" className=" text-center">
                  {messages.length > 0 ? (
                    <p>{item.message}</p>
                  ) : (
                    <div className=""> No activity found! </div>
                  )}
                </td>
              </tr>
            ) : null}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Message;
