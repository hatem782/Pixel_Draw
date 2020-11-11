import React from "react";
import Heart from "./Heart";

function Hearts(props) {
  function collect_hearts() {
    let { all, alive } = props.nb;
    let hearts = [];
    for (var i1 = 0; i1 < alive; i1++) {
      hearts.push(<Heart value={1} key={i1} />);
    }

    for (var i2 = 0; i2 < all - alive; i2++) {
      hearts.push(<Heart value={0} key={alive + i2} />);
    }
    return hearts;
  }

  return <div className="hearts">{collect_hearts()}</div>;
}

export default Hearts;
