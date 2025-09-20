import { useGame } from "./GameContext";

import Field from "./Field";
import Scoreboard from "./Scoreboard";
import Welcome from "./Welcome";

/** Whack-a-Mole game with a welcome screen */
export default function App() {
  const { playing } = useGame();
  return (
    <>
      <h1>Whack a Mole</h1>
      {playing ? (
        <>
          <Scoreboard />
          <Field />
        </>
      ) : (
        <Welcome />
      )}
    </>
  );
}
