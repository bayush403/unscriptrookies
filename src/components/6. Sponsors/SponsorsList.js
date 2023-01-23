import React from "react";
import {
  HeadingH3,
  HeadingH3c,
  HeadingH3g,
  HeadingH3gr,
  HeadingH3m,
  HeadingH3p,
  HeadingH3s,
  Wrapper,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Wrapper4,
  Wrapper5,
} from "../Commons";
import devfolio from "../../images/Devfolio_Logo-White.png";
import filecoin from "../../images/Filecoin-logo.png";
import celo from "../../images/Celo Logo Color Reverse.png";
import tezos from "../../images/Tezos_Logo-White.png";
import polygon from "../../images/Polygon_Logo-White.png";
import taskade from "../../images/taskade-circle-icon.png";
import insynout from "../../images/Insynout_logo_black.png";
import sahutech from "../../images/Sahu Technologies.jpg";
import gfg from "../../images/GFGlogo.png";
import LLearners from "../../images/Leading_Learners.png";
import noticebard from "../../images/NoticeBardLogo.png";
import letsupgrade from "../../images/LetsUpgrade.png";
import clickup from "../../images/clickuplogo.png";
import streamyard from "../../images/StreamYardHorz.png";
import hoverrobotix from "../../images/hoverrobotix.png";
import mentorx from "../../images/mentorx.png";
import Newolflogo from "../../images/NewolflogoN.png";
import "./sponsors.css";
import { Link } from "react-router-dom";

const Sponsors = () => {
  return (
    <>
      <HeadingH3p>Platinum Sponsors</HeadingH3p>
      <Wrapper3>
        <a href="https://devfolio.co/">
          <img alt="devfolio" src={devfolio} />
        </a>
        <a href="https://polygon.technology/">
          <img alt="polygon" src={polygon} />
        </a>
      </Wrapper3>
      <HeadingH3g>Gold Sponsors</HeadingH3g>
      <Wrapper2>
        <a href="https://celo.org/">
          <img alt="celo" src={celo} />
        </a>
        <a href="https://tezos.com/">
          <img alt="tezos" src={tezos} />
        </a>
        <a href="https://filecoin.io/">
          <img class="size" alt="filecoin" src={filecoin} />
        </a>
      </Wrapper2>
      <HeadingH3>Knowledge Partners</HeadingH3>
      <Wrapper3>
        <a href="https://www.taskade.com" class="position">
          <img class="size-taskade position" alt="taskade" src={taskade} />
        </a>
        {/* <a href="https://www.geeksforgeeks.org">
          <img class="size" alt="gfg" src={gfg} />
        </a>*/}
        <a href="https://interviewbuddy.in/">
          <img class="size" alt="letsupgrade" src={letsupgrade} />
        </a> 
      </Wrapper3>
      {/* <HeadingH3m>Media Partners</HeadingH3m>
      <Wrapper2>
        <a href="https://instagram.com/insynouttech?utm_medium=copy_link">
          <img class="size" alt="insynout" src={insynout} />
        </a>
        <a href="https://sahutechnologies.com/">
          <img class="size" alt="sahutech" src={sahutech} />
        </a>
        <a href="https://www.noticebard.com/">
          <img class="size-noticebard" alt="noticebard" src={noticebard} />
        </a>
      </Wrapper2> */}
      {/* <HeadingH3c>Community Partners</HeadingH3c>
      <Wrapper2>
        <a href="https://clickup.com/">
          <img class="size" alt="clickup" src={clickup} />
        </a>
        <a href="https://www.leadlearners.ca/">
          <img class="size" alt="LLearners" src={LLearners} />
        </a>
        <a href="https://www.newolf.tech/">
          <img class="size" alt="Newolflogo" src={Newolflogo} />
        </a>
      </Wrapper2> */}
      {/* <HeadingH3gr>Technology Partners</HeadingH3gr>
      <Wrapper3>
        <a href="https://hoverrobotix.com/">
          <img class="size-ll" alt="hoverrobotix" src={hoverrobotix} />
        </a>
        <a href="https://thementorx.com/">
          <img class="size-ll" alt="mentorx" src={mentorx} />
        </a>
      </Wrapper3> */}
      <HeadingH3s>Streaming Partners</HeadingH3s>
      <Wrapper5>
        <a href="https://streamyard.com/">
          <img class="size-streamyard" alt="streamyard" src={streamyard} />
        </a>
      </Wrapper5>
    </>
  );
};

export default Sponsors;
