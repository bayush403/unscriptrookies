import React from "react";
import './Card.styles.css'

export const Card = ({data}) => (
    <div className="card">
       <i class={data.icon}></i>
        <h4>{data.info}</h4>
        {/* <h5>{info.username}</h5> */}
    </div>
)