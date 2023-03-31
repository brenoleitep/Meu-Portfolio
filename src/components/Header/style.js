import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  ul {
    display: flex;
    gap: 20px;
    font-size: 18px;
  }

  li {
    padding: 10px;
    border: 1px solid #251e2c;

    :hover {
      background-color: #251e2c;
      cursor: pointer;
      border: 1px solid white;
      border-radius: 10px;
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
