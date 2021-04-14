import React, { useContext, useState } from "react";
import { SoundsContext } from "../../SoundsContext";
import { Grid } from "../Grid";
import { SoundButton } from "../SoundButton";
import { VolumeController } from "../VolumeController";

import "./styles.scss";

export const DrumMachine = () => {
  const [currentSoundKey, setCurrentSoundKey] = useState(null);

  const sounds = useContext(SoundsContext);
  const soundsKey = Object.keys(sounds.byKeyCode);
  const currentSound = sounds.byKeyCode[currentSoundKey];

  console.log(currentSoundKey, currentSound);

  return (
    <div className="App">
      <div id="device">
        <div id="display" className="container">
          {currentSound != null ? currentSound.name : "Click a buton to play!"}
        </div>
        <div id="volume" className="container">
          <VolumeController />
        </div>
        <div id="drum-machine" className="container">
          <Grid>
            {soundsKey
              .sort(
                (a, b) => sounds.byKeyCode[a].order - sounds.byKeyCode[b].order
              )
              .map((keyCode) => {
                const { letter, color } = sounds.byKeyCode[keyCode];
                return (
                  <SoundButton
                    key={keyCode}
                    keyCode={keyCode}
                    backgroundColor={color}
                    letter={letter}
                    soundSource={`/assets/sounds/${keyCode}-${letter}.wav`}
                    onPlay={(keyCode) => setCurrentSoundKey(keyCode)}
                  />
                );
              })}
          </Grid>
        </div>
      </div>
    </div>
  );
};
