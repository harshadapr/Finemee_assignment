import { memo } from "react";
import styled from "styled-components";
import SecondBox from "./ThirdBox";

const Rectangle = styled.div`
  position: absolute;
  height: 8.76%;
  width: 11.33%;
  top: 53.35%;
  right: 88.67%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 3px;
  background-color: #007aff;
`;
const ImageIcon = styled.img`
  position: absolute;
  height: 100%;
  width: 54.87%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 45.13%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const ForIndustrialExcellence = styled.div`
  position: absolute;
  height: 9.54%;
  width: 37.93%;
  top: 37.37%;
  left: 0%;
  line-height: 37px;
  display: inline-block;
`;
const ReadMore = styled.div`
  position: absolute;
  height: 8.76%;
  width: 5.44%;
  top: 53.35%;
  left: 2.99%;
  font-size: 12px;
  line-height: 34px;
  font-family: Roboto;
  text-align: center;
  display: inline-block;
`;
const MainRoot = styled.div`
  position: absolute;
  top: 223px;
  left: 20px;
  width: 1139px;
  height: 388px;
  text-align: left;
  font-size: 37px;
  color: #fff;
  font-family: Inter;
`;

const Main1 = memo(() => {
  return (
    <MainRoot>
      <Rectangle />
      <ImageIcon alt="" src="/image2@2x.png" />
      <SecondBox />
      <ForIndustrialExcellence>
        for Industrial Excellence
      </ForIndustrialExcellence>
      <ReadMore>Read More</ReadMore>
    </MainRoot>
  );
});

export default Main1;
