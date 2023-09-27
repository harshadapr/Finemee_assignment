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
  height: 75.67%;
  width: 47.26%;
  top: 12.17%;
  right: 51.37%;
  bottom: 12.17%;
  left: 1.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Rectangle1 = styled.div`
  position: absolute;
  height: 3.65%;
  width: 10.27%;
  top: 85.4%;
  right: 36.99%;
  bottom: 10.95%;
  left: 52.74%;
  border-radius: 3px;
  background-color: #ff3a2d;
`;
const Sustainability = styled.div`
  position: absolute;
  width: 23.8%;
  top: 7.3%;
  left: 52.74%;
  font-size: 43px;
  line-height: 55.9px;
  text-transform: capitalize;
  font-family: Inter;
  color: #ff3a2d;
  display: inline-block;
`;
const EnvironmentalStewardshipIs = styled.div`
  position: absolute;
  width: 44.52%;
  top: 25.3%;
  left: 52.74%;
  line-height: 26.56px;
  display: inline-block;
`;
const WithTheIncreasing = styled.div`
  position: absolute;
  width: 44.52%;
  top: 54.26%;
  left: 52.74%;
  line-height: 26.56px;
  display: inline-block;
`;
const AndReportKey = styled.div`
  position: absolute;
  width: 14.3%;
  top: 72.51%;
  left: 57.96%;
  font-size: 15px;
  line-height: 26.56px;
  display: inline-block;
`;
const ReadMore = styled.div`
  position: absolute;
  width: 6.16%;
  top: 84.91%;
  left: 54.79%;
  font-size: 14px;
  line-height: 15px;
  color: #fff;
  text-align: center;
  display: inline-block;
`;
const SecondBoxRoot = styled.div`
  position: absolute;
  top: 1266px;
  left: 16px;
  width: 1168px;
  height: 411px;
  text-align: left;
  font-size: 16px;
  color: #000;
  font-family: Roboto;
`;

const SecondBox1 = memo(() => {
  return (
    <SecondBoxRoot>
      <Rectangle />
      <ImageIcon alt="" src="/image4@2x.png" />
      <Rectangle1 />
      <Sustainability>Sustainability</Sustainability>
      <EnvironmentalStewardshipIs>
        Environmental stewardship is a priority for NTWIST. We help our
        customers to minimize their sustainability impact on the planet.
        Emissions or environmental targets are used alongside productivity
        targets to define success for our customers.
      </EnvironmentalStewardshipIs>
      <WithTheIncreasing>
        With the increasing relevance of carbon accounting and emissions
        tracking, NTWIST offers a suite of tools to increase visibility into
        environmental performance and help processing plants track, manage,
        optimize
      </WithTheIncreasing>
      <AndReportKey>, and report key metrics.</AndReportKey>
      <ReadMore>Read More</ReadMore>
    </SecondBoxRoot>
  );
});

export default SecondBox1;
