import React, { useState } from "react";

function Drum() {
  const [display, setDisplay] = useState("Display");

  function playSound(e) {
    const element = e.target.querySelector("audio");
    setDisplay(element.getAttribute("name"));
    const audio = new Audio(element.src);
    audio.play();
  }

  document.addEventListener("keydown", (e) => {
    const audios = document.querySelectorAll("audio");
    const key = e.key.toUpperCase();
    audios.forEach((audio) => {
      if (audio.parentElement.id === key) {
        setDisplay(audio.getAttribute("name"));
        audio.play();
      }
    });
  });

  return (
    <>
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div className="drum-pad" id="Q" onClick={playSound}>
          Q
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
            name="Heater 1"
          ></audio>
        </div>
        <div className="drum-pad" id="W" onClick={playSound}>
          W
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
            name="Heater 2"
          ></audio>
        </div>
        <div className="drum-pad" id="E" onClick={playSound}>
          E
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
            name="Heater 3"
          ></audio>
        </div>
        <div className="drum-pad" id="A" onClick={playSound}>
          A
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
            name="Heater 4"
          ></audio>
        </div>
        <div className="drum-pad" id="S" onClick={playSound}>
          S
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
            name="Clap"
          ></audio>
        </div>
        <div className="drum-pad" id="D" onClick={playSound}>
          D
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
            name="Open-HH"
          ></audio>
        </div>
        <div className="drum-pad" id="Z" onClick={playSound}>
          Z
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
            name="Kick-n'-Hat"
          ></audio>
        </div>
        <div className="drum-pad" id="X" onClick={playSound}>
          X
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
            name="Kick"
          ></audio>
        </div>
        <div className="drum-pad" id="C" onClick={playSound}>
          C
          <audio
            className="clip"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
            name="Closed-HH"
          ></audio>
        </div>
      </div>
    </>
  );
}

export default Drum;
