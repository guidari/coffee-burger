import styled from "styled-components";

export const HomeContainer = styled.div`
  h2 {
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 50px;

  margin: 50px auto;

  @media only screen and (max-width: 992px) {
    flex-direction: column;
    margin: 30px auto;
  }
`;

export const BannerContainer = styled.div`
  perspective: 1000px; /* Adds depth for the 3D effect */

  img {
    transform: rotateX(10deg) rotateY(-20deg); /* Rotates the image */
    transition: transform 0.3s ease; /* Smooth transition for hover */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* Adds depth with shadow */
  }

  img:hover {
    transform: rotateX(0deg) rotateY(-10deg) scale(1.05); /* Hover effect */
  }

  @media only screen and (max-width: 992px) {
    img {
      width: 320px;
    }
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  font-family: "Baloo 2";

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  color: ${(props) => props.theme["base-title"]};

  margin-bottom: 16px;

  @media only screen and (max-width: 992px) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;

  font-stretch: 100;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 66px;

  @media only screen and (max-width: 992px) {
    margin-bottom: 24px;
  }
`;

export const InfoCoffeeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and (max-width: 1382px) {
    grid-template-columns: 1fr;
  }
`;

export const CoffeesGird = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media only screen and (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  gap: 20px;
  margin: 50px 0;
`;
