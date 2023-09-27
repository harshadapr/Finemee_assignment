import styled from "styled-components";
import Main from "../components/Main";
import Main1 from "../components/Main1";
import FirstBox from "../components/FirstBox";
import SecondBox1 from "../components/SecondBox1";
import ThirdBox from "../components/ThirdBox";
import Lastbox from "../components/Lastbox";

const Rectangle = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #fff;
`;
const Navbar = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1200px;
  height: 60px;
`;
const Rectangle1 = styled.div`
  position: absolute;
  top: -80px;
  left: 0px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.04);
  width: 1200px;
  height: 80px;
`;
const ImageIcon = styled.img`
  position: absolute;
  top: -75px;
  left: 32px;
  width: 207px;
  height: 70px;
  object-fit: cover;
`;
const Rectangle2 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
`;
const ThirdBox1 = styled.div`
  position: absolute;
  top: 1744px;
  left: 16px;
  width: 1168px;
  height: 411px;
`;
const Rectangle3 = styled.div`
  position: absolute;
  top: 2036px;
  left: 32px;
  border-radius: 3px;
  background-color: #ff3a2d;
  width: 120px;
  height: 15px;
`;
const ImageIcon1 = styled.img`
  position: absolute;
  top: 1776px;
  left: 632px;
  width: 520px;
  height: 347px;
  object-fit: cover;
`;
const Rectangle4 = styled.div`
  position: absolute;
  top: 2582px;
  left: 632px;
  border-radius: 3px;
  background-color: #ff3a2d;
  width: 120px;
  height: 15px;
`;
const Rectangle5 = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  background-color: #081528;
`;
const Footer = styled.footer`
  position: absolute;
  top: 2521px;
  left: 0px;
  width: 1200px;
  height: 322px;
`;
const ImageIcon2 = styled.img`
  position: absolute;
  top: 2550px;
  left: 538px;
  width: 125px;
  height: 42px;
  object-fit: cover;
`;
const Rectangle6 = styled.div`
  position: absolute;
  top: 2707px;
  left: 568px;
  border-radius: 5px;
  background-color: #0c1330;
  width: 40px;
  height: 16px;
`;
const Rectangle7 = styled.div`
  position: absolute;
  top: 2707px;
  left: 618px;
  border-radius: 5px;
  background-color: #0c1330;
  width: 40px;
  height: 16px;
`;
const Rectangle8 = styled.div`
  position: absolute;
  top: 2842px;
  left: 16px;
  width: 1168px;
  height: 1px;
`;
const Rectangle9 = styled.div`
  position: absolute;
  top: 685px;
  left: 1120px;
  background-color: #003358;
  width: 50px;
  height: 50px;
`;
const FrameIcon = styled.img`
  position: absolute;
  top: 705px;
  left: 1138px;
  width: 14px;
  height: 8px;
  overflow: hidden;
`;
const Rectangle10 = styled.div`
  position: absolute;
  top: 726px;
  left: 1130px;
  border-radius: 2px;
  /* box-shadow: 0px 0px 5px #808080; */
  width: 256px;
  height: 60px;
`;
const SkipToContent = styled.div`
  position: absolute;
  top: -160001px;
  left: -1px;
  font-size: 15px;
  line-height: 28px;
  font-family: Roboto;
  color: #7d4ac7;
  display: inline-block;
  width: 106px;
`;
const Home = styled.div`
  position: absolute;
  top: 17px;
  left: 650px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 46px;
`;
const Industries = styled.div`
  position: absolute;
  top: 17px;
  left: 720px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 93px;
`;
const AiSoftware = styled.div`
  position: absolute;
  top: 17px;
  left: 850px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 105px;
`;
const Blog = styled.div`
  position: absolute;
  top: 17px;
  left: 979px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 43px;
`;
const ContactUs = styled.div`
  position: absolute;
  top: 17px;
  left: 1046px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 102px;
`;
const Home1 = styled.div`
  position: absolute;
  top: -53px;
  left: 690px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 46px;
`;
const Industries1 = styled.div`
  position: absolute;
  top: -53px;
  left: 760px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 93px;
`;
const AiSoftware1 = styled.div`
  position: absolute;
  top: -53px;
  left: 890px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 105px;
`;
const Blog1 = styled.div`
  position: absolute;
  top: -53px;
  left: 1019px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 43px;
`;
const ContactUs1 = styled.div`
  position: absolute;
  top: -53px;
  left: 1086px;
  letter-spacing: 1px;
  line-height: 24.5px;
  text-transform: uppercase;
  display: inline-block;
  width: 102px;
`;
const NtwistOffersA = styled.div`
  position: absolute;
  top: 1908px;
  left: 32px;
  font-size: 16px;
  line-height: 26.56px;
  font-family: Roboto;
  color: #000;
  display: inline-block;
  width: 552px;
`;
const ReadMore = styled.div`
  position: absolute;
  top: 2034px;
  left: 56px;
  line-height: 15px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 72px;
`;
const Home2 = styled.div`
  position: absolute;
  top: 2602px;
  left: 372px;
  font-size: 15px;
  line-height: 28px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 42px;
`;
const AboutUs = styled.div`
  position: absolute;
  top: 2602px;
  left: 443px;
  font-size: 15px;
  line-height: 28px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 64px;
`;
const ContactUs2 = styled.div`
  position: absolute;
  top: 2602px;
  left: 536px;
  font-size: 15px;
  line-height: 28px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 77px;
`;
const PrivacyPolicy = styled.div`
  position: absolute;
  top: 2602px;
  left: 642px;
  font-size: 16px;
  line-height: 28px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 99px;
`;
const Sitemap = styled.div`
  position: absolute;
  top: 2602px;
  left: 770px;
  font-size: 16px;
  line-height: 28px;
  font-family: Roboto;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 59px;
`;
const AveNwEdmonton = styled.div`
  position: absolute;
  top: 2654px;
  left: 423px;
  font-size: 15px;
  line-height: 26.56px;
  font-family: Roboto;
  color: #6f7f92;
  text-align: center;
  display: inline-block;
  width: 355px;
`;
const NtwistInc = styled.div`
  position: absolute;
  top: 2750px;
  left: 533px;
  font-size: 15px;
  line-height: 26.56px;
  font-family: Roboto;
  color: #6f7f92;
  text-align: center;
  display: inline-block;
  width: 135px;
`;
const ImageIcon3 = styled.img`
  position: absolute;
  top: 17px;
  left: 20px;
  width: 132px;
  height: 43px;
  object-fit: cover;
`;
const FrameRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 2843px;
  overflow: hidden;
  text-align: left;
  font-size: 14px;
  color: #003358;
  font-family: Inter;
`;

const Frame = () => {
  return (
    <FrameRoot>
      <Navbar id="nav">
        <Rectangle />
      </Navbar>
      <Rectangle1 />
      <ImageIcon alt="" src="/image1@2x.png" />
      <ThirdBox1>
        <Rectangle2 />
      </ThirdBox1>
      <Rectangle3 />
      <ImageIcon1 alt="" src="/image5@2x.png" />
      <Rectangle4 />
      <Footer>
        <Rectangle5 />
      </Footer>
      <ImageIcon2 alt="" src="/image@2x.png" />
      <Rectangle6 />
      <Rectangle7 />
      <Main />
      <Rectangle8 />
      <Rectangle9 />
      <FrameIcon alt="" src="/frame.svg" />
      <Rectangle10 />
      <SkipToContent>Skip to content</SkipToContent>
      <Home>Home</Home>
      <Industries>Industries</Industries>
      <AiSoftware>AI Software</AiSoftware>
      <Blog>Blog</Blog>
      <ContactUs>Contact Us</ContactUs>
      <Home1>Home</Home1>
      <Industries1>Industries</Industries1>
      <AiSoftware1>AI Software</AiSoftware1>
      <Blog1>Blog</Blog1>
      <ContactUs1>Contact Us</ContactUs1>
      <Main1 />
      <FirstBox />
      <SecondBox1 />
      <ThirdBox />
      <NtwistOffersA>
        NTWIST offers a number of solutions for mills, concentrators, and leach
        plants. Our solutions help operations to reduce the effect of feed
        variability, avoid downtime and increase peak throughput while
        decreasing energy and reagent consumption.
      </NtwistOffersA>
      <ReadMore>Read More</ReadMore>
      <Lastbox />
      <Home2>Home</Home2>
      <AboutUs>About Us</AboutUs>
      <ContactUs2>Contact Us</ContactUs2>
      <PrivacyPolicy>Privacy Policy</PrivacyPolicy>
      <Sitemap>Sitemap</Sitemap>
      <AveNwEdmonton>
        9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
      </AveNwEdmonton>
      <NtwistInc>© 2022. Ntwist Inc.</NtwistInc>
      <ImageIcon3 alt="" src="/image7@2x.png" />
    </FrameRoot>
  );
};

export default Frame;
