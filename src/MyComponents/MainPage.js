import React, { useEffect, useState } from "react";
import MyGraph from "./MyGraph";
import TabelData from "./TabelData";

export default function MainPage() {
  const [isShown, setIsShown] = useState(true);
  const [isShown1, setIsShown1] = useState(true);
  const handleClick = (event) => {
    setIsShown(false);
  };
  const handleClick1 = (event) => {
    setIsShown(true);
  };

  return (
    <>
      <div className="main-container">
        <h1>Vehicle List</h1>
        <button className="add-vehiclebtn">+ Add Vehicle</button>
        <div className="main-container-right">
          <i className="fa fa-bars" onClick={handleClick1}></i>
        </div>
        <div className="info">
          <i className="fa fa-info" onClick={handleClick}></i>
        </div>
      </div>
      {isShown ? <TabelData /> : <MyGraph />}
    </>
  );
}
