import styled, { keyframes } from "styled-components";

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;
`;

export const StyledLineSkills = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  /* Adicione um espaço entre o texto e a linha */

  h2 {
    font-size: 26px;
    color: #ccd6f6;
    text-align: left;
  }
`;

export const LineSkills = styled.div`
  position: absolute;
  left: 260px;
  width: 200px;
  height: 1px; /* Defina a altura da linha */
  background-color: #ccd6f6; /* Defina a cor da linha */
  opacity: 40%;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const StyledHardSkills = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;

    p {
      font-size: 16px;
      color: #ccd6f6;
      opacity: 70%;
      text-align: justify;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      &:hover {
        svg {
          animation: ${spin} 5s ease-in infinite;
        }
      }
    }
    svg {
      height: 50px;
      width: 50px;
    }
  }
`;
