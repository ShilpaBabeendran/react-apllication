import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "../../Components/Pagination/pagination.css";

const Pagination = ({ totalPages = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex items-center justify-end space-x-4 p-4 pagination">
      {/* Pagination Buttons */}
      <div className="  flex items-center space-x-2">
        <button
          className="px-3 py-1 rounded-lg text-gray-500" style={{borderRadius:"12px", border:"none", backgroundColor:"none"}}
          onClick={() => goToPage(1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button 
          className=" px-3 py-1 border rounded-lg text-gray-500"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>

        {/* Page Numbers */}
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border rounded-lg pagnumber ${
              currentPage === page ? "bg-red-300 text-white" : "text-gray-500"
            }`}
            onClick={() => goToPage(page)}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis */}
        <span className="px-3 py-1 text-gray-500">...</span>

        {/* Last Page */}
        <button
          className="px-3 py-1 border rounded-lg text-gray-500"
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </button>

        {/* Next & Last Buttons */}
        <button
          className="px-3 py-1 border rounded-lg text-gray-500"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          ›
        </button>
        <button
          className="px-3 py-1 border rounded-lg text-gray-500"
          onClick={() => goToPage(totalPages)}
          disabled={currentPage === totalPages}
        >
          »
        </button>
      </div>

      {/* Page Selector Dropdown */}
      <div className=" items-center space-x-2 page-number-for-body">
        <span className="text-gray-500">Page</span>
        <select
          value={currentPage}
          onChange={(e) => goToPage(Number(e.target.value))}
          className="border rounded-lg px-3 py-1"
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className="text-gray-500">of {totalPages}</span>
      </div>



















      

    </div>
  );
};

export default Pagination;
