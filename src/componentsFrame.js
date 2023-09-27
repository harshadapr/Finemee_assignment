import { memo } from "react";
import styled from "styled-components";

const DataPoweredSolutionsRoot = styled.div`
  position: absolute;
  height: 9.54%;
  width: 38.02%;
  top: 27.84%;
  left: 0%;
  font-size: 37px;
  line-height: 37px;
  font-family: Inter;
  color: #fff;
  text-align: left;
  display: inline-block;
`;

const SecondBox = memo(() => {
  return (
    <DataPoweredSolutionsRoot>Data-powered solutions</DataPoweredSolutionsRoot>
  );
});

export default SecondBox;
