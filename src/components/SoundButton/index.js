import React from "react";

export const SoundButton = ({ onClick, keyCode, letter }) => (
  <button onClick={onClick} id={keyCode} className="drum-pad">
    {letter}
  </button>
);
