import React, { useEffect, useState } from 'react';
import { CardList } from '../CardList/CardList.component';
import { HeadingH1, HeadingH3, HeadingH3d, Wrapper, Wrapper3 } from "../Commons"
import {TeamContainer} from "./TeamElements"

const Team = () => {
    

    return (
        <>
            <TeamContainer id="team">
                <HeadingH1>Domains</HeadingH1>
                <HeadingH3d>Click on the domain to view the problem statements</HeadingH3d>
                <Wrapper3>
                    <CardList/>
                </Wrapper3>                
            </TeamContainer>
        </>
    )
}

export default Team;