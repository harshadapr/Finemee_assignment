import { memo } from "react";
import styled from "styled-components";

const MineralProcessingRoot = styled.div`
  position: absolute;
  top: 1834px;
  left: 32px;
  font-size: 43px;
  line-height: 55.9px;
  text-transform: capitalize;
  /* color: #ff3a2d; */
  display: inline-block;
  width: 392px;
`;

const ThirdBox = memo(() => {
  return <MineralProcessingRoot>Mineral Processing</MineralProcessingRoot>;
});

export default ThirdBox;
