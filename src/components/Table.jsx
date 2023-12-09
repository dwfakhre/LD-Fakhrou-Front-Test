import React from "react";
import Row from "./Row";

const Table = ({
  data,
  pageSize,
  setPageSize,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const handleChangePage = (page) => {
    console.log(page);
    setCurrentPage(page);
  };
  const handleChangepageSize = (page) => {
    setPageSize(page);
  };
  return (
    <div>
      <div className="flex flex-col w-full shadow-[0_0px_15px_0_rgba(71,85,105,0.2)] border-1.2 rounded-lg">
        <div className="grid grid-cols-11 gap-2 py-2 border-b bg-slate-200 rounded-t-lg text-slate-600">
          <div className="col-span-1 justify-center items-center align-middle flex">
            ID
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Name
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Type
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Health
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Attack
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Defense
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Special Attack
          </div>
          <div className="col-span-2 justify-center items-center align-middle flex">
            Special Defense
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Speed
          </div>
          <div className="col-span-1 justify-center items-center align-middle flex">
            Power
          </div>
        </div>
        {data.map((row, i) => (
          <Row data={row} key={i} />
        ))}
      </div>
      <div>
        <div className="flex flex-row w-full justify-end items-center align-middle pr-4">
          <div className="flex justify-center mt-4 align-middle items-center">
            <button
              onClick={() => handleChangePage(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2 px-2 py-2"
            >
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill={currentPage === 1 ? "grey" : "currentColor"}
                  d="M16.243 6.343L14.828 4.93 7.758 12l7.07 7.071 1.415-1.414L10.586 12l5.657-5.657z"
                />
              </svg>
            </button>
            <span className="mx-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handleChangePage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="ml-2 px-2 py-2"
            >
              <svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                <path
                  fill={currentPage === totalPages ? "grey" : "currentColor"}
                  d="M10.586 6.343L12 4.93 19.071 12 12 19.071l-1.414-1.414L16.243 12l-5.657-5.657z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
