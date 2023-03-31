import styled from "styled-components";

export const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  position: relative;
`;

export const StyledDivIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 40%;
  gap: 40px;

  h1 {
    font-size: 50px;
  }

  h2 {
    font-size: 16px;
    color: #64ffda;
  }

  button {
    width: 430px;
    padding: 15px;
    background-color: #251e2c;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-size: 18px;
  }
`;

export const StyledDivisionIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const StyledLottieIntroduction = styled.div`
  min-width: 60%;
`;
