import React, { useCallback, useState } from "react";
import $ from "jquery";

// import SvgIcon from "@mui/material/SvgIcon";
// import { DeleteIcon } from "@mui/icons";

import "./body.css";
import { ParallaxBackground } from "../../../components/parallax-background";
import { GoLeft, GoRight } from "./styled";
import { Zoom } from "@mui/material";

function Body() {
  //state
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const [screenHeight, setScreenHeight] = useState(window.screen.height);
  const [flagDocEnd, setFlagDocEnd] = useState(false);

  const bgImage = require("../media/bg-image.jpg");
  const bgImage2 = require("../media/bg-image2.jpg");

  const getScreen = useCallback(() => {
    setScreenWidth(window.screen.width);
    setScreenHeight(window.screen.height);
  }, []);

  window.addEventListener("resize", getScreen);

  $(window).scroll(() => {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      setFlagDocEnd(true);
    } else setFlagDocEnd(false);
  });

  return (
    <div className="body-body">
      <ParallaxBackground
        bgImage={bgImage}
        parallax
        width={screenWidth}
        height={screenHeight}
      >
        <span className="caption1 sticky-caption">Welcome to Protfolio</span>
      </ParallaxBackground>

      <ParallaxBackground
        bgImage={bgImage2}
        parallax
        width={window.screen.width}
        height={window.screen.height}
      >
        <span className="caption1 sticky-caption">Lets have a ride</span>
      </ParallaxBackground>

      <ParallaxBackground
        bgImage={bgImage}
        parallax
        width={window.screen.width}
        height={window.screen.height}
      >
        <span className="caption1 sticky-caption">To know me better</span>
        {/* {flagDocEnd && <GoLeft>DevTodo.co</GoLeft>}
        {flagDocEnd && <GoRight>Me</GoRight>} */}
        <Zoom
          in={flagDocEnd}
          mountOnEnter
          unmountOnExit
          direction="bottom"
          style={{ transitionDelay: flagDocEnd ? "500ms" : "0ms" }}
        >
          <GoLeft>
            {/* <SvgIcon /> */}
            DevTodo.co
          </GoLeft>
        </Zoom>

        <Zoom
          in={flagDocEnd}
          mountOnEnter
          unmountOnExit
          direction="bottom"
          style={{ transitionDelay: flagDocEnd ? "500ms" : "0ms" }}
        >
          <GoRight>Me</GoRight>
        </Zoom>
      </ParallaxBackground>
    </div>
  );
}

export default Body;
