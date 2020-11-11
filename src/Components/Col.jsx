import React from "react";
import Pixel from "./Pixel";
function Col(props) {
  let { id, value, color } = props;
  return (
    <>
      {id === 0 ? <td className="bordered">{value}</td> : <></>}
      <Pixel colorP={color}></Pixel>
    </>
  );
}

export default Col;
