import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { SoundsContext } from "../../SoundsContext";
import { Grid } from "../Grid";
import { SoundButton } from "../SoundButton";
import { VolumeController } from "../VolumeController";

export const DrumMachine = () => {
  const audioTag = useRef(null);
  const [currentSound, setCurrentSound] = useState(null);
  const sounds = useContext(SoundsContext);
  const soundsKey = Object.keys(sounds.byKeyCode);

  const playSound = (letter, keyCode) => {
    if (audioTag.current != null) {
      console.log(audioTag.current);
      audioTag.current.src = `/assets/sounds/${keyCode}-${letter}.wav`;
      audioTag.current.play();
    }
  };

  const onSoundButtonClick = useCallback((keyCode, sound) => {
    setCurrentSound({ keyCode, sound });
  }, []);

  const onKeyPress = useCallback((ev) => {
    const keyCode = ev.key.toUpperCase().charCodeAt(0);
    playSound(ev.key.toUpperCase(), keyCode);
    console.log(ev);
  }, []);

  useEffect(() => {
    if (!currentSound) {
      return;
    }
    playSound(currentSound.sound.letter, currentSound.keyCode);
  }, [currentSound]);

  useEffect(() => {
    document.addEventListener("keypress", onKeyPress);

    return () => {
      document.removeEventListener("keypress", onKeyPress);
    };
  });

  return (
    <div className="App" id="drum-machine">
      <audio ref={audioTag} style={{ display: "none" }} />
      <header className="App-header" id="display">
        <VolumeController />
      </header>
      <Grid>
        {soundsKey
          .sort((a, b) => sounds.byKeyCode[a].order - sounds.byKeyCode[b].order)
          .map((key, index) => (
            <SoundButton
              key={key}
              keyCode={key}
              letter={sounds.byKeyCode[key].letter}
              soundSource={sounds.byKeyCode[key].source}
              onClick={onSoundButtonClick.bind(
                null,
                key,
                sounds.byKeyCode[key]
              )}
            />
          ))}
      </Grid>
    </div>
  );
};
