import React from "react";

//include images into your bundle

//create your first component
const SecondsCounter = (props) => {
  return (
    <>
      <div className="mainContainer">
        <div className="clock">
          <i
            className="fa-regular fa-clock fa-rotate-270"
            style={{ color: "#B197FC" }}
          ></i>
        </div>
        <div className="seconds">{props.six}</div>
        <div className="seconds">{props.five}</div>
        <div className="seconds">{props.four}</div>
        <div className="seconds">{props.three}</div>
        <div className="seconds">{props.two}</div>
        <div className="seconds">{props.one}</div>
      </div>
    </>
  );
};

export default SecondsCounter;
