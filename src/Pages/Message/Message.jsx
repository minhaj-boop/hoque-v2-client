import React, { useState } from "react";
import { data } from "../../data";

const Message = () => {
  const [expandedRows, setExpandedRows] = useState(null);

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
    <div className=" bg-slate-600 w-full h-full flex justify-center items-center">
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody>
            <tr
              key={index}
              onClick={() => handleExpandRow(index)}
              className=" cursor-pointer"
            >
              <td>{index + 1}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.gender}</td>
            </tr>
            {expandedRows === index ? (
              <tr>
                <td colSpan="4" className="collaps-viewer">
                  {data.length > 0 ? (
                    <li>
                      {`The Phone Number of ${item.first_name} is ${item.phone}`}{" "}
                      <br />{" "}
                    </li>
                  ) : (
                    <div className="no-data"> No activity found! </div>
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
