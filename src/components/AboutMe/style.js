import styled from "styled-components";

export const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: flex-start;

  h2 {
    font-size: 26px;
    color: #ccd6f6;
    /* opacity: 60%; */
  }
`;

export const StyledTitle = styled.div``;

export const StyledDivisor = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 40px;
    min-width: 40%;

    p {
      font-size: 16px;
      color: #ccd6f6;
      opacity: 70%;
      text-align: justify;
    }
  }

  img {
    width: 60%;
    max-width: 600px;
    border-radius: 10px;
    filter: sepia(60%);
    opacity: 0.7;
    transition: opacity 0.25s linear;
    will-change: opacity;

    &:hover {
      opacity: 1;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s,
        transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
      filter: sepia(0%);
    }

    @media (max-width: 1080px) {
      width: 90%;
    }
  }
`;

export const TextDiff = styled.span`
  font-size: 16px;
  color: #64ffda;
`;

export const StyledLine = styled.div`
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

export const Line = styled.div`
  position: absolute;
  left: 200px;
  width: 100%; /* Defina a largura da linha para que cubra toda a largura do contêiner */
  height: 1px; /* Defina a altura da linha */
  background-color: #ccd6f6; /* Defina a cor da linha */
  opacity: 40%;
`;
