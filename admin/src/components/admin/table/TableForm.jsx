import React from "react";

const TableForm = ({ children }) => {
  return (
    <div className=" bg-[#f8f8f8] mt-4 mb-8 mx-8 rounded-md h-[72vh] overflow-scroll scroll">
      {children}
    </div>
  );
};

export default TableForm;
