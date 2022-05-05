import React from "react";
import loding from "./loading.gif";

const Spinner = () => {
  return (
    <>
      <div className="text-center">
        <img src={loding} alt="" />
      </div>
    </>
  );
}

export default Spinner;

