import styled from "styled-components";

export const BackgroundImg = styled.div`
  background-image: url(${(props) => props.bgImage});
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  // parallax effect
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: ${(props) => (props.parallax ? "fixed" : "scroll")};
`;
