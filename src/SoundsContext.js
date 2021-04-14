import { createContext } from "react";

export const sounds = {
  byKeyCode: {
    //  Q, W, E, A, S, D, Z, X, C.
    65: { order: 4, letter: "A", name: "Instr. 1", color: "#65e1fc" },
    67: { order: 9, letter: "C", name: "Instr. 2", color: "#ff33c5" },
    68: { order: 6, letter: "D", name: "Instr. 3", color: "#00fc37" },
    69: { order: 3, letter: "E", name: "Instr. 4", color: "#9cfc00" },
    81: { order: 1, letter: "Q", name: "Instr. 5", color: "#eaff00" },
    83: { order: 5, letter: "S", name: "Instr. 6", color: "#2ee500" },
    87: { order: 2, letter: "W", name: "Instr. 7", color: "#30f" },
    88: { order: 8, letter: "X", name: "Instr. 8", color: "#bc03ff" },
    90: { order: 7, letter: "Z", name: "Instr. 9", color: "#ff2f00" },
  },
};

export const SoundsContext = createContext(sounds);
