import React from "react";
import { Container, Wrapper, HeadingH1 } from "../Commons";
import { CardList } from "../CardList/CardList.component";
import '../Card/Card.styles.css'
import applogo from '../../images/applogo.png'
import hardwarelogo from '../../images/hardwarelogo.png'

const ProblemStatements = () => {
  return (
    <>
      <Container id="problem-statements">
        <HeadingH1>pppphhh</HeadingH1>
        {/* <Wrapper> */}
        <div className="card-list">
          <div className="card">
            <img
              alt={`""`}
              src={""}
            />
            <h4>WEB DEVELOPMENT</h4>
            {/* <h5>blah blah</h5> */}
          </div>
          <div className="card">
            <img
              alt={`""`}
              src={applogo}
            />
            <h4>APP DEVELOPMENT</h4>
            {/* <h5>blah blah</h5> */}
          </div>
          </div>
        {/* </Wrapper> */}
      </Container>
    </>
  );
};

export default ProblemStatements;
