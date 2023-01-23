import React from "react";
import { TeamContainer } from "../9. Team/TeamElements";
import { CardList } from "../CardList/CardList.component";
import { Container, HeadingH1, Wrapper, Wrapper1 } from "../Commons";
import { FAQsCard } from "./FAQsCard";

const FAQs = () => {
  return (
    <>
       <TeamContainer id="FAQs">
                <HeadingH1>FAQs</HeadingH1>
                <Wrapper1>
                    <FAQsCard/>
                </Wrapper1>                
            </TeamContainer>
    </>
  );
};

export default FAQs;
