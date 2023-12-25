import React from "react";
import "../App.css";

export default function Nav(props) {
  return (
    <>
      <nav style={{ backgroundColor: props.background }}>
        <img src="./images/airbnb.png" alt="logo" className="logo" />
      </nav>
    </>
  );
}
