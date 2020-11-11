import React, { useState, useEffect } from "react";
import { BsFillSquareFill, BsFillXSquareFill } from "react-icons/bs";

function XorBOX(props) {
  let { X, setX } = props;
  const [x_or_box, set_x_or_box] = useState({
    x: { background: "", color: "" },
    box: { background: "", color: "" },
  });

  useEffect(() => {
    if (X) {
      set_x_or_box({
        ...x_or_box,
        x: { background: "white", color: "#172b4d" },
        box: { background: "", color: "white" },
      });
    } else {
      set_x_or_box({
        ...x_or_box,
        box: { background: "white", color: "#172b4d" },
        x: { background: "", color: "white" },
      });
    }
  }, [X]);

  return (
    <div className="XorBOX">
      <div className="aaa">
        <div className="BOX" style={x_or_box.box} onClick={() => setX(false)}>
          <BsFillSquareFill />
        </div>
        <div className="X" style={x_or_box.x} onClick={() => setX(true)}>
          <BsFillXSquareFill />
        </div>
      </div>
    </div>
  );
}

export default XorBOX;
