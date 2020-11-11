import React from "react";
import { BsHeartFill, BsHeartHalf, BsHeart } from "react-icons/bs";
function Heart(props) {
  return props.value === 0 ? <BsHeart /> : <BsHeartFill />;
}

export default Heart;
