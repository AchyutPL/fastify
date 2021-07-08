import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Loading() {
  return (
    <div
      id='icon-container'
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
      }}
    >
      <Loader
        type='Ball-Triangle'
        color='red'
        height={70}
        width={70}
        timeout={5000}
      />
    </div>
  );
}
