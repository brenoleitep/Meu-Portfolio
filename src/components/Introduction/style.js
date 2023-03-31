import styled from "styled-components";

export const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const StyledDivIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-width: 40%;
  gap: 20px;

  h1 {
    font-size: 60px;
    color: #ccd6f6;
    font-weight: 600;
  }

  h3 {
    font-size: 50px;
    color: #ccd6f6;
    opacity: 70%;
    font-weight: 600;
  }

  h2 {
    font-size: 14px;
    color: #64ffda;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    color: #ccd6f6;
    opacity: 70%;
  }

  button {
    width: 300px;
    padding: 15px;
    background-color: #0a192f;
    cursor: pointer;
    border: 1px solid #64ffda;
    border-radius: 4px;
    color: #64ffda;
    font-size: 18px;
    margin-top: 50px;
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
