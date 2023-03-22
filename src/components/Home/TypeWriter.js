import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Parts from China. <br/> Made in the US.",
          "All around the world... <br/> SH, ATX, ATL, BAL",
          "Final destination... <br/> to be written",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default TypeWriter;
