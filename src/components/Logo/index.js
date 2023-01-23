import React from "react";
import styled from "styled-components";

const ActualLogo = styled.img`
    height: ${({size}) => (size ? `${size}px` : "120px")};
    margin-top: 5px;
`

const Logo = ({size}) => {
    return (
        <ActualLogo size={size} src={require("../../images/unscript_logo_1.png").default}/>
    )
}

export default Logo;