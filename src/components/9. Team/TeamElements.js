import styled from "styled-components";
import bg from "../../images/Pattern.png";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-top: 90px;
  padding-bottom: 50px;

  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bg});
  color: rgb(224, 224, 224);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  @media screen and (max-width: 768px) {
    height: 1500px;
  }

  @media screen and (max-width: 480px) {
    height: 1900px;
  }
`;
