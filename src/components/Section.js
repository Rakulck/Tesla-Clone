import React from "react";
import styled from "styled-components";
import image from "../model-s.jpg";

function Section() {
  return (
    <Wrap>
      Section
      {/* <img src={image} /> */}
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${image});
`;
