import { memo } from "react";
import styled from "styled-components";

const Rectangle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const ImageIcon = styled.img`
  position: absolute;
  height: 91.79%;
  width: 47.26%;
  top: 5.21%;
  right: 51.11%;
  bottom: 3%;
  left: 1.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const OilGas = styled.div`
  position: absolute;
  height: 10.36%;
  width: 20.29%;
  top: 0%;
  left: 51.97%;
  font-size: 43px;
  line-height: 55.9px;
  text-transform: capitalize;
  font-family: Inter;
  color: #ff3a2d;
  display: inline-block;
`;
const OilAndGas = styled.div`
  position: absolute;
  height: 13.21%;
  width: 44.52%;
  top: 14.29%;
  left: 50.68%;
  line-height: 26.56px;
  display: inline-block;
`;
const NtwistHelpsOil = styled.div`
  position: absolute;
  height: 16.43%;
  width: 42.55%;
  top: 38.93%;
  left: 51.54%;
  line-height: 26.56px;
  display: inline-block;
`;
const ReadMore = styled.div`
  position: absolute;
  height: 5.36%;
  width: 6.16%;
  top: 83.93%;
  left: 48.89%;
  font-size: 14px;
  line-height: 15px;
  color: #fff;
  text-align: center;
  display: inline-block;
`;
const LastboxRoot = styled.div`
  position: absolute;
  top: 2155px;
  left: 8px;
  width: 1168px;
  height: 337px;
  text-align: left;
  font-size: 16px;
  color: #000;
  font-family: Roboto;
`;

const Lastbox = memo(() => {
  return (
    <LastboxRoot>
      <Rectangle />
      <ImageIcon alt="" src="/image6@2x.png" />
      <OilGas>{`Oil & Gas`}</OilGas>
      <OilAndGas>
        Oil and Gas plants require a high level of control and robustness in
        their operation due to the high risks to people and environment.
      </OilAndGas>
      <NtwistHelpsOil>{`NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.`}</NtwistHelpsOil>
      <ReadMore>Read More</ReadMore>
    </LastboxRoot>
  );
});

export default Lastbox;
