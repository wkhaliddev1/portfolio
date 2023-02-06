import React from "react";
import { BackgroundImg } from "./styled";

function ParallaxBackground({ bgImage, width, height, parallax, ...rest }) {
  return (
    <BackgroundImg
      bgImage={bgImage}
      parallax={parallax}
      width={width}
      height={height}
    >
      {rest.children}
    </BackgroundImg>
  );
}

export default ParallaxBackground;
