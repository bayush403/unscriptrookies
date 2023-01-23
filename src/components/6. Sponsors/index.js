import React from 'react';
import { Container, Container1, HeadingH1, HeadingH3, Wrapper, Wrapper1, Wrapper2 } from "../Commons"
import SponsorsList from './SponsorsList.js';


const Sponsors = () => {
    return (
        <>
            <Container1 id="sponsors">
                <HeadingH1>Sponsors</HeadingH1>
               <SponsorsList/>
            </Container1>
        </>
    )
}

export default Sponsors;
