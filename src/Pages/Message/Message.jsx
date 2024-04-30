import React, { useEffect, useState } from "react";
// import { data } from "../../data";

const Message = () => {
  const [expandedRows, setExpandedRows] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
  return (
    <div className="w-full overflow-x-scroll h-full">
      <table className="w-full border border-red-500">
        <thead className="">
          <tr className="">
            <th className="border border-red-500">Name</th>
            <th className="border border-red-500">Email</th>
            <th className="border border-red-500">Phone</th>
            <th className="border border-red-500">Date</th>
          </tr>
        </thead>
        {messages.map((item, index) => (
          <tbody className="border border-red-500">
            <tr
              key={item._id}
              onClick={() => handleExpandRow(index)}
              className=" border-t border-red-500 cursor-pointer"
            >
              {/* <td>{index + 1}</td> */}
              <td className="border border-red-500">{item.name}</td>
              <td className="border border-red-500">{item.email}</td>
              <td className="border border-red-500">{item.phone}</td>
              <td className="border border-red-500">{item.date}</td>
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
