import React, { useState } from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  HeroH3,
  HeroPex,
} from "./HeroElements";
import "./hero.css";
import { Button } from "../ButtonElements";
import Logo from "../Logo";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <HeroContainer id="home">
      <HeroContent>
        {/* <HeroH1><Logo size={70}/></HeroH1> */}
        <HeroH1>UNSCR;PT 2k23</HeroH1>
        <HeroH3>Rookie's Hackathon</HeroH3>
        <HeroP>Exclusively for 2nd Year Students</HeroP>
        {/* <HeroPex>E X P I R E D</HeroPex> */}
        {/* <HeroBtnWrapper>
          <div
            className="apply-button"
            data-hackathon-slug="unscript-rookies-hackathon-2k22"
            data-button-theme="light"
            style={{height:"44px", width: "312px"}}
          ></div>
        </HeroBtnWrapper> */}
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
