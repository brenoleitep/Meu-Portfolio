import styled from "styled-components";

export const StyledIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  position: relative;

  div {
    display: flex;
    gap: 20px;

    svg {
      width: 43px;
      height: 43px;
      cursor: pointer;

      &:hover {
        color: blue
      }
    }
  }
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
    font-size: 45px;
    color: #ccd6f6;
    opacity: 60%;
    /* font-weight: 600; */
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
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    :hover {
      background-color: #0a192f;
      cursor: pointer;
      border: 1px solid #64ffda;
      border-radius: 4px;
      color: #64ffda;
      background-color: rgba(100, 255, 218, 0.2);
    }
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

  @media (max-width: 1080px) {
    display: none;
  }
`;
