import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 40px 0;
`;

export const Card = styled.div`
  position: relative;
  min-width: 380px;
  min-height: 550px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 20px;
  transition: 0.5s;

  @media (max-width: 450px) {
    min-width: 300px;
    margin: 0px;
  }
`;

export const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    transform: translateY(-50px);

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: rgba(255, 255, 255, 0.03);
    }
  }
`;

export const Content = styled.div`
  padding: 20px;
  text-align: center;

  h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
  }

  h3 {
    /* font-size: 1.8rem; */
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
  }

  a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;

    &:hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
      background: #fff;
      color: #000;
    }
  }
  img {
    width: 80px;
    border-radius: 50%;
  }
`;
