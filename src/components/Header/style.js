import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  top: 0px;
  padding: 20px;
  box-shadow: #64ffda -1px 0px 7px 0px;

  ul {
    display: flex;
    gap: 20px;
    font-size: 18px;
  }

  li {
    padding: 10px;
    border: 2px solid #0a192f;
    color: #ccd6f6;

    :hover {
      background-color: #0a192f;
      cursor: pointer;
      border: 2px solid #64ffda;
      border-radius: 10px;
      color: #64ffda;
    }
  }

  h2 {
    font-size: 35px;
    letter-spacing: 1px;
  }
`;

export const StyledLottie = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    width: 80px;
  }
`;
