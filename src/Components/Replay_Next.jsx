import React from "react";
import { BsArrowRepeat, BsCheckCircle } from "react-icons/bs";

function Replay_Next(props) {
  let { replay, next_level, go_next } = props;
  return (
    <div className="replay">
      <button onClick={() => replay()}>
        <BsArrowRepeat />
      </button>
      <button
        className={go_next ? "" : "no_select"}
        onClick={() => {
          if (go_next) next_level();
        }}
      >
        <BsCheckCircle />
      </button>
    </div>
  );
}

export default Replay_Next;
