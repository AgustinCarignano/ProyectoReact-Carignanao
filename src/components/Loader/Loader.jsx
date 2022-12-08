import React from "react";
import { Ripples } from "@uiball/loaders";

function Loader() {
  return (
    <div
      style={{
        position: "fixed",
        right: "50vw",
        marginRight: "-50px",
        top: "40vh",
      }}
    >
      <Ripples size={100} speed={3} color="#F2A71B" margin="auto" />
    </div>
  );
}

export default Loader;
