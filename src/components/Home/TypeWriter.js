import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Parts from China. Assembled in the US.",
          "Passed by ATX, ATL, BAL",
          "Final destination...to be written",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeWriter;
