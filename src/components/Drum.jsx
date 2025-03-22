import React from "react";

function Drum() {
  return (
    <>
      <div id="drum-machine">
        <div id="display">DISPLAY</div>
        <div className="drum-pad" id="Q">
          Q
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="W">
          W
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="E">
          E
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="A">
          A
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="S">
          S
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="D">
          D
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="Z">
          Z
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="X">
          X
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
          ></audio>
        </div>
        <div className="drum-pad" id="C">
          C
          <audio
            className="clip"
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
          ></audio>
        </div>
      </div>
    </>
  );
}

export default Drum;
