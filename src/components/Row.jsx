import React from "react";

const Row = ({ data }) => {
  return (
    <div className="grid grid-cols-11 gap-2 py-2 border-b">
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.id}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.name}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.type.join(", ")}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.hp}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.attack}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.defense}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.special_attack}
      </div>
      <div className="col-span-2 justify-center items-center align-middle flex">
        {data.special_defense}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.speed}
      </div>
      <div className="col-span-1 justify-center items-center align-middle flex">
        {data.hp +
          data.attack +
          data.defense +
          data.special_attack +
          data.special_defense +
          data.speed}
      </div>
    </div>
  );
};

export default Row;
