import React, { useCallback, useEffect, useRef, useState } from "react";

import "./styles.scss";

export const SoundButton = ({
  backgroundColor,
  keyCode,
  letter,
  soundSource,
  onPlay,
}) => {
  const audioTag = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = useCallback(() => {
    audioTag.current.play();
    onPlay(keyCode);
    setIsPlaying(true);
  }, [keyCode, onPlay]);

  const stopSound = useCallback(() => {
    audioTag.current.load();
    audioTag.current.fastSeek(0);
    setIsPlaying(false);
  }, []);

  const toggleSound = useCallback(() => {
    if (!audioTag.current) {
      return;
    }
    if (!isPlaying) {
      playSound();
    } else {
      stopSound();
    }
  }, [isPlaying, playSound, stopSound]);

  const onSoundButtonClick = useCallback(() => {
    toggleSound();
  }, [toggleSound]);

  const onKeyPress = useCallback(
    (ev) => {
      const eventKeyCode = parseInt(ev.key.toUpperCase().charCodeAt(0));
      if (parseInt(keyCode) === eventKeyCode) {
        toggleSound();
      }
    },
    [keyCode, toggleSound]
  );

  const onSoundEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    if (soundSource != null) {
      audioTag.current.src = soundSource;
    }
  }, [soundSource]);

  useEffect(() => {
    document.addEventListener("keyup", onKeyPress);

    return () => {
      document.removeEventListener("keyup", onKeyPress);
    };
  }, [onKeyPress]);

  const buttonClasses = ["drum-pad", (isPlaying && "active") || ""].join(" ");

  return (
    <button
      onClick={onSoundButtonClick}
      id={letter}
      className={buttonClasses}
      style={{
        backgroundColor: isPlaying ? backgroundColor : "rgb(95, 95, 95)",
      }}
    >
      <audio
        ref={audioTag}
        style={{ display: "none" }}
        className={"clip"}
        id={letter}
        loop={true}
        onEnded={onSoundEnded}
        src={soundSource}
      />
      {letter}
    </button>
  );
};
