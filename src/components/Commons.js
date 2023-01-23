import styled from "styled-components";
import bg from "../images/Pattern.png";

export const Container = styled.div`
  /* height: 900px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  padding-top: 50px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bg});
  color: rgb(224, 224, 224);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const Container1 = styled.div`
  /* height: 900px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  padding-top: 50px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bg});
  color: rgb(224, 224, 224);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    height: 3600px;
  }

  @media screen and (max-width: 480px) {
    height: 3300px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const Wrapper1 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;
  padding: 10px 25px;
  margin-bottom: 50px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const Wrapper3 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 10px 25px;
  margin-bottom: 60px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Wrapper5 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  align-items: center;
  grid-gap: 16px;
  padding: 10px 25px;
  margin-bottom: 40px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Wrapper2 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  grid-gap: 15px;
  padding: 0 30px;
  margin-bottom: 40px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Wrapper4 = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 15px;
  padding: 0 30px;

  /* width: 85vw; */
  gap: 25px;
  /* padding: 8px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const HeadingH1 = styled.h1`
  font-size: 2.5rem;
  color: #f23c98;
  margin-bottom: 35px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const HeadingH3 = styled.h3`
  font-size: 1.5rem;
  color: #b5179e;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeadingH3d = styled.h3`
  font-size: 0.9rem;
  color: #cfd0d1;
  margin-top: -4px;
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const HeadingH3p = styled.h3`
  font-size: 1.5rem;
  color: #a0a09e;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
export const HeadingH3g = styled.h3`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeadingH3gr = styled.h3`
  font-size: 1.5rem;
  color: #69ff96;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeadingH3m = styled.h3`
  font-size: 1.5rem;
  color: #d8315b;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeadingH3c = styled.h3`
  font-size: 1.5rem;
  color: #fdf6e8;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const HeadingH3s = styled.h3`
  font-size: 1.5rem;
  color: #ff9e00;
  margin-bottom: 16px;
  text-align: center;
  margin-top: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;