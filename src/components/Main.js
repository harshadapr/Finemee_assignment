import { memo } from "react";
import styled from "styled-components";

const RectangleRoot = styled.div`
  position: absolute;
  top: 2841.06px;
  left: 16px;
  background-color: #2c3354;
  width: 1168px;
  height: 1px;
`;

const Main = memo(() => {
  return <RectangleRoot />;
});

export default Main;
