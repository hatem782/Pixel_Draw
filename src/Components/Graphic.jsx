import React, { useState, useEffect } from "react";
import { Data } from "../Data/Watermelon";

import Hearts from "./Hearts";
import XorBOX from "./XorBOX";
import "./style.css";
import Table from "./Table";
import Replay_Next from "./Replay_Next";

export const ToPixel = React.createContext();

function Graphic() {
  let [level, set_level] = useState(0);
  const [hearts, set_hearts] = useState({ all: 5, alive: 5 });
  const [X, setX] = useState(false);
  const [score, set_score] = useState(0);
  const [reset, set_reset] = useState(false);
  const [game_state, set_game_state] = useState({
    boxes: 0,
    lose: false,
    win: false,
  });
  const { name, nbBOX } = Data[level];

  function wrong() {
    if (hearts.alive > 0) {
      set_hearts({ ...hearts, alive: hearts.alive - 1 });
    }
  }

  function next_level() {
    console.log("level :" + level + " data length : " + Data.length);
    if (level < Data.length - 1) {
      replay();
      set_level(level + 1);
    }
  }
  function replay() {
    set_reset(true);
    set_score(0);
    set_hearts({ ...hearts, all: 5, alive: 5 });
    setX(false);
    set_game_state({ ...game_state, boxes: 0, lose: false, win: false });
  }

  useEffect(() => {
    if (hearts.alive == 0) {
      set_game_state({ ...game_state, lose: true });
    }

    if (hearts.alive > 0 && game_state.boxes === nbBOX) {
      set_game_state({ ...game_state, win: true });
    }
  }, [game_state.boxes, hearts.alive]);

  return (
    <div className="parts">
      <div className="part1">
        <ToPixel.Provider
          value={{
            wrong: wrong,
            X: X,
            score: score,
            set_score: set_score,
            reset: reset,
            set_reset: set_reset,
            game_state: game_state,
            set_game_state: set_game_state,
          }}
        >
          <Table id="table" data={Data[level]} />
        </ToPixel.Provider>
      </div>
      <div className="part2">
        <h1>
          Level {level + 1} : {name}
        </h1>
        <Hearts nb={hearts} />
        <h2>Score : {score} </h2>
        <XorBOX X={X} setX={setX}></XorBOX>
        <Replay_Next
          replay={replay}
          next_level={next_level}
          go_next={game_state.win}
        />
        <h3>
          {game_state.win
            ? `NEXT LEVEL UNLOCKED`
            : game_state.lose
            ? "GAME OVER TRY AGAIN"
            : ""}
        </h3>
        <hr></hr>
      </div>
    </div>
  );
}

export default Graphic;
