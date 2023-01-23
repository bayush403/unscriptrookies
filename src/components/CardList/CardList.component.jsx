import React from "react";
import { Card } from "../Card/Card.component";
import "../Card/Card.styles.css";
import "./stylest.css";

const onPopup = () => {
  alert("The Problem statement is in the works!! Hold fast and check it later");
};
export const CardList = () => (
  <>
    <a href="#" target="_blank" rel="noreferrer noopener" className="card">
      <i class="material-icons">code</i>
      <h4>WEB DEVELOPMENT</h4>
      <div className="grid-box">
        <i class="fas fa-trophy"></i>
        <div className="grid-box-1">
        <p className="para-trophy">Winners<br/> 13,000</p>
        <p className="para-trophy"> Runner Ups <br/>7,000</p>
        </div>
      </div>
    </a>

    <a href="#" target="_blank" rel="noreferrer noopener" className="card">
      <i class="fa fa-mobile-phone"></i>
      <h4>APP DEVELOPMENT</h4>
      <div className="grid-box">
        <i class="fas fa-trophy"></i>
        <div className="grid-box-1">
        <p className="para-trophy">Winners<br/> 13,000</p>
        <p className="para-trophy"> Runner Ups <br/>7,000</p>
        </div>
      </div>
    </a>

  </>
);
