import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchInput from "./components/Search";
import Table from "./components/Table";
import "./index.css";

function App() {
  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [filteredData, setFilteredData] = useState([]);
  const [minPower, setMinPower] = useState(0);
  const [maxPower, setMaxPower] = useState(0);

  // calculate max and min

  // fetch data from JSON file
  const getPokemonData = () => {
    axios
      .get("../../pokemon.json")
      .then((res) => {
        const TableData = res.data.map(
          (item) =>
            (item = {
              ...item,
              power:
                item.hp +
                item.attack +
                item.defense +
                item.special_attack +
                item.special_defense +
                item.speed,
            })
        );
        console.log(TableData);
        setData(TableData);
        setFilteredData(TableData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSearch = (name) => {
    const Filtered = data.filter((item) => item.name === name);
    setFilteredData(Filtered);
    setCurrentPage(1);
  };

  const onThreshold = (power) => {
    const Filtered = data.filter((item) => item.power >= power);
    setFilteredData(Filtered);
    setCurrentPage(1);
  };

  useEffect(() => {
    getPokemonData();
  }, []);

  useEffect(() => {
    const values = filteredData
      .slice(
        (currentPage - 1) * pageSize,
        (currentPage - 1) * pageSize + pageSize
      )
      .map((item) => item["power"]);
    setMaxPower(Math.max(...values, 0));
    setMinPower(Math.min(...values, 0));
  }, [filteredData, currentPage]);

  return (
    <div className="flex flex-col bg-white p-20">
      <div className="flex flex-col gap-4 shadow-[0_0px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-lg">
        <div className="flex flex-row gap-5">
          <SearchInput onSearch={onSearch} type={"name"} />
          <SearchInput onSearch={onThreshold} type={"power"} />
        </div>
        <div>
          <div className="flex flex-row gap-2">
            <h2 className="flex font-semibold">Min Power:</h2>
            <p>{minPower}</p>
          </div>
          <div className="flex flex-row gap-2">
            <h2 className="flex font-semibold">Max Power:</h2>
            <p>{maxPower}</p>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <Table
          data={filteredData.slice(
            (currentPage - 1) * pageSize,
            (currentPage - 1) * pageSize + pageSize
          )}
          pageSize={pageSize}
          setPageSize={setPageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={Math.ceil(data.length / pageSize)}
        ></Table>
      </div>
    </div>
  );
}

export default App;
