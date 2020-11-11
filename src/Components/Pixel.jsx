import React, { useState, useEffect, useContext } from "react";
import { ToPixel } from "./Graphic";

function Pixel(props) {
  const [style, set_style] = useState({ color: "#FFFFFF", cursor: "default" });
  const [pass, set_pass] = useState("");
  const [blocked, set_blocked] = useState(false);
  const c = useContext(ToPixel);
  let { colorP } = props;

  let {
    wrong,
    X,
    score,
    set_score,
    reset,
    set_reset,
    game_state,
    set_game_state,
  } = c;

  useEffect(() => {
    if (reset) {
      set_blocked(false);
      set_pass("");
      set_style({ ...style, color: "#FFFFFF", cursor: "default" });
      console.log("reset");
      set_reset(false);
    }
  }, [reset, set_reset]);

  return (
    <>
      <td
        className="Pixels"
        style={{ backgroundColor: style.color, cursor: style.cursor }}
        onClick={() => {
          if (!blocked && !game_state.lose) {
            set_style({ ...style, color: colorP, cursor: "not-allowed" });
            if (colorP === undefined && !X) {
              set_pass("X");
              wrong();
              set_score(0);
            }
            if (colorP !== undefined && X) {
              wrong();
              set_score(0);
            }
            if (colorP === undefined && X) {
              set_pass("X");
              set_score(score + 1);
            }
            if (colorP !== undefined && !X) {
              set_score(score + 1);
            }
            set_game_state({ ...game_state, boxes: game_state.boxes + 1 });
            set_blocked(true);
          }
        }}
      >
        {pass}
      </td>
    </>
  );
}

export default Pixel;
