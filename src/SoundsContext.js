import { createContext } from "react";

export const sounds = {
  byKeyCode: {
    //  Q, W, E, A, S, D, Z, X, C.
    65: { letter: "A", source: "65-A.wav", order: 4 },
    67: { letter: "C", source: "67-C.wav", order: 9 },
    68: { letter: "D", source: "68-D.wav", order: 6 },
    69: { letter: "E", source: "69-E.wav", order: 3 },
    81: { letter: "Q", source: "81-Q.wav", order: 1 },
    83: { letter: "S", source: "83-S.wav", order: 5 },
    87: { letter: "W", source: "hhhh.mp3", order: 2 },
    88: { letter: "X", source: "hhhh.mp3", order: 8 },
    90: { letter: "Z", source: "hhhh.mp3", order: 7 },
  },
};

export const SoundsContext = createContext(sounds);
