import { memo } from "react";
import styled from "styled-components";

const Rectangle = styled.div`
  position: absolute;
  height: 4.2%;
  width: 10.71%;
  top: 95.24%;
  right: 89.29%;
  bottom: 0.56%;
  left: 0%;
  border-radius: 3px;
  background-color: #ff3a2d;
`;
const ImageIcon = styled.img`
  position: absolute;
  height: 97.2%;
  width: 46.43%;
  top: 2.8%;
  right: 0%;
  bottom: 0%;
  left: 53.57%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const MineToMillToMineOptimizat = styled.div`
  position: absolute;
  height: 31.37%;
  width: 39.64%;
  top: 0%;
  left: 0%;
  font-size: 43px;
  line-height: 55.9px;
  text-transform: capitalize;
  font-family: Inter;
  color: #ff3a2d;
  display: inline-block;
`;
const NtwistsNewestProduct = styled.div`
  position: absolute;
  height: 29.97%;
  width: 49.29%;
  top: 35.57%;
  left: 0%;
  line-height: 26.56px;
  display: inline-block;
`;
const Identify = styled.div`
  position: absolute;
  height: 7.56%;
  width: 4.73%;
  top: 63.87%;
  left: 0%;
  line-height: 26.56px;
  display: inline-block;
`;
const PlanproductionDiscrepancies = styled.div`
  position: absolute;
  height: 15.13%;
  width: 49.29%;
  top: 64.71%;
  left: 0%;
  line-height: 26.56px;
  display: inline-block;
`;
const ReadMore = styled.div`
  position: absolute;
  height: 4.2%;
  width: 6.43%;
  top: 94.68%;
  left: 2.14%;
  font-size: 14px;
  line-height: 15px;
  color: #fff;
  text-align: center;
  display: inline-block;
`;
const FirstboxRoot = styled.div`
  position: absolute;
  top: 786px;
  left: 32px;
  width: 1120px;
  height: 393px;
  text-align: left;
  font-size: 16px;
  color: #000;
  font-family: Roboto;
`;

const FirstBox = memo(() => {
  return (
    <FirstboxRoot>
      <Rectangle />
      <ImageIcon alt="" src="/image3@2x.png" />
      <MineToMillToMineOptimizat>
        Mine-To-Mill-To-Mine Optimization
      </MineToMillToMineOptimizat>
      <NtwistsNewestProduct>
        NTWIST’s newest product unlocks up to $250/oz in previously inaccessible
        value in open pit gold mines by connecting siloed data sources like
        block models, fleet management systems, stockpile surveys, and plant
        instruments. This allows your company to better track material flow, and
        feed properties,
      </NtwistsNewestProduct>
      <Identify>identify</Identify>
      <PlanproductionDiscrepancies>
        plan/production discrepancies, and correct resource models and
        production plans.
      </PlanproductionDiscrepancies>
      <ReadMore>Read More</ReadMore>
    </FirstboxRoot>
  );
});

export default FirstBox;
